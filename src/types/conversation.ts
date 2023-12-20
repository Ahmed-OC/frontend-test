export interface Conversation {
  id: number
  recipientId: number
  recipientNickname: string
  recipientAvatar: string
  senderId: number
  senderNickname: string
  senderAvatar: string
  lastMessageTimestamp: number
  lastMessage: string
}