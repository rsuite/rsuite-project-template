import React, { useState } from 'react';
import { Button, ButtonToolbar, IconButton, Stack } from 'rsuite';
import Textarea from '@/components/Textarea';
import MoreIcon from '@rsuite/icons/More';

const AddCard = () => {
  const [editable, setEditable] = useState(false);

  if (editable) {
    return (
      <>
        <Textarea />
        <Stack justifyContent="space-between" style={{ marginTop: 10 }}>
          <ButtonToolbar>
            <Button appearance="primary">Add Card</Button>
            <Button appearance="subtle" onClick={() => setEditable(false)}>
              Cancel
            </Button>
          </ButtonToolbar>
          <IconButton icon={<MoreIcon />} />
        </Stack>
      </>
    );
  }

  return (
    <Button block appearance="ghost" onClick={() => setEditable(true)}>
      Add a Card
    </Button>
  );
};

export default AddCard;
