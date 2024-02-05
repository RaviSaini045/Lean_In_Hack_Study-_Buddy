import React from 'react'
import { Link } from 'react-router-dom'

const DoubtCard = ({doubtImg, title, categories, doubtId}) => {
  return (
    <div>
      <Link to={doubtId}>
        <div>
          {doubtImg.map((Img) => {
            <img src={Img} />;
          })}
        </div>
        <div>
          <p>{title}</p>
          {categories.map((category) => {
            <p>{category}</p>;
          })}
        </div>
      </Link>
    </div>
  );
}

export default DoubtCard;