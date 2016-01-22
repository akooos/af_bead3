import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
        newClass: function(formData){
            console.log("About to send class data:" + formData);
            var user = this.store.createRecord('class', formData );
            var parent = this;
            user.save().then( function() { parent.transitionToRoute('classes.list'); } );
        }
        
    }
});
