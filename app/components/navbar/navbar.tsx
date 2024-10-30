"use client"

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import WelodyLogo from "../ui/WelodyLogo";

export default function Navbar() {
/*   const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); */
  return (
    <nav className="flex items-center px-4 fixed z-20 top-6 w-full text-sm md:text-md text-mine-950 dark:text-mine-50">
      <div className="flex flex-wrap w-full px-8 py-2 justify-between mx-auto max-w-screen-md backdrop-blur-md bg-mine-100 bg-opacity-70 dark:bg-mine-500 dark:bg-opacity-70 rounded-full">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse m-0">
          <div className="max-w-24">
            <WelodyLogo/>
          </div>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse items-center">
          <AuthButton />
        </div>
      </div>
    </nav>
  )
}

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <button className="items-center px-3 py-2 rounded-3xl hover:text-mine-400 dark:hover:text-mine-100" onClick={() => signOut()}>Sign out</button>
        <Image src={session?.user?.image ? session.user.image : "/welodyBlack"} alt="User profile picture" className="w-9 h-9 rounded-full" width={100} height={100} />
      </>
    )
  }
  return (
    <>
      <button className="text-xs sm:text-sm items-center px-3 py-2 rounded-3xl hover:text-mine-400 dark:hover:text-mine-100" onClick={() => signIn()}>Sign in</button>
      <button type="button" className="text-xs sm:text-sm items-center px-4 py-2 rounded-3xl bg-mine-950 text-mine-50 dark:text-mine-50 drop-shadow-lg hover:drop-shadow-none z-30 hover:z-20">Get started</button>
    </>
  )
}