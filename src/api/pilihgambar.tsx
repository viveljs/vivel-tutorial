import * as React from 'react';
import { ScriptProps } from '../types';
import { Character } from './components';

const Script: ScriptProps = {
  background: 'office',
  bgm: 'piano',
  dialogues: [
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: ['Agar kita bisa lebih kenal lagi.'],
    },
    {
      characters: ['Putri'],
      mood: ['thinking'],
      background: 'office',
      lines: [
        'Selain memilih kata-kata, ada kemungkinan kamu juga perlu memilih gambar.',
      ],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        'Kenapa gambar? Karena tidak semua hal bisa diungkapkan hanya dengan kata-kata~',
      ],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        'Sekarang, coba pilih gambar yang kamu suka. Caranya masih sama seperti yang sebelumnya kok.',
      ],
      option: <Character />,
    },
  ],
};

export { Script };
