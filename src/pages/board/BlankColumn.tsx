import React from 'react';
import { Panel, Button } from 'rsuite';

interface PlaceholderProps {
  onCreated: (title: string) => void;
}

const BlankColumn = (props: PlaceholderProps) => {
  const { onCreated } = props;
  return (
    <Panel className="board-column">
      <Button
        block
        appearance="ghost"
        onClick={() => {
          onCreated?.('Untitled');
        }}
      >
        Add another list
      </Button>
    </Panel>
  );
};

export default BlankColumn;
