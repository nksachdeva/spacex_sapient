import React from 'react';
import { connect } from 'react-redux';

import { fetchLaunches, filterByYear } from '../../actions';
import history from '../../history'


class LaunchYear extends React.Component {

    handleClick(value) {

        if (value === this.props.year) {

            return this.props.filterByYear(null);

        } 

        this.props.filterByYear(value);
    }

    componentDidUpdate(){
        this.props.fetchLaunches();
    }

    renderYears(launches) {

        const params = new URLSearchParams(history.location.search);
        const selected_year = params.get('launch_year');

        const years = Array(15).fill(2006).map((item, i) => item + i)

        return years.map((year, index) => {
            return <button
                key={index}
                onClick={() => this.handleClick(year)}
                className={(year === this.props.year) ? 'selected' : ''}
            >
                {year}
            </button>
        });
    }

    render() {
        return (
            <div>
                <h3>Launch Year</h3>
                <hr />
                <div className="btn-group">
                    {this.renderYears(this.props.launches)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        year: state.year.year
    }
}

export default connect(mapStateToProps, { fetchLaunches, filterByYear })(LaunchYear);