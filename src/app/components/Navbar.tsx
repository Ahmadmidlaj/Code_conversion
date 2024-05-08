"use client"
// import ThanhaLogo from "@/assets/thanhalogo.svg";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const NavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Translator",
    href: "/translation",
  },
  {
    label: "Documentation",
    href: "/document",
  },
  {
    label: "Analysis",
    href: "/analysis",
  },
];

export default function Navbar() {
  return(
    <header className="flex sticky top-0 flex-wrap md:justify-center md:flex-nowrap z-50 w-full justify-center">
    <nav
      className="mt-2 relative max-w-[80rem] w-full shadow backdrop-blur-2xl bg-white bg-opacity-10 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-center md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-neutral-800 dark:border-neutral-700"
      aria-label="Global"
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          {/* <Image src={ThanhaLogo} alt="Thanha Logo" width={120} height={120} /> */}
        </Link>
        <div className="md:hidden">
               <Sheet>
         <SheetTrigger asChild>
          
       
          <Button
            type="button"
            size={"icon"}
            variant={"secondary"}
            className="hs-collapse-toggle rounded-2xl shadow"
            data-hs-collapse="#navbar-collapse-with-animation"
            aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation"
          >
            <HamburgerMenuIcon className="hs-collapse-open:hidden flex-shrink-0 size-4" />
            <Cross1Icon className="hs-collapse-open:block hidden flex-shrink-0 size-4" />
          </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              {/* <Image
                src={ThanhaLogo}
                alt="Thanha Logo"
                width={100}
                height={50}
              /> */}
              <span className="">THANHA TRAVELS</span>
            </Link>
            {NavItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-indigo-700 bg-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
        </Sheet>
        </div>
        
      </div>
      <div
        id="navbar-collapse-with-animation"
        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
      >
        <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
          {NavItems.map((navItem, i) => (
            //  Using a tag because <Link> wouldn't close the navbar after switch
            <a key={i} href={navItem.href}>
              {navItem.label}
            </a>
          ))}
      <div>

      </div>
            <Button className="  flex items-center md:border-s md:border-zinc-600 font-medium md:my-6 md:ps-6">
       
            </Button>
{/*      
            <>
          
              <Button className="flex items-center md:border-s md:border-zinc-600 font-medium md:my-6 md:ps-6">
                <Link href="/onboarding">Register</Link>
              </Button>
            </> */}
        
        </div>
      </div>
    </nav>
  </header>
  )
}

// import ThanhaLogo from "@/assets/images.svg";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// import { Menu } from "lucide-react";

// import Image from "next/image";
// import Link from "next/link";

// interface NavItem {
//   label: string;
//   href: string;
// }

// const NavItems: NavItem[] = [
//   {
//     label: "Home",
//     href: "/",
//   },
//   {
//     label: "Gallery",
//     href: "/gallery",
//   },
//   {
//     label: "Contact",
//     href: "/contact",
//   },
// ];

// export function Header() {
//   return (
//     <header
//       id="navbar"
//       className=" top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6"
//     >
//       <Link
//         href="/"
//         className="hidden md:flex items-center gap-2 text-lg font-semibold"
//       >
//         <Image src={ThanhaLogo} alt="Thanha Logo" width={100} height={100} />
//         {/* <span className="mr-12 font-bold text-xl text-gray-800">
//           THANHA TRAVELS
//         </span> */}
//         <span className="mr-12 font-bold text-2xl md:text-3xl lg:text-4xl text-gray-800 tracking-wide uppercase font-roboto">
//           THANHA TRAVELS
//         </span>
//       </Link>

//       <nav className="hidden flex-col gap-6 text-lg font-medium  md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 justify-center lg:items-center">
//         {NavItems.map((item) => (
//           <Link
//             key={item.label}
//             href={item.href}
//             className="text-muted-foreground transition-colors hover:text-indigo-700"
//           >
//             {item.label}
//           </Link>
//         ))}
//       </nav>

//       <Sheet>
//         <SheetTrigger asChild>
//           <Button variant="outline" size="icon" className="shrink-0 md:hidden">
//             <Menu className="h-5 w-5" />
//             <span className="sr-only">Toggle navigation menu</span>
//           </Button>
//         </SheetTrigger>
        // <SheetContent side="left" className="bg-white">
        //   <nav className="grid gap-6 text-lg font-medium">
        //     <Link
        //       href="#"
        //       className="flex items-center gap-2 text-lg font-semibold"
        //     >
        //       <Image
        //         src={ThanhaLogo}
        //         alt="Thanha Logo"
        //         width={100}
        //         height={50}
        //       />
        //       <span className="">THANHA TRAVELS</span>
        //     </Link>
        //     {NavItems.map((item) => (
        //       <Link
        //         key={item.label}
        //         href={item.href}
        //         className="text-muted-foreground transition-colors hover:text-indigo-700 bg-white"
        //       >
        //         {item.label}
        //       </Link>
        //     ))}
        //   </nav>
        // </SheetContent>
//       </Sheet>
//     </header>
//   );
// }
