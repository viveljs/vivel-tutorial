import * as React from 'react';
import { ScriptProps } from '../types';
import { TextArea } from 'semantic-ui-react';
import { Button } from '../components/atoms';
import styles from '../assets/styles/option.module.css';

const Script: ScriptProps = {
  background: 'office',
  bgm: 'default',
  dialogues: [
    {
      characters: ['Putri'],
      mood: ['approved'],
      background: 'office',
      lines: ['Sip, ditunggu ya hari minggu depan. Awas aja kalau lupa!'],
    },
    {
      characters: ['Putri'],
      mood: ['normal1'],
      background: 'office',
      lines: ['Oke kita lanjut ke tutorialnya.'],
    },
    {
      characters: ['Putri'],
      mood: ['thinking'],
      background: 'office',
      lines: [
        'Sekarang kita masuk ke yang paling seru. Kamu ga harus selalu pilah-pilih jawaban, di game ini kamu juga bisa langsung menuangkan isi hati dan pikiranmu.',
      ],
    },
    {
      characters: ['Putri'],
      mood: ['normal2'],
      background: 'office',
      lines: [
        ' Kamu tinggal klik kotak teks di atas dan ketik apa yang ingin kamu sampaikan. Tenang aja, Putri orangnya bisa jaga rahasia kok.',
      ],
      option: (
        <div className={styles.optionFlex}>
          <TextArea />
          <Button scene="zoom" text="Bisaaa..." />
        </div>
      ),
    },
  ],
};

export { Script };
