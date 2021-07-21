import * as React from 'react';
import { Rating as Rate } from 'semantic-ui-react';

const Rating: React.FC = () => {
  return <Rate icon="heart" defaultRating={1} maxRating={3} />;
};

export { Rating };
