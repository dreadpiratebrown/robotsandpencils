import React, { Component } from 'react';
import link from '../assets/images/link.svg';

class LaunchRows extends Component {
    render() {
        const launch = this.props.launch;
        const badge = launch.links.mission_patch_small;
        const name = launch.rocket.rocket_name;
        const type = launch.rocket.rocket_type;
        const date = new Date(launch.launch_date_local);
        const details = launch.details;
        const flightNum = launch.flight_number;
        const article = launch.links.article_link;
        let linkOut = '';
        let localeDate = new Intl.DateTimeFormat('en-US',{
            month: '2-digit',
            day: '2-digit',
            year: 'numeric'
        }).format(date);

        if(article) {
            linkOut = <a href={article} target="_blank"><img src={link} alt="link" /></a>;
        }
        return(
            <tr>
                <td data-title="Badge"><img src={badge} alt={launch.mission_name} /></td>
                <td data-title="Rocket Name">{name}</td>
                <td data-title="Rocket Type">{type}</td>
                <td data-title="Launch Date">{localeDate}</td>
                <td className="details" data-title="Details">{details}</td>
                <td data-title="ID">{flightNum}</td>
                <td data-title="Article">{linkOut}</td>
            </tr>
        )
    }
}

export default LaunchRows