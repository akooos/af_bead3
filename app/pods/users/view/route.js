import Ember from 'ember';

export default Ember.Route.extend({
     
    messages:Ember.Object.create({}),
    
    

   /* beforeModel: function(){
        var mdl = super.get('model');
        console.log('----');
        console.log(mdl);
        console.log('----');   
    },
    model: function(){
        
     
     //   var cl = mdl.get('class');
       // return Ember.Object.create({ classes: cl, user_id: mdl.get('id') });
       return Ember.Object.create({ classes: [], user_id: this.user_id });
        
    }*/
   /*
    model: function(params) {
         
        var cls = this.store.findAll('class');
        console.log('-------------');
        console.log(params.user_id);
        this.store.findRecord('user', params.user_id  ).then( function (user)  {
                console.log('(1)Got user data!');
                var c = user.get('class');
                if ( c ){
                    console.log('(2.1) Get classes!');
                    c.then( (classes) => {
                        console.log('(3) Classes loaded!');
                        return  Ember.Object.create({
                            messages:[],
                            title:'Óráim',
                            myclasses:  classes,
                            'classes': cls,
                            'user_id':params.user_id
                        });
                    });   
                } else{
                    console.log('(2.2) Return empty ds!');
                        return Ember.Object.create({
                            title:'Tantárgyaim',
                            myclasses:  [],
                            'classes': [],
                            'user_id':params.user_id
                        });
                }

        });
     
     
         return  Ember.Object.create({
                            title:'Tantárgyaim',
                            myclasses:  [],
                            'classes': [],
                            'user_id':params.user_id
                        });
        
    }*/
    
});
