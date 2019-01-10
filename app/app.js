import React, { Component } from 'react';
import '../less/App.css';
import Controls from '../components/Controls';
import LaunchTable from '../components/LaunchTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      launchData: null,
      landedOnly: false,
      reused: false,
      hasReddit: false
    }
    this.getLaunches = this.getLaunches.bind(this);
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleLandedChange = this.handleLandedChange.bind(this);
    this.handleReusedChange = this.handleReusedChange.bind(this);
    this.handleRedditChange = this.handleRedditChange.bind(this);
  }

  getLaunches = () => {
    fetch('https://api.spacexdata.com/v2/launches')
    .then(results => {
        return results.json();
    }).then(data => {
        this.setState({launchData : data});
        console.log(this.state.launchData);
    })
  }

  handleRefresh = () => {
    this.setState({launchData: null});
    this.getLaunches();
  }

  handleLandedChange = (landedOnly) => {
    this.setState({landedOnly : landedOnly});
  }

  handleReusedChange = (reused) => {
    this.setState({reused : reused});
  }

  handleRedditChange = (hasReddit) => {
    this.setState({hasReddit : hasReddit});
  }

  componentDidMount() {
    this.getLaunches();
  }

  render() {
    return (
      <main>
        <h1>SpaceX Launches</h1>
        <Controls 
        onRefresh={this.handleRefresh}
        landedOnly={this.state.landedOnly}
        onLandedChange={this.handleLandedChange}
        reused={this.state.reused}
        onReusedChange={this.handleReusedChange}
        hasReddit={this.state.hasReddit}
        onRedditChange={this.handleRedditChange} />
        <LaunchTable 
        launches={this.state.launchData}
        landedOnly={this.state.landedOnly}
        reused={this.state.reused}
        hasReddit={this.state.hasReddit} />
      </main>
    );
  }
}

export default App;
