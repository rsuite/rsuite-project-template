import React, { useRef } from 'react';
import {
  Dropdown,
  Popover,
  Whisper,
  WhisperInstance,
  Stack,
  Badge,
  Avatar,
  IconButton,
  List,
  Button,
  Input,
  InputGroup
} from 'rsuite';
import { Icon } from '@rsuite/icons';
import NoticeIcon from '@rsuite/icons/Notice';
import HelpOutlineIcon from '@rsuite/icons/HelpOutline';
import GithubIcon from '@rsuite/icons/legacy/Github';
import HeartIcon from '@rsuite/icons/legacy/HeartO';
import SearchIcon from '@rsuite/icons/Search';
import { MdOutlineNightlight, MdOutlineLightMode } from 'react-icons/md';

const renderAdminSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const handleSelect = eventKey => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover ref={ref} className={className} style={{ left, top }} full>
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <p>Signed in as</p>
          <strong>Administrator</strong>
        </Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Set status</Dropdown.Item>
        <Dropdown.Item>Profile & account</Dropdown.Item>
        <Dropdown.Item>Feedback</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Sign out</Dropdown.Item>
        <Dropdown.Item
          icon={<HelpOutlineIcon />}
          href="https://rsuitejs.com"
          target="_blank"
          as="a"
        >
          Help{' '}
        </Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const renderNoticeSpeaker = ({ onClose, left, top, className }: any, ref) => {
  const notifications = [
    [
      '7 hours ago',
      'The charts of the dashboard have been fully upgraded and are more visually pleasing.'
    ],
    [
      '13 hours ago',
      'The function of virtualizing large lists has been added, and the style of the list can be customized as required.'
    ],
    ['2 days ago', 'Upgraded React 18 and Webpack 5.'],
    [
      '3 days ago',
      'Upgraded React Suite 5 to support TypeScript, which is more concise and efficient.'
    ]
  ];

  return (
    <Popover ref={ref} className={className} style={{ left, top, width: 300 }} title="Last updates">
      <List>
        {notifications.map((item, index) => {
          const [time, content] = item;
          return (
            <List.Item key={index}>
              <Stack spacing={4}>
                <Badge /> <span style={{ color: '#57606a' }}>{time}</span>
              </Stack>

              <p>{content}</p>
            </List.Item>
          );
        })}
      </List>
      <div style={{ textAlign: 'center', marginTop: 20 }}>
        <Button onClick={onClose}>More notifications</Button>
      </div>
    </Popover>
  );
};

type ThemeType = 'dark' | 'light' | 'high-contrast';
interface HeaderProps {
  theme: ThemeType;
  onChangeTheme: (theme: ThemeType) => void;
}

const Header = (props: HeaderProps) => {
  const { theme, onChangeTheme } = props;
  const trigger = useRef<WhisperInstance>(null);

  return (
    <Stack className="header" spacing={8} justifyContent="space-between">
      <InputGroup inside size="lg" className="search-input">
        <InputGroup.Button>
          <SearchIcon />
        </InputGroup.Button>
        <Input placeholder="Search " />
      </InputGroup>

      <Stack spacing={8}>
        <IconButton
          icon={<HeartIcon style={{ fontSize: 20 }} color="red" />}
          href="https://opencollective.com/rsuite"
          target="_blank"
        />
        <IconButton
          icon={<GithubIcon style={{ fontSize: 20 }} />}
          href="https://github.com/rsuite/rsuite-project-template"
          target="_blank"
        />

        <IconButton
          icon={
            <Icon
              as={theme === 'light' ? MdOutlineNightlight : MdOutlineLightMode}
              style={{ fontSize: 20 }}
            />
          }
          onClick={() => onChangeTheme(theme === 'dark' ? 'light' : 'dark')}
        />

        <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderNoticeSpeaker}>
          <IconButton
            icon={
              <Badge content={5}>
                <NoticeIcon style={{ fontSize: 20 }} />
              </Badge>
            }
          />
        </Whisper>

        <Whisper placement="bottomEnd" trigger="click" ref={trigger} speaker={renderAdminSpeaker}>
          <Avatar
            size="sm"
            circle
            src="https://avatars.githubusercontent.com/u/1203827"
            alt="@simonguo"
            style={{ marginLeft: 8 }}
          />
        </Whisper>
      </Stack>
    </Stack>
  );
};

export default Header;
