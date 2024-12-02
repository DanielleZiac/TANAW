"use client";

import React from "react";
import { getButtonStyles } from "../styles/buttonStyles";
import FloatingDropdown from '../components/layouts/FloatingDropDown';
import { useRouter } from 'next/navigation'


interface DataProps {
    data: Array<{
        campus: string,
        institution: string,
        institution_id: string,
        institution_logo: string
    }> | undefined
}

const LeaderboardHome: React.FC<DataProps> = ({data}) => {
    const router = useRouter();

    const clicked = (institution_id: string) => {
        console.log(institution_id)
        router.push(`/dashboard/leaderboard/${institution_id}`)
    }


  return (
    <div className="min-h-screen lg:ml-96 mt-10 pt-20 flex flex-col w-screen lg:w-[70vw] items-center bg-transparent py-6 px-4">
      {data?.map((institution, index) => (
        <div key={index} id={institution.institution_id} onClick={() => clicked(institution.institution_id)}>
            <p>{institution.institution}</p>
            <img src={institution.institution_logo}/>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardHome;
