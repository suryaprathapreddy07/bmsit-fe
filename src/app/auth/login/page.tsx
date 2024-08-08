'use client';

import Clubs from '@/app/components/ClubsList.tsx/Clubs';
import { Button, Form, FormProps, Input } from 'antd';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


type FieldType = {
  email: string;
  password: string;
};



const Login = () => {
    const router=useRouter()


   

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        const result = await signIn('credentials', {
          redirect: false,
          ...values,
        });
      
        if (result && result.error) {
          console.error(result.error);
        } else {
          // Redirect to home page or dashboard
          router.push('/');
        }
      };
    
    return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-center">Login</h2>
      <Form

        className="space-y-6"
        onFinish={onFinish}
        autoComplete="off"
      >
    
        <Form.Item<FieldType>
            
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input  placeholder="Email" className="w-full px-3 py-2 border rounded" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" className="w-full px-3 py-2 border rounded" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full py-2 bg-blue-500 text-white rounded">
            Submit
          </Button>
        </Form.Item>
      </Form>
      <div className="text-center">
        <span>Don't have an account? </span>
        <Link href="/auth/signup">
          <p className="text-blue-500">Sign Up</p>
        </Link>
      </div>
    </div>
  </div>
);}

export default Login;