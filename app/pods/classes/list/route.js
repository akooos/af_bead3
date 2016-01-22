import Ember from 'ember';

export default Ember.Route.extend({
    model : function(){
        
         return {'classes':this.store.findAll('class')};
    }
});
