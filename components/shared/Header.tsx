import Image from "next/image"
import Link from "next/link"

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
                
            </div>
        </div>
    </header>
  )
}

export default Header