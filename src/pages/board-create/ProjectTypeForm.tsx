import React, { useState } from 'react';
import { Form, Stack } from 'rsuite';
import RadioTile from '@/components/RadioTile';
import { Icon } from '@rsuite/icons';
import { VscNotebookTemplate, VscRepoClone, VscFile } from 'react-icons/vsc';
import FormHeader from './FormHeader';

const ProjectTypeForm = () => {
  const [type, setType] = useState('personal');

  return (
    <Form>
      <FormHeader
        title="Create new a board"
        description="You can always create a new board from a template or another project. But if you need to start fresh, you can create a blank board."
      />

      <Stack spacing={30} style={{ margin: '60px 0' }}>
        <RadioTile
          icon={<Icon as={VscFile} />}
          title="Create blank board"
          value={type}
          name="personal"
          onChange={setType}
        >
          Create a blank board to plan your task items. You can freely design the content of the
          Kanban board。
        </RadioTile>
        <RadioTile
          icon={<Icon as={VscNotebookTemplate} />}
          title="Create from template"
          value={type}
          name="brand"
          onChange={setType}
        >
          Create a board pre-populated with the necessary files to get you started quickly.
        </RadioTile>
        <RadioTile
          icon={<Icon as={VscRepoClone} />}
          title="Import board"
          value={type}
          name="group"
          onChange={setType}
        >
          Migrate your data from an external source like GitHub, Trello, or another instance of
          Monday.
        </RadioTile>
      </Stack>
    </Form>
  );
};

export default ProjectTypeForm;
