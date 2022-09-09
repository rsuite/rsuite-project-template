import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import locales from './locales';
import Frame from './components/Frame';
import Error404Page from './pages/authentication/404';
import MembersPage from './pages/members';
import CalendarPage from './pages/calendar';
import BoardsPage from './pages/board-list';
import BoardPage from './pages/board';
import CreateBoardPage from './pages/board-create';

const App = () => {
  return (
    <IntlProvider locale="en" messages={locales.en}>
      <Routes>
        <Route path="/" element={<Frame />}>
          <Route index element={<BoardsPage />} />
          <Route path="boards/new" element={<CreateBoardPage />} />
          <Route path="boards/:id" element={<BoardPage />} />
          <Route path="boards" element={<BoardsPage />} />
          <Route path="members" element={<MembersPage />} />
          <Route path="calendar" element={<CalendarPage />} />
        </Route>
        <Route path="*" element={<Error404Page />} />
      </Routes>
    </IntlProvider>
  );
};

export default App;
