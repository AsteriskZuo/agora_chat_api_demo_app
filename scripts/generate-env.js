#!/usr/bin/env node

const path = require('node:path');
const fs = require('node:fs');
const chalk = require('chalk');

const project_root = path.resolve(__dirname, '..');

const file = path.join(project_root, 'src', 'env.ts');
const content = `export const test = true;
export const appKey = [''];
export const appId = [''];
export const PushInfo = { sendId: undefined, KeyId: undefined };
export const accounts = [{ id: undefined, mm: undefined }];
export const groups = [{ id: undefined, owner: undefined, name: undefined }];
`;
if (fs.existsSync(file) === false) {
  fs.writeFileSync(file, content, 'utf-8');
  console.log(chalk.green(`${file} generated successfully`));
}
