import React, { Children } from "react";
import Image from "next/image";
type Props = {
  children: React.ReactNode;
};

export default function noAuthLayout({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen pt-4">
      <Image
        src="/Logo.png"
        alt="logo"
        width={200}
        height={200}
        className="my-6"
      />
      {children}
    </div>
  );
}
