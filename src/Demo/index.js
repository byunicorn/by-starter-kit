import React, { PureComponent } from 'react';
import './demo.scss';

class Demo extends PureComponent {
  componentDidMount() {
    console.log('test');
  }

  render() {
    return (
      <div className="demo">
        {'This is a simple demo.'}
      </div>
    );
  }
}

export default Demo;
