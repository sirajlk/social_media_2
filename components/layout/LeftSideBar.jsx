"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const LeftSideBar = () => {
  

  return (
  
    <div className="h-screen left-0 top-0 sticky overflow-auto px-10 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar">
      <Link href="/">
        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          <Link href={`/profile//posts`}>
            <Image
              src='/assets/avatar1.jpeg'
              alt="profile photo"
              width={50}
              height={50}
              className="rounded-full"
            />
          </Link>

        </div>
      </div>

      <hr />

      <Menu />

      <hr />

      <div className="flex gap-4 items-center">
        <UserButton  afterSignOutUrl="/sign-in"/>
        <p className="text-light-1 text-body-bold">Manage Account</p>
      </div>
    </div>
  );
};

export default LeftSideBar;