import { SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Header = () => {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex intems-center justify-between">
            <Link href="/" className="w-36">
                {/* // TODO modifier logo */}
                <Image src="/assets/images/logo.svg" width={128} height={128}
                alt="logo WhatsUp"
                />
            </Link>
            <div className="flex w-32 justify-end gap-3">
                <SignedOut>
                    <Button asChild className="rounded-full" size="lg">
                        <Link href="/sign-in">Se connecter</Link>
                    </Button>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header