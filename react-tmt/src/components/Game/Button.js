import React, { Fragment, useContext, useEffect } from 'react';

import GameContext from '../../context/game/gameContext';

const Button = ({ i, text }) => {
  const gameContext = useContext(GameContext);
  const {
    nodes,
    prevNodes,
    playerPos,
    numPoints,

    setDone,
    movePos,
    incErrors,
    checkpoint,
    endGame
  } = gameContext;

  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const check = () => {
    if (i !== playerPos) {
      incErrors();
    }
    else if (playerPos === numPoints - 1) {
      checkpoint(i);
      endGame();
    } else {
      checkpoint(i);
      setDone(i);
      movePos();
    }
  };

  // const getRadiusChange = (x1, y1, x2, y2, radius) =>{
  //   var x = x2-x1;
  //   var y = y2-y1;
  //   var xlength = (x*((Math.sqrt(Math.pow(x,2)+Math.pow(y,2)))-radius*2))/(Math.sqrt(Math.pow(x,2)+Math.pow(y,2)));
  //   var ylength = (y*((Math.sqrt(Math.pow(x,2)+Math.pow(y,2)))-radius*2))/(Math.sqrt(Math.pow(x,2)+Math.pow(y,2)));
  //   console.log([x1+(x-xlength/2),y1+(y-ylength/2),x2-(x-xlength/2),y2-(y-ylength/2)]);
  //   return [x1+(x-xlength/2),y1+(y-ylength/2),x2-(x-xlength/2),y2-(y-ylength/2)];
  // }


  return (
    <Fragment>
      <Fragment>
        <line
          key={i}
          x1={prevNodes[i].x}
          y1={prevNodes[i].y}
          x2={nodes[i].x}
          y2={nodes[i].y}
          //   x1={Math.ceil(getRadiusChange(prevNodes[i].x,prevNodes[i].y,nodes[i].x,nodes[i].y,20)[0])}
          //   y1={Math.ceil(getRadiusChange(prevNodes[i].x,prevNodes[i].y,nodes[i].x,nodes[i].y,20)[0])}
          //   x2={Math.ceil(getRadiusChange(prevNodes[i].x,prevNodes[i].y,nodes[i].x,nodes[i].y,20)[0])}
          //   y2={Math.ceil(getRadiusChange(prevNodes[i].x,prevNodes[i].y,nodes[i].x,nodes[i].y,20)[0])}
          strokeWidth={(i>0 && nodes[i].done) === true ? 3 : 0}
          stroke={'white'}
        />
      </Fragment>
      <Fragment>
        <circle
          className={i}
          key={i}
          cx={nodes[i].x}
          cy={nodes[i].y}
          r="20"
          fill={nodes[i].done === true ? 'green': '#3279a8'}
          stroke="white"
          strokeWidth="1"
          onClick={check} 
        />
        <text x={nodes[i].x} y={(nodes[i].y)} textAnchor="middle" onClick={check} fill="white">
          {text}
        </text>
      </Fragment>
    </Fragment>
  );
};

export default Button;