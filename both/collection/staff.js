Collection.Staff = new Mongo.Collection('staff');
Schema.Staff = new SimpleSchema({
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
    responsibility: {
        type: String,
        label: "Responsibility"
    },
    telephone: {
        type: Number,
        label: "Telephone",
        optional: true
    },
    age: {
        type: Number,
        label: "Age",
        optional: true
    }
});
Collection.Staff.attachSchema(Schema.Staff);