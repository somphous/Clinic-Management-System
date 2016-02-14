Template.doctorAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('doctorUpdate', {id: this._id});
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
Template.doctorUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var doctor = Collection.Student.findOne({_id: id});
        return doctor;
    }
});
//hook
AutoForm.hooks({
        doctorInsert:{//id autoform
            before:{
                insert:function(doc){
                    doc._id=idGenerator.gen(Collection.Patient, 3);
                    return doc;
                }
            },
            //    onSuccess(formType, id){
            //        //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            //        alertify.alert('Successfully Added');
            //        FlowRouter.go('doctor');
            //    },
            //    onError(formType, error){
            //        alertify.error(error.message);
            //        //Bert.alert(error.message, 'danger', 'growl-top-right');
            //    }
            //},
            //doctorUpdate:{//id autoform
            //    onSuccess(formType, id){
            //        //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            //        alertify.alert('Successfully Added');
            //        FlowRouter.go('doctor');
            //    },
            //    onError(formType, error){
            //        alertify.error(error.message);
            //        //Bert.alert(error.message, 'danger', 'growl-top-right');
            //    }
        }
    }
)


