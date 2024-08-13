'use client';
import Navbar from '../components/Navbar';

const AboutUsPage = () => {
  return (
    <div className="flex flex-col">
      <Navbar  />
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/p/AF1QipMiC_0JwKzrienIsZ9JvfVeeyYLbeZoLlbjO_ZI=s1360-w1360-h1020')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
            <div className='flex flex-col gap-8'>
            <h1 className="text-white text-5xl text-center font-medium">ABOUT US</h1>
            <h1 className="text-white text-[20px] space-x-1 px-4 font-thin text-center">B.M.S. Institute Of Technology (Autonomous) Is A Private Engineering College In Yelahanka, Bangalore, India.
            It Was Started In 2002 By Bhusanayana Mukundadas Sreenivasaiah Institute Of Technology (BMSIT) And Is Run By The B.M.S. Educational Trust. It Is Affiliated With Visvesvaraya Technological University And Became Autonomous In 2020.</h1>
            
            </div>
         
          
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
