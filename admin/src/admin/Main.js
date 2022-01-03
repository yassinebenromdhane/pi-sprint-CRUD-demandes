import React from 'react'

import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import { ListDemand } from '../components/Demande/listDemand';
import Show from '../components/Demande/show';
import Edit from '../components/Demande/Edit';


 
const Main = () => {
    return (
      <div className="height-100 bg-light main">

        <Switch>
          <Route exact path="/demands" component={ListDemand} />
          <Route exact path="/demands/:id" component={Show} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
}

export default Main
