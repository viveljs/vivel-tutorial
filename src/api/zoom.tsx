import * as React from 'react';
import { Button } from '../components/atoms';
import Zoom from '../scenes/Zoom';
import { ScriptProps } from '../types';

const Script: ScriptProps = {
  background: 'office',
  bgm: 'default',
  dialogues: [
    {
      characters: ['Putri'],
      mood: ['approved'],
      background: 'office',
      lines: ['Mantap!'],
    },
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: ['Terakhir banget nih…'],
    },
    {
      characters: ['Putri'],
      mood: ['thinking'],
      background: 'office',
      lines: [
        'Saat bermain di Prasmul Quest, sering kali kamu akan mendapat gambar atau informasi yang perlu dibaca dengan seksama.',
      ],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        'Bila muncul kotak seperti di atas, klik ikon kaca pembesar untuk memperbesar gambar. Lalu klik panah kanan dan kiri untuk melihat informasi lainnya.',
        'Pastikan kamu melihat semua informasinya ya!',
      ],
      option: <Zoom />,
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        'Sudah? Pokoknya informasi dalam bentuk seperti itu harus benar-benar diperhatikan ya! Karena akan dibutuhkan kedepannya.',
      ],
      option: <Button scene="ending" text="Rojer" />,
    },
  ],
};

export { Script };
