import React from 'react';
import Places from './Places';
import {Route, Switch} from 'react-router-dom';
import About from './About';




const App = () => {
  return(
    <>
     <Switch>
      <Route path="/about" component={About} />
       <Route path="/" component={Places}/>
     </Switch>
    </>    
  )
}

export default App;