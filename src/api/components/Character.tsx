import * as React from 'react';
import { Button } from 'semantic-ui-react';
import useSound from 'use-sound';
import styles from '../../assets/styles/option.module.css';
import { dialogueIndex } from '../../stores';
import pop from '@sfx/pop.mp3';
import { useAtom } from 'jotai';
import _ from 'lodash';

interface CharacterState {
  pemberani: boolean;
  imut: boolean;
  cekatan: boolean;
  ramah: boolean;
  penyayang: boolean;
  pintar: boolean;
}

const Character: React.FC = () => {
  const [clicked] = useSound(pop);
  const [getDialogueIndex, setDialogueIndex] = useAtom(dialogueIndex);
  const [state, setState] = React.useState<CharacterState>(
    {} as CharacterState
  );
  const [disabled, setDisabled] = React.useState<boolean>(false);

  React.useEffect(() => {
    const trueValue = _.omitBy(state, (data) => data == false);
    setDisabled(Object.keys(trueValue).length != 2);
  }, [state]);

  return (
    <div className={styles.optionGrid}>
      <Button
        onClick={() => {
          clicked();
          setState({ ...state, pintar: !state.pintar });
        }}
        active={state.pintar}
        content="Pintar"
      />
      <Button
        onClick={() => {
          clicked();
          setState({ ...state, pemberani: !state.pemberani });
        }}
        active={state.pemberani}
        content="Pemberani"
      />
      <Button
        onClick={() => {
          clicked();
          setState({ ...state, imut: !state.imut });
        }}
        active={state.imut}
        content="Imut"
      />
      <Button
        onClick={() => {
          clicked();
          setState({ ...state, cekatan: !state.cekatan });
        }}
        active={state.cekatan}
        content="Cekatan"
      />
      <Button
        onClick={() => {
          clicked();
          setState({ ...state, ramah: !state.ramah });
        }}
        active={state.ramah}
        content="Ramah"
      />
      <Button
        onClick={() => {
          clicked();
          setState({ ...state, penyayang: !state.penyayang });
        }}
        active={state.penyayang}
        content="Penyayang"
      />
      <Button
        onClick={() => {
          setDialogueIndex(getDialogueIndex + 1);
        }}
        disabled={disabled}
        content="Sudah !!"
      />
    </div>
  );
};

export { Character };
