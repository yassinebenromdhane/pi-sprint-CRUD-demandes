import React from 'react'

import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import { ListDemand } from '../Demande/listDemand';

import Add from '../Demande/add';
import Show from '../Demande/show';

 
const Main = () => {
    return (
      <div className="height-100 bg-light main">

        <Switch>
          <Route exact path="/demands" component={ListDemand} />
          <Route exact path="/add_demand" component={Add} />
          <Route exact path="/demands/:id" component={Show} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    )
}

export default Main
