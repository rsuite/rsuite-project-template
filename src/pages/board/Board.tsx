import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
  Divider,
  IconButton,
  List,
  Panel,
  Stack,
  Avatar,
  Progress,
  ButtonGroup,
  AvatarGroup,
  Whisper,
  Popover,
  Dropdown
} from 'rsuite';
import MoreIcon from '@rsuite/icons/More';
import { VscEdit, VscTrash } from 'react-icons/vsc';

import { CardList } from '@/data/boards';
import TextEditor from './TextEditor';
import DrawerView from './DrawerView';
import BlankColumn from './BlankColumn';
import AddCard from './AddCard';

const renderColumnActions = ({ onClose, left, top, className }: any, ref) => {
  const handleSelect = eventKey => {
    onClose();
    console.log(eventKey);
  };
  return (
    <Popover
      ref={ref}
      className={className}
      style={{ left, top }}
      full
      title={<div style={{ padding: 10 }}>List actions</div>}
    >
      <Dropdown.Menu onSelect={handleSelect}>
        <Dropdown.Item eventKey={1}>Add card</Dropdown.Item>
        <Dropdown.Item eventKey={2}>Copy list</Dropdown.Item>
        <Dropdown.Item eventKey={3}>Move list</Dropdown.Item>
        <Dropdown.Item eventKey={4}>Watch</Dropdown.Item>

        <Dropdown.Item divider />
        <Dropdown.Item eventKey={5}>Sort By...</Dropdown.Item>
        <Dropdown.Item eventKey={5}>Archive this list</Dropdown.Item>
      </Dropdown.Menu>
    </Popover>
  );
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

interface BoardProps {
  data: CardList;
}

const Board = (props: BoardProps) => {
  const { data } = props;

  const [state, setState] = useState(data?.map(item => item.cards) || []);
  const [columns, setColumns] = useState(data?.map(item => item.title) || []);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    setState(data?.map(item => item.cards) || []);
    setColumns(data?.map(item => item.title) || []);
  }, [data]);

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const items = reorder(state[sInd], source.index, destination.index);
      const newState: any = [...state];
      newState[sInd] = items;
      setState(newState);
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      const newState = [...state];
      newState[sInd] = result[sInd];
      newState[dInd] = result[dInd];

      setState(newState.filter(group => group.length));
    }
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Stack spacing={20} direction="row" alignItems="flex-start">
          {state.map((el, ind) => (
            <Droppable key={ind} droppableId={`${ind}`}>
              {(provided, snapshot) => (
                <Panel
                  className={classNames('board-column', {
                    'dragging-over': snapshot.isDraggingOver
                  })}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  header={
                    <Stack justifyContent="space-between">
                      <TextEditor defaultValue={columns[ind]} />

                      <Whisper speaker={renderColumnActions} placement="rightStart" trigger="click">
                        <IconButton icon={<MoreIcon />} appearance="subtle" />
                      </Whisper>
                    </Stack>
                  }
                >
                  <List>
                    {el.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {provided => (
                          <List.Item
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={provided.draggableProps.style}
                            className="card"
                          >
                            {item.image && <img src={item.image} alt="image" width="100%" />}
                            {item.content}
                            {item.progress && <Progress percent={item.progress} showInfo={false} />}

                            <Stack justifyContent="space-between" style={{ marginTop: 10 }}>
                              <AvatarGroup stack>
                                {item.users.map((user, index) => (
                                  <Avatar
                                    key={index}
                                    src={user?.avatar}
                                    alt={user?.name}
                                    size="xs"
                                    circle
                                  />
                                ))}
                              </AvatarGroup>
                              <ButtonGroup className="card-actions">
                                <IconButton
                                  icon={<VscEdit />}
                                  size="sm"
                                  onClick={() => setShowDrawer(true)}
                                />
                                <IconButton
                                  icon={<VscTrash />}
                                  size="sm"
                                  onClick={() => {
                                    const newState = [...state];
                                    newState[ind].splice(index, 1);
                                    setState(newState.filter(group => group.length));
                                  }}
                                />
                              </ButtonGroup>
                            </Stack>
                          </List.Item>
                        )}
                      </Draggable>
                    ))}
                  </List>
                  {provided.placeholder}

                  <Divider />

                  <AddCard />
                </Panel>
              )}
            </Droppable>
          ))}

          <BlankColumn
            onCreated={title => {
              setState([...state, []]);
              setColumns([...columns, title]);
            }}
          />
        </Stack>
      </DragDropContext>
      <DrawerView open={showDrawer} onClose={() => setShowDrawer(false)} />
    </>
  );
};

export default Board;
