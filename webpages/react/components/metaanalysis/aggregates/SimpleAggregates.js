import React from 'react';
import { getAggregateDatumValue, formatNumber } from '../../../tools/datatools';
import './SimpleAggregates.css';


const simpleAggregateDetails = (aggr, value) => (
  <>
    <p>{value}</p>
    <p>{aggr.title}</p>
    <p>{aggr.fullLabel}</p>
  </>
);

function SimpleAggregates(props) {
  const { aggregates, makeClickable } = props;
  return (
    <div className="simpleaggregates">
      <table>
        <thead>
          <tr>
            <th>Aggregates</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {aggregates.map((aggr) => {
            const value = getAggregateDatumValue(aggr, aggr.metaanalysis.papers);
            return (
              <tr {...makeClickable(aggr.title, simpleAggregateDetails(aggr, value))}>
                <td>{aggr.title}</td>
                <td>{formatNumber(value)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SimpleAggregates;
