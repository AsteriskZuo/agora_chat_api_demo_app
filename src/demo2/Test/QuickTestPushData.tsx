import {
  ChatConversation,
  ChatConversationType,
  ChatPushDisplayStyle,
  ChatPushRemindType,
  ChatSilentModeParam,
  ChatSilentModeParamType,
  ChatSilentModeTime,
} from 'react-native-agora-chat';

import { datasheet } from '../__default__/Datasheet';
import type { ApiParams } from '../__internal__/DataTypes';

export const MN = {
  setSilentModeForConversation: 'setSilentModeForConversation',
  removeSilentModeForConversation: 'removeSilentModeForConversation',
  fetchSilentModeForConversation: 'fetchSilentModeForConversation',
  setSilentModeForAll: 'setSilentModeForAll',
  fetchSilentModeForAll: 'fetchSilentModeForAll',
  fetchSilentModeForConversations: 'fetchSilentModeForConversations',
  setPreferredNotificationLanguage: 'setPreferredNotificationLanguage',
  fetchPreferredNotificationLanguage: 'fetchPreferredNotificationLanguage',
  updatePushNickname: 'updatePushNickname',
  updatePushDisplayStyle: 'updatePushDisplayStyle',
  fetchPushOptionFromServer: 'fetchPushOptionFromServer',
  selectPushTemplate: 'selectPushTemplate',
  fetchSelectedPushTemplate: 'fetchSelectedPushTemplate',
};

export const metaDataList = new Map<string, ApiParams>([
  [
    MN.setSilentModeForConversation,
    {
      methodName: MN.setSilentModeForConversation,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
          domType: 'input',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
          domType: 'input',
        },
        {
          paramName: 'option',
          paramType: 'json',
          paramDefaultValue: new ChatSilentModeParam({
            paramType: ChatSilentModeParamType.SILENT_MODE_DURATION,
            remindType: ChatPushRemindType.ALL,
            startTime: new ChatSilentModeTime({ hour: 1, minute: 1 }),
            endTime: new ChatSilentModeTime({ hour: 1, minute: 1 }),
            duration: 10,
          }),
          domType: 'input',
        },
      ],
    },
  ],
  [
    MN.removeSilentModeForConversation,
    {
      methodName: MN.removeSilentModeForConversation,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
          domType: 'input',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
          domType: 'input',
        },
      ],
    },
  ],
  [
    MN.fetchSilentModeForConversation,
    {
      methodName: MN.fetchSilentModeForConversation,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
          domType: 'input',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
          domType: 'input',
        },
      ],
    },
  ],
  [
    MN.setSilentModeForAll,
    {
      methodName: MN.setSilentModeForAll,
      params: [
        {
          paramName: 'option',
          paramType: 'json',
          paramDefaultValue: ChatSilentModeParam.constructorWithNotification(
            ChatPushRemindType.ALL
          ),
          domType: 'input',
        },
      ],
    },
  ],
  [
    MN.fetchSilentModeForAll,
    {
      methodName: MN.fetchSilentModeForAll,
      params: [],
    },
  ],
  [
    MN.fetchSilentModeForConversations,
    {
      methodName: MN.fetchSilentModeForConversations,
      params: [
        {
          paramName: 'conversations',
          paramType: 'json',
          paramDefaultValue: [
            new ChatConversation({
              convId: datasheet.accounts[2]!.id,
              convType: ChatConversationType.PeerChat,
            }),
            new ChatConversation({
              convId: datasheet.accounts[0]!.id,
              convType: ChatConversationType.PeerChat,
            }),
          ],
          domType: 'input',
        },
      ],
    },
  ],
  [
    MN.setPreferredNotificationLanguage,
    {
      methodName: MN.setPreferredNotificationLanguage,
      params: [
        {
          paramName: 'languageCode',
          paramType: 'string',
          paramDefaultValue: 'lzh',
          domType: 'input',
        },
      ],
    },
  ],
  [
    MN.fetchPreferredNotificationLanguage,
    {
      methodName: MN.fetchPreferredNotificationLanguage,
      params: [],
    },
  ],
  [
    MN.updatePushNickname,
    {
      methodName: MN.updatePushNickname,
      params: [
        {
          paramName: 'nickname',
          paramType: 'string',
          paramDefaultValue: 'new_name2',
          domType: 'input',
        },
      ],
    },
  ],
  [
    MN.updatePushDisplayStyle,
    {
      methodName: MN.updatePushDisplayStyle,
      params: [
        {
          paramName: 'displayStyle',
          paramType: 'number',
          paramDefaultValue: ChatPushDisplayStyle.Simple,
          domType: 'input',
        },
      ],
    },
  ],
  [
    MN.fetchPushOptionFromServer,
    {
      methodName: MN.fetchPushOptionFromServer,
      params: [],
    },
  ],
  [
    MN.selectPushTemplate,
    {
      methodName: MN.selectPushTemplate,
      params: [
        {
          paramName: 'templateName',
          paramType: 'string',
          paramDefaultValue: 'test1',
          domType: 'input',
        },
      ],
    },
  ],
  [
    MN.fetchSelectedPushTemplate,
    {
      methodName: MN.fetchSelectedPushTemplate,
      params: [],
    },
  ],
]);
