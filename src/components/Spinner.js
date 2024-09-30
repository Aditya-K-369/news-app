import React, { Component } from 'react'
import Loader from './loader.gif'
export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Loader} alt="loader" />
      </div>
    )
  }
}
