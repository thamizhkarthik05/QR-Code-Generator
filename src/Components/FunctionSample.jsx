import PropTypes from 'prop-types';

export const FunctionSample = (props) => {
    const {handleClick} = props;
    return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

FunctionSample.propTypes = 
{
    handleClick : PropTypes.func.isRequired,
};