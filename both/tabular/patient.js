TabularTables.Patient = new Tabular.Table({
    name: "Patient",
    collection: Collection.Patient,
    columns: [
        {data: "_id", title: "ID"},
        {data: "name", title: "Name"},
        {data: "gender", title: "Gender"},
        {
            data: "birthDate",
            title: "Date Of Birth",
            render: function(val,type,doc){
                if(val instanceof Date){
                    return moment(val).format('YYYY/MM/DD');
                }else{
                    return "Never";
                }
            }
        },
        {data: "telephone", title: "Telephone"},
        {
            title: "Action",
            tmpl: Meteor.isClient && Template.patientAction
        }
    ]
});