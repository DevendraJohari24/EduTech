"use client"

import {HiHome, HiUser, HiRectangleGroup, HiChatBubbleBottomCenterText, HiEnvelope, HiViewColumns} from "react-icons/hi2";
//  links
export const navData = [
  { name: 'home', path: '/', icon: <Home /> },
  { name: 'about', path: '/about', icon: <Users /> },
  { name: 'services', path: '/services', icon:  <Wrench /> },
  { name: 'work', path: '/work', icon:  <Briefcase /> },
  {
    name: 'contact',
    path: '/contact',
    icon: <AtSign />,
  },
];

// next Link
import Link from "next/link";

// next Router
import { usePathname } from 'next/navigation';
import { AtSign, Briefcase, Home, Users, Wrench } from "lucide-react";

const Nav = () => {
  const pathname = usePathname();

  return(
    <nav className="flex flex-col items-center xl:justify-center 
    gap-y-4 fixed h-max bottom-0 mt-auto
     xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between
       xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] bg-white/10
        xl:h-max py-8 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
          <Link 
          href={link.path}
          className={ `${link.path === pathname ? 'text-accent': 'text-white'} relative flex items-center group hover:text-accent transition-all duration-300` }
          key={index}
          >
            {/*  Tooltip */}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
              <div className="bg-white relative flex text-primary 
              items-center p-[6px] rounded-[3px]">
                <div className="text-[12px] leading-none 
                font-semibold capitalize">{link.name}</div>
                {/* Triangle */}
                <div className="border-solid border-l-white border-l-8
                border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
              </div>
            </div>
            {/* Icon */}
            <div>{link.icon}</div>
            </Link>
            )
        })}
      </div>
    </nav>
  );
};

export default Nav;
