import React, { Component } from 'react';
import '../less/Controls.css';
import refresh from '../assets/images/refresh.svg';
import checkmark from '../assets/images/checkmark.svg';

class Controls extends Component {
    constructor(props) {
        super(props);
        this.handleRefresh = this.handleRefresh.bind(this);
        this.handleLandedChange = this.handleLandedChange.bind(this);
        this.handleReusedChange = this.handleReusedChange.bind(this);
        this.handleRedditChange = this.handleRedditChange.bind(this);
    }

    handleRefresh = (e) => {
        this.props.onRefresh();
    }

    handleLandedChange = (e) => {
        this.props.onLandedChange(e.target.checked);
    }

    handleReusedChange = (e) => {
        this.props.onReusedChange(e.target.checked);
    }

    handleRedditChange = (e) => {
        this.props.onRedditChange(e.target.checked);
    }

  render() {
    return (
        <div className="controls">
            <button onClick={this.handleRefresh}><img src={refresh} alt="refresh" /></button>
            <div className="checkboxes">
                <div className="checkbox">
                    <input 
                    type="checkbox"
                    checked={this.props.landedOnly}
                    onChange={this.handleLandedChange}
                    id="landSuccess" />
                    <label htmlFor="landSuccess">Land Success</label>
                </div>
                <div className="checkbox">                
                    <input 
                    type="checkbox"
                    checked={this.props.reused}
                    onChange={this.handleReusedChange}
                    id="reused" />
                    <label htmlFor="reused">Reused</label>
                </div>
                <div className="checkbox">
                    <input 
                    type="checkbox"
                    checked={this.props.hasReddit}
                    onChange={this.handleRedditChange}
                    id="withReddit" />
                    <label htmlFor="withReddit">With Reddit</label>
                </div>    
            </div>
        </div>
    )
  }
}

export default Controls