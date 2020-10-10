import React, { useContext, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import ResultsContext from '../../context/results/resultsContext';


const ResultItem = ({result}) => {
  const { _id, name, numErrors, timings, date, totalTime } = result;

  return (
    <div className="card text-center">
      <div className="card-header bg-info">
        <h4 className="card-title">
          <span className="badge badge-info">{name ? name : 'Guest'} </span>
        </h4>
      </div>
      <div className="card-body">
        <Fragment>
          <p>
            <strong>Number of errors : </strong>
            <br></br>
            {numErrors}
          </p>
          <p>
            <strong>Total time taken : </strong>
            <br></br>
            {totalTime} ms
          </p>
          <Fragment>
            <p>
              <strong>Time taken to reach node (/ms):</strong>
            </p>
            <div className="row">
              {timings.map((timing, i) => (
                <div className="col-sm-4" key={i}>
                  Node {i + 1 + 1} : {timing}{' '}
                </div>
              ))}
            </div>
            <br></br>
          </Fragment>
        </Fragment>
      </div>
    </div>
  );
};

ResultItem.propTypes = {
  result: PropTypes.object.isRequired
};

export default ResultItem;

