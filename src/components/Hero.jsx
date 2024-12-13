'use client'
import { CustomButton } from './'
import Image from "next/image";
const Hero = () => {

    const handleScroll = () => {

    }
    return (
        <>
            <div className="flex xl:flex-row flex-col gap-4 relative z-0 max-w-[1440px] mx-auto">
                <div className="flex-1 pt-36 sm:px-16 px-6">
                    <h1 className="xl:text-[64px] sm:text-[50px] text-[30px] font-bold"> Find, Book, and Rent a Car - quickly and easily!</h1>

                    <p className="xl:text-[27px] text-[20px] text-black-100 font-light mt-5">
                        Streamline your car rental experience with our effortless booking
                        process.
                    </p>

                    <CustomButton title="Explore Cars" containerStyles="bg-[#4D74FF] text-white rounded-full mt-10  text-lg lg:text-2xl px-4" handleClick={handleScroll}  />
                </div>

                <div className=" xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
                    <div className="relative xl:w-full  w-[100%] xl:h-full  h-[400px] z-0  ">
                        <Image src="/hero.png" alt="hero" fill className="object-contain" />
                    </div>

                    <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[400px] overflow-hidden" />
                </div>

            </div>
        </>
    )
}

export default Hero
