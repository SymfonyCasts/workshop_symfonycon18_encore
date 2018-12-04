import Routing from '../Components/Routing';

export function getRepLogs() {
    return fetch(Routing.generate('rep_log_list'))
        .then(response => {
            return response.json();
        });
}