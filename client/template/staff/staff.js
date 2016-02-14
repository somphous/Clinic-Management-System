Template.staffAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('staffUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Staff.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
Template.staffUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var staff = Collection.Staff.findOne({_id: id});
        return staff;
    }
});
//hook
AutoForm.hooks({
        staffInsert:{//id autoform
            before:{
                insert:function(doc){
                    doc._id=idGenerator.gen(Collection.Staff, 3);
                    return doc;
                }
            },
            //    onSuccess(formType, id){
            //        //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            //        alertify.alert('Successfully Added');
            //        FlowRouter.go('staff');
            //    },
            //    onError(formType, error){
            //        alertify.error(error.message);
            //        //Bert.alert(error.message, 'danger', 'growl-top-right');
            //    }
            //},
            //staffUpdate:{//id autoform
            //    onSuccess(formType, id){
            //        //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            //        alertify.alert('Successfully Added');
            //        FlowRouter.go('staff');
            //    },
            //    onError(formType, error){
            //        alertify.error(error.message);
            //        //Bert.alert(error.message, 'danger', 'growl-top-right');
            //    }
        }
    }
)


