import Ember from 'ember';
//import BaseRoute from '../../application/route';

export default Ember.Route.extend({
    
    
    model: function() {
     return  {
          messages:[],
          title:'Regisztráció'
      };
    },
    
  
});

