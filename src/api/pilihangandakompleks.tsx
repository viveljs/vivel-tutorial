import * as React from 'react';
import { ScriptProps } from '../types';
import { Character } from './components';
import { Button } from '../components/atoms';

const Script: ScriptProps = {
  background: 'office',
  bgm: 'piano',
  dialogues: [
    {
      characters: ['Putri'],
      mood: ['approved'],
      background: 'office',
      lines: ['Gampang banget kan?'],
      response: 'Iya juga ya.',
    },
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: ['Sekarang kita coba yang bentuk pilihan yang lebih rame lagi.'],
    },
    {
      characters: ['Putri'],
      mood: ['thinking'],
      background: 'office',
      lines: ['Terkadang, kamu perlu memilih lebih dari satu pilihan.'],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        'Untuk melakukannya, klik kotak pilihan yang kamu inginkan sesuai jumlah yang diinstruksikan. Kotak yang sudah kamu pilih akan berubah warna. Setelah selesai memilih, bisa langsung klik tombol next.',
      ],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        'Coba sekarang pilih 2 kata yang paling mendeskripsikan dirimu. Oh iya, kalau mau ganti jawaban bisa klik kotak yang sudah berubah warna, lalu klik pilihan yang lebih benar.',
      ],
      option: <Character />,
    },
    {
      characters: ['Putri'],
      mood: ['approved'],
      background: 'office',
      lines: ['Hahaha, nice choice!'],
      option: <Button text="Hehehe" scene="rating" />,
    },
  ],
};

export { Script };
