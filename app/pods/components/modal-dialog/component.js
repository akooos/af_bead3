import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    ok: function() {
         this.$('.modal').modal('hide');
         this.sendAction('ok');
        }
    },
   /* showModal: function(){
         this.toggleProperty('isModalShown');
    }.observes('sm'),*/
    didInsertElement: function() {
        this.$('.modal').modal().on('hidden.bs.modal', function() {
        this.sendAction('close');
        }.bind(this));
        
       console.log('ModalDialog::onShowModal event hooked!');
      // this.get('controller').on('onShowModal', this, this.showModal);
       
    },
    
   /* willClearRender: function(){
        this.get('controller').off('onShowModal', this, this.showModal);
    }*/
    
});
