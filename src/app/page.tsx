'use client';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Popover, Button, Menu, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import Clubs from './components/ClubsList.tsx/Clubs';

export default function Home() {

  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = () => {
    const callbackUrl = `${window.location.origin}/auth/login`;
  
    signOut({
      callbackUrl: callbackUrl
    }).then(() => {
      router.push('/auth/login');
    });
  };

  const userPopoverContent = (
    <div className='flex flex-col items-center p-4 px-8 gap-4  '>
      <UserOutlined className='text-[64px]' />
      <p className='text-lg font-medium'>{session?.user?.name}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );

  const [documents, setDocuments] = useState([]);
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
  }, [session]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100">
      <nav className="w-full flex items-center justify-between p-4 bg-gray-800 text-white shadow-lg">
        <div className="logo">
          <a href="/">
            <Image src="/bmslogo.png" alt="Logo" width={300} height={200} className="cursor-pointer" />
          </a>
        </div>
        <div className='flex gap-16'>
        <div className="nav-items flex gap-3">
          <a href="/" className="hover:text-gray-400 transition duration-300 ease-in-out">Announcements</a> 
          <p>|</p>
          <a href="https://www.youtube.com/watch?v=cbgosmlUdT8" target='_blank' className="hover:text-gray-400 transition duration-300 ease-in-out">Video</a>
        </div>
        <div className="user-icon">
        <Popover arrow={false} content={userPopoverContent} trigger="click">
            <UserOutlined className='text-2xl cursor-pointer' />
          </Popover>
        </div>
        </div>
      </nav>
      <div className="w-full border p-8 mt-4 bg-white shadow-md rounded-lg">
        <Clubs fetchDocuments={fetchDocuments} items={documents} />
      </div>
    </main>
  );
}
