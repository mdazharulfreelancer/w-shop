import Container from "@/components/Container";
import { Langues } from "@/components/Langues";
import { ModeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { AlignLeft, EllipsisVertical, UserRound } from "lucide-react";
import Link from "next/link";
import Menu from "./menu";
export default function Header() {
  return (
    <header className="  h-fit">
      <div className="w-full bg-primary">
        <div>
          <Container className="py-3">
            <div className="w-full h-fit ">
              <div className="flex items-center justify-between h-full gap-4">
                {/* fast */}
                <div className="flex  items-center gap-1">
                  <div className="sm:hidden">
                    <AlignLeft className="text-primary-foreground" />
                  </div>
                  <Link
                    href="/"
                    className="text-white font-bold text-md md:text-lg"
                  >
                    {process.env.NEXT_PUBLIC_APP_NAME || "w-shop"}
                  </Link>
                </div>

                {/* secound middle */}
                <div className="flex flex-1/2  items-center gap-2">
                  <Input
                    placeholder="Search"
                    className="h-8 sm:h-9 bg-muted outline-none focus:none focus:none w-full rounded-lg sm:rounded-sm"
                  />
                </div>
                {/* right side */}
                {/* rigtSide Mobail */}
                <div className="md:hidden flex items-center gap-4">
                  <div className="flex  items-center gap-1">
                    <Link href={"/sign-in"}>
                      <UserRound className="text-primary-foreground" />
                    </Link>
                    <span>
                      <EllipsisVertical className="text-primary-foreground" />
                    </span>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className=" flex flex-1/3 items-center gap-4">
                    <div className="w-full flex items-center justify-end gap-4">
                      {/* langues */}
                      <div className="hidden md:block">
                        <Langues />
                      </div>
                      {/* theme */}
                      <div className="">
                        <ModeToggle />
                      </div>
                      {/* sign in */}
                      <div className="hidden md:block">
                        <DropdownMenu>
                          <DropdownMenuTrigger className="flex items-start gap-0  flex-col cursor-pointer ">
                            <span className="text-white text-sm outline-none ">
                              {"Hello sign in"}
                            </span>
                            <p className="text-sm font-semibold text-muted">
                              {"Account & order"}
                            </p>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel className="flex flex-col gap-2">
                              <Button className="w-full text-sm ">
                                <Link href="/sign-in" className="w-full">
                                  {"sign in"}
                                </Link>
                              </Button>
                              <div className="w-full flex gap-2">
                                <span className="text-sm font-normal">
                                  New Customer?
                                </span>
                                <Link
                                  href={"/sign-up"}
                                  className="text-sm font-semibold text-primary"
                                >
                                  sign up
                                </Link>
                              </div>
                            </DropdownMenuLabel>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="w-full py-1 h-fit bg-background shadow-md">
        <Container className="">
          <div className="w-full h-fit">
            <Menu />
          </div>
        </Container>
      </div>
    </header>
  );
}
