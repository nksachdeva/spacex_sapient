import React from 'react';
import { connect } from 'react-redux';

import { filterSuccessLandings } from '../../actions';
import history from '../../history';

class SuccessfulLand extends React.Component {

    handleClick(value) {

        if (this.props.successfulLand === value) {
            return this.props.filterSuccessLandings(null);
        }

        this.props.filterSuccessLandings(value);

    }

    componentDidMount() {
        const params = new URLSearchParams(history.location.search);
        const land_success = params.get('land_success');

        if (land_success) {
            const boolValue = land_success.toLowerCase() === 'true' ? true : false;
            this.props.filterSuccessLandings(boolValue);
            return;
        }


        this.props.filterSuccessLandings(land_success);
    }

    render() {
        const success = this.props.successfulLand;

        return (
            <div>
                <h3>Successfull Landing</h3>
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
        successfulLand: state.successfulLand.successful
    }
}

export default connect(mapStateToProps, { filterSuccessLandings })(SuccessfulLand);