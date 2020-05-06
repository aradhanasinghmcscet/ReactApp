import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { simpleAction } from './actions/simpleAction';

const mapStateToProps = state => ({
  ...state
 })

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })
class App extends Component {
  simpleAction = (event) => {
    this.props.simpleAction();
   }
 render() {
  return (
   <div className="App">
    <button onClick={this.simpleAction}>Test redux action</button>
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
    <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
   </div>
  );
 }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);