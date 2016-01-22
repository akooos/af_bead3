import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions:{
     editUser: function(formData){
         console.log('Edit user');
         // console.log(formData);
            let user = this.get('model');
            
            user.setProperties(formData);
            return user.save().then(() => {
                this.transitionToRoute('users.list');
            });
     }
    }
});
