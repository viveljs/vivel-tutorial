import * as React from 'react';
import { useUpdateAtom } from 'jotai/utils';
import { Controller, useForm } from 'react-hook-form';
import { Button, Form, Input } from 'semantic-ui-react';
import useSound from 'use-sound';
import styles from '../../assets/styles/option.module.css';
import { dialogueIndex, name } from '../../stores';
import pop from '@sfx/pop.mp3';
import { useAtom } from 'jotai';

const Name: React.FC = () => {
  const { control, handleSubmit } = useForm<{ name: string }>({
    defaultValues: { name: '' },
  });
  const setName = useUpdateAtom(name);
  const [clicked] = useSound(pop);
  const [getDialogueIndex, setDialogueIndex] = useAtom(dialogueIndex);

  const onSubmit = handleSubmit((data) => {
    setName(data.name);
    setDialogueIndex(getDialogueIndex + 1);
  });

  return (
    <Form onSubmit={onSubmit} className={styles.optionFlex}>
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => <Input className={styles.input} {...field} />}
      />
      <Button
        onClick={() => {
          clicked();
        }}
        className={styles.button}
        type="submit"
      >
        Next
      </Button>
    </Form>
  );
};

export { Name };
