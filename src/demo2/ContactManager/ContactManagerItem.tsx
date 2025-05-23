import React, { type ReactNode } from 'react';
import { View } from 'react-native';
import { ChatClient, ChatContact } from 'react-native-agora-chat';

import { styleValues } from '../__internal__/Css';
import type { ApiParams } from '../__internal__/DataTypes';
import {
  LeafScreenBase,
  type StateBase,
  type StatelessBase,
} from '../__internal__/LeafScreenBase';
import { generateData } from '../__internal__/Utils';
import { metaDataList, MN } from './ContactManagerData';

export interface StateChatContact extends StateBase {
  addContact: {
    username: string;
    reason: string;
  };
  deleteContact: {
    username: string;
    keepConversation: boolean;
  };
  getAllContactsFromServer: {};
  getAllContactsFromDB: {};
  addUserToBlockList: {
    username: string;
  };
  removeUserFromBlockList: {
    username: string;
  };
  getBlockListFromServer: {};
  getBlockListFromDB: {};
  acceptInvitation: {
    username: string;
  };
  declineInvitation: {
    username: string;
  };
  getSelfIdsOnOtherPlatform: {};
  getAllContacts: {};
  setContactRemark: {
    contact: ChatContact;
  };
  getContact: {
    userId: string;
  };
  fetchAllContacts: {};
  fetchContacts: {
    cursor: string;
    pageSize: number;
  };
}

export interface StatelessChatContact extends StatelessBase {}

const statelessDataValue: StatelessChatContact = {};

export class ContactLeafScreen extends LeafScreenBase<StateChatContact> {
  protected static TAG = 'ContactLeafScreen';
  public static route = 'ContactLeafScreen';
  metaData: Map<string, ApiParams>;
  statelessData: StatelessChatContact;
  constructor(props: { navigation: any }) {
    super(props);
    this.metaData = metaDataList;
    this.state = Object.assign({}, generateData(metaDataList), {
      sendResult: '',
      recvResult: '',
      exceptResult: '',
    });
    this.statelessData = statelessDataValue;
  }

  protected addListener?(): void {
    console.log(`${ContactLeafScreen.TAG}: addListener`);
  }

  protected removeListener?(): void {
    console.log(`${ContactLeafScreen.TAG}: removeListener`);
  }

  protected renderResult(): ReactNode {
    return (
      <View style={styleValues.containerColumn}>
        {this.renderSendResult()}
        {this.renderRecvResult()}
        {this.renderExceptionResult()}
      </View>
    );
  }

  protected renderBody(): ReactNode {
    // console.log(`${ContactLeafScreen.TAG}: renderBody: `);
    return (
      <View style={styleValues.containerColumn}>{this.renderApiDom()}</View>
    );
  }
  protected renderApiDom(): ReactNode[] {
    const apiList = [
      'addContact',
      'deleteContact',
      'getAllContactsFromServer',
      'getAllContactsFromDB',
      'addUserToBlockList',
      'removeUserFromBlockList',
      'getBlockListFromServer',
      'getBlockListFromDB',
      'acceptInvitation',
      'declineInvitation',
      'getSelfIdsOnOtherPlatform',
      'getAllContacts',
      'setContactRemark',
      'getContact',
      'fetchAllContacts',
      'fetchContacts',
    ];
    let renderDomAry: ({} | null | undefined)[] = [];
    const data = this.metaData;
    apiList.forEach((apiItem) => {
      this.setKeyPrefix(apiItem);
      renderDomAry.push(
        this.renderParamWithText(data.get(apiItem)!.methodName)
      );
      data.get(apiItem)?.params.forEach((item) => {
        let currentData = data.get(apiItem);
        let itemValue =
          this.state[apiItem as keyof typeof this.state][
            item.paramName as keyof typeof currentData
          ];
        if (item.domType && item.domType === 'select') {
          if (item.paramType === 'boolean') {
            renderDomAry.push(
              this.renderParamWithEnum(
                item.paramName,
                ['true', 'false'],
                itemValue ? 'true' : 'false',
                (_: string, option: any) => {
                  let inputData = option === 'true' ? true : false;
                  let pv: any = {};
                  pv[apiItem] = Object.assign(
                    {},
                    this.state[apiItem as keyof typeof this.state],
                    { [item.paramName]: inputData }
                  );
                  return this.setState(pv);
                }
              )
            );
          }
        } else {
          let value = this.parseValue(item.paramType, itemValue);
          renderDomAry.push(
            this.renderGroupParamWithInput(
              item.paramName,
              item.paramType,
              value,
              (inputData: { [index: string]: string }) => {
                let pv: any = {};
                pv[apiItem] = Object.assign(
                  {},
                  this.state[apiItem as keyof typeof this.state],
                  inputData
                );
                return this.setState(pv);
              }
            )
          );
        }
      });
      renderDomAry.push(
        this.renderButton(data.get(apiItem)!.methodName, () => {
          this.callApi(data.get(apiItem)!.methodName);
        })
      );
      renderDomAry.push(this.renderDivider());
    });
    renderDomAry.push(this.addSpaces());
    return renderDomAry as any;
  }

  private callApi(name: string): void {
    console.log(`${ContactLeafScreen.TAG}: callApi: `);
    switch (name) {
      case MN.addContact:
        {
          const { username, reason } = this.state.addContact;
          this.tryCatch(
            ChatClient.getInstance().contactManager.addContact(
              username,
              reason
            ),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.deleteContact:
        {
          const { username, keepConversation } = this.state.deleteContact;
          this.tryCatch(
            ChatClient.getInstance().contactManager.deleteContact(
              username,
              keepConversation
            ),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.getAllContactsFromServer:
        {
          const {} = this.state.getAllContactsFromServer;
          this.tryCatch(
            ChatClient.getInstance().contactManager.getAllContactsFromServer(),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.getAllContactsFromDB:
        {
          const {} = this.state.getAllContactsFromDB;
          this.tryCatch(
            ChatClient.getInstance().contactManager.getAllContactsFromDB(),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.addUserToBlockList:
        {
          const { username } = this.state.addUserToBlockList;
          this.tryCatch(
            ChatClient.getInstance().contactManager.addUserToBlockList(
              username
            ),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.removeUserFromBlockList:
        {
          const { username } = this.state.removeUserFromBlockList;
          this.tryCatch(
            ChatClient.getInstance().contactManager.removeUserFromBlockList(
              username
            ),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.getBlockListFromServer:
        {
          const {} = this.state.getBlockListFromServer;
          this.tryCatch(
            ChatClient.getInstance().contactManager.getBlockListFromServer(),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.getBlockListFromDB:
        {
          const {} = this.state.getBlockListFromDB;
          this.tryCatch(
            ChatClient.getInstance().contactManager.getBlockListFromDB(),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.acceptInvitation:
        {
          const { username } = this.state.acceptInvitation;
          this.tryCatch(
            ChatClient.getInstance().contactManager.acceptInvitation(username),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.declineInvitation:
        {
          const { username } = this.state.declineInvitation;
          this.tryCatch(
            ChatClient.getInstance().contactManager.declineInvitation(username),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.getSelfIdsOnOtherPlatform:
        {
          const {} = this.state.getSelfIdsOnOtherPlatform;
          this.tryCatch(
            ChatClient.getInstance().contactManager.getSelfIdsOnOtherPlatform(),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.getAllContacts:
        {
          const {} = this.state.getAllContacts;
          this.tryCatch(
            ChatClient.getInstance().contactManager.getAllContacts(),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.setContactRemark:
        {
          const { contact } = this.state.setContactRemark;
          this.tryCatch(
            ChatClient.getInstance().contactManager.setContactRemark(contact),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.getContact:
        {
          const { userId } = this.state.getContact;
          this.tryCatch(
            ChatClient.getInstance().contactManager.getContact(userId),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.fetchAllContacts:
        {
          const {} = this.state.fetchAllContacts;
          this.tryCatch(
            ChatClient.getInstance().contactManager.fetchAllContacts(),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      case MN.fetchContacts:
        {
          const { cursor, pageSize } = this.state.fetchContacts;
          this.tryCatch(
            ChatClient.getInstance().contactManager.fetchContacts({
              cursor,
              pageSize,
            }),
            ContactLeafScreen.TAG,
            name
          );
        }
        break;
      default:
        break;
    }
  }
}
