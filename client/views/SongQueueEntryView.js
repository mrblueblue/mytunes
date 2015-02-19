// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'enqueue': function() {
      console.log(this)
      this.model.render();
    },

    'click': function(event){
      this.model.delete();
      // this.get('songQueue').add(song);
      //console.dir(this.model.get('songQueue'))
      // this.$el.remove();
      // var index = this.model.collection.models.indexOf(this.model)
      // console.dir(this.model)
      // console.dir(this.model.collection.models.indexOf(this.model));
      // this.model.collection.models.splice(0,1)
      // console.dir(this.model.collection.models)
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }


});

///When library song is clicked ---> enqueue, then play from queue (if less than 1)
//
