import Ember from 'ember';

export default Ember.Controller.extend({
    messages:Ember.Object.create(),
    un:'',
    pw:'',
    actions:{
        signIn:function(){
            
            var msgs = [];
            console.log("Username:"+this.un);
            console.log("Password:"+this.pw);
            if ( this.un === '' ){
                msgs.push({text:'Felhasználónév nem lehet üres!',type:'warning'});
            }else
            if ( this.pw === '' ){
                msgs.push({text:'Jelszó nem lehet üres!',type:'warning'});
            }else
            {
                var parent = this;        
                this.store.query( 'user', { filter: {'username':this.un, 'password':this.pw} } ).then( function (result){
                    
                   if ( result.get('length') !== 0 ){
                        console.log(result.content[0]);
                        parent.transitionToRoute('users.view', encodeURI( result.content[0].id ) );    
                    } else{
                        parent.set('messages',[{text:'Nincs ilyen felhasználónév vagy jelszó!',type:'warning'}]);
                    }
                });
            
            }
            this.set('messages',msgs);
        }
        
    }
});
