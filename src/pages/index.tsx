import type { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../assets/lbc-logo.webp";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getUserById } from "../api/users";
import { getLoggedUserId } from "../utils/getLoggedUserId";
import { User } from "../types/user";
import { getConversationsByUserId } from "../api/conversations";
import { Conversation } from "../types/conversation";
import HomeListConv from "../components/HomeListConv";

export async function getStaticProps() {
  const userId = getLoggedUserId();
   const user = await getUserById(userId);
  const conversations = await getConversationsByUserId(userId, user[0]?.token);
  return {
    props: {
      user: user[0],
      conversations,
    },
  };
}

const Home = ({
  user,
  conversations,
}: {
  user: User;
  conversations: Conversation[];
}): ReactElement => {
  console.log(user);
  const userId = 1;
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
          <Image className="mx-auto my-8" src={Logo} alt="Leboncoin" height={200} width={200} />
          <div className="flex items-center gap-3 p-4 bg-gray-100">
            <Image className="rounded-full w-12 h-12" src={user.avatar} alt="Avatar" height={40} width={40} />
            <h1 className="text-lg font-bold text-gray-900">Messages</h1>
          </div>   
          <HomeListConv userId={userId} conversations={conversations} />     
        </div>
      </main>
    </div>
  );
};

export default Home;
