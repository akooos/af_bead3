import Ember from 'ember';

export default Ember.Controller.extend({
    actions:{
      signUp: function(formData){
           
            console.log("About to send data:" + formData);
            
            var user = this.store.createRecord(
                'user', formData );
            user.save();
            this.transitionToRoute('users.signin');
         
        }
    }
});
