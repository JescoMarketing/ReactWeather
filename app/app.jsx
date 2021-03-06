import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Weather from 'Weather'
import About from 'About'
import Examples from 'Examples'

// Load Foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

// Load App css
require('style!css!sass!ApplicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <Route path='examples' component={Examples}/>
      <Route path='about' component={About}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
)
