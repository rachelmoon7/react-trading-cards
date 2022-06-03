'use strict';

function Homepage() {
  
  return (
  <div>
    <h2>Welcome!!</h2>
    <a href="/cards">Click here to view the trading cards.</a>
    <div><img src="/static/img/balloonicorn.jpg" /></div>
  </div>
  )

}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
//homepage component (what we want to render)
//where we want to render the component (any HTML element with ID #app)