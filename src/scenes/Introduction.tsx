import * as React from 'react';
import { useAtomValue, useUpdateAtom } from 'jotai/utils';
import { Characters, Dialogue, Scene, TopBar } from '@components';
import { Introduction as Intro } from '@api/introduction';
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
    setBackground(Intro.background);
    setBGM(Intro.bgm);
  }, []);

  React.useEffect(() => {
    setDialogue(Intro.dialogues[index]);
  }, [index]);

  return (
    <Scene>
      <Dialogue />
      <TopBar />
      <Characters />
    </Scene>
  );
};

export default Introduction;
