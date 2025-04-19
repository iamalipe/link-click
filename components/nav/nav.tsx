import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FileText, Home, Key } from "lucide-react";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="border-b flex-none">
      <div className="container mx-auto px-2 sm:px-4 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg flex items-center gap-2"
        >
          <Home className="h-5 w-5" />
          LinkClick
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link
                href="/api-keys"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-2 sm:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                <Key className="mr-1 h-4 w-4" />
                API Keys
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/api-docs"
                className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-2 sm:px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
              >
                <FileText className="mr-1 h-4 w-4" />
                Docs
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Nav;
