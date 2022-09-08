import React, { useState } from 'react';
import {
  Input,
  InputGroup,
  Table,
  Button,
  DOMHelper,
  Progress,
  Stack,
  SelectPicker,
  Panel
} from 'rsuite';
import SearchIcon from '@rsuite/icons/Search';
import MoreIcon from '@rsuite/icons/legacy/More';
import DrawerView from './DrawerView';
import { mockUsers } from '@/data/mock';
import { NameCell, ImageCell, ActionCell } from './Cells';

const data = mockUsers(20);

const { Column, HeaderCell, Cell } = Table;
const { getHeight } = DOMHelper;

const ratingList = Array.from({ length: 5 }).map((_, index) => {
  return {
    value: index + 1,
    label: Array.from({ length: index + 1 })
      .map(() => '⭐️')
      .join('')
  };
});

const DataTable = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [sortColumn, setSortColumn] = useState();
  const [sortType, setSortType] = useState();
  const [searchKeyword, setSearchKeyword] = useState('');
  const [rating, setRating] = useState<number | null>(null);

  const handleSortColumn = (sortColumn, sortType) => {
    setSortColumn(sortColumn);
    setSortType(sortType);
  };

  const filteredData = () => {
    const filtered = data.filter(item => {
      if (!item.name.includes(searchKeyword)) {
        return false;
      }

      if (rating && item.rating !== rating) {
        return false;
      }

      return true;
    });

    if (sortColumn && sortType) {
      return filtered.sort((a, b) => {
        let x: any = a[sortColumn];
        let y: any = b[sortColumn];

        if (typeof x === 'string') {
          x = x.charCodeAt(0);
        }
        if (typeof y === 'string') {
          y = y.charCodeAt(0);
        }

        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return filtered;
  };

  return (
    <>
      <Stack className="table-toolbar" justifyContent="space-between">
        <Button appearance="primary" onClick={() => setShowDrawer(true)}>
          Add Member
        </Button>

        <Stack spacing={6}>
          <SelectPicker
            label="Rating"
            data={ratingList}
            searchable={false}
            value={rating}
            onChange={setRating}
          />
          <InputGroup inside>
            <Input placeholder="Search" value={searchKeyword} onChange={setSearchKeyword} />
            <InputGroup.Addon>
              <SearchIcon />
            </InputGroup.Addon>
          </InputGroup>
        </Stack>
      </Stack>

      <Panel bodyFill>
        <Table
          height={Math.max(getHeight(window) - 250, 400)}
          data={filteredData()}
          sortColumn={sortColumn}
          sortType={sortType}
          onSortColumn={handleSortColumn}
        >
          <Column width={80} align="center">
            <HeaderCell>Avatar</HeaderCell>
            <ImageCell dataKey="avatar" />
          </Column>

          <Column minWidth={160} flexGrow={1} sortable>
            <HeaderCell>Name</HeaderCell>
            <NameCell dataKey="name" />
          </Column>

          <Column width={230} sortable>
            <HeaderCell>Skill Proficiency</HeaderCell>
            <Cell style={{ padding: '10px 0' }} dataKey="progress">
              {rowData => <Progress percent={rowData.progress} showInfo={false} />}
            </Cell>
          </Column>

          <Column width={100} sortable>
            <HeaderCell>Rating</HeaderCell>
            <Cell dataKey="rating">
              {rowData =>
                Array.from({ length: rowData.rating }).map((_, i) => <span key={i}>⭐️</span>)
              }
            </Cell>
          </Column>

          <Column width={240}>
            <HeaderCell>Email</HeaderCell>
            <Cell dataKey="email" />
          </Column>

          <Column minWidth={100} flexGrow={1}>
            <HeaderCell>
              <MoreIcon />
            </HeaderCell>
            <ActionCell dataKey="id" />
          </Column>
        </Table>
      </Panel>

      <DrawerView open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
};

export default DataTable;
