import React from 'react';
import { connect } from 'react-redux';

import { filterSuccessLaunches } from '../../actions';
import history from '../../history';

class SuccessfulLaunch extends React.Component {


    handleClick(value) {

        if (this.props.successfulLaunch === value) {
            return this.props.filterSuccessLaunches(null);
        }

        this.props.filterSuccessLaunches(value);

    }

    componentDidMount(){
        const params = new URLSearchParams(history.location.search);
        const launch_success = params.get('launch_success');

        if(launch_success){
            var boolValue = launch_success.toLowerCase() === 'true' ? true : false; 
            this.props.filterSuccessLaunches(boolValue);
            return;

        }
        
        this.props.filterSuccessLaunches(launch_success);
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