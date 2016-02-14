Collection.Scheduler = new Mongo.Collection('scheduler');
Schema.Scheduler = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    gender: {
        type: String,
        label: "Gender",
        autoform: {
            type: "select",
            options: function () {
                return [
                    {label: "Male", value: 'M'},
                    {label: "Female", value: 'F'}
                ];
            }
        }
    },
    age: {
        type: Number,
        label: "Age",
        optional: true
    },
    telephone: {
        type: Number,
        label: "Telephone",
        optional: true
    }
});
Collection.Scheduler.attachSchema(Schema.Scheduler);