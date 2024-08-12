import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logo.png";
import MenuIcon from "@/assets/menu.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={20} width={60} />
            <MenuIcon className="size-4 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <Button className="tracking-tight">Get for free</Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
