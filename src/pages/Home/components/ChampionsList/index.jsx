import React from 'react';
import _ from 'underscore';

import './index.css';

const filteredList = (items, condition) => (
  _.filter(items, (item) => (
    _.contains(item.tags, condition)
  ))
)

export const ChampionsList = props => (
  <div className='list'>
    {_.map(filteredList(props.items, props.filter), (item, key) => (
      <div className={`list-item ${props.type}`} key={key}>
        <img src={`${props.images + item.image.full}`} onError={(e) => e.target.src=`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.name}_0.jpg`}/>
        {item.tags}
      </div>
    ))}
  </div>
);
