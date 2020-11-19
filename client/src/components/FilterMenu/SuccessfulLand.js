import React from 'react';
import { connect } from 'react-redux';

import { filterSuccessLandings } from '../../actions';

class SuccessfulLand extends React.Component {

    handleClick(value) {

        if (this.props.successfulLand === value) {
            return this.props.filterSuccessLandings(null);
        }

        this.props.filterSuccessLandings(value);

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