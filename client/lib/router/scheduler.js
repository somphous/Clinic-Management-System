rabbitRoutes.route('/scheduler', {
    name: "scheduler",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "scheduler"});
    },
    breadcrumb: {
        title: 'Scheduler',
        parent:'home'
    }
});
rabbitRoutes.route('/schedulerInsert', {
    name: "schedulerInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "schedulerInsert"});
    },
    breadcrumb: {
        title: 'Scheduler Insert',
        parent:'scheduler'
    }
});
rabbitRoutes.route('/schedulerUpdate/:id', {
    name: "schedulerUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "schedulerUpdate"});
    },
    breadcrumb: {
        title: 'Scheduler Update',
        parent:'scheduler'
    }
});