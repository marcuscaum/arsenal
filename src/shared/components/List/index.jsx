import React from 'react';
import _ from 'underscore';

import './index.css';

export const List = props => (
  <div className='list'>
    {_.map(props.items, (item, key) => (
      <div className={`list-item ${props.type}`} key={key} style={{ backgroundImage: `url(${props.images + item.image.full})`}}>
        {item.name}
      </div>
    ))}
  </div>
);
