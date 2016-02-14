TabularTables.Scheduler = new Tabular.Table({
    name: "Scheduler",
    collection: Collection.Scheduler,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "age", title: "Age"},
        {data: "telephone", title: "Telephone"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.schedulerAction
        }
    ]
});