import Ember from 'ember';

export default Ember.Controller.extend({
    
     actions:{
        
        delUser:function(userId){
            var parent = this;
            this.store.find('user', userId).then(function (user) {
              console.log("About to delete user:"+userId);
              user.deleteRecord();
              user.get('isDeleted'); 
              return user.save().then(() => {
                    
                    parent.transitionToRoute('users.list');
                });
              
            });
            
        }
        
    }
});
