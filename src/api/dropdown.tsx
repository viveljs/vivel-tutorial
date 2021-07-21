import * as React from 'react';
import { ScriptProps } from '../types';

const Script: ScriptProps = {
  background: 'office',
  bgm: 'default',
  dialogues: [
    {
      characters: ['Putri'],
      mood: ['approved'],
      background: 'office',
      lines: ['Wow, beneran segitu bintangnya?'],
    },
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: ['Oke oke, selanjutnya kita coba interaksi yang lebih seru lagi.'],
    },
    {
      characters: ['Putri'],
      mood: ['thinking'],
      background: 'office',
      lines: ['Menulis pesan!'],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: ['Coba kirimkan pesan untukku ya!'],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        'Untuk melengkapi pesan di atas, klik pada bagian yang kosong, lalu klik pilihan kata yang ingin digunakan. Pastikan semua sudah terisi sebelum kamu melanjutkan ya.',
      ],
    },
  ],
};

export { Script };
