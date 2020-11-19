
import history from '../history';
import launches from '../apis/launches';

export const filterSuccessLaunches = (successful) => {

    const params = new URLSearchParams(history.location.search);
    const queryValue = params.get('launch_success');

    let queryString = history.location.search;
    const paramIndex = queryString.indexOf('launch_success');


    let subString = queryValue !== null ? `${queryString.substr(paramIndex - 1, 1)}launch_success=${queryValue}` : "";

    if (successful === null) {
        queryString = queryString.replace(subString, '');
    } else {

        if (!queryString) {
            queryString = `?launch_success=${successful}`;
        } else {
            if (paramIndex > 0) {
                queryString = queryString.replace(subString.substr(1), `launch_success=${successful}`);
            } else {
                queryString = `${queryString}&launch_success=${successful}`;
            }


        }
    }

    history.push(queryString);

    return {
        type: 'FILTER_LAUNCH',
        payload: successful
    }
}

export const filterSuccessLandings = (successful) => {

    const params = new URLSearchParams(history.location.search);
    const queryValue = params.get('land_success');

    let queryString = history.location.search;
    const paramIndex = queryString.indexOf('land_success');


    let subString = queryValue !== null ? `${queryString.substr(paramIndex - 1, 1)}land_success=${queryValue}` : "";

    if (successful === null) {
        queryString = queryString.replace(subString, '');
    } else {

        if (!queryString) {
            queryString = `?land_success=${successful}`;
        } else {
            if (paramIndex > 0) {
                queryString = queryString.replace(subString.substr(1), `land_success=${successful}`);
            } else {
                queryString = `${queryString}&land_success=${successful}`;
            }


        }
    }

    history.push(queryString);

    return {
        type: 'FILTER_LAND',
        payload: successful
    }
}

export const filterByYear = (year) => {
    let queryString = history.location.search;
    const paramIndex = queryString.indexOf('launch_year');

    let subString = "";
    if (paramIndex > 0) {
        subString = queryString.substr(paramIndex - 1, 17);
    }

    if (year == null) {
        queryString = queryString.replace(subString, '');

    } else {

        if (!queryString) {
            queryString = `?launch_year=${year}`;
        } else {
            if (paramIndex > 0) {
                queryString = queryString.replace(subString.substr(1), `launch_year=${year}`);
            } else {
                queryString = `${queryString}&launch_year=${year}`;
            }


        }
    }

    history.push(queryString);

    return {
        type: 'FILTER_YEAR',
        payload: year
    }
}


export const fetchLaunches = () => async dispatch => {
    const filterString = history.location.search.replace('?', '&');

    launches.get(`/${filterString}`)
        .then(response => {
            console.log(response.data)
            dispatch({
                type: 'FETCH_LAUNCHES',
                payload: response.data
            })
        });
}



