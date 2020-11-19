import React from 'react';
import { connect } from 'react-redux';

import { filterSuccessLaunches } from '../../actions';

class SuccessfulLaunch extends React.Component {


    handleClick(value) {

        if (this.props.successfulLaunch === value) {
            return this.props.filterSuccessLaunches(null);
        }

        this.props.filterSuccessLaunches(value);

    }

    render() {
        const success = this.props.successfulLaunch;

        return (
            <div>
                <h3>Successfull Launch</h3>
                <hr />
                <div className="btn-group">
                    <button
                        onClick={() => this.handleClick(true)}
                        className={(success === true) ? 'selected' : ''}
                    >
                        True
                        </button>
                    <button
                        onClick={() => this.handleClick(false)}
                        className={(success === false) ? 'selected' : ''}
                    >
                        False
                        </button>
                </div>
            </div>

        );
    }
}


const mapStateToProps = state => {
    return {
        successfulLaunch: state.successfulLaunch.successful
    }
}

export default connect(mapStateToProps, { filterSuccessLaunches })(SuccessfulLaunch);