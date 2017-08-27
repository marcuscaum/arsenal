import React from 'react';
import _ from 'underscore';

import './index.css';

const emptyImageHandler = (image, cdn) => {
  return fetch(`${cdn + image}`)
    .then(data => data.status === 404)
}


export const List = props => (
  <div className='list'>
    {_.map(props.items, (item, key) => (
      <div className={`list-item ${props.type}`} key={key}>
        <img src={`${props.images + item.image.full}`} onError={(e) => e.target.src=`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.name}_0.jpg`}/>
      </div>
    ))}
  </div>
);
