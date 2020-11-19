import React from 'react';
import { connect } from 'react-redux';

import LaunchCard from './LaunchCard';
import { fetchLaunches } from '../actions';

import './LaunchList.css'

class LaunchList extends React.Component {

    state = { loading: true }

    componentDidMount() {

        this.props.fetchLaunches();
    }

    componentDidUpdate() {
        if(this.state.loading) this.setState({ loading: false });
    }

    renderCards(launches) {

        return launches.map((launch, index) => {
            return <LaunchCard key={index} launch={launch} />
        })

    }

    render() {

        if (this.state.loading) {
            return <div>Loading.....</div>
        }
        return (
            <div className="grid">
                {this.renderCards(this.props.launches)}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        launches: Object.values(state.launches)
    }
}

export default connect(mapStateToProps, { fetchLaunches })(LaunchList);