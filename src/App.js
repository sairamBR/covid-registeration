import React from 'react';
import './App.css';
import Register from './components/register';
import Profile from './components/profiles';
import Nav from './nav';
import Amplify from 'aws-amplify';
import { withAuthenticator} from '@aws-amplify/ui-react';
import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom';
import config from './aws-exports';
Amplify.configure(config)



function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register/' component={Register} />
        <Route path='/profile' component={Profile} />
        <Route path='/register/src/App.js' component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () =>{
  return(
    <p style={{alignContent:"flex-start"}}>India's Central Drugs Standard Control Organisation (CDSCO) says Pfizer officials failed to turn up to meetings after the company's application was made in early December. The regulator has also declined to accept the company's request for approval without a small local trial on the vaccine's safety and immunogenicity for Indians, Reuters has reported.

Pfizer says its application is supported by data from a global study that shows an overall efficacy rate of 95% with no vaccine-related, serious safety concerns. It also says that, based on the same data, the vaccine developed with German partner BioNTech has been approved in Britain, the United States, the European Union and Canada.

"The data collected has been endorsed by various regulatory agencies (including the most evolved) and they have given EUA [based on] ... that data," the firm said in an emailed response to questions, including on India's demand for a local trial.

"Given our exclusive priority to government supply, we look forward to a confirmation from the government on necessary supplies, [on the] basis which we will take the regulatory process forward, as we have done across the world," it added.

Last week, government officials in some EU countries said Pfizer had slashed in half deliveries to them, causing frustration and hampering vaccination drives.

Indian officials have had discussions with both Pfizer and its U.S. rival Moderna Inc about making their shots in India, given its large pharmaceutical capacity.

However, India, the world's biggest vaccine maker, says it is mainly relying on shots already approved or tested at home to run its massive immunisation campaign that began on Jan. 16.

Pfizer said its current focus was on distributing the vaccine around the world using manufacturing capacity in the United States and Europe.

"Once the pandemic supply phase is over and we enter a phase of regular supplies, Pfizer will evaluate all additional opportunities available," it said.

Asked why it did not attend meetings called by the CDSCO, Pfizer said its officials had not been given enough notice.

"The company representatives have been unable to participate in previous meetings due to extremely short notices of a few hours or less and time-zone limitations," the company said.

"We remain committed to engaging with the Government of India to make this vaccine available for use by the government in the country."

This story has been published from a wire agency feed without modifications to the text. Only the headline has been changed.</p>
  )
}

export default withAuthenticator(App);
