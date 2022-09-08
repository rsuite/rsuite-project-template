import React from 'react';
import { ButtonToolbar, Button, Stack } from 'rsuite';
import CheckRoundIcon from '@rsuite/icons/CheckRound';

const Completed = () => {
  return (
    <div>
      <div style={{ margin: '40px 0' }}>
        <Stack spacing={10}>
          <CheckRoundIcon style={{ fontSize: 50 }} color="#4caf50" />
          <div>
            <h5>Your Are Done!</h5>
            <p className="text-muted">You can start working on a new board.</p>
          </div>
        </Stack>
      </div>

      <p>You can also click the button below to start working on the board.</p>

      <ButtonToolbar style={{ marginTop: 20 }}>
        <Button appearance="primary">View board</Button>
        <Button>Add permissions to the board</Button>
      </ButtonToolbar>
    </div>
  );
};

export default Completed;
