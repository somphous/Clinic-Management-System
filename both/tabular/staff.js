TabularTables.Staff = new Tabular.Table({
    name: "Staff",
    collection: Collection.Staff,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "age", title: "age"},
        {data: "responsibility", title: "Responsibility"},
        {data: "telephone", title: "Telephone"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.staffAction
        }
    ]
});