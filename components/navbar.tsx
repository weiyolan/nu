import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "./ui/mode-toggle";

export default function Navbar() {
  return (
    <nav className="fixed flex w-full justify-between p-4 gap-4">
      <ModeToggle />
      <h1>Root Layout</h1>
      <UserButton />
    </nav>
  );
}
