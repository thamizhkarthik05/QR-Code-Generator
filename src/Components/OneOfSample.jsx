import PropTypes from 'prop-types';
import props from 'prop-types'


export const OneOfSample = (props) => {
    const {color} = props;

    return (
    
    
    <div style={{backgroundColor : color,padding : "20px" , color : "white" , textAlign : 'center', fontSize : '20px'}}>
        <p>Welcome to VIT. <br />Your lucky color is {color}.</p>
    </div>
  )
}

OneOfSample.propTypes = 
{
    color : PropTypes.oneOf(["red","green","blue"]).isRequired,
}