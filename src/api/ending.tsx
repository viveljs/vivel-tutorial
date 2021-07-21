import { ScriptProps } from '../types';

const Script: ScriptProps = {
  background: 'office',
  bgm: 'default',
  dialogues: [
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: ['Udah sih begitu aja kalau soal game.'],
      response: 'Maksudnya ?',
    },
    {
      characters: ['Putri'],
      mood: ['thinking'],
      background: 'office',
      lines: [
        'Kalau misalnya kamu menemui kesulitan saat sedang bermain, langsung saja klik tombol “Butuh bantuan” di pojok kiri atas layar game.',
      ],
    },
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: [
        'Sudah ketemu? Kalau nanti kamu minta bantuan dari situ, Putri sudah siap sedia untuk menolong!',
      ],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: ['Sampai sini aja tutorialnya ya, kamu udah jago kok.'],
    },
    {
      characters: ['Putri'],
      mood: ['satisfied'],
      background: 'office',
      lines: ['See you in the game $[name]!'],
      response: 'Sama-sama.',
    },
  ],
};

export { Script };
