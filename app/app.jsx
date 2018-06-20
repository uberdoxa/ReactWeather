 var React = require('react');
 var ReactDOM = require('react-dom');
 var {Route, Router,IndexRoute,hashHistory} = require('react-router');

var Main = require('Main');
var Weather  = require('Weather');
var About  = require('About');
var Examples  = require('Examples');

ReactDOM.render(
   <Router history={hashHistory}>
   <Route path = '/' component={Main}>
   <Route path="about" component={About}/>
   <Route path="examples" component={Examples}/>

   <IndexRoute component={Weather}/>

   </Route>
   </Router>,
    document.getElementById('app')
  );


//61d10c4dc62e28ce7e833eed8e5f1d4c
//https://api.darksky.net/forecast/61d10c4dc62e28ce7e833eed8e5f1d4c/37.8267,-122.4233
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//6b17e9067a4a972c2f9dd49bfaa2782a
// cheap-module-eval-source-map
// inline-source-map
// eval-source-map
