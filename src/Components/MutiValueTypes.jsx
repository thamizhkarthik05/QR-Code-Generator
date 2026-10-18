import PropTypes from 'prop-types';
import props from 'prop-types'


export const MutiValueTypes = (props) => {
  
  const {value} = props;
    return (
    <div>
        <p>This is your value : {value}</p>
    </div>
  )
}

MutiValueTypes.proptype = 
{
    value : PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};