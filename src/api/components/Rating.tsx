import * as React from 'react';
import { Rating as Rate } from 'semantic-ui-react';
import styles from '../../assets/styles/option.module.css';
import { Button } from '../../components/atoms';

const Rating: React.FC = () => {
  return (
    <div className={styles.optionFlex}>
      <Rate icon="heart" defaultRating={1} maxRating={5} />
      <Button scene="dropdown" text="Siapp" />
    </div>
  );
};

export { Rating };
