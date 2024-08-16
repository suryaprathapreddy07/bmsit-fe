'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Badge, Button, Popover } from 'antd';
import { BellOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';


const Navbar = ({refetch}:{refetch?:boolean}) => {

    const router=useRouter()
    const { data: session } = useSession()
    const [documents, setDocuments] = useState<any>([]);

    const handleLogout = () => {
        const callbackUrl = `${window.location.origin}/auth/login`;
      
        signOut({
          callbackUrl: callbackUrl
        }).then(() => {
          router.push('/auth/login');
        });
      };

    const userPopoverContent = (
        <div className='flex flex-col items-center p-4 px-12 gap-4  '>
          <UserOutlined className='text-[64px]' />
          <p className='text-lg font-medium'>{session?.user?.name}</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      );


      const fetchDocuments = async () => {
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents`, {
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
      }, [session,refetch]);

      const countDocuments = documents?.filter((document:any) => {
        const createdAt = new Date(document.createdAt);
        const currentTime = new Date();
        const timeDifference = currentTime.getTime() - createdAt.getTime();
        const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
        return hoursDifference < 10;
      }).length;


  return (
    <nav className="w-full fixed  top-0 flex z-20 items-center justify-between p-4 bg-gray-800 text-white shadow-lg">
        <div className="logo">
          <a href="/">
            <Image src="/bmslogo.png" alt="Logo" width={300} height={200} className="cursor-pointer" />
          </a>
        </div>
        <div className='flex gap-16'>
        <div className="nav-items flex gap-3">
        <Link href="/home">
  <p className="hover:text-gray-400 transition duration-300 ease-in-out">Home</p>
</Link>
<Link href="/about-us">
  <p className="hover:text-gray-400 transition duration-300 ease-in-out">About Us</p>
</Link>
<Link href="/clubs">
  <p className="hover:text-gray-400 transition duration-300 ease-in-out">Clubs</p>
</Link>
<p>|</p>
<a href="https://www.youtube.com/watch?v=cbgosmlUdT8" target='_blank' className="hover:text-gray-400 transition duration-300 ease-in-out">Video</a>
        </div>
        <div className="user-icon flex gap-6">
          <div onClick={()=>{
            router.push('/clubs')}}> <Badge  count={countDocuments}>
          <BellOutlined  className='!text-xl !text-white cursor-pointer' />
          </Badge></div>
         
       
        <Popover arrow={false} content={userPopoverContent} trigger="click">
            <UserOutlined className='text-xl cursor-pointer' />
          </Popover>
        </div>
        </div>
      </nav>
  )
}

export default Navbar