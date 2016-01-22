import Ember from 'ember';

export default Ember.Component.extend({
    validationErrors: Ember.Object.create(),
  
    actions: {
        submit() {
            if ( this.validate()) {
                return;
            }
            
            this.get('onSave')({
               username: this.$('#username').val(),
                password: this.$('#password').val(),
                forename: this.$('#forename').val(),
                surname : this.$('#surname').val(),
                email   : this.$('#email').val()
            });
            
            $('.modal').modal('hide');
            //this.clean();
        }
    },
    
    validate() {
        var isEmailFormat = function(txt){ 
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(txt);
        };
        
        var username= this.$('#username').val();
        var password= this.$('#password').val();
        var forename= this.$('#forename').val();
        var surname = this.$('#surname').val();
        var email   = this.$('#email').val();
        
        var hasError = false;
        
        this.set('validationErrors.username','');
        this.set('validationErrors.password','');
        this.set('validationErrors.forename','');
        this.set('validationErrors.surname','');
        this.set('validationErrors.email','');
        
        if ( username === '' ){
            this.set('validationErrors.username',  'Felhasználónév megadása kötelező!' );
            hasError |= true;
        }
            
        if ( password === '' ){
            this.set('validationErrors.password', 'Jelszó megadása kötelező!' );
            hasError |= true;
        }
        if ( forename === '' ){
            this.set('validationErrors.forename', 'Keresztnév megadása kötelező!' );
            hasError |= true;
        }
        if ( surname === '' ){
            this.set('validationErrors.surname', 'Vezetéknév megadása kötelező!' );
            hasError |= true;
        }
        if ( email === '' ){
            this.set('validationErrors.email', 'E-mail megadása kötelező!' );
            hasError |= true;
        }else if ( !isEmailFormat(email) ){
            this.set('validationErrors.email', 'Nem e-mail formátum!' );
            hasError |= true;
        }
        return hasError;
    },
    clean: function(){
       console.log('onShowModal event: cleaning textedits!');
       $("#password").val('');
       $("#username").val('');
       $("#forename").val('');
       $("#email").val('');
    }
  /* didInsertElement: function () {
       console.log('AoEUserForm::onShowModal event hooked!');
       this.get('controller').on('onShowModal', this, this.clean);
    }*/
    
});
