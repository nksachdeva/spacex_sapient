import React from 'react';

import LaunchList from './LaunchList';
import FilterMenu from './FilterMenu/FilterMenu';   
import './App.css';


class App extends React.Component {


    render() {

        return (
            <div className="app-container">
                <h1>SpaceX Launch Programs</h1>
                <div className="row container">
                    <div className="menu col-1">
                        <FilterMenu />
                    </div>
                    <div className="col-4">
                        <LaunchList />
                    </div>
                </div>
            </div>
        );
    }
}


export default App;