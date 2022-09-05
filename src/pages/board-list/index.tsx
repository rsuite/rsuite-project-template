import React from 'react';
import { Panel, Breadcrumb } from 'rsuite';
import Boards from './Boards';

const Page = () => {
  return (
    <Panel
      header={
        <>
          <h3 className="title">Boards</h3>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Boards</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <Boards />
    </Panel>
  );
};

export default Page;
