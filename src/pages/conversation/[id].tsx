import ConversationMessage from "../../components/ConversationMessage";
import ConversationHeader from "../../components/ConversationHeader";
import { getLoggedUserId } from "../../utils/getLoggedUserId";
import { getMessagesByConversationId } from "../../api/messages";
import { getConversationsByUserId } from "../../api/conversations";
import { getUsers } from "../../api/users";
import { User } from "../../types/user";
import { Conversation } from "../../types/conversation";
import { Message } from "../../types/message";
import { useState } from "react";

interface MessageSerialized {
  sender: string;
  message: string;
  time: string;
  avatar?: string;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const userId = getLoggedUserId();
  const users: User[] = await getUsers();
  const user = users?.find((user: User) => user.id === userId);
  const conversationId: number = params.id;
  const messages = await getMessagesByConversationId(
    conversationId,
    user.token
  );
  console.log(messages);
  const conversations = await getConversationsByUserId(userId, user.token);
  const conversation = conversations?.find(
    (conversation) => conversation.id == conversationId
  );
  const recipientId: number =
    conversation?.senderId === userId
      ? conversation?.recipientId
      : conversation?.senderId;
  const recipient: User = users?.find((user: User) => user.id === recipientId);
  const messagesSerialized: MessageSerialized[] = messages.map(
    (message: Message) => {
      const user = users.find((user: User) => user.id === message.authorId);
      console.log(user.nickname);
      return {
        sender: user.nickname,
        message: message.body,
        time: new Date(message.timestamp * 1000).toLocaleDateString("en-EN", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        avatar: user.avatar,
      };
    }
  );
  return {
    props: { userId, messages: messagesSerialized, users, recipient },
  };
}

export default function Component({
  userId,
  messages,
  users,
  recipient,
}: {
  userId: number;
  messages: MessageSerialized[];
  users: User[];
  recipient: User;
}) {
  const [newMessage, setNewMessage] = useState("");
  const [messagesSerialized, setMessagesSerialized] =
    useState<MessageSerialized[]>(messages);
    
  const handleSendMessage = async () => {
    if (!newMessage) return;
    const timestamp = Math.floor(Date.now() / 1000);
    const user = users.find((user: User) => user.id === userId);
    const newMessageSerialized: MessageSerialized = {
      sender: user.nickname,
      message: newMessage,
      time: new Date(timestamp * 1000).toLocaleDateString("en-EN", {
        hour: "2-digit",
        minute: "2-digit",
      }),
      avatar: user.avatar,
    };

    setNewMessage("");
    setMessagesSerialized([...messagesSerialized, newMessageSerialized]);
  };

  return (
    <main className="container mx-auto p-6 space-y-8 flex flex-col justify-between min-h-screen">
      <ConversationHeader
        name={recipient.nickname}
        imageSrc={recipient.avatar}
      />
      <div className="space-y-4">
        {messagesSerialized.map((message, index) => (
          <ConversationMessage key={index} message={message} />
        ))}
        <div className="bg-gray-100 p-4 rounded-lg">
          <input
            aria-label="Type a message"
            className="w-full p-2 rounded border border-gray-200"
            id="message-input"
            placeholder="Type a message..."
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded p-2 mt-2 w-full"
            type="button"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
