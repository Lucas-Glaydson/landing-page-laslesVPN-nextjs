"use client";

import Image from "next/image";
interface InfoDataProps {
  image: string;
  title: string;
  value: string;
}

export default function InfoData({ image, title, value }: InfoDataProps) {
  return (
    <div className="flex items-center gap-2 mt-4">
      <Image src={image} alt={title} width={30} height={30} />
      <div className="flex flex-col items-start">
        <h2 className="text-sm font-bold">{value}</h2>
        <h3 className="text-xs text-gray-500">{title}</h3>
      </div>
    </div>
  );
}