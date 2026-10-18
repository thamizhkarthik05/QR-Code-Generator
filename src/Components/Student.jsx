import React from 'react'
import propTypes from 'prop-types'
import PropTypes from 'prop-types';

export const Student = (props) => {
  return (
    <div className="student">
        <table>
            <tr>
                <th>Name</th>
                <td>{props.name}</td>
            </tr>
            <tr>
                <th>Age</th>
                <td>{props.age}</td>
            </tr>
            <tr>
                <th>Maritial Status</th>
                <td>{props.marital ? "Married" : "UnMarried"}</td>
            </tr>
        </table>
    </div>
  );
};

Student.prototype = 
{
    name : PropTypes.string,
    age : PropTypes.number,
    maritial : PropTypes.bool,
};

Student.defaultProps = 
{
    name : "Name unavailable",
    age : 0,
    maritial : false,
};