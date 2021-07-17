import * as React from 'react';
import styles from '@styles/modal.module.css';
import { useAtomValue } from 'jotai/utils';
import { modalVisible } from '../../stores/index';

const Modal: React.FC = ({ children }) => {
  const visible = useAtomValue(modalVisible);

  return (
    <div
      className={styles.background}
      style={visible ? { display: 'flex' } : { display: 'none' }}
    >
      <div className={styles.modal}>{children}</div>
    </div>
  );
};

export { Modal };
