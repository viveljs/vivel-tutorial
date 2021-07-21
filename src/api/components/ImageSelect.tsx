import * as React from 'react';
import { Image } from 'semantic-ui-react';
import kid from './images/kid.png';
import leaf from './images/leaf.png';
import sheep from './images/sheep.png';
import pop from '../../assets/sfx/pop.mp3';
import useSound from 'use-sound';

const ImageSelect: React.FC = () => {
  const [play] = useSound(pop);

  return (
    <div>
      <Image
        onclick={() => {
          play();
        }}
        src={kid}
        size="mini"
      />
      <Image
        onclick={() => {
          play();
        }}
        src={leaf}
        size="mini"
      />
      <Image
        onclick={() => {
          play();
        }}
        src={sheep}
        size="mini"
      />
    </div>
  );
};

export { ImageSelect };
