import { Logo } from "./logo";
import { Button } from "./ui/button";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 px-6">
            <Logo />
            <Link href="/signin">
                <Button
                    className="text-white bg-button hover:bg-button-dark"
                >
                    Sign in
                </Button>
            </Link>
        </nav>
    );
}