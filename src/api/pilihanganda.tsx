import * as React from 'react';
import { ScriptProps } from '../types';
import { Button } from '../components/atoms';

const Script: ScriptProps = {
  background: 'office',
  bgm: 'default',
  dialogues: [
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: ['Semua permainan di Prasmul Quest sifatnya interaktif.'],
      response: 'Maksudnya ?',
    },
    {
      characters: ['Putri'],
      mood: ['thinking'],
      background: 'office',
      lines: [
        'Artinya kamu tidak hanya akan membaca dialog, namun juga akan berinteraksi dengan karakter lain yang kamu temui.',
      ],
    },
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: [
        'Salah satu cara untuk berinteraksi adalah memilih jawaban yang ingin kamu sampaikan.',
      ],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        'Untuk memilih jawaban, klik salah satu dari kotak pilihan di atas.',
      ],
      option: (
        <div className="flex flex-col space-x-0 space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row">
          <Button text="Putri, kamu cantik banget deh!" dialogue />
          <Button text="Okay, sudah mengerti!" scene="pilganx" />
        </div>
      ),
    },
    {
      characters: ['Putri'],
      mood: ['satisfied'],
      background: 'office',
      lines: ['Ah kamu bisa aja, thank you $[name].'],
      option: <Button text="Sama-sama !!" scene="pilganx" />,
    },
  ],
};

export { Script };
