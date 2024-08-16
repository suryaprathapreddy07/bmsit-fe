'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import { Card, Typography } from 'antd'
const { Title, Paragraph } = Typography

const ClubReasons = () => {
  return (
    <div className='flex flex-col gap-2'>
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
<h2 className='text-[36px] z-10 text-white text-center font-medium mt-24'>REASONS TO JOIN CLUBS</h2>
<div>
<div className="container mx-auto p-4">
            <Card className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg border-none">
              
              <Paragraph>
                Studying in university can be challenging. With an enormous amount of classes, seminars, lecture tutorials and exams life can be harsh and lonely. You may find yourself away from the community, friends and social groups.
              </Paragraph>
              <Paragraph>
                These feelings can overwhelm you and your struggle in making new friends. However, if you join a club, the process of making friends is not something that difficult.
              </Paragraph>
              <Title level={4}>YOU WILL LEARN HOW TO WORK WITH A TEAM.</Title>
              <Paragraph>
                Knowing how to work well with a team is an essential skill for any career. Being in a student organization teaches you how to do this by putting you in situations where you are required to take advice from others, as well as give your own.
              </Paragraph>
              <Title level={4}>YOU WILL GET NETWORKING OPPORTUNITIES.</Title>
              <Paragraph>
                Another great benefit of clubs is that you get the opportunity to network. Meeting new students, making connections, and building relationships will all help down the line when you are looking for a job. Because you are all part of the same organization, you know the people you are meeting have at least a few of the same interests as you, so their connections will be valuable. Many of our organizations are professionally-focused and host several events with alumni or panel discussions with local professionals. These events are excellent opportunities for the student leaders, and can often lead to potential internship or employment opportunities in the future!
              </Paragraph>
              <Title level={4}>YOU WILL GAIN PRACTICAL EXPERIENCE IN A SAFE ENVIRONMENT.</Title>
              <Paragraph>
                Participating in a club or an organization based around your particular area of study will give you practical experience within that field. And what is great about student clubs is that while you learn to use skills like project management, event planning, and fundraising, you get to test them out in a safe environment where making mistakes is OK. Everyone is there to support you, so there is no fear in messing up or being wrong.
              </Paragraph>
              <Title level={4}>YOU WILL BE ABLE TO USE THE SKILLS YOU HAVE LEARNED IN CLASS.</Title>
              <Paragraph>
                As business students, you are able to apply classroom experience in your student organizations, and also develop leadership and life skills that help you become more effective in classroom team projects. Being part of an organization allows you to put all of those things you have been learning in class to the test in real-world situations. You will get to learn what works and what does not, and you will be able to take that knowledge back to the classroom, and then, of course, along with you in a future career.
              </Paragraph>
              <Title level={4}>YOU WILL GET A BREAK FROM YOUR STUDIES.</Title>
              <Paragraph>
                Concentrating on schoolwork is obviously important during a graduate program, but giving your mind a break is necessary (and beneficial). While taking part in club activities, you will be able to socialize with like-minded individuals and actually learn as much from them as you would your schoolwork.
              </Paragraph>
              <Title level={4}>YOU WILL EXPAND YOUR RESUME.</Title>
              <Paragraph>
                There is no arguing that organizations and activities look good on a resume. Showing employers that you participated in, or (better yet) lead, a student organization, they will know that you are hard working and can handle multiple responsibilities.
              </Paragraph>
              <Title level={4}>YOU WILL BE ABLE TO GIVE BACK TO THE COMMUNITY.</Title>
              <Paragraph>
                Many student organizations provide opportunities to give back to the community, whether through acts of service, sponsoring events, or hosting charity drives. Not only is this good for society, but it will teach you how a future business can give back, too. Giving back to the community is the most rewarding part of being involved. The most rewarding aspect of being involved in a student organization is that you get to give back to the student community through fun events, giving them networking opportunities and offering them a chance to have fun with their peers. This adds an immense value to the learning experience.
              </Paragraph>
              <Title level={4}>YOU WILL HAVE FUN!</Title>
              <Paragraph>
                Another simple reason to join a student organization is to have fun. Meeting new people, making new friends, and participating in activities will help you make the most of your graduate school experience.
              </Paragraph>
            </Card>
          </div>
</div>
    </div>
  )
}

export default ClubReasons