TabularTables.Patient = new Tabular.Table({
    name: "Patient",
    collection: Collection.Patient,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {data: "age", title: "Age"},
        {data: "telephone", title: "Telephone"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.patientAction
        }
    ]
});