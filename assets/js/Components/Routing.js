const routes = require('../../../var/fos_js_routes.json');
import Routing from '../../../vendor/friendsofsymfony/jsrouting-bundle/Resources/public/js/router.min.js';

Routing.setRoutingData(routes);

fetch('/js/routing.json').then(Response => {
    Response.json().then(data => {
        Routing.setRoutingData(routes);
    });
});

export default Routing;
