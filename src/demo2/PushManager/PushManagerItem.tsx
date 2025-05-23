import React, { type ReactNode } from 'react';
import { View } from 'react-native';
import {
  ChatClient,
  ChatConversation,
  ChatPushDisplayStyle,
  ChatSilentModeParam,
} from 'react-native-agora-chat';

import { styleValues } from '../__internal__/Css';
import type { ApiParams } from '../__internal__/DataTypes';
import { LeafScreenBase, type StateBase } from '../__internal__/LeafScreenBase';
import { generateData } from '../__internal__/Utils';
import { metaDataList, MN } from './PushManagerData';
export interface StatePushMessage extends StateBase {
  setSilentModeForConversation: {
    convId: string;
    convType: number;
    option: ChatSilentModeParam;
  };
  removeSilentModeForConversation: {
    convId: string;
    convType: number;
  };
  fetchSilentModeForConversation: {
    convId: string;
    convType: number;
  };
  setSilentModeForAll: {
    option: ChatSilentModeParam;
  };
  fetchSilentModeForAll: {};
  fetchSilentModeForConversations: {
    conversations: ChatConversation[];
  };
  setPreferredNotificationLanguage: {
    languageCode: string;
  };
  fetchPreferredNotificationLanguage: {};
  updatePushNickname: {
    nickname: string;
  };
  updatePushDisplayStyle: {
    displayStyle: ChatPushDisplayStyle;
  };
  fetchPushOptionFromServer: {};
  selectPushTemplate: {
    templateName: string;
  };
  fetchSelectedPushTemplate: {};
}
export class PushManagerLeafScreen extends LeafScreenBase<StatePushMessage> {
  protected static TAG = 'PushManagerLeafScreen';
  public static route = 'PushManagerLeafScreen';
  metaDataList: Map<string, ApiParams>;
  state: StatePushMessage;
  constructor(props: { navigation: any }) {
    super(props);
    this.metaDataList = metaDataList;
    this.state = Object.assign({}, generateData(metaDataList), {
      sendResult: '',
      recvResult: '',
      exceptResult: '',
    });
  }
  protected renderBody(): ReactNode {
    // console.log(`${PushManagerLeafScreen.TAG}: renderBody: `);
    return (
      <View style={styleValues.containerColumn}>{this.renderApiDom()}</View>
    );
  }
  protected renderApiDom(): ReactNode[] {
    const apiList = [
      'setSilentModeForConversation',
      'removeSilentModeForConversation',
      'fetchSilentModeForConversation',
      'setSilentModeForAll',
      'fetchSilentModeForAll',
      'fetchSilentModeForConversations',
      'setPreferredNotificationLanguage',
      'fetchPreferredNotificationLanguage',
      'updatePushNickname',
      'updatePushDisplayStyle',
      'fetchPushOptionFromServer',
      'selectPushTemplate',
      'fetchSelectedPushTemplate',
    ];
    let renderDomAry: ({} | null | undefined)[] = [];
    const data = this.metaDataList;
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
        if (item.domType === 'input') {
          let value = this.parseValue(item.paramType, itemValue);
          renderDomAry.push(
            this.renderGroupParamWithInput(
              item.paramName,
              item.paramType,
              value,
              (inputData: { [index: string]: string }) => {
                let paramValue: any = {};
                paramValue[apiItem] = Object.assign(
                  {},
                  this.state[apiItem as keyof typeof this.state],
                  inputData
                );
                return this.setState(paramValue);
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
    console.log(`${PushManagerLeafScreen.TAG}: callApi: `);
    switch (name) {
      case MN.setSilentModeForConversation: {
        const { convId, convType, option } =
          this.state.setSilentModeForConversation;
        this.tryCatch(
          ChatClient.getInstance().pushManager.setSilentModeForConversation({
            convId,
            convType,
            option,
          }),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.removeSilentModeForConversation: {
        const { convId, convType } = this.state.removeSilentModeForConversation;
        this.tryCatch(
          ChatClient.getInstance().pushManager.removeSilentModeForConversation({
            convId,
            convType,
          }),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.fetchSilentModeForConversation: {
        const { convId, convType } = this.state.fetchSilentModeForConversation;
        this.tryCatch(
          ChatClient.getInstance().pushManager.fetchSilentModeForConversation({
            convId,
            convType,
          }),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.setSilentModeForAll: {
        const { option } = this.state.setSilentModeForAll;
        this.tryCatch(
          ChatClient.getInstance().pushManager.setSilentModeForAll(option),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.fetchSilentModeForAll: {
        this.tryCatch(
          ChatClient.getInstance().pushManager.fetchSilentModeForAll(),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.fetchSilentModeForConversations: {
        const { conversations } = this.state.fetchSilentModeForConversations;
        this.tryCatch(
          ChatClient.getInstance().pushManager.fetchSilentModeForConversations(
            conversations
          ),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.setPreferredNotificationLanguage: {
        const { languageCode } = this.state.setPreferredNotificationLanguage;
        this.tryCatch(
          ChatClient.getInstance().pushManager.setPreferredNotificationLanguage(
            languageCode
          ),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.fetchPreferredNotificationLanguage: {
        this.tryCatch(
          ChatClient.getInstance().pushManager.fetchPreferredNotificationLanguage(),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.updatePushNickname: {
        const { nickname } = this.state.updatePushNickname;
        this.tryCatch(
          ChatClient.getInstance().pushManager.updatePushNickname(nickname),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.updatePushDisplayStyle: {
        const { displayStyle } = this.state.updatePushDisplayStyle;
        this.tryCatch(
          ChatClient.getInstance().pushManager.updatePushDisplayStyle(
            displayStyle
          ),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.fetchPushOptionFromServer: {
        this.tryCatch(
          ChatClient.getInstance().pushManager.fetchPushOptionFromServer(),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.selectPushTemplate: {
        const { templateName } = this.state.selectPushTemplate;
        this.tryCatch(
          ChatClient.getInstance().pushManager.selectPushTemplate(templateName),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      case MN.fetchSelectedPushTemplate: {
        this.tryCatch(
          ChatClient.getInstance().pushManager.fetchSelectedPushTemplate(),
          PushManagerLeafScreen.TAG,
          name
        );
        break;
      }
      default:
        console.log('error name');
        break;
    }
  }
  protected renderResult(): ReactNode {
    return (
      <View style={styleValues.containerColumn}>
        {this.renderSendResult()}
        {this.renderRecvResult()}
      </View>
    );
  }
  protected addListener?(): void {
    console.log('addListener');
  }

  protected removeListener?(): void {
    console.log('addListener');
  }
}
