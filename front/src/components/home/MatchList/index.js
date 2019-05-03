import React, { useState } from 'react';
import MatchDay from "./MatchDay";

function MatchList(props) {
  const { className } = props;

  return (
    <div className={className}>
      <MatchDay></MatchDay>
      <MatchDay>Matchik 2</MatchDay>
      <MatchDay>Matchik 3</MatchDay>
      <MatchDay>Matchik 4</MatchDay>
    </div>
  );
}

export default MatchList;
