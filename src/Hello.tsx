import React, {useState, FC} from 'react';
// 'import type' is still supported by 'ts-loader'
// which is not supported type '@babel/preset-typescript'
import type {A} from './A';

export const Hello: FC = () => {
  const [name, setName] = useState('');
  return <div>
    <h1>Hello {name}</h1>
    <div>Input something in the text field, and change me to see if it's still kept</div>
    <input type='text' value={name} onChange={(event) => setName(event.target.value)}/>
  </div>;
}
