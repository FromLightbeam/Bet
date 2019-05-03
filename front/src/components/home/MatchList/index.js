import React from 'react';
import MatchDay from "./MatchDay";

function MatchList(props) {
  const { className } = props;

  return (
    <div className={className}>
      <MatchDay>Matchik 1</MatchDay>
      <MatchDay>Matchik 2</MatchDay>
      <MatchDay>Matchik 3</MatchDay>
      <MatchDay>Matchik 4</MatchDay>
    </div>
  );
}

export default MatchList;
