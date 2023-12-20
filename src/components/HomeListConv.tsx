import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Conversation } from "../types/conversation";

const HomeListConv = ({
  userId,
  conversations,
}: {
  userId: number;
  conversations: Conversation[];
}) => {
  const getUserInConversation = (conversation: Conversation) => {
    return conversation.senderId === userId
      ? {
          nickName: conversation.recipientNickname,
          avatar: conversation.recipientAvatar,
        }
      : {
          nickName: conversation.senderNickname,
          avatar: conversation.senderAvatar,
        };
  };
  const filteredConversationsByTimestamp = (conversations: Conversation[]) =>
    conversations.sort(
      (a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp
    );
  return (
    <div className="space-y-4 p-4">
      {filteredConversationsByTimestamp(conversations).map((conversation) => (
        <Link
          href={`/conversation/${conversation.id}`}
          className="hover:bg-gray-50 rounded-md p-3 cursor-pointer transition-colors block"
          key={conversation.id}
        >
          <div className="flex items-center gap-4">
            <Image
              src={getUserInConversation(conversation).avatar}
              alt="Avatar"
              className="w-10 h-10 object-cover rounded-full"
              height={40}
              width={40}
            />
            <div className="flex-1 min-w-0">
              <h2 className="text-sm font-medium text-gray-900 truncate">
                {getUserInConversation(conversation).nickName}
              </h2>
              <p className="text-sm text-gray-500 truncate">
                {conversation.lastMessage}
              </p>
            </div>
            <time
              className="text-sm text-gray-500 whitespace-nowrap"
              dateTime="2023-12-18T20:00:00.000Z"
            >
              {new Date(
                conversation.lastMessageTimestamp * 1000
              ).toLocaleDateString("en-EN", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit",
              })}
            </time>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeListConv;
