'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useSession } from 'next-auth/react';
import Instagram from 'next-auth/providers/instagram';
import ClubCard from './components/ClubCard';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import AddClubModal from './components/AddClubModal';

const ClubsPage = () => {
    const { data: session } = useSession();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [clubs, setClubs] = useState([]);
    const fetchClubs = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clubs`, {
          headers: {
            'Authorization': `Bearer ${session?.accessToken}`
          }
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setClubs(data?.data);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };
  
    useEffect(() => {
        fetchClubs();
    }, [session]);



  return (
    <div className='flex flex-col'>
<Navbar/>
<div
        className="fixed top-0 inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/p/AF1QipMiC_0JwKzrienIsZ9JvfVeeyYLbeZoLlbjO_ZI=s1360-w1360-h1020')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
         
          
        </div>
      </div>
<h2 className='text-[36px] z-10 text-white text-center font-medium mt-24'>OUR CLUBS</h2>
<div className='w-full flex justify-end p-4 pr-8'>
{session?.user?.role === 'admin' && <Button type='primary' icon={<UploadOutlined />} onClick={()=>{setIsModalVisible(true)}}>Add Club</Button> }
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {clubs?.map((club: any) => (
        <ClubCard
          key={club._id}
          _id={club._id}
          image={club.image}
          name={club.name}
          description={club.description}
          Instagram={club.Instagram}
          Facebook={club.Facebook}
          LinkedIn={club.LinkedIn}
        />
      ))}
    </div>

    <AddClubModal fetchClubs={fetchClubs} open={isModalVisible} onClose={()=>{setIsModalVisible(false)}}/>

    </div>

   

  )
}

export default ClubsPage