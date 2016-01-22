import Ember from 'ember';

export default Ember.Route.extend({
    
    
    model: function() {
     return  {
          messages:[],
          title:'Bejelentkezés'
      };
    },
    
});
