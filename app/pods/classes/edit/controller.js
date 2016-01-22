import Ember from 'ember';

export default Ember.Controller.extend({
    messages:Ember.Object.create({}),
    actions: {
        editClass: function(formData){
            console.log('Editing class..');
             // console.log(formData);
            let cl = this.get('model');
            
            cl.setProperties(formData);
            return cl.save().then(() => {
                this.transitionToRoute('classes.list');
            });
        }
        
        
        
    }
});
