import React, { Component } from 'react';
import LaunchRows from '../components/LaunchRows';
import '../less/LaunchTable.css';

class LaunchTable extends Component {
  render() {
    const rows = [];
    const landedOnly = this.props.landedOnly;
    const reused = this.props.reused;
    const hasReddit = this.props.hasReddit;
    if(this.props.launches) {
      this.props.launches.forEach((launch) => {
        if(landedOnly && !launch.rocket.first_stage.cores[0].land_success) {
          return;
        }
        if(reused && !launch.reuse.capsule && !launch.reuse.core && !launch.reuse.fairings && !launch.reuse.side_core1 && !launch.reuse.side_core2) {
          return;
        }
        if(hasReddit) {
          let json = launch.links;
          let escape = true;
          for(var key in json) {
            if (json.hasOwnProperty(key)) {
              if (/reddit_/.test(key) && json[key]) {
                escape = false;
                break;    
              }
            }
          }
          if(escape) {
            return;
          }
        }
        rows.push(
          <LaunchRows
            launch={launch}
            key={launch.flight_number} />
        );
      })
    }
    return (
      <table>
        <thead>
        <tr>
          <th>Badge</th>
          <th>Rocket Name</th>
          <th>Rocket Type</th>
          <th>Launch Date</th>
          <th>Details</th>
          <th>ID</th>
          <th>Article</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
      </table>
    )
  }
}

export default LaunchTable