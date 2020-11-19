import React from 'react';



class Card extends React.Component {

    renderMissionIds(launch) {

        return launch.mission_id.map((id, index) => {
            return <li key={index}>{id}</li>
        })
    }

    render() {

        const launch = this.props.launch;

        let landSuccess = launch.rocket.first_stage.cores[0].land_success;
        if (landSuccess === null) {
            landSuccess = 'NA';
        } else {
            landSuccess = landSuccess ? 'Yes' : 'No';
        }

        return (
            <div>
                <div className="image">
                    <img src={launch.links.mission_patch_small} alt={launch.mission_name} />
                </div>
                <div>
                    <h4><b>{launch.mission_name + '#' + launch.flight_number}</b></h4>
                    <div>
                        <h4 style={{ display: "inline" }}>Mission Ids:</h4>
                        {launch.mission_id.length ? <ul>{this.renderMissionIds(launch)}</ul> : 0}
                    </div>
                    <div>
                        <h4 style={{ display: "inline" }}>Launch Year:</h4>
                        {launch.launch_year}
                    </div>
                    <div>
                        <h4 style={{ display: "inline" }}>Successful Launch:</h4>
                        {launch.launch_success ? "Yes" : "No"}
                    </div>
                    <div>
                        <h4 style={{ display: "inline" }}>Successful Landing:</h4>
                        {landSuccess}
                    </div>

                </div>
            </div>
        );
    }
}

export default Card;