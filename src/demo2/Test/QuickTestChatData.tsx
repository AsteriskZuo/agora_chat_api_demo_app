import {
  ChatConversationFetchOptions,
  ChatConversationMarkType,
  ChatConversationType,
  ChatMessageChatType,
  ChatMessageType,
  ChatSearchDirection,
} from 'react-native-agora-chat';

import { datasheet } from '../__default__/Datasheet';
import type { ApiParams } from '../__internal__/DataTypes';
import { ChatManagerCache } from './ChatManagerCache';

export const MN = {
  sendMessage: 'sendMessage',
  resendMessage: 'resendMessage',
  sendMessageReadAck: 'sendMessageReadAck',
  sendGroupMessageReadAck: 'sendGroupMessageReadAck',
  sendConversationReadAck: 'sendConversationReadAck',
  recallMessage: 'recallMessage',
  getMessage: 'getMessage',
  markAllConversationsAsRead: 'markAllConversationsAsRead',
  getUnreadCount: 'getUnreadCount',
  updateMessage: 'updateMessage',
  importMessages: 'importMessages',
  downloadAttachment: 'downloadAttachment',
  downloadThumbnail: 'downloadThumbnail',
  fetchHistoryMessages: 'fetchHistoryMessages',
  searchMsgFromDB: 'searchMsgFromDB',
  fetchGroupAcks: 'fetchGroupAcks',
  removeConversationFromServer: 'removeConversationFromServer',
  getConversation: 'getConversation',
  getAllConversations: 'getAllConversations',
  fetchAllConversations: 'fetchAllConversations',
  deleteConversation: 'deleteConversation',
  getLatestMessage: 'getLatestMessage',
  getLastReceivedMessage: 'getLastReceivedMessage',
  getConversationUnreadCount: 'getConversationUnreadCount',
  getConversationMessageCount: 'getConversationMessageCount',
  markMessageAsRead: 'markMessageAsRead',
  markAllMessagesAsRead: 'markAllMessagesAsRead',
  updateConversationMessage: 'updateConversationMessage',
  deleteMessage: 'deleteMessage',
  deleteConversationAllMessages: 'deleteConversationAllMessages',
  getMessagesWithMsgType: 'getMessagesWithMsgType',
  getMessages: 'getMessages',
  getMessagesWithKeyword: 'getMessagesWithKeyword',
  getMessageWithTimestamp: 'getMessageWithTimestamp',
  translateMessage: 'translateMessage',
  fetchSupportLanguages: 'fetchSupportLanguages',
  addReaction: 'addReaction',
  removeReaction: 'removeReaction',
  fetchReactionList: 'fetchReactionList',
  fetchReactionDetail: 'fetchReactionDetail',
  reportMessage: 'reportMessage',
  getReactionList: 'getReactionList',
  groupAckCount: 'groupAckCount',
  createChatThread: 'createChatThread',
  joinChatThread: 'joinChatThread',
  leaveChatThread: 'leaveChatThread',
  destroyChatThread: 'destroyChatThread',
  updateChatThreadName: 'updateChatThreadName',
  removeMemberWithChatThread: 'removeMemberWithChatThread',
  fetchMembersWithChatThreadFromServer: 'fetchMembersWithChatThreadFromServer',
  fetchJoinedChatThreadFromServer: 'fetchJoinedChatThreadFromServer',
  fetchJoinedChatThreadWithParentFromServer:
    'fetchJoinedChatThreadWithParentFromServer',
  fetchChatThreadWithParentFromServer: 'fetchChatThreadWithParentFromServer',
  fetchLastMessageWithChatThread: 'fetchLastMessageWithChatThread',
  fetchChatThreadFromServer: 'fetchChatThreadFromServer',
  getMessageThread: 'getMessageThread',
  setConversationExtension: 'setConversationExtension',
  insertMessage: 'insertMessage',
  deleteMessagesBeforeTimestamp: 'deleteMessagesBeforeTimestamp',
  getThreadConversation: 'getThreadConversation',
  fetchConversationsFromServerWithPage: 'fetchConversationsFromServerWithPage',
  removeMessagesFromServerWithMsgIds: 'removeMessagesFromServerWithMsgIds',
  removeMessagesFromServerWithTimestamp:
    'removeMessagesFromServerWithTimestamp',
  fetchHistoryMessagesByOptions: 'fetchHistoryMessagesByOptions',
  deleteMessagesWithTimestamp: 'deleteMessagesWithTimestamp',
  fetchConversationsFromServerWithCursor:
    'fetchConversationsFromServerWithCursor',
  fetchPinnedConversationsFromServerWithCursor:
    'fetchPinnedConversationsFromServerWithCursor',
  pinConversation: 'pinConversation',
  modifyMessageBody: 'modifyMessageBody',
  fetchCombineMessageDetail: 'fetchCombineMessageDetail',
  addRemoteAndLocalConversationsMark: 'addRemoteAndLocalConversationsMark',
  deleteRemoteAndLocalConversationsMark:
    'deleteRemoteAndLocalConversationsMark',
  fetchConversationsByOptions: 'fetchConversationsByOptions',
  deleteAllMessageAndConversation: 'deleteAllMessageAndConversation',
  pinMessage: 'pinMessage',
  unpinMessage: 'unpinMessage',
  fetchPinnedMessages: 'fetchPinnedMessages',
  getPinnedMessages: 'getPinnedMessages',
  getMessagePinInfo: 'getMessagePinInfo',
  searchMessages: 'searchMessages',
  searchMessagesInConversation: 'searchMessagesInConversation',
  removeMessagesWithTimestamp: 'removeMessagesWithTimestamp',
  getMessageCountWithTimestamp: 'getMessageCountWithTimestamp',
  getMessageCount: 'getMessageCount',
};

