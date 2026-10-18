import React from 'react'
import Props from 'prop-types'
import PropTypes from 'prop-types'


export const ChildComponent = (props) => {
  return (
    <div>{props.children}</div>
  )
}

ChildComponent.propTypes = 
{
  children : PropTypes.array,
}