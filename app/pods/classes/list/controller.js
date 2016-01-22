import Ember from 'ember';

export default Ember.Controller.extend({
    
    actions:{
        
        delClass: function(classId){
             var parent = this;
            this.store.find('class', classId).then(function (classObject) {
              console.log("About to delete class:"+classId);
              classObject.deleteRecord();
              // Vicceset csinál -> classObject.unloadRecord();
              // Nincs-> classObject.dematerializeRecord();
              // Nem jóóó-> this.store.dematerializeRecord(this.model);
              // class.get('isDeleted'); 
              return classObject.save().then(() => {
                    
                    parent.transitionToRoute('classes.list');
                });
              
            });
        }
        
    }
});
