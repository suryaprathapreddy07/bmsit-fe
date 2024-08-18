'use client';
import { Button } from 'antd';
import Navbar from '../components/Navbar';
import { FacebookOutlined, GlobalOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, YoutubeOutlined } from '@ant-design/icons';

const AboutUsPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div
        className="relative  bg-cover bg-center mt-10 h-[100vh] w-full"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/p/AF1QipMiC_0JwKzrienIsZ9JvfVeeyYLbeZoLlbjO_ZI=s1360-w1360-h1020')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-white text-5xl text-center font-medium">
              ABOUT US
            </h1>
            <h1 className="text-white text-[20px] space-x-1 px-4 font-thin text-center">
              B.M.S. Institute Of Technology (Autonomous) Is A Private
              Engineering College In Yelahanka, Bangalore, India. It Was Started
              In 2002 By Bhusanayana Mukundadas Sreenivasaiah Institute Of
              Technology (BMSIT) And Is Run By The B.M.S. Educational Trust. It
              Is Affiliated With Visvesvaraya Technological University And
              Became Autonomous In 2020.
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className=" bg-black bg-opacity-90 flex items-center justify-center px-10 py-28">
          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-5xl text-center font-medium">
                BMSIT & M
              </h1>
              <h1 className="text-white text-[20px] space-x-1 px-4 font-thin text-center">
                B.M.S. Institute Of Technology (Autonomous) Is A Private
              </h1>
            </div>
            <p className="text-white text-[20px] space-x-1 px-4 font-thin text-center">
              {' '}
              BMSIT&M was founded by B S Narayana, son of educationist B M
              Sreenivasaiah, and is managed by the B M S Educational Trust. It
              is the sister institution of B M S College of Engineering, a
              well-established government-aided engineering college in India.
              B.M.S. Institute of Technology is recognized as a research centre
              by Visvesvaraya Technological University. And Autonomous in 2020
              Initially, starting out with Eight disciplines of engineering, And
              Four Disciplines of Masters Degree. The college was granted the
              status of a Research Institution by the Visvesvaraya Technological
              University in 2005.
            </p>
            <div className="flex space-x-4 justify-center mt-4">
        <Button className='bg-transparent border-none text-white '  href="mailto:principal@bmsit.in" icon={<MailOutlined className='!text-xl !font-medium' />} />
        <Button className='bg-transparent border-none text-white'  href="https://bmsit.ac.in" icon={<GlobalOutlined className='!text-xl !font-medium'  />} />
        <Button className='bg-transparent border-none text-white'  href="https://www.instagram.com/bmsit.official/?__d=1" target="_blank" icon={<InstagramOutlined className='!text-xl !font-medium'  />} />
        <Button className='bg-transparent border-none text-white'  href="https://www.facebook.com/bmsit/" target="_blank" icon={<FacebookOutlined className='!text-xl !font-medium'  />} />
        <Button className='bg-transparent border-none text-white'  href="https://www.youtube.com/@bmsitmedia8115" target="_blank" icon={<YoutubeOutlined className='!text-xl !font-medium'  />} />
        <Button className='bg-transparent border-none text-white'  href="https://www.linkedin.com/school/bms-institute-of-technology-and-management/" target="_blank" icon={<LinkedinOutlined className='!text-xl !font-medium'  />} />
      </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUsPage;
