'use client'

import ClubDocuments from '@/app/components/ClubsList.tsx/Clubs'
import Navbar from '@/app/components/Navbar'
import { Badge } from 'antd'
import { useSession } from 'next-auth/react'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const ClubDetail = () => {
    const {data:session}=useSession()
    const {id}=useParams<{id:string}>()
    const [documents, setDocuments] = useState([]);
    const [refetch, setRefetch] = useState(false);
    const fetchDocuments = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/clubs/${id}`, {
          headers: {
            'Authorization': `Bearer ${session?.accessToken}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDocuments(data?.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };
  
    useEffect(() => {
        fetchDocuments();
    }, [session,id]);
    
    const countDocuments = documents.filter((document:any) => {
      const createdAt = new Date(document.createdAt);
      const currentTime = new Date();
      const timeDifference = currentTime.getTime() - createdAt.getTime();
      const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
      return hoursDifference < 10;
    }).length;



  return (
    <div className='flex flex-col gap-4'>
        <Navbar refetch={refetch}  />
        <div className='p-4 mt-20'>
            <p className='text-[36px] text-medium'>Announcements</p>
        <ClubDocuments setRefetch={setRefetch} clubId={id} fetchDocuments={fetchDocuments} items={documents}/>
        </div>
        
    </div>
  )
}

export default ClubDetail