import React from 'react';
import { Panel, PanelProps } from 'rsuite';
import Copyright from '@/components/Copyright';

const PageContent = (props: PanelProps) => {
  return (
    <>
      <Panel style={{ background: '#fff' }} {...props} />
      <Copyright />
    </>
  );
};

export default PageContent;