export const metaDataList = new Map<string, ApiParams>([
  [
    MN.sendMessage,
    {
      methodName: MN.sendMessage,
      params: [
        {
          paramName: 'targetId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'targetType',
          paramType: 'number',
          paramDefaultValue: ChatMessageChatType.PeerChat,
        },
        {
          paramName: 'content',
          paramType: 'string',
          paramDefaultValue: Date.now().toString(),
        },
        {
          paramName: 'messageType',
          paramType: 'string',
          paramDefaultValue: ChatMessageType.TXT,
        },
      ],
    },
  ],
  [
    MN.resendMessage,
    {
      methodName: MN.resendMessage,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'json',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().createTextMessage(),
        },
      ],
    },
  ],
  [
    MN.sendMessageReadAck,
    {
      methodName: MN.sendMessageReadAck,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'json',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastRecvMessage(),
        },
      ],
    },
  ],
  [
    MN.sendGroupMessageReadAck,
    {
      methodName: MN.sendGroupMessageReadAck,
      params: [
        {
          paramName: 'msgId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '1003229966910883832',
        },
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '179992049811458',
        },
        {
          paramName: 'opt',
          paramType: 'json',
          paramDefaultValue: { content: 'test' },
        },
      ],
    },
  ],
  [
    MN.sendConversationReadAck,
    {
      methodName: MN.sendConversationReadAck,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
      ],
    },
  ],
  [
    MN.recallMessage,
    {
      methodName: MN.recallMessage,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1283737398731081152',
        },
        {
          paramName: 'ext',
          paramType: 'string',
          paramDefaultValue: 'test',
        },
      ],
    },
  ],
  [
    MN.getMessage,
    {
      methodName: MN.getMessage,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1274466998939555292',
        },
      ],
    },
  ],
  [
    MN.markAllConversationsAsRead,
    {
      methodName: MN.markAllConversationsAsRead,
      params: [],
    },
  ],
  [
    MN.getUnreadCount,
    {
      methodName: MN.getUnreadCount,
      params: [],
    },
  ],
  [
    MN.updateMessage,
    {
      methodName: MN.updateMessage,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'json',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
      ],
    },
  ],
  [
    MN.importMessages,
    {
      methodName: MN.importMessages,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'json',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
      ],
    },
  ],
  [
    MN.downloadAttachment,
    {
      methodName: MN.downloadAttachment,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'json',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastRecvMessage(),
        },
        {
          paramName: 'callback', // 创建新的回调接收
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().createCallback(),
          domType: 'download',
        },
      ],
    },
  ],
  [
    MN.downloadThumbnail,
    {
      methodName: MN.downloadThumbnail,
      params: [
        {
          paramName: 'message', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'json',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastRecvMessage(),
        },
        {
          paramName: 'callback', // 创建新的回调接收
          paramType: 'object',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().createCallback(),
          domType: 'download',
        },
      ],
    },
  ],
  [
    MN.fetchHistoryMessages,
    {
      methodName: MN.fetchHistoryMessages,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'chatType',
          paramType: 'number',
          paramDefaultValue: ChatConversationType.PeerChat,
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'startMsgId',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.searchMsgFromDB,
    {
      methodName: MN.searchMsgFromDB,
      params: [
        {
          paramName: 'keywords', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: 'r',
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'maxCount',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'from',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'searchScope',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.fetchGroupAcks,
    {
      methodName: MN.fetchGroupAcks,
      params: [
        {
          paramName: 'msgId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '1003592625892100148',
        },
        {
          paramName: 'startAckId',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '179992049811458',
        },
      ],
    },
  ],
  [
    MN.removeConversationFromServer,
    {
      methodName: MN.removeConversationFromServer,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'isDeleteMessage',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getConversation,
    {
      methodName: MN.getConversation,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '241956148019205',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'createIfNeed',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getAllConversations,
    {
      methodName: MN.getAllConversations,
      params: [],
    },
  ],
  [
    MN.fetchAllConversations,
    {
      methodName: MN.fetchAllConversations,
      params: [],
    },
  ],
  [
    MN.deleteConversation,
    {
      methodName: MN.deleteConversation,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'withMessage',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getLatestMessage,
    {
      methodName: MN.getLatestMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '241956148019205',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getLastReceivedMessage,
    {
      methodName: MN.getLastReceivedMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '241956148019205',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getConversationUnreadCount,
    {
      methodName: MN.getConversationUnreadCount,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '241956148019205',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getConversationMessageCount,
    {
      methodName: MN.getConversationMessageCount,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '241956148019205',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.markMessageAsRead,
    {
      methodName: MN.markMessageAsRead,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '241956148019205',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '0',
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.markAllMessagesAsRead,
    {
      methodName: MN.markAllMessagesAsRead,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.updateConversationMessage,
    {
      methodName: MN.updateConversationMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msg',
          paramType: 'json',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.deleteMessage,
    {
      methodName: MN.deleteMessage,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '241956148019205',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1256629251482846624',
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.deleteConversationAllMessages,
    {
      methodName: MN.deleteConversationAllMessages,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: ChatConversationType.PeerChat,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getMessagesWithMsgType,
    {
      methodName: MN.getMessagesWithMsgType,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msgType',
          paramType: 'string',
          paramDefaultValue: ChatMessageType.TXT,
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'count',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'sender',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[0]!.id,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getMessages,
    {
      methodName: MN.getMessages,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'startMsgId',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'loadCount',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getMessagesWithKeyword,
    {
      methodName: MN.getMessagesWithKeyword,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'keywords',
          paramType: 'string',
          paramDefaultValue: '0',
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'count',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'sender',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[0]!.id,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
        {
          paramName: 'searchScope',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.getMessageWithTimestamp,
    {
      methodName: MN.getMessageWithTimestamp,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: '241956148019205',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'startTime',
          paramType: 'number',
          paramDefaultValue: 1651233202699,
        },
        {
          paramName: 'endTime',
          paramType: 'number',
          paramDefaultValue: 1890145587619,
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'count',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.translateMessage,
    {
      methodName: MN.translateMessage,
      params: [
        {
          paramName: 'msg',
          paramType: 'json',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().getLastSendMessage(),
        },
        {
          paramName: 'languages',
          paramType: 'json',
          paramDefaultValue: ['yue', 'en', 'fr', 'de', 'ca'],
        },
      ],
    },
  ],
  [
    MN.fetchSupportLanguages,
    {
      methodName: MN.fetchSupportLanguages,
      params: [],
    },
  ],
  [
    MN.addReaction,
    {
      methodName: MN.addReaction,
      params: [
        {
          paramName: 'reaction',
          paramType: 'string',
          paramDefaultValue: 'reaction1',
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1166078124673207044',
        },
      ],
    },
  ],
  [
    MN.removeReaction,
    {
      methodName: MN.removeReaction,
      params: [
        {
          paramName: 'reaction',
          paramType: 'string',
          paramDefaultValue: 'reaction1',
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1166078124673207044',
        },
      ],
    },
  ],
  [
    MN.fetchReactionList,
    {
      methodName: MN.fetchReactionList,
      params: [
        {
          paramName: 'msgIds',
          paramType: 'json',
          paramDefaultValue: ['1017652723916474936'],
        },
        {
          paramName: 'groupId',
          paramType: 'string',
          paramDefaultValue: '183504266657793',
        },
        {
          paramName: 'chatType',
          paramType: 'number',
          paramDefaultValue: ChatMessageChatType.GroupChat,
        },
      ],
    },
  ],
  [
    MN.fetchReactionDetail,
    {
      methodName: MN.fetchReactionDetail,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1017220072558561848',
        },
        {
          paramName: 'reaction',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.reportMessage,
    {
      methodName: MN.reportMessage,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1017220072558561848',
        },
        {
          paramName: 'tag',
          paramType: 'string',
          paramDefaultValue: 'reaction',
        },
        {
          paramName: 'reason',
          paramType: 'string',
          paramDefaultValue: '',
        },
      ],
    },
  ],
  [
    MN.getReactionList,
    {
      methodName: MN.getReactionList,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1274466998939555292',
        },
      ],
    },
  ],
  [
    MN.groupAckCount,
    {
      methodName: MN.groupAckCount,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1274466998939555292',
        },
      ],
    },
  ],
  [
    MN.createChatThread,
    {
      methodName: MN.createChatThread,
      params: [
        {
          paramName: 'threadName',
          paramType: 'string',
          paramDefaultValue: 'thread2024031101',
        },
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1256624913641375152',
        },
        {
          paramName: 'parentId',
          paramType: 'string',
          paramDefaultValue: '241955811426310',
        },
      ],
    },
  ],
  [
    MN.joinChatThread,
    {
      methodName: MN.joinChatThread,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '184230147588097',
        },
      ],
    },
  ],
  [
    MN.leaveChatThread,
    {
      methodName: MN.leaveChatThread,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '184230147588097',
        },
      ],
    },
  ],
  [
    MN.destroyChatThread,
    {
      methodName: MN.destroyChatThread,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '184230147588097',
        },
      ],
    },
  ],
  [
    MN.updateChatThreadName,
    {
      methodName: MN.updateChatThreadName,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '184230147588097',
        },
        {
          paramName: 'newName',
          paramType: 'string',
          paramDefaultValue: 'newName',
        },
      ],
    },
  ],
  [
    MN.removeMemberWithChatThread,
    {
      methodName: MN.removeMemberWithChatThread,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '184230147588097',
        },
        {
          paramName: 'memberId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
      ],
    },
  ],
  [
    MN.fetchMembersWithChatThreadFromServer,
    {
      methodName: MN.fetchMembersWithChatThreadFromServer,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '184230147588097',
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.fetchJoinedChatThreadFromServer,
    {
      methodName: MN.fetchJoinedChatThreadFromServer,
      params: [
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.fetchJoinedChatThreadWithParentFromServer,
    {
      methodName: MN.fetchJoinedChatThreadWithParentFromServer,
      params: [
        {
          paramName: 'parentId',
          paramType: 'string',
          paramDefaultValue: '183958105030657',
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.fetchChatThreadWithParentFromServer,
    {
      methodName: MN.fetchChatThreadWithParentFromServer,
      params: [
        {
          paramName: 'parentId',
          paramType: 'string',
          paramDefaultValue: '183958105030657',
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
      ],
    },
  ],
  [
    MN.fetchLastMessageWithChatThread,
    {
      methodName: MN.fetchLastMessageWithChatThread,
      params: [
        {
          paramName: 'chatThreadIds',
          paramType: 'json',
          paramDefaultValue: ['184230147588097'],
        },
      ],
    },
  ],
  [
    MN.fetchChatThreadFromServer,
    {
      methodName: MN.fetchChatThreadFromServer,
      params: [
        {
          paramName: 'chatThreadId',
          paramType: 'string',
          paramDefaultValue: '184230147588097',
        },
      ],
    },
  ],
  [
    MN.getMessageThread,
    {
      methodName: MN.getMessageThread,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1020169139521587768',
        },
      ],
    },
  ],
  [
    MN.setConversationExtension,
    {
      methodName: MN.setConversationExtension,
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
          paramName: 'ext',
          paramType: 'json',
          paramDefaultValue: { key: 'value', key2: 10, key3: true },
          domType: 'input',
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.insertMessage,
    {
      methodName: MN.insertMessage,
      params: [
        {
          paramName: 'msg',
          paramType: 'json',
          paramDefaultValue: {},
          paramValue: () => ChatManagerCache.getInstance().createTextMessage(),
        },
      ],
    },
  ],
  [
    MN.deleteMessagesBeforeTimestamp,
    {
      methodName: MN.deleteMessagesBeforeTimestamp,
      params: [
        {
          paramName: 'timestamp', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'number',
          paramDefaultValue: 16765345578360,
        },
      ],
    },
  ],
  [
    MN.getThreadConversation,
    {
      methodName: MN.getThreadConversation,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'createIfNeed',
          paramType: 'boolean',
          paramDefaultValue: true,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.fetchConversationsFromServerWithPage,
    {
      methodName: MN.fetchConversationsFromServerWithPage,
      params: [
        {
          paramName: 'pageSize', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'number',
          paramDefaultValue: 10,
        },
        {
          paramName: 'pageNum', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'number',
          paramDefaultValue: 1,
        },
      ],
    },
  ],
  [
    MN.removeMessagesFromServerWithMsgIds,
    {
      methodName: MN.removeMessagesFromServerWithMsgIds,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msgIds',
          paramType: 'json',
          paramDefaultValue: ['1109957101259588964'],
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.removeMessagesFromServerWithTimestamp,
    {
      methodName: MN.removeMessagesFromServerWithTimestamp,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: 1691379861000,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.fetchHistoryMessagesByOptions,
    {
      methodName: MN.fetchHistoryMessagesByOptions,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 2,
        },
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 20,
        },
        {
          paramName: 'options',
          paramType: 'json',
          paramDefaultValue: {
            // from: datasheet.accounts[2]!.id,
            // msgTypes: [ChatMessageType.FILE],
            startTs: -1,
            endTs: -1,
            direction: ChatSearchDirection.UP,
            needSave: false,
          },
        },
      ],
    },
  ],
  [
    MN.deleteMessagesWithTimestamp,
    {
      methodName: MN.deleteMessagesWithTimestamp,
      params: [
        {
          paramName: 'convId', // 使用发送成功或者失败的数据测试，依赖sendMessage
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'startTs',
          paramType: 'number',
          paramDefaultValue: 168474475329,
        },
        {
          paramName: 'endTs',
          paramType: 'number',
          paramDefaultValue: 16847450793740,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.fetchConversationsFromServerWithCursor,
    {
      methodName: MN.fetchConversationsFromServerWithCursor,
      params: [
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 2,
        },
      ],
    },
  ],
  [
    MN.fetchPinnedConversationsFromServerWithCursor,
    {
      methodName: MN.fetchPinnedConversationsFromServerWithCursor,
      params: [
        {
          paramName: 'cursor',
          paramType: 'string',
          paramDefaultValue: '',
        },
        {
          paramName: 'pageSize',
          paramType: 'number',
          paramDefaultValue: 2,
        },
      ],
    },
  ],
  [
    MN.pinConversation,
    {
      methodName: MN.pinConversation,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'isPinned',
          paramType: 'boolean',
          paramDefaultValue: true,
        },
      ],
    },
  ],
  [
    MN.modifyMessageBody,
    {
      methodName: MN.modifyMessageBody,
      params: [
        {
          paramName: 'msgId',
          paramType: 'string',
          paramDefaultValue: '1171296473862636988',
        },
        {
          paramName: 'body',
          paramType: 'json',
          paramDefaultValue: {
            content: '123',
            lastModifyOperatorId: '',
            lastModifyTime: 0,
            modifyCount: 0,
            targetLanguageCodes: undefined,
            translations: {},
            type: 'txt',
          },
        },
      ],
    },
  ],
  [
    MN.fetchCombineMessageDetail,
    {
      methodName: MN.fetchCombineMessageDetail,
      params: [
        {
          paramName: 'message',
          paramType: 'json',
          paramDefaultValue: {
            msgId: '1170945161216132512',
            localMsgId: '1690196941352',
            conversationId: 'asterisk003',
            from: 'asterisk001',
            to: 'asterisk003',
            localTime: 1690196941352,
            serverTime: 1690196715627,
            hasDeliverAck: false,
            hasReadAck: false,
            needGroupAck: false,
            groupAckCount: 0,
            hasRead: true,
            status: 2,
            attributes: { k: 'v', k4: 1, k5: 0.12, k3: true, k2: 10 },
            chatType: 0,
            direction: 'send',
            body: {
              type: 'combine',
              lastModifyOperatorId: '',
              lastModifyTime: 0,
              modifyCount: 0,
              localPath:
                '/storage/emulated/0/Android/data/com.chatsdkexample/easemob-demo#flutter/files/asterisk001/asterisk003/1170945381442258336/1170945161216132512',
              secret: '',
              remotePath:
                'https://a1.easemob.com/easemob-demo/flutter/chatfiles/f7d0c910-2a11-11ee-a545-c52a13fef54f',
              fileStatus: -1,
              fileSize: 0,
              displayName: '',
              title: 'title',
              compatibleText: '',
              summary: '...',
            },
            isChatThread: false,
            isOnline: true,
            deliverOnlineOnly: false,
          },
        },
      ],
    },
  ],
  [
    MN.addRemoteAndLocalConversationsMark,
    {
      methodName: MN.addRemoteAndLocalConversationsMark,
      params: [
        {
          paramName: 'convIds',
          paramType: 'json',
          paramDefaultValue: ['246309662556169'],
        },
        {
          paramName: 'mark',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.deleteRemoteAndLocalConversationsMark,
    {
      methodName: MN.deleteRemoteAndLocalConversationsMark,
      params: [
        {
          paramName: 'convIds',
          paramType: 'json',
          paramDefaultValue: ['246309662556169'],
        },
        {
          paramName: 'mark',
          paramType: 'number',
          paramDefaultValue: 0,
        },
      ],
    },
  ],
  [
    MN.fetchConversationsByOptions,
    {
      methodName: MN.fetchConversationsByOptions,
      params: [
        {
          paramName: 'option',
          paramType: 'json',
          paramDefaultValue: ChatConversationFetchOptions.withMark(
            ChatConversationMarkType.Type0
          ),
        },
      ],
    },
  ],
  [
    MN.deleteAllMessageAndConversation,
    {
      methodName: MN.deleteAllMessageAndConversation,
      params: [
        {
          paramName: 'clearServerData',
          paramType: 'boolean',
          paramDefaultValue: true,
        },
      ],
    },
  ],
  [
    MN.pinMessage,
    {
      methodName: MN.pinMessage,
      params: [
        {
          paramName: 'messageId',
          paramType: 'string',
          paramDefaultValue: '1274466998939555292',
        },
      ],
    },
  ],
  [
    MN.unpinMessage,
    {
      methodName: MN.unpinMessage,
      params: [
        {
          paramName: 'messageId',
          paramType: 'string',
          paramDefaultValue: '1274466998939555292',
        },
      ],
    },
  ],
  [
    MN.fetchPinnedMessages,
    {
      methodName: MN.fetchPinnedMessages,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: '246309662556169',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getPinnedMessages,
    {
      methodName: MN.getPinnedMessages,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: '246309662556169',
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 1,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
          domType: 'select',
        },
      ],
    },
  ],
  [
    MN.getMessagePinInfo,
    {
      methodName: MN.getMessagePinInfo,
      params: [
        {
          paramName: 'messageId',
          paramType: 'string',
          paramDefaultValue: '1274466998939555292',
        },
      ],
    },
  ],
  [
    MN.searchMessages,
    {
      methodName: MN.searchMessages,
      params: [
        {
          paramName: 'msgTypes',
          paramType: 'json',
          paramDefaultValue: ['txt'],
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'count',
          paramType: 'number',
          paramDefaultValue: 2,
        },
        {
          paramName: 'from',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
        },
      ],
    },
  ],
  [
    MN.searchMessagesInConversation,
    {
      methodName: MN.searchMessagesInConversation,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'msgTypes',
          paramType: 'json',
          paramDefaultValue: ['txt'],
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'count',
          paramType: 'number',
          paramDefaultValue: 2,
        },
        {
          paramName: 'from',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'direction',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
        },
      ],
    },
  ],
  [
    MN.removeMessagesWithTimestamp,
    {
      methodName: MN.removeMessagesWithTimestamp,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'timestamp',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
        },
      ],
    },
  ],
  [
    MN.getMessageCountWithTimestamp,
    {
      methodName: MN.getMessageCountWithTimestamp,
      params: [
        {
          paramName: 'convId',
          paramType: 'string',
          paramDefaultValue: datasheet.accounts[2]!.id,
        },
        {
          paramName: 'convType',
          paramType: 'number',
          paramDefaultValue: 0,
        },
        {
          paramName: 'start',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'end',
          paramType: 'number',
          paramDefaultValue: -1,
        },
        {
          paramName: 'isChatThread',
          paramType: 'boolean',
          paramDefaultValue: false,
        },
      ],
    },
  ],
  [
    MN.getMessageCount,
    {
      methodName: MN.getMessageCount,
      params: [],
    },
  ],
]);
