"use client"
import Image from 'next/image'
import React from 'react'

const CustomButton = ({ title, containerStyles, handleClick, btnType, textStyles, rightIcon }) => {
    return (
        <>
            <button
                type={btnType || "button"}
                disabled={false}
                className={`custom-btn flex ${containerStyles}`}
                onClick={handleClick}
            >
                <span className={`flex-1  ${textStyles}`}>{title} </span>
                {rightIcon && <div className='relative w-6 h-6 mr-8'> <Image src={rightIcon} alt='right icon' fill className='object-contain' />   </div>}
            </button>
        </>
    )
}

export default CustomButton
