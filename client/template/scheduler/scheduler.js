Template.schedulerAction.events({
    'click .jsUpdate': function () {
        FlowRouter.go('schedulerUpdate', {id: this._id});
    },
    'click .jsRemove': function () {
        var self = this;
        alertify.confirm("Are you sure want to delete?",
            function () {
                Collection.Scheduler.remove({_id: self._id}); /// remove by _id?
                alertify.success('Deleted');
            },
            function () {
                alertify.error('Cancel');
            });
    }
});
Template.schedulerUpdate.helpers({
    data: function () {
        var id = FlowRouter.getParam('id');
        var scheduler = Collection.Scheduler.findOne({_id: id});
        return scheduler;
    }
});
//hook
AutoForm.hooks({
        schedulerInsert:{//id autoform
            before:{
                insert:function(doc){
                    doc._id=idGenerator.gen(Collection.Scheduler, 3);
                    return doc;
                }
            },
            //    onSuccess(formType, id){
            //        //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            //        alertify.alert('Successfully Added');
            //        FlowRouter.go('scheduler');
            //    },
            //    onError(formType, error){
            //        alertify.error(error.message);
            //        //Bert.alert(error.message, 'danger', 'growl-top-right');
            //    }
            //},
            //schedulerUpdate:{//id autoform
            //    onSuccess(formType, id){
            //        //Bert.Alert('Successfully Added', 'success', 'growl-top-right');
            //        alertify.alert('Successfully Added');
            //        FlowRouter.go('scheduler');
            //    },
            //    onError(formType, error){
            //        alertify.error(error.message);
            //        //Bert.alert(error.message, 'danger', 'growl-top-right');
            //    }
        }
    }
)


