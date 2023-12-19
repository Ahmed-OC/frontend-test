import Image from "next/image";
import ConversationMessage from "../../components/ConversationMessage";

interface Message {
  sender: string;
  message: string;
  time: string;
  avatar?: string;
}

export default function Component() {
  const messages: Message[] = [
    {
      sender: "Thibault",
      message: "Hey! How are you doing?",
      time: "10:00 AM",
      avatar:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      sender: "Jeremie",
      message: "I'm doing great! How about you?",
      time: "10:02 AM",
      avatar:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      sender: "Thibault",
      message: "I'm doing fine. Thanks for asking!",
      time: "10:05 AM",
      avatar:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <main className="container mx-auto p-6 space-y-8 flex flex-col justify-between min-h-screen">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <Image
            alt="Leboncoin"
            height={40}
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={40}
            className="w-[40px] h-[40px] rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold">Thibault</h1>
        </div>
        <div className="h-[1px] w-full bg-slate-500"></div>
      </div>

      <div className="space-y-4">
        {messages.map((message, index) => (
          <ConversationMessage key={index} message={message} />
        ))}
        <div className="bg-gray-100 p-4 rounded-lg">
          <input
            aria-label="Type a message"
            className="w-full p-2 rounded border border-gray-200"
            id="message-input"
            placeholder="Type a message..."
            type="text"
          />
          <button
            className="bg-blue-500 text-white rounded p-2 mt-2 w-full"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  );
}
