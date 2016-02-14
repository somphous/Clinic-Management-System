rabbitRoutes.route('/patient', {
    name: "patient",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "patient"});
    },
    breadcrumb: {
        title: 'Patient',
        parent:'home'
    }
});
rabbitRoutes.route('/patientInsert', {
    name: "patientInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "patientInsert"});
    },
    breadcrumb: {
        title: 'Patient Insert',
        parent:'patient'
    }
});
rabbitRoutes.route('/patientUpdate/:id', {
    name: "patientUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "patientUpdate"});
    },
    breadcrumb: {
        title: 'Patient Update',
        parent:'patient'
    }
});