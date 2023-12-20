import React from "react";
import Link from "next/link";
import Image from "next/image";
import backIcon from "../assets/icons/back.svg";

type ConversationHeaderProps = {
  name: string;
  imageSrc: string;
};

const ConversationHeader: React.FC<ConversationHeaderProps> = ({
  name = "User",
  imageSrc = "assets/profil1.webp",
}) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <Link href="/">
          <Image src={backIcon} alt="Back" height={38} width={38} />
        </Link>
        <Image
          alt="Leboncoin"
          height={40}
          src={imageSrc}
          width={40}
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
      <div className="h-[1px] w-full bg-slate-500"></div>
    </div>
  );
};

export default ConversationHeader;
