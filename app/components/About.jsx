var React = require('react');

// var About = React.createClass({
//   render: function(){
//     return (<h3>About Component</h3>);
//   }
// });

var About = (props) => {
    return (
      <div>
      <h1 className ='text-center page-title'>About</h1>
      <p>This is a weather application built on React. I have built this
      for The Complete React Web App Developer Course.
        </p>
      <p>
      Here are some of the tools I used:
      </p>
      <ul>
        <li>
        <a href="http://facebook.github.io/react">React</a> -This was
        the javascript framework i used.
        </li>
          <li>
        <a href="http://openweathermap.org/react">Open Weather Map</a> -I used
       Open Weather Map to search for weather data by city name.
        </li>
      </ul>
      </div>
      );

};


module.exports = About;
