/*************************************************
 * Copyright (c) 2015 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

import route from './list.route';
import controller from './list.controller';

export default
    angular.module('notificationsList', [])
        .controller('notificationsListController', controller)
        .run(['$stateExtender', function($stateExtender) {
            $stateExtender.addState(route);
        }]);
