"use client"
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import { CustomButton } from ".";
import { useEffect, useState } from "react";
import CardDetails from "./CardDetails";


const CarCard = ({ car }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { make, model, year, color, mileage, fuelType, transmission, engine, horesepower } = car;

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchCarImage = async () => {
      const url = await generateCarImageUrl(make, model); // Pass the car details
      setImageUrl(url); // Update the state with the fetched URL
    };

    fetchCarImage();
  }, [make, model]);

  const carRent = calculateCarRent(mileage, year)
  return (
    <>
      <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl group">
        <div className="w-full flex justify-between items-start gap-2">
          <h2 className="text-[22px] leading-[26px] font-bold capitalize">
            {make} {model}
          </h2>
        </div>

        <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
          <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
          {carRent}
          <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
        </p>

        <div className='relative w-full h-40 my-3 object-contain'>
          {/* {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${make} ${model}`}
              fill
              priority
              className="object-contain"
            />
          ) : (
            <Image
              src={"/hero.png"}
              alt={`${make} ${model}`}
              fill
              priority
              className="object-contain"
            />
          )} */}
          <Image
              src={"/hero.png"}
              alt={`${make} ${model}`}
              fill
              priority
              className="object-contain"
            />
        </div>

        <div className='relative flex w-full mt-2'>
          <div className='flex group-hover:invisible w-full justify-between text-grey'>

            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
              <p className='text-[14px] leading-[17px]'>{transmission}</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tire.svg" width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{year}</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/gas.svg" width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{fuelType}</p>
            </div>
          </div>

          <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
            <CustomButton
              title='View More'
              containerStyles='w-full py-[16px] rounded-full bg-[#2C5AFF]'
              textStyles='text-white text-[14px] leading-[17px] font-bold'
              rightIcon='/right-arrow.svg'
              handleClick={() => setIsOpen(true)}
            />
          </div>
        </div>

        <CardDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
      </div>
    </>
  )
}

export default CarCard
