import React, { useEffect, useState } from 'react';
import { Card as AntCard, Badge, Button } from 'antd';
import { useRouter } from 'next/navigation';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useSession } from 'next-auth/react';

interface CardProps {
  _id: string;
  image: string
  name: string;
  description: string;
  Instagram: string;
  Facebook: string;
  LinkedIn: string;
}

const Card = ({ _id, image, name, description, Instagram, Facebook, LinkedIn }:CardProps) => {
  const {data:session}=useSession()
  const router = useRouter();
  const [documents,setDocuments]=useState([])

  const handleLearnMore = () => {
    router.push(`/clubs/${_id}`);

    


};


const fetchDocuments = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/clubs/${_id}`, {
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


const countDocuments = documents?.filter((document:any) => {
  const createdAt = new Date(document.createdAt);
  const currentTime = new Date();
  const timeDifference = currentTime.getTime() - createdAt.getTime();
  const hoursDifference = Math.floor(timeDifference / (1000 * 60 * 60));
  return hoursDifference < 10;
}).length;



return (
    <div className='relative'>
      <Badge count={countDocuments} className="absolute z-10 top-3 right-3" />
      <AntCard
    hoverable
    cover={<img alt={name} src={image} className="h-48 w-full object-cover" />}
    className="m-4"
  >
    <AntCard.Meta title={name} description={description} />
    <div className="mt-4">
      <a href={Instagram} target="_blank" rel="noopener noreferrer" className="mr-4 text-lg text-black"><InstagramOutlined /></a>
      <a href={Facebook} target="_blank" rel="noopener noreferrer" className="mr-4 text-lg text-black"><FacebookOutlined /></a>
      <a href={LinkedIn} target="_blank" rel="noopener noreferrer" className="text-black text-lg"><LinkedinOutlined /></a>
    </div>
    <Button type="primary" className="mt-4" onClick={handleLearnMore}>Learn More</Button>
  </AntCard>
    </div>
  
);

  
};

export default Card;