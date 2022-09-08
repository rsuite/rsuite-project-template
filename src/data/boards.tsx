import React from 'react';
import { faker } from '@faker-js/faker/locale/en';
import uniqueId from 'lodash/uniqueId';
import { mockUsers } from './mock';
import { Icon } from '@rsuite/icons';
import { FaVuejs, FaCss3Alt, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';

export const creatCard = (progress?: boolean) => {
  return {
    id: uniqueId(),
    content: faker.lorem.paragraph(1),
    image: Math.random() > 0.5 ? faker.image.technics(260, 100, true) : null,
    progress: progress ? Math.floor(Math.random() * 100) : null,
    users: mockUsers(Math.floor(Math.random() * 5))
  };
};

export const mockCards = (length: number, progress?: boolean) =>
  Array.from({ length }, () => creatCard(progress));

const boards = [
  {
    id: 1,
    title: 'JavaScript',
    icon: <Icon as={FaJsSquare} />,
    to: '/boards/1',
    bgColor: 'bg-gradient-orange',
    data: [
      {
        title: 'Framework',
        cards: mockCards(10)
      },
      {
        title: 'Tools',
        cards: mockCards(10, true)
      },
      {
        title: 'Services',
        cards: mockCards(10)
      }
    ]
  },
  {
    id: 2,
    title: 'CSS',
    icon: <Icon as={FaCss3Alt} />,
    to: '/boards/2',
    bgColor: 'bg-gradient-blue',
    data: [
      {
        title: 'Design',
        cards: mockCards(10)
      },
      {
        title: 'Development',
        cards: mockCards(10, true)
      },
      {
        title: 'Test',
        cards: mockCards(10, true)
      },
      {
        title: 'Examples',
        cards: mockCards(10)
      }
    ]
  },
  {
    id: 3,
    title: 'HTML',
    icon: <Icon as={FaHtml5} />,
    to: '/boards/3',
    bgColor: 'bg-gradient-red',
    data: [
      {
        title: 'Tutorials',
        cards: mockCards(10)
      },
      {
        title: 'Examples',
        cards: mockCards(10, true)
      },
      {
        title: 'Documents',
        cards: mockCards(10)
      }
    ]
  },
  {
    id: 4,
    title: 'React',
    icon: <Icon as={FaReact} />,
    to: '/boards/4',
    bgColor: 'bg-gradient-mirage',
    data: [
      {
        title: 'Tutorials',
        cards: mockCards(10)
      },
      {
        title: 'Examples',
        cards: mockCards(10, true)
      },
      {
        title: 'Documents',
        cards: mockCards(10)
      }
    ]
  },
  {
    id: 5,
    title: 'Vue.js',
    icon: <Icon as={FaVuejs} />,
    to: '/boards/5',
    bgColor: 'bg-gradient-green',
    data: [
      {
        title: 'Tutorials',
        cards: mockCards(10)
      },
      {
        title: 'Examples',
        cards: mockCards(10, true)
      },
      {
        title: 'Documents',
        cards: mockCards(10)
      }
    ]
  }
];

export type CardType = ReturnType<typeof creatCard>;
export type CardList = typeof boards[0]['data'];
export type BoardType = typeof boards[0];

export default boards;
