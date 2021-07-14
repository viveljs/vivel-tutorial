import * as React from 'react';

const NextScene: React.FC<{ name?: string; msg?: string }> = ({
  name,
  msg,
}) => {
  return <button onClick={() => {}}>{msg ?? 'NextScene'}</button>;
};

export { NextScene };
