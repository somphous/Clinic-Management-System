Template.patientAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('patientUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Student.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
Template.patientUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var patient = Collection.Student.findOne({_id: id});
        return patient;
    }
});
//hook
AutoForm.hooks({
        patientInsert:{//id autoform
            before:{
                insert:function(doc){
                    doc._id=idGenerator.gen(Collection.Patient, 3);
                    return doc;
                }
            },
                onSuccess(formType, id){
                    //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                    alertify.alert('Successfully Added');
                    FlowRouter.go('patient');
                },
                onError(formType, error){
                    alertify.error(error.message);
                    //Bert.alert(error.message, 'danger', 'growl-top-right');
                }
            },
            patientUpdate:{//id autoform
                onSuccess(formType, id){
                    //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
                    alertify.alert('Successfully Added');
                    FlowRouter.go('patient');
                },
                onError(formType, error){
                    alertify.error(error.message);
                    //Bert.alert(error.message, 'danger', 'growl-top-right');
                }
        }
    }
)

