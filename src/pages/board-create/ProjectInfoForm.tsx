import React from 'react';
import { Form, Stack } from 'rsuite';
import { Icon } from '@rsuite/icons';
import { VscLock, VscWorkspaceTrusted } from 'react-icons/vsc';
import { BsShare } from 'react-icons/bs';
import RadioTile from '@/components/RadioTile';
import Textarea from '@/components/Textarea';
import FormHeader from './FormHeader';

const ProjectInfoForm = () => {
  const [level, setLevel] = React.useState('Private');

  return (
    <Form fluid>
      <FormHeader
        title="Board Info"
        description="Create a blank board to plan your task items. You can freely design the content of the Kanban board。"
      />

      <Form.Group controlId="name">
        <Form.ControlLabel>Board Name</Form.ControlLabel>
        <Form.Control name="name" />
        <Form.HelpText>Board name must be unique.</Form.HelpText>
      </Form.Group>

      <Form.Group controlId="description">
        <Form.ControlLabel>Board description (optional)</Form.ControlLabel>
        <Form.Control name="description" accepter={Textarea} />
      </Form.Group>

      <Form.Group controlId="plan">
        <Form.ControlLabel>Visibility Level</Form.ControlLabel>
        <Stack spacing={10} direction="column" alignItems={'stretch'}>
          <RadioTile
            icon={<Icon as={VscLock} />}
            title="Private"
            value={level}
            name="Private"
            onChange={setLevel}
          >
            Visible to everyone in your account
          </RadioTile>
          <RadioTile
            icon={<Icon as={VscWorkspaceTrusted} />}
            title="Internal"
            value={level}
            name="Internal"
            onChange={setLevel}
          >
            For working privately - alone or with selected team members.
          </RadioTile>

          <RadioTile
            icon={<Icon as={BsShare} />}
            title="Shareable"
            value={level}
            name="Shareable"
            onChange={setLevel}
          >
            For working privately with guests outside your account.
          </RadioTile>
        </Stack>
      </Form.Group>
    </Form>
  );
};

export default ProjectInfoForm;
