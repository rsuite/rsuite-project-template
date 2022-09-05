import React from 'react';
import { Drawer, DrawerProps, Button, Form, Stack, Slider, Rate } from 'rsuite';

const DrawerView = (props: DrawerProps) => {
  const { onClose, ...rest } = props;
  return (
    <Drawer backdrop="static" size="sm" placement="right" onClose={onClose} {...rest}>
      <Drawer.Header>
        <Drawer.Title>Add a new member</Drawer.Title>
        <Drawer.Actions>
          <Button onClick={onClose} appearance="primary">
            Confirm
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Drawer.Actions>
      </Drawer.Header>

      <Drawer.Body>
        <Form fluid>
          <Stack justifyContent="space-between" style={{ marginBottom: 20 }}>
            <Form.Group>
              <Form.ControlLabel>First Name</Form.ControlLabel>
              <Form.Control name="firstname" style={{ width: 200 }} />
            </Form.Group>
            <Form.Group>
              <Form.ControlLabel>Last Name</Form.ControlLabel>
              <Form.Control name="lastname" style={{ width: 200 }} />
            </Form.Group>
          </Stack>
          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control name="email" type="email" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>City</Form.ControlLabel>
            <Form.Control name="city" />
          </Form.Group>
          <Form.Group>
            <Form.ControlLabel>Street</Form.ControlLabel>
            <Form.Control name="street" />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Rating</Form.ControlLabel>
            <Form.Control name="rating" accepter={Rate} />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Skill Proficiency</Form.ControlLabel>
            <Form.Control name="skill" accepter={Slider} progress />
          </Form.Group>
        </Form>
      </Drawer.Body>
    </Drawer>
  );
};

export default DrawerView;
