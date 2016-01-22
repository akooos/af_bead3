import DS from 'ember-data';
/*
export default DS.RESTAdapter.extend({
    
});
*/
export default DS.JSONAPIAdapter.extend({
    //http://af-bead3-rest-akooos.c9users.io"
    host: 'http://af-bead3-rest-akooos.c9users.io',
    namespace: '',
    
    shouldReloadAll() {
        return true;
    },
    shouldBackgroundReloadRecord(){
        return true;
    }
   
});

