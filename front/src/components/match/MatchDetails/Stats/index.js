import React from 'react';

import "./style.scss";
import { statSync } from 'fs';

function Stats(props) {
  const { className, stats } = props;

  function showDecimal(number){
    return number > 0.075 ? number.toFixed(2) : '';
  }

  const showInt = number => number ? number : '';

  const getXPoint = (w, d) => (3 * w + 1 * d) / 3;
  let h_xPTS;
  let a_xPTS;
  if (stats.h_xg){
    h_xPTS = getXPoint(stats.h_w, stats.h_d);
    a_xPTS = getXPoint(stats.h_l, stats.h_d);
  }

  return ( stats.h_xg ?
    <div className='stats__content'>
      <div className='stats__item'>
        <div className='stats__label'>Goal</div>
        <div
          className='stats__line stats--left'
          style={{ width: `${stats.h_goals / (stats.h_goals + stats.a_goals) * 100}%` }}
        >
          {showInt(stats.h_goals)}
        </div>
        <div
          className='stats__line stats--right'
          style={{ width: `${stats.a_goals / (stats.h_goals + stats.a_goals) * 100}%` }}
        >
          {showInt(stats.a_goals)}
        </div>
      </div>

      <div className='stats__item'>
        <div className='stats__label'>xG</div>
        <div
          className='stats__line stats--left'
          style={{ width: `${stats.h_xg / (stats.h_xg + stats.a_xg) * 100}%` }}
          title={stats.h_xg}
        >
          {showDecimal(stats.h_xg)}
        </div>
        <div
          className='stats__line stats--right'
          style={{ width: `${stats.a_xg / (stats.h_xg + stats.a_xg) * 100}%` }}
          title={stats.a_xg}
        >
          {showDecimal(stats.a_xg)}
        </div>
      </div>

      <div className='stats__item'>
        <div className='stats__label'>Chances</div>
        <div
          className='stats__line stats--left'
          style={{ width: `${stats.h_w / (stats.h_w + stats.h_d + stats.h_l) * 100}%` }}
          title={stats.h_w}
        >
          {showDecimal(stats.h_w)}
        </div>
        <div
          className='stats__line stats--center'
          style={{ width: `${stats.h_d / (stats.h_w + stats.h_d + stats.h_l) * 100}%` }}
          title={stats.h_d}
        >
          {showDecimal(stats.h_d)}
        </div>
        <div
          className='stats__line stats--right'
          style={{ width: `${stats.h_l / (stats.h_w + stats.h_d + stats.h_l) * 100}%` }}
          title={stats.h_l}
        >
          {showDecimal(stats.h_l)}
        </div>
      </div>

      <div className='stats__item'>
        <div className='stats__label'>Shots</div>
        <div
          className='stats__line stats--left'
          style={{ width: `${stats.h_shot / (stats.h_shot + stats.a_shot) * 100}%` }}
        >
          {showInt(stats.h_shot)}
        </div>
        <div
          className='stats__line stats--right'
          style={{ width: `${stats.a_shot / (stats.h_shot + stats.a_shot) * 100}%` }}
        >
          {showInt(stats.a_shot)}
        </div>
      </div>

      <div className='stats__item'>
        <div className='stats__label'>Shots on target</div>
        <div
          className='stats__line stats--left'
          style={{ width: `${stats.h_shotOnTarget / (stats.h_shotOnTarget + stats.a_shotOnTarget) * 100}%` }}
        >
          {showInt(stats.h_shotOnTarget)}
        </div>
        <div
          className='stats__line stats--right'
          style={{ width: `${stats.a_shotOnTarget / (stats.h_shotOnTarget + stats.a_shotOnTarget) * 100}%` }}
        >
          {showInt(stats.a_shotOnTarget)}
        </div>
      </div>

      <div className='stats__item'>
        <div className='stats__label'>Deep</div>
        <div
          className='stats__line stats--left'
          style={{ width: `${stats.h_deep / (stats.h_deep + stats.a_deep) * 100}%` }}
        >
          {showInt(stats.h_deep)}
        </div>
        <div
          className='stats__line stats--right'
          style={{ width: `${stats.a_deep / (stats.h_deep + stats.a_deep) * 100}%` }}
        >
          {showInt(stats.a_deep)}
        </div>
      </div>

      <div className='stats__item'>
        <div className='stats__label'>PPDA</div>
        <div
          className='stats__line stats--left'
          style={{ width: `${stats.h_ppda / (stats.h_ppda + stats.a_ppda) * 100}%` }}
          title={stats.h_ppda}
        >
          {showDecimal(stats.h_ppda)}
        </div>
        <div
          className='stats__line stats--right'
          style={{ width: `${stats.a_ppda / (stats.h_ppda + stats.a_ppda) * 100}%` }}
          title={stats.a_ppda}
        >
          {showDecimal(stats.a_ppda)}
        </div>
      </div>

      <div className='stats__item'>
        <div className='stats__label'>xPTS</div>
        <div
          className='stats__line stats--left'
          style={{ width: `${h_xPTS / (h_xPTS + a_xPTS) * 100}%` }}
          title={h_xPTS}
        >
          {showDecimal(h_xPTS)}
        </div>
        <div
          className='stats__line stats--right'
          style={{ width: `${a_xPTS / (h_xPTS + a_xPTS) * 100}%` }}
          title={a_xPTS}
        >
          {showDecimal(a_xPTS)}
        </div>
      </div>
    </div> : null
  );
}

export default Stats;
