import React from 'react';
import { Panel, PanelProps } from 'rsuite';
import Copyright from '@/components/Copyright';

interface PageContentProps extends PanelProps {
  showCopyright?: boolean;
}

const PageContent = (props: PageContentProps) => {
  const { showCopyright = true, ...panelProps } = props;
  return (
    <>
      <Panel className="page-content" {...panelProps} />
      {showCopyright && <Copyright />}
    </>
  );
};

export default PageContent;
