import * as React from 'react';
import { ScriptProps } from '../types';

const Script: ScriptProps = {
  background: 'office',
  bgm: 'default',
  dialogues: [
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: [' Oke, sekarang kita coba bentuk pilihan yang lain.'],
    },
    {
      characters: ['Putri'],
      mood: ['thinking'],
      background: 'office',
      lines: ['Kita akan coba mengisi rating.'],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        'Lihat, ada 5 icon bintang! Coba beri penilaian untuk tutorialku sejauh ini. Semakin ke kanan bintang yang kamu klik, artinya penilaian yang diberikan semakin baik.',
      ],
      option: <div></div>,
    },
    {
      characters: ['Putri'],
      mood: ['approved'],
      background: 'office',
      lines: [
        'Nice! Selama bermain nanti jangan ragu untuk memilih pilihan yang paling sesuai dengan dirimu ya.',
      ],
    },
  ],
};

export { Script };
