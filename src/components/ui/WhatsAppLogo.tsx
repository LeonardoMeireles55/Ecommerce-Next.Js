import Image from 'next/image';
import { useRouter } from 'next/router';

export default function WhatsAppLogo() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    return (
        <span className='w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-orange-100 rounded-full shadow-xl fixed bottom-6 right-6'>
                <Image onClick={handleClick} className='w-6 md:w-8 opacity-100'
                    src="/whats2.svg"
                    width={100}
                    height={100}
                    placeholder="blur"
                    blurDataURL={'/whats2.svg'}
                    priority={true}
                    alt="GIOM LOGO"
                />
        </span>
    )
}