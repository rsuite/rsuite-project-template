import React from 'react';
import ErrorPage from '@/components/ErrorPage';
import { IconButton } from 'rsuite';
import ArrowLeftLine from '@rsuite/icons/ArrowLeftLine';

export default () => (
  <ErrorPage code={500}>
    <p className="error-page-title">Oops… You just found an error page</p>
    <p className="error-page-subtitle text-muted ">
      We are sorry but our server encountered an internal error
    </p>
    <IconButton icon={<ArrowLeftLine />} appearance="primary" href="/">
      Take me home
    </IconButton>
  </ErrorPage>
);
