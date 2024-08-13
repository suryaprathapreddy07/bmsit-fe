'use client'

import ClubDocuments from '@/app/components/ClubsList.tsx/Clubs'
import Navbar from '@/app/components/Navbar'
import { useSession } from 'next-auth/react'
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const ClubDetail = () => {
    const {data:session}=useSession()
    const {id}=useParams<{id:string}>()
    const [documents, setDocuments] = useState([]);
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
    
    console.log(documents)
  return (
    <div className='flex flex-col gap-4'>
        <Navbar/>
        <div className='p-4 mt-20'>
            <p className='text-[36px] text-medium'>Announcements</p>
        <ClubDocuments clubId={id} fetchDocuments={fetchDocuments} items={documents}/>
        </div>
        
    </div>
  )
}

export default ClubDetail