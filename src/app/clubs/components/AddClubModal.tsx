'use client';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { Button, Form, Input, message, Modal } from 'antd';

const AddClubModal = ({fetchClubs,onClose,open}:{fetchClubs:()=>void,onClose:()=>void,open:boolean}) => {
    const {data:session}=useSession()
   
    const [form] = Form.useForm();
    const handleUpload = async (values: any) => {

        console.log(values)
        
    
        try {
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/clubs`, {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${session?.accessToken}`,
              'content-type': 'application/json',
              // Set the authorization token
            },

            body: JSON.stringify(values),
          });
    
          if (response.ok) {
            message.success('Club added successfully!');
           onClose()
            form.resetFields();
            fetchClubs();
          } else {
            message.error('Upload failed.');
          }
        } catch (error) {
          message.error('Upload failed.');
        }
      };


    
    
     
  return (
    <div> <Modal
    title="Add Club"
    open={open}
    onCancel={onClose}
    footer={null}
  >
    <Form form={form} onFinish={handleUpload}>
      <Form.Item
      wrapperCol={{ span: 24 }}
      labelCol={{ span: 24 }}
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
         wrapperCol={{ span: 24 }}
         labelCol={{ span: 24 }}
        name="description"
        label="Description"
        rules={[{ required: true, message: 'Please input the description!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
         wrapperCol={{ span: 24 }}
         labelCol={{ span: 24 }}
        name="image"
        label="Image"
        rules={[{ required: true, message: 'Please input the image url!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
         wrapperCol={{ span: 24 }}
         labelCol={{ span: 24 }}
        name="instagram"
        label="Instagram"
        rules={[{  message: 'Please input the inatagram url!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
         wrapperCol={{ span: 24 }}
         labelCol={{ span: 24 }}
        name="linkedin"
        label="Linked In"
        rules={[{ message: 'Please input the linkedin url!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
         wrapperCol={{ span: 24 }}
         labelCol={{ span: 24 }}
        name="facebook"
        label="Facebook"
        rules={[{  message: 'Please input the facebook url!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  </Modal></div>
  )
}

export default AddClubModal