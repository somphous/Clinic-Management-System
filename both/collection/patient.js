Collection.Patient = new Mongo.Collection('patient');
Schema.Patient = new SimpleSchema({
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
    birthDate: {
        type: Date,
        label: "Date Of Birth",
        autoform: {
            type: "bootstrap-datetimepicker",
            afFieldInput: {
                dateTimePickerOptions: {
                    format: 'DD/MM/YYYY',
                    pickTime: false
                }
            }
        }
    },
    telephone: {
        type: Number,
        label: "Telephone",
        optional: true
    }
});
Collection.Patient.attachSchema(Schema.Patient);