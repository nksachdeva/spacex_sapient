import React from 'react';
import { connect } from 'react-redux';

import { filterSuccessLaunches } from '../../actions';
import './FilterMenu.css';
import SuccessfulLaunch from './SuccessfulLaunch';
import SuccessfulLand from './SuccessfulLand';
import LaunchYear from './LaunchYear';

class FilterMenu extends React.Component {



    render() {

        return (
            <div>
                <LaunchYear launches={this.props.launches} />
                <SuccessfulLaunch />
                <SuccessfulLand />

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        successfulLaunch: state.successfulLaunch.successful,
        launches: state.launches
    }
}

export default connect(mapStateToProps, { filterSuccessLaunches })(FilterMenu);