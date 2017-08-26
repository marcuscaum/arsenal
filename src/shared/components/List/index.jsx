import React from 'react';
import _ from 'underscore';

export const List = props => (
  <div>
    {_.map(props.items, (item, key) => (
      <div className='list-item' key={key} style={{backgroundImage: `url(${item.image.full})`}}>
        {item.name}
      </div>
    ))}
  </div>
);
