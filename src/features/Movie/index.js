import React, { Component } from 'react';

class Movie extends Component {
    render() {
        console.log(this.props);
      return (       
        <div className="p-grid">
            <div className="p-col"><h2>{this.props.title}</h2></div>
            <div className="p-col"><img width="500px" src={this.props.poster} alt=''/>
        </div>
</div>

      );
    }
  }

  export default Movie;