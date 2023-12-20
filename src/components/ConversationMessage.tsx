import Image from "next/image";
import React from "react";

type ConversationMessageProps = {
    message: {
        sender: string;
        avatar?: string;
        message: string;
        time: string;
    };
};

const ConversationMessage: React.FC<ConversationMessageProps> = ({
    message = {
        sender: "User",
        message: "Message",
        time: "00:00",
        avatar: "assets/profil1.webp",
    },
}) => {
  return (
    <div className="flex items-start space-x-3">
      <Image
        alt={message.sender}
        height={48}
        src={message.avatar || "assets/profil1.webp"}
        width={48}
        className="w-[48px] h-[48px] rounded-full object-cover"
      />
      <div className="bg-blue-100 rounded-lg p-3 max-w-sm">
        <h3 aria-label={"Message de " + message.sender} tabIndex={0} className="font-semibold">{message.sender}</h3>
        <p aria-label={message.message} tabIndex={0} className="text-sm text-gray-700">{message.message}</p>
        <p aria-label={"Envoyé à " + message.time} tabIndex={0} suppressHydrationWarning className="text-xs text-gray-500 mt-2">{message.time}</p>
      </div>
    </div>
  );
};

export default ConversationMessage;
