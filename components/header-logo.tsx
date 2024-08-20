import Link from 'next/link';
import Image from 'next/image';

export const HeaderLogo = () => {
    return (
        <Link href="/">
            <div className='items-center hidden lg:flex'>
                <Image src='/logo.svg' alt='logo' width={28} height={28} />
                <h1 className='text-2xl font-bold text-white ml-2'>Finance</h1>
            </div>
        </Link>
    )
}
