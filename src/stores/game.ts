import { atomWithReset } from 'jotai/utils';
import { DialogueProps } from '@src/types';

const dialogueAtom = atomWithReset<DialogueProps>({} as DialogueProps);
const bgmAtom = atomWithReset<string>('default');
const dialogueIndex = atomWithReset<number>(0);
const lineIndex = atomWithReset<number>(0);
const sceneAtom = atomWithReset<string>('opening');
const backgroundAtom = atomWithReset<string>('');

export {
  dialogueAtom,
  dialogueIndex,
  lineIndex,
  sceneAtom,
  bgmAtom,
  backgroundAtom,
};
