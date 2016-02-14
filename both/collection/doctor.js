Collection.Doctor = new Mongo.Collection('doctor');
Schema.Doctor = new SimpleSchema({
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
    specialize: {
        type: String,
        label: "Specialize"
    },
    telephone: {
        type: Number,
        label: "Telephone",
        optional: true
    }
});
Collection.Doctor.attachSchema(Schema.Doctor);