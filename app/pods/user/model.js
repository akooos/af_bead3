import DS from 'ember-data';

const UserModel = DS.Model.extend({
    username:DS.attr('string'),
    password:DS.attr('string'),
    surname:DS.attr('string'),
    forename:DS.attr('string'),
    email:DS.attr('string'),
    "class":DS.hasMany('class', {inverse: 'user',async: true})
    
});

/*
UserModel.reopenClass({
    FIXTURES: [
        {
            id: 1,
            username:'tesztelek',
            password:'',
            surname:'Teszt',
            forename:'Elek',
            email:'tesztelek@gmail.com',
            role:'user'
            
        },    
        {
            id: 2,
            username:'gipszjakab',
            password:'',
            surname:'Gibsz',
            forename:'Jakab',
            email:'gibszjakab@gmail.com',
            role:'user'
        },    
        {
            id: 3,
            username:'admin',
            password:'',
            surname:'',
            forename:'admin',
            email:'admin@gmail.com',
            role:'admin'
        },    
    ]
});
*/
export default UserModel;