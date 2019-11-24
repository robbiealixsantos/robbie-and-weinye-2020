import React, { Component } from 'react';
import Moment from 'moment';

export class RSVP extends Component {
    static displayName = RSVP.name;

    constructor(props) {
        super(props);
        this.state = { RSVPs: [], loading: true };

        fetch('api/RSVP/RSVPs', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ RSVPs: data, loading: false });
            });
    }

    static renderRSVPsTable(RSVPs) {
        return (
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>RSVP Count</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    {RSVPs.map(rsvp =>
                        <tr key={rsvp.email}>
                            <td>{Moment(rsvp.createdDate).format('MMM Do YY')}</td>
                            <td>{rsvp.name}</td>
                            <td>{rsvp.rsvpCount}</td>
                            <td>{rsvp.comment}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : RSVP.renderRSVPsTable(this.state.RSVPs);

        return (
            <div>
                <h1>RSVPs</h1>
                {contents}
                <a href="/">Home</a>
            </div>
        );
    }
}
