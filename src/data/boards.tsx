import React from 'react';
import LogoAdsIcon from '@rsuite/icons/legacy/LogoAds';
import LogoAnalyticsIcon from '@rsuite/icons/legacy/LogoAnalytics';
import LogoShopIcon from '@rsuite/icons/legacy/LogoShop';
import { faker } from '@faker-js/faker/locale/en';
import uniqueId from 'lodash/uniqueId';
import { mockUsers } from './mock';

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
    title: 'Advertising',
    icon: <LogoAdsIcon color="#fa8900" />,
    to: '/boards/1',
    bgColor: 'bg-gradient-red',
    data: [
      {
        title: 'Backlog',
        cards: mockCards(10)
      },
      {
        title: 'Progress',
        cards: mockCards(10, true)
      },
      {
        title: 'Done',
        cards: mockCards(10)
      }
    ]
  },
  {
    id: 2,
    title: 'Omni-channel',
    icon: <LogoAnalyticsIcon color="#4caf50" />,
    to: '/boards/2',
    bgColor: 'bg-gradient-green',
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
        title: 'Release',
        cards: mockCards(10)
      }
    ]
  },
  {
    id: 3,
    title: 'E-commerce',
    icon: <LogoShopIcon color="#3498ff" />,
    to: '/boards/3',
    bgColor: 'bg-gradient-blue',
    data: [
      {
        title: 'Market research',
        cards: mockCards(10)
      },
      {
        title: 'Demand analysis.',
        cards: mockCards(10, true)
      },
      {
        title: 'Product design',
        cards: mockCards(10)
      }
    ]
  }
];

export type CardType = ReturnType<typeof creatCard>;
export type CardList = typeof boards[0]['data'];
export type BoardType = typeof boards[0];

export default boards;
