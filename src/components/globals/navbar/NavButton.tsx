/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, {ReactNode} from "react";

interface NavButtonProps {
   children?: ReactNode;
   url: string;
}

function NavButton({children, url}: NavButtonProps) {
   return (
      <Link
         href={url}
         className="flex items-center gap-1.5 text-md font-medium leading-[1.3em] border hover:no-underline border-primary-400 py-[9px] px-4 rounded-full hover:bg-primary-400 duration-300 group"
      >
         <span>{children}</span>
         <img className="mt-0.5 group-hover:block hidden" src="images/Group 210.svg" alt="" />
         <img className="mt-0.5 group-hover:hidden block" src="/images/Group 197 (1).svg" alt="" />
      </Link>
   );
}

export default NavButton;
