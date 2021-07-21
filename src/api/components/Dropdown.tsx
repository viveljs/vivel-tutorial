import * as React from 'react';
import { Select } from 'semantic-ui-react';
import { Button } from '../../components/atoms';
import styles from '../../assets/styles/option.module.css';

const option1 = [
  { key: '01', value: '01', text: 'Hai Putri' },
  { key: '02', value: '02', text: 'Halo Bro' },
  { key: '03', value: '03', text: 'Pagi Bund' },
];

const option2 = [
  { key: '01', value: '01', text: 'nonton bola bareng' },
  { key: '02', value: '02', text: 'piknik di taman' },
  { key: '03', value: '03', text: 'jalan-jalan ke mall' },
];

const option3 = [
  { key: '01', value: '01', text: 'cemilan yang banyak' },
  { key: '02', value: '02', text: 'teman yang lain' },
  { key: '03', value: '03', text: 'uang buat patungan' },
];

const Dropdown: React.FC = () => {
  return (
    <div>
      <div className={styles.optionFlex}>
        <Select placeholder="Pilih panggilan" options={option1} />
        <span>, hari minggu nanti ayo</span>
        <Select placeholder="Pilih aktivitas" options={option2} />
        <span>! Jangan lupa bawa</span>
        <Select placeholder="Pilih opsi" options={option3} />
      </div>
      <Button scene="isitext" text="Ok" />
    </div>
  );
};

export { Dropdown };
