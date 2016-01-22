import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        
        addClass : function(formData){
            console.log("About to send class data:" + formData);
            var uid =  this.get('model').id;
            formData["user"] = uid ;
            
            
            var user = this.store.createRecord('class', formData );
            var parent = this;
            user.save().then( function() { parent.transitionToRoute('users.view',uid); } );
           /* 
            var user_id = $("#btnAddClass").prop('data-userid');
            
            Object.assign(data,{"user": user_id});
            console.log($("#btnAddClass"));
            console.log(user_id);
            return;
            var user = this.store.createRecord('class', data );
            var parent = this;
            user.save().then( function() { parent.transitionToRoute('classes.list'); } );*/
        }
        
    }
});
