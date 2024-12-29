import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Container from "./Container";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mt-8 mb-12">
      <Container>
        <div className="flex justify-between items-center gap-4">
          <p className="font-bold">
            <Link href="/dashboard">Invoicipedia</Link>
          </p>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <SignInButton />
            </SignedIn>
          </div>
        </div>
      </Container>
    </header>
  );
}
