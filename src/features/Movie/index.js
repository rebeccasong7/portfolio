import React, { Component } from 'react';

class Movie extends Component {
    render() {
        console.log(this.props);
      return (       
        <div className="p-grid">
            <div className="p-col-3"><h1>Build Test</h1></div>
            <div className="p-col-4"><h2>{this.props.title}</h2></div>
            <div className="p-col-4"><img width="100%" src={this.props.poster} alt=''/>
        </div>
</div>

      );
    }
  }

  export default Movie;