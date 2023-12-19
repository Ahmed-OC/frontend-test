import type { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/lbc-logo.webp";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Home = (): ReactElement => {
  const userId = 1;
  const conversations = [
    {
      id: 1,
      recipientId: 2,
      recipientNickname: "Jeremie",
      senderId: 1,
      senderNickname: "Thibaut",
      lastMessageTimestamp: 1625637849,
      lastMessage: "Bonjour c'est le troisième message de la première conversation",
      avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      recipientId: 3,
      recipientNickname: "Patrick",
      senderId: 1,
      senderNickname: "Thibaut",
      lastMessageTimestamp: 1620284667,
      lastMessage: "Bonjour c'est le premier message de la seconde conversation",
      avatar: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      recipientId: 1,
      recipientNickname: "Thibaut",
      senderId: 4,
      senderNickname: "Elodie",
      lastMessageTimestamp: 1625648667,
      lastMessage: "",
      avatar: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const getUserInConversation = (conversation) => {
    return conversation.senderId === userId
      ? conversation.recipientNickname
      : conversation.senderNickname;
  }
 const filteredConversationsByTimestamp = (conversations) => conversations.sort((a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp);
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Technical test - Leboncoin</title>
        <meta
          name="description"
          content="Frontend exercise for developpers who want to join us on leboncoin.fr"
        ></meta>
      </Head>

      <main className="container mx-auto">
        <div className="h-screen w-full">
          <div className="p-4 bg-gray-100">
            <h1 className="text-lg font-bold text-gray-900">
              Messages
            </h1>
          </div>
          <div className="space-y-4 p-4">
            {filteredConversationsByTimestamp(conversations).map((conversation) => (
              <Link href={`/conversation/${conversation.id}`}
                className="hover:bg-gray-50 rounded-md p-3 cursor-pointer transition-colors block"
                key={conversation.id}
              >
                <div className="flex items-center gap-4">
                  <Image src={conversation.avatar} alt="Avatar" className="w-10 h-10 object-cover rounded-full" height={40} width={40} />
                  <div className="flex-1 min-w-0">
                    <h2 className="text-sm font-medium text-gray-900 truncate">
                      {getUserInConversation(conversation)}
                    </h2>
                    <p className="text-sm text-gray-500 truncate">
                      {conversation.lastMessage}
                    </p>
                  </div>
                  <time
                    className="text-sm text-gray-500 whitespace-nowrap"
                    dateTime="2023-12-18T20:00:00.000Z"
                  >
                    {new Date(conversation.lastMessageTimestamp * 1000).toLocaleDateString("fr-FR", { day: '2-digit', month: '2-digit',year: '2-digit' })}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
