rabbitRoutes.route('/doctor', {
    name: "doctor",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "doctor"});
    },
    breadcrumb: {
        title: 'Doctor',
        parent:'home'
    }
});
rabbitRoutes.route('/doctorInsert', {
    name: "doctorInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "doctorInsert"});
    },
    breadcrumb: {
        title: 'Doctor Insert',
        parent:'doctor'
    }
});
rabbitRoutes.route('/doctorUpdate/:id', {
    name: "doctorUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "doctorUpdate"});
    },
    breadcrumb: {
        title: 'Doctor Update',
        parent:'doctor'
    }
});