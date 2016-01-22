import Ember from 'ember';

export default Ember.Component.extend({
    validationErrors: Ember.Object.create(),
    
    actions: {
        submit() {
            if ( this.validate()) {
                return;
            }
            
            this.get('onSave')({
                name: this.$('#name').val(),
                dayOfWeek: this.$('#dayOfWeek').val(),
                hour: this.$('#hour').val(),
                length: this.$('#length').val()
            });
            
            $('.modal').modal('hide');
        }
    },
    
    validate() {
        
        var isInt = function(number){ 
                return /^\+?\d+$/.test(number);
        };
        
        var name = this.$('#name').val();
        var dayOfWeek = this.$('#dayOfWeek').val();
        var hour =  this.$('#hour').val();
        var length = this.$('#length').val();
        
        var hasError = false;
        
        this.set('validationErrors.name','');
        this.set('validationErrors.dayOfWeek','');
        this.set('validationErrors.hour','');
        this.set('validationErrors.length','');
        
        if ( name === '' ){
            this.set('validationErrors.name',  'Név megadása kötelező!' );
            hasError |= true;
        }
            
        if ( dayOfWeek === '' ){
            this.set('validationErrors.dayOfWeek', 'Hét napjának megadása kötelező!' );
            hasError |= true;
        }else if( !isInt(dayOfWeek) ){
            this.set('validationErrors.dayOfWeek', 'Hét napja legyen egész szám!' );
            hasError |= true;
        }else if( dayOfWeek > 7 || dayOfWeek < 1 ){
            this.set('validationErrors.dayOfWeek', 'Hét napja legyen egy és hét között!' );
            hasError |= true;
        }
        
        if ( hour === '' ){
            this.set('validationErrors.hour', 'Óra(időpont) megadása kötelező!' );
            hasError |= true;
        }else if( !isInt(hour) ){
            this.set('validationErrors.hour', 'Óra(időpont) legyen egész szám, és 0 és 24 között!' );
            hasError |= true;
        }else if( hour > 24 || hour < 0 ){
            this.set('validationErrors.hour', 'Óra(időpont) legyen 0 és 24 között!' );
            hasError |= true;
        }
        
        if ( length === '' ){
            this.set('validationErrors.length', 'Hosszúság megadása kötelező!' );
            hasError |= true;
        }else if( isNaN(length) ){
            this.set('validationErrors.length', 'Hosszúság legyen egész szám, és 0 és 24 között!' );
            hasError |= true;
        }else if( length > 24 || length < 1 ){
            this.set('validationErrors.length', 'Hosszúság legyen 1 és 24 között!' );
            hasError |= true;
        }
        
        return hasError;
    },
    clean: function(){
       $("#name").val('');
       $("#dayOfWeek").val('');
       $("#hour").val('');
       $("#length").val('');
    }
    
});
