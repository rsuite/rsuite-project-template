import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import {
  Container,
  Sidebar,
  Sidenav,
  Content,
  Nav,
  DOMHelper,
  SelectPicker,
  Stack,
  IconButton
} from 'rsuite';
import { Outlet } from 'react-router-dom';
import NavToggle from './NavToggle';
import Header from '../Header';
import NavLink from '../NavLink';
import Brand from '../Brand';
import { Icon } from '@rsuite/icons';
import { VscCalendar } from 'react-icons/vsc';
import { BsKanbanFill } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import { MdWorkspaces } from 'react-icons/md';
import PlusIcon from '@rsuite/icons/plus';
import boards from '@/data/boards';

const { getHeight, on } = DOMHelper;

const NavItem = props => {
  const { title, eventKey, ...rest } = props;
  return (
    <Nav.Item eventKey={eventKey} as={NavLink} {...rest}>
      {title}
    </Nav.Item>
  );
};

export interface NavItemData {
  eventKey: string;
  title: string;
  icon?: any;
  to?: string;
  target?: string;
  children?: NavItemData[];
}

const projects = [
  { label: 'R&D Department', value: 1 },
  { label: 'User Experience Center', value: 2 },
  { label: 'Infrastructure', value: 3 },
  { label: 'HYPERS', value: 4 }
];

const Frame = () => {
  const [expand, setExpand] = useState(true);
  const [windowHeight, setWindowHeight] = useState(getHeight(window));

  useEffect(() => {
    setWindowHeight(getHeight(window));
    const resizeListenner = on(window, 'resize', () => setWindowHeight(getHeight(window)));

    return () => {
      resizeListenner.off();
    };
  }, []);

  const containerClasses = classNames('page-container', {
    'container-full': !expand
  });

  const navBodyStyle: React.CSSProperties = expand
    ? { height: windowHeight - 112, overflow: 'auto' }
    : {};

  return (
    <Container className="frame">
      <Sidebar
        style={{ display: 'flex', flexDirection: 'column' }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav.Header>
          <Brand showText={expand} />
        </Sidenav.Header>
        <Sidenav expanded={expand} appearance="subtle">
          <Sidenav.Body style={navBodyStyle}>
            <div style={{ margin: 20 }} className="collapse-hide">
              <SelectPicker
                defaultValue={4}
                data={projects}
                searchable={false}
                cleanable={false}
                block
                size="lg"
                renderValue={(_value, item) => (
                  <>
                    <Icon as={MdWorkspaces} style={{ fontSize: '1.2em' }} /> {item?.['label']}
                  </>
                )}
              />
            </div>

            <Nav>
              <NavItem
                title="Boards"
                to="boards"
                eventKey="boards"
                icon={<Icon as={BsKanbanFill} />}
              />

              <NavItem
                title="Members"
                to="members"
                eventKey="members"
                icon={<Icon as={FaUsers} />}
              />

              <NavItem
                title="Calendar"
                to="calendar"
                eventKey="calendar"
                icon={<Icon as={VscCalendar} />}
              />

              <Nav.Item panel className="collapse-hide">
                <Stack justifyContent="space-between">
                  Yous boards
                  <IconButton icon={<PlusIcon />} size="xs" appearance="subtle" />
                </Stack>
              </Nav.Item>

              {boards.map((board, index) => (
                <NavItem icon={board.icon} to={board.to} key={index} title={board.title} />
              ))}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Sidebar>

      <Container className={containerClasses}>
        <Header />
        <Content>
          <Outlet />
        </Content>
      </Container>
    </Container>
  );
};

export default Frame;
