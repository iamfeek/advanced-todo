import React from 'react';
import { Link } from 'react-router-dom'
export default class NotFound extends React.Component{
  render(){
    return(
      <div id="not-found" className="col-xs-12">
        <div className="page-header">
          <h1 className="center">NOT FOUND!</h1>
        </div>

        <div className="col-xs-4 col-xs-offset-4">
          <p>If you are lost, let me save you! <Link to="dashboard">Advanced Todo</Link></p>
        </div>
      </div>
    )
  }
}
