import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  dayOfWeek: DS.attr('number'),
  hour: DS.attr('number'),
  length: DS.attr('number'),
  user: DS.belongsTo('user',{inverse:'class',async: true})
   
});
