import * as React from 'react';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import { Characters, Dialogue, Scene, TopBar } from '@components';
import { Script } from '@api/pilihanganda';
import {
  backgroundAtom,
  bgmAtom,
  dialogueAtom,
  dialogueIndex,
} from '@src/stores';

const Introduction: React.FC = () => {
  const setDialogue = useUpdateAtom(dialogueAtom);
  const setBGM = useUpdateAtom(bgmAtom);
  const setBackground = useUpdateAtom(backgroundAtom);
  const index = useAtomValue(dialogueIndex);

  React.useEffect(() => {
    setBackground(Script.background);
    setBGM(Script.bgm);
  }, []);

  React.useEffect(() => {
    setDialogue(Script.dialogues[index]);
  }, [index]);

  return (
    <Scene>
      <TopBar />
      <Characters />
      <Dialogue />
    </Scene>
  );
};

export default Introduction;
