import Ember from 'ember';

export default Ember.Controller.extend({
    
       
    actions:{
        
        removeClass : function(class_id,user_id){
            console.log('About to remove class ' + class_id + ' from ' + user_id );
        },
        newClass : function(formData){
             console.log("About to send class data:" + formData);
             
             
             
             console.log(this.get('model').user_id);
             var o = Object.assign(formData, { 'user': this.get('model').user_id } );
            var user = this.store.createRecord('class', o );
            var parent = this;
            user.save().then( function() { parent.transitionToRoute('users.view/'+this.get('model').user_id); } );
        },
        addClass : function(user_id){
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
