import React from 'react';
import { Card as AntCard, Button } from 'antd';
import { useRouter } from 'next/navigation';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

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
  const router = useRouter();

  const handleLearnMore = () => {
    router.push(`/clubs/${_id}`);

};
console.log(name)
  return (
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
  );
};

export default Card;