import React from 'react';
import classNames from 'classnames';
import { Stack, Panel, Button, ButtonGroup, IconButton, Divider } from 'rsuite';
import { Link } from 'react-router-dom';
import boards from '@/data/boards';
import { Icon } from '@rsuite/icons';
import { MdPersonAdd } from 'react-icons/md';

import PageContent from '@/components/PageContent';

const Boards = () => {
  return (
    <PageContent bodyFill>
      <Stack justifyContent="space-between" style={{ marginBottom: 20 }}>
        <ButtonGroup>
          <Button active>All</Button>
          <Button>Active</Button>
          <Button>Disabled</Button>
        </ButtonGroup>

        <IconButton icon={<Icon as={MdPersonAdd} />} href="/members">
          Invite Workspace members
        </IconButton>
      </Stack>

      <Divider />

      <Stack spacing={20} wrap>
        {boards.map(board => (
          <Panel key={board.title} className={classNames('board-box', board.bgColor)}>
            <Link to={board.to}>
              <Stack spacing={10} justifyContent="space-between">
                {board.icon}
                <div className="title">{board.title}</div>
              </Stack>
            </Link>
          </Panel>
        ))}

        <Panel className="board-box board-new">
          <Link to="/boards/new">
            <Stack spacing={10} justifyContent="center" alignItems="center">
              <div className="title">Create new board</div>
            </Stack>
          </Link>
        </Panel>
      </Stack>
    </PageContent>
  );
};

export default Boards;
