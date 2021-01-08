// History
// Billing
// membership card
// Check-Ins
// check-in card

import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Billing from './Billing'
import CheckIns from './CheckIns'

const History = () => (
  <div>
    
    <Switch>
      <Route path="/profile/historic/ckeckins" component={CheckIns}/>
      <Route path="/profile/historic/billings" component={Billing} />
    </Switch>
  </div>
    )

export default History
