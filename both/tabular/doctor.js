TabularTables.Doctor = new Tabular.Table({
    name: "Doctor",
    collection: Collection.Doctor,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "specialize", title: "Specialize"},
        {data: "telephone", title: "Telephone"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.patientAction
        }
    ]
});