import React from 'react';
import MatchDay from "./MatchDay";
import Match from "./Match";

function MatchList(props) {
  const { className, matches } = props;

  function getMacthDay(matches) {
    const dates = {}
    matches.map(m => {
      if (dates[m.date])
        dates[m.date].push(m);
      else
        dates[m.date] = [m];
      return m;
    })
    return Object.entries(dates).reverse();
  }

  const dates = getMacthDay(matches);

  return (
    <div className={className}>
      {dates.map(d =>
        <MatchDay key={d[0]} date={d[0]} >
          {d[1].map(match =>
            <Match 
              key={match.id} 
              match={match}
            />
          )}
        </MatchDay>
      )}
    </div>
  );
}

export default MatchList;
