import React, { useState } from 'react';
import { Button, Form, Input, Modal, Table, Upload, message } from 'antd';
import { DownloadOutlined, EyeOutlined, UploadOutlined } from '@ant-design/icons';
import { useSession } from 'next-auth/react';
import dayjs from 'dayjs';




interface Item {
  doc_user_id: {
    name: string;
    email: string;
  };
  name: string;
  description: string;
  createdDate: string;
  file: {
    type: string;
    data: number[];
  };
}

interface Props {
  items: Item[];
  fetchDocuments: () => void;
  clubId?: string;
  setRefetch?: (value: boolean) => void;
}

const ClubDocuments: React.FC<Props> = ({ items,fetchDocuments,clubId,setRefetch }) => {
  const { data: session } = useSession();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleDownload = (item: Item) => {
    const blob = new Blob([new Uint8Array(item.file.data)], { type: item.file.type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${item.name}.pdf`; // Assuming the file is a PDF
    a.click();
    URL.revokeObjectURL(url);
  };


  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Created Date',
      dataIndex: 'createdAt',
      key: 'createdDate',
      render: (_: any, item: Item) => (
        <div className="flex space-x-4">
          {dayjs(item.createdDate).format('DD/MM/YYYY')}
        </div>
      ),
    },
    {
      title: 'Uploaded By',
      key: 'uploadedBy',
      render: (_: any, item: Item) => (
        <div className="flex space-x-4">
          {item?.doc_user_id?.name}
        </div>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, item: Item) => (
        <div className="flex space-x-4">
          <Button icon={<DownloadOutlined />} onClick={() => handleDownload(item)}>Download</Button>
        </div>
      ),
    },
  ];

  const handleUpload = async (values: any) => {
    const formData = new FormData();
    formData.append('file', values.file[0].originFileObj);
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('doc_user_id', session?.user?.id as string);
    formData.append('club_id', clubId as string);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/documents/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session?.accessToken}`, // Set the authorization token
        },
        body: formData,
      });

      if (response.ok) {
        message.success('Upload successful!');
        setIsModalVisible(false);
        form.resetFields();
        fetchDocuments();
        if(setRefetch)
        setRefetch(true)
      } else {
        message.error('Upload failed.');
      }
    } catch (error) {
      message.error('Upload failed.');
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between'>
        <p className='text-xl font-bold'></p>
        {session?.user?.role === 'admin' && <Button type='primary' icon={<UploadOutlined />} onClick={showModal}>Upload</Button> }
       
        <Modal
          title="Upload File"
          open={isModalVisible}
          onCancel={handleCancel}
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
              name="file"
              label="File"
              valuePropName="fileList"
              getValueFromEvent={(e) => e?.fileList}
              rules={[{ required: true, message: 'Please upload a file!' }]}
            >
              <Upload accept='.pdf, .txt' beforeUpload={() => false} listType="text">
                <Button icon={<UploadOutlined />}>Select File</Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">Upload</Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <Table
        className='w-full'
        bordered
        columns={columns}
        dataSource={items}
        rowKey={(record) => record.doc_user_id.email}
        pagination={false}
      />
    </div>
  );
};

export default ClubDocuments;
