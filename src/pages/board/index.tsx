import React from 'react';
import { Breadcrumb } from 'rsuite';
import Board from './Board';
import NavLink from '@/components/NavLink';
import PageContent from '@/components/PageContent';
import { useParams } from 'react-router-dom';
import boards, { CardList } from '@/data/boards';

const Page = () => {
  const { id } = useParams();
  const board = boards.find(item => item.id === (id ? parseInt(id, 10) : 1));

  return (
    <PageContent
      className="board-wrapper"
      showCopyright={false}
      header={
        <>
          <h3 className="title">{board?.title}</h3>
          <Breadcrumb>
            <Breadcrumb.Item to="/" as={NavLink}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item to="/boards" as={NavLink}>
              Boards
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{board?.title}</Breadcrumb.Item>
          </Breadcrumb>
        </>
      }
    >
      <Board data={board?.data as CardList} />
    </PageContent>
  );
};

export default Page;
