import Image from 'next/image';
import { Archivo, Jost } from 'next/font/google';

const archivo = Archivo({ subsets: ['latin'] });
const jost = Jost({ subsets: ['latin'] });

export default function Home() {
    return (
        <div className="bg-black h-svh">
            <div className="h-40 bg-white p-3 flex flex-col justify-center align-middle items-center">
                <div className="container mx-auto align-middle">
                    <Image
                        src="/DR_Black.png"
                        width={120}
                        height={120}
                        alt="DocketRockit"
                        sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                    />
                </div>
            </div>
            <div className="bg-black md:container text-green-700 flex flex-col-reverse md:flex-row md:mx-auto pt-20 justify-between md:space-x-10">
                <div className="md:w-1/2 flex flex-col p-3 md:p-0 text-center md:text-left">
                    <h1
                        className={`${archivo.className}  text-5xl md:text-8xl font-bold md:leading-[115px] pb-10 md:pb-16`}
                    >
                        Introducing
                    </h1>
                    <h1
                        className={`${archivo.className} text-5xl md:text-8xl font-bold md:leading-[115px] md:pb-20 pb-10`}
                    >
                        DocketRockit
                    </h1>
                    <p className={`${jost.className} text-2xl pb-5 md:pb-10`}>
                        No more searching through your emails to find that
                        receipt.
                    </p>
                    <p className={`${jost.className} text-2xl pb-5 md:pb-10`}>
                        All your purchases, all in one place, saving the
                        environment one purchase at a time.
                    </p>
                    <p className={`${jost.className} font-bold text-3xl`}>
                        Coming Soon
                    </p>
                </div>
                <div className="w-full md:w-1/2 items-center flex flex-row justify-center mx-auto">
                    <Image
                        src="/back.png"
                        width={500}
                        height={500}
                        alt="DocketRockit"
                        sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
                        className="mx-auto px-10"
                    />
                </div>
            </div>
        </div>
    );
}
