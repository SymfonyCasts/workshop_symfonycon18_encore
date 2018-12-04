import Routing from '../Components/Routing';

export function getRepLogs() {
    return fetch(Routing.generate('rep_log_list'), {
        // is the new default value
        credentials: 'same-origin'
    })
        .then(response => {
            return response.json();
        });
}