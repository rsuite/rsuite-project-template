import React from 'react';
import { Panel, Breadcrumb } from 'rsuite';
import DataTable from './DataTable';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Members</h3>{' '}
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Members</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <DataTable />
    </Panel>
  );
};

export default Page;
