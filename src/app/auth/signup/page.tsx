'use client';

// Replace with your actual sign-up function
import React from 'react';
import { Button, Form, Input, DatePicker, FormProps } from 'antd';
import Link from 'next/link';

type FieldType = {
  name: string;
  email: string;
  password: string;
  dob: string;
};


import { message } from 'antd';
import { useRouter } from 'next/navigation';


const Signup = () => {
    
    const router=useRouter()

    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
      try {
        const res = await fetch(`${process.env.API_URL}/users/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...values ,role:'user' }),
        });
    
        if (res.ok) {
          message.success('Signup successful!');
          router.push('/auth/login');
        } else {
          const errorData = await res.json();
          message.error(`Signup failed: ${errorData.message}`);
        }
      } catch (error) {
        message.error('Signup failed: An unexpected error occurred.');
      }
      console.log(values);
    };

    return (
  <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold text-center">Sign Up</h2>
      <Form
        className="space-y-6"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="name"
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input placeholder="Name" className="w-full px-3 py-2 border rounded" />
        </Form.Item>

        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" className="w-full px-3 py-2 border rounded" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" className="w-full px-3 py-2 border rounded" />
        </Form.Item>

        <Form.Item<FieldType>
          name="dob"
          rules={[{ required: true, message: 'Please select your date of birth!' }]}
        >
          <DatePicker className="w-full px-3 py-2 border rounded" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full py-2 bg-blue-500 text-white rounded">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
      <div className="text-center">
        <span>Already have an account? </span>
        <Link href="/auth/login">
          <p className="text-blue-500">Login</p>
        </Link>
      </div>
    </div>
  </div>
);}

export default Signup;