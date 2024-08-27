import React from 'react';
import 'antd/dist/reset.css'; // Resetting Ant Design's styles to avoid conflicts with Tailwind CSS
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

const CustomBreadcrumb = () => {
  return (
    <>
      {/* First Breadcrumb */}
      <Breadcrumb className='bg-red-400'>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="https://mobiusdtaas.atlassian.net/wiki/spaces/MIA/pages/2365947905/ImpressIO+ngrok+details">
            Section
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Subsection</Breadcrumb.Item>
      </Breadcrumb>

      {/* Second Breadcrumb */}
      <div className="mt-4 bg-neutral-300">
        <Breadcrumb
          items={[
            {
              href: '',
              title: <HomeOutlined />,
            },
            {
              href: '',
              title: (
                <>
                  <UserOutlined />
                  <span>Application List</span>
                </>
              ),
            },
            {
              title: 'Application',
            },
          ]}
        />
      </div>
    </>
  );
};

export default CustomBreadcrumb;
 