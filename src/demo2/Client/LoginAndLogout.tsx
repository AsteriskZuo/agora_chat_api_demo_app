import React, { Component, type ReactNode } from 'react';
import {
  type NativeSyntheticEvent,
  ScrollView,
  Text,
  TextInput,
  type TextInputChangeEventData,
  View,
} from 'react-native';
import {
  ChatClient,
  type ChatConnectEventListener,
  ChatMultiDeviceEvent,
  type ChatMultiDeviceEventListener,
} from 'react-native-agora-chat';

import { datasheet } from '../__default__/Datasheet';
import { styleValues } from '../__internal__/Css';
import { Button } from '../__internal__/Button';
import { AppServerClient } from './AppServer';

interface State {
  loginStatus: string;
  connectStatus: string;
  listenerStatus: string;
  useName: string;
  password: string;
}

let gUseName = datasheet.accounts[0]!.id;
let gPassword = datasheet.accounts[0]!.mm;

export class LoginAndLogoutScreen extends Component<
  { navigation: any },
  State,
  any
> {
  public static route = 'LoginAndLogoutScreen';
  private static TAG = 'LoginAndLogoutScreen';
  navigation: any;

  constructor(props: { navigation: any }) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      loginStatus: '',
      connectStatus: '...',
      listenerStatus: '...',
      useName: gUseName,
      password: gPassword,
    };
  }

  private login(isPassword: boolean, isAgora?: boolean): void {
    console.log(
      `${LoginAndLogoutScreen.TAG}: login ${this.state.useName} ${this.state.password} ${isPassword} ${isAgora}`
    );
    if (isAgora) {
      AppServerClient.getAccountToken({
        userId: this.state.useName,
        userPassword: this.state.password,
        onResult: (params: { data?: any; error?: any }) => {
          if (params.error === undefined) {
            ChatClient.getInstance()
              .loginWithToken(this.state.useName, params.data.token)
              .then((value) => {
                console.log(
                  `${LoginAndLogoutScreen.TAG}: login: success`,
                  value
                );
                this.setState({ connectStatus: `login: success` + value });
              })
              .catch((reason) => {
                console.log(
                  `${LoginAndLogoutScreen.TAG}: login: fail ${JSON.stringify(
                    reason
                  )}`
                );
                this.setState({
                  connectStatus: `login: fail: ${reason.code} ${reason.description}`,
                });
              });
          }
        },
      });
    } else {
      ChatClient.getInstance()
        .login(this.state.useName, this.state.password, isPassword)
        .then((value: any) => {
          console.log(`${LoginAndLogoutScreen.TAG}: login: success`, value);
          this.setState({ connectStatus: `login: success` + value });
        })
        .catch((reason: any) => {
          console.log(`${LoginAndLogoutScreen.TAG}: login: fail`);
          this.setState({
            connectStatus: `login: fail: ${reason.code} ${reason.description}`,
          });
        });
    }
  }

  private logout(): void {
    console.log(`${LoginAndLogoutScreen.TAG}: logout`);
    ChatClient.getInstance()
      .logout()
      .then(() => {
        console.log(`${LoginAndLogoutScreen.TAG}: logout: success`);
        this.setState({ connectStatus: `logout: success` });
      })
      .catch((reason: any) => {
        console.log(`${LoginAndLogoutScreen.TAG}: logout: fail`);
        this.setState({
          connectStatus: `logout: fail: ${reason.code} ${reason.description}`,
        });
      });
  }

  componentDidMount?(): void {
    console.log(`${LoginAndLogoutScreen.TAG}: componentDidMount: `);
    let listener = new (class s implements ChatConnectEventListener {
      that: LoginAndLogoutScreen;
      constructor(parent: any) {
        this.that = parent as LoginAndLogoutScreen;
      }
      onTokenWillExpire(): void {
        console.log('LoginAndLogoutScreen.onTokenWillExpire');
        this.that.setState({ listenerStatus: 'onTokenWillExpire' });
      }
      onTokenDidExpire(): void {
        console.log('LoginAndLogoutScreen.onTokenDidExpire');
        this.that.setState({ listenerStatus: 'onTokenDidExpire' });
      }
      onConnected(): void {
        console.log('LoginAndLogoutScreen.onConnected');
        this.that.setState({ listenerStatus: 'onConnected' });
      }
      onDisconnected(): void {
        console.log('LoginAndLogoutScreen.onDisconnected');
        this.that.setState({ listenerStatus: 'onDisconnected' });
      }

      onAppActiveNumberReachLimit(): void {
        console.log('LoginAndLogoutScreen.onAppActiveNumberReachLimit');
        this.that.setState({ listenerStatus: 'onAppActiveNumberReachLimit' });
      }

      onUserDidLoginFromOtherDevice(deviceName?: string): void {
        console.log(
          'LoginAndLogoutScreen.onUserDidLoginFromOtherDevice',
          deviceName
        );
        this.that.setState({
          listenerStatus: 'onUserDidLoginFromOtherDevice' + deviceName,
        });
      }

      onUserDidLoginFromOtherDeviceWithInfo(params: {
        deviceName?: string;
        ext?: string;
      }): void {
        console.log(
          'LoginAndLogoutScreen.onUserDidLoginFromOtherDeviceWithInfo',
          params
        );
        this.that.setState({
          listenerStatus:
            'onUserDidLoginFromOtherDeviceWithInfo' + JSON.stringify(params),
        });
      }

      onUserDidRemoveFromServer(): void {
        console.log('LoginAndLogoutScreen.onAppActiveNumberReachLimit');
        this.that.setState({ listenerStatus: 'onAppActiveNumberReachLimit' });
      }

      onUserDidForbidByServer(): void {
        console.log('LoginAndLogoutScreen.onUserDidForbidByServer');
        this.that.setState({ listenerStatus: 'onUserDidForbidByServer' });
      }

      onUserDidChangePassword(): void {
        console.log('LoginAndLogoutScreen.onUserDidChangePassword');
        this.that.setState({ listenerStatus: 'onUserDidChangePassword' });
      }

      onUserDidLoginTooManyDevice(): void {
        console.log('LoginAndLogoutScreen.onUserDidLoginTooManyDevice');
        this.that.setState({ listenerStatus: 'onUserDidLoginTooManyDevice' });
      }

      onUserKickedByOtherDevice(): void {
        console.log('LoginAndLogoutScreen.onUserKickedByOtherDevice');
        this.that.setState({ listenerStatus: 'onUserKickedByOtherDevice' });
      }

      onUserAuthenticationFailed(): void {
        console.log('LoginAndLogoutScreen.onUserAuthenticationFailed');
        this.that.setState({ listenerStatus: 'onUserAuthenticationFailed' });
      }
      onOfflineMessageSyncStart(): void {
        console.log('LoginAndLogoutScreen.onOfflineMessageSyncStart');
        this.that.setState({ listenerStatus: 'onOfflineMessageSyncStart' });
      }
      onOfflineMessageSyncFinish(): void {
        console.log('LoginAndLogoutScreen.onOfflineMessageSyncFinish');
        this.that.setState({ listenerStatus: 'onOfflineMessageSyncFinish' });
      }
    })(this);
    ChatClient.getInstance().removeAllConnectionListener();
    ChatClient.getInstance().addConnectionListener(listener);

    const multiDeviceListener = new (class
      implements ChatMultiDeviceEventListener
    {
      that: LoginAndLogoutScreen;
      constructor(parent: LoginAndLogoutScreen) {
        this.that = parent;
      }
      onThreadEvent(
        event?: ChatMultiDeviceEvent,
        target?: string,
        ext?: string[]
      ): void {
        console.log('LoginAndLogoutScreen.onThreadEvent: ', event, target, ext);
        this.that.setState({
          listenerStatus:
            'LoginAndLogoutScreen.onThreadEvent: ' + event + target + ext,
        });
      }
      onContactEvent(
        event?: ChatMultiDeviceEvent,
        target?: string,
        ext?: string
      ): void {
        console.log(
          'LoginAndLogoutScreen.onContactEvent: ',
          event,
          target,
          ext
        );
        this.that.setState({
          listenerStatus:
            'LoginAndLogoutScreen.onContactEvent: ' + event + target + ext,
        });
      }
      onGroupEvent(
        event?: ChatMultiDeviceEvent,
        target?: string,
        usernames?: string[]
      ): void {
        console.log(
          'LoginAndLogoutScreen.onGroupEvent: ',
          event,
          target,
          usernames
        );
        this.that.setState({
          listenerStatus:
            'LoginAndLogoutScreen.onGroupEvent: ' + event + target + usernames,
        });
      }
      onMessageRemoved?(convId?: string, deviceId?: string): void {
        console.log(
          'LoginAndLogoutScreen.onMessageRemoved: ',
          convId,
          deviceId
        );
        this.that.setState({
          listenerStatus:
            'LoginAndLogoutScreen.onMessageRemoved: ' + convId + deviceId,
        });
      }

      onConversationEvent?(
        event?: ChatMultiDeviceEvent,
        convId?: string,
        convType?: any
      ): void {
        console.log(
          'LoginAndLogoutScreen.onConversationEvent: ',
          event,
          convId,
          convType
        );
        this.that.setState({
          listenerStatus:
            'LoginAndLogoutScreen.onConversationEvent: ' +
            event +
            convId +
            convType,
        });
      }
    })(this);
    ChatClient.getInstance().removeAllMultiDeviceListener();
    ChatClient.getInstance().addMultiDeviceListener(multiDeviceListener);
  }

  componentWillUnmount?(): void {
    console.log(`${LoginAndLogoutScreen.TAG}: componentWillUnmount: `);
  }

  render(): ReactNode {
    const { connectStatus, listenerStatus, useName, password, loginStatus } =
      this.state;
    return (
      <ScrollView>
        <View style={styleValues.containerColumn}>
          <View style={styleValues.containerRow}>
            <Text style={styleValues.textStyle}>UseName: </Text>
            <TextInput
              style={styleValues.textInputStyle}
              onChangeText={(text: string) => {
                // console.log(`${LoginAndLogoutScreen.TAG}: `, text);
                this.setState({ useName: text });
                gUseName = text;
              }}
            >
              {useName}
            </TextInput>
          </View>
          <View style={styleValues.containerRow}>
            <Text style={styleValues.textStyle}>Password or Token: </Text>
            <TextInput
              style={styleValues.textInputStyle}
              onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
                // console.log(`${LoginAndLogoutScreen.TAG}`);
                this.setState({ password: e.nativeEvent.text });
                gPassword = e.nativeEvent.text;
              }}
            >
              {password}
            </TextInput>
          </View>
          <View style={styleValues.containerRow}>
            <Button
              title="login with password"
              onPress={() => {
                // console.log(`${LoginAndLogoutScreen.TAG}`);
                this.login(true);
              }}
            />
          </View>
          <View style={styleValues.containerRow}>
            <Button
              title="login with token"
              onPress={() => {
                // console.log(`${LoginAndLogoutScreen.TAG}`);
                this.login(false);
              }}
            />
          </View>
          <View style={styleValues.containerRow}>
            <Button
              title="login with agora token"
              onPress={() => {
                // console.log(`${LoginAndLogoutScreen.TAG}`);
                this.login(false, true);
              }}
            />
          </View>
          <View style={styleValues.containerRow}>
            <Button
              title="logout"
              onPress={() => {
                // console.log(`${LoginAndLogoutScreen.TAG}`);
                this.logout();
              }}
            />
          </View>
          <View style={styleValues.containerRow}>
            <Button
              title="get login state"
              onPress={() => {
                // console.log(`${LoginAndLogoutScreen.TAG}`);
                this.getLoginState();
              }}
            />
          </View>
          <View style={styleValues.containerRow}>
            <Button
              title="get connect state"
              onPress={() => {
                // console.log(`${LoginAndLogoutScreen.TAG}`);
                this.getConnectState();
              }}
            />
          </View>
          <View style={styleValues.containerRow}>
            <Button
              title="get user name"
              onPress={() => {
                // console.log(`${LoginAndLogoutScreen.TAG}`);
                this.getUserName();
              }}
            />
          </View>
          <View style={styleValues.containerColumn}>
            <Text style={styleValues.textTipStyle}>
              click button result: {connectStatus}
            </Text>
          </View>
          <View style={styleValues.containerColumn}>
            <Text style={styleValues.textTipStyle}>
              listener result: {listenerStatus}
            </Text>
          </View>
          <View style={styleValues.containerColumn}>
            <Text style={styleValues.textTipStyle}>
              login status: {loginStatus}
            </Text>
          </View>
          <View style={styleValues.containerColumn}>
            <Text style={styleValues.textTipStyle}>
              user name status: {useName}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
  getLoginState() {
    ChatClient.getInstance()
      .isLoginBefore()
      .then(
        (value) => {
          this.setState({ loginStatus: value ? 'true' : 'false' });
        },
        (reason) => {
          this.setState({ loginStatus: JSON.stringify(reason) });
        }
      );
  }
  getConnectState() {
    ChatClient.getInstance()
      .isConnected()
      .then(
        (value) => {
          this.setState({ connectStatus: value ? 'true' : 'false' });
        },
        (reason) => {
          this.setState({ connectStatus: JSON.stringify(reason) });
        }
      );
  }
  getUserName() {
    ChatClient.getInstance()
      .getCurrentUsername()
      .then(
        (value) => {
          this.setState({ useName: value });
        },
        (reason) => {
          this.setState({ useName: JSON.stringify(reason) });
        }
      );
  }
}
