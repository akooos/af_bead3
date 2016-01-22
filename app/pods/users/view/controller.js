import Ember from 'ember';

export default Ember.Controller.extend({
    
       
    actions:{
        
        removeClass : function(class_id,user_id){
            console.log('About to remove class ' + class_id + ' from ' + user_id );
             var parent = this;
             this.store.find('class', class_id).then(function (cl) {
            
                 cl.set("user",null);
                 cl.save().then( function() { parent.transitionToRoute('users.view',user_id); } );
            
            });
        },
      /*  newClass : function(formData){
             console.log("About to send class data:" + formData);
             var uid = $("#btnAddClass").prop('data-userid');
             
             
             console.log(uid);
             var o = Object.assign(formData, { 'user': uid } );
            var user = this.store.createRecord('class', o );
            var parent = this;
            user.save().then( function() { parent.transitionToRoute('users.view/'+uid); } );
        },*/
      /*  addClass : function(user_id){
         
            var user_id = $("#btnAddClass").prop('data-userid');
            
            Object.assign(data,{"user": user_id});
            console.log($("#btnAddClass"));
            console.log(user_id);
            return;
            var user = this.store.createRecord('class', data );
            var parent = this;
            user.save().then( function() { parent.transitionToRoute('classes.list'); } );
        }*/
    }
});
