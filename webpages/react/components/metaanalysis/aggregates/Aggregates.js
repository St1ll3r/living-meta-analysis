import React from 'react';
import SimpleAggregates from './SimpleAggregates';
import GroupingAggregates from './GroupingAggregates';

function Aggregates(props) {
  const {
    aggregates,
    groupingAggregates,
    groups,
    groupingColumn,
    toggleDisplay,
  } = props;
  return (
    <section>
      <SimpleAggregates
        aggregates={aggregates}
        toggleDisplay={toggleDisplay}
        /* groupingColumnsObjs={} */
      />

      {/* TODO:  map on groupingColObj => multiple grouping aggregates */}
      <GroupingAggregates
        groupingAggregates={groupingAggregates}
        groups={groups}
        groupingColumn={groupingColumn}
        toggleDisplay={toggleDisplay}
      />
    </section>
  );
}

export default Aggregates;
