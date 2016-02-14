rabbitRoutes.route('/staff', {
    name: "staff",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "staff"});
    },
    breadcrumb: {
        title: 'Staff',
        parent:'home'
    }
});
rabbitRoutes.route('/staffInsert', {
    name: "staffInsert",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "staffInsert"});
    },
    breadcrumb: {
        title: 'Staff Insert',
        parent:'staff'
    }
});
rabbitRoutes.route('/staffUpdate/:id', {
    name: "staffUpdate",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "staffUpdate"});
    },
    breadcrumb: {
        title: 'Staff Update',
        parent:'staff'
    }
});