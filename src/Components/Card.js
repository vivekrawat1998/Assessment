import React from 'react'
import { FaRegUser } from "react-icons/fa"; 
import { TbGenderFemale } from "react-icons/tb"; 
import { FaPhone } from "react-icons/fa";
const Card = ({data, index}) => {
  return (
    <div>
    <div key={index} className='align-center translate-x-96 mt-40'>
      <div className='shadow-md shadow-black rounded-xl w-[660px] h-[374px] grid grid-flow-col grid-cols-2 items-center'>
        <div className='rounded-md object-contain ml-10 mr-10'>
          <img className='w-[238px] h-[238px] rounded-md' src={data.picture.large} alt='' />
        </div>
        <div className='mr-10 text-xl font-semibold leading-5'>
          <div className='flex items-center gap-5'>
            <FaRegUser />
            <p>{data.name.first} {data.name.last}</p>
          </div>
          <br />
          <div className='flex items-center gap-5'>
            <TbGenderFemale />
            <p>{data.gender}</p>
          </div>
          <br />
          <div className='flex items-center gap-5'>
            <FaPhone />
            <p>{data.phone}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Card 