// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({



  defaults: {
    numPlays: 0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.set( 'numPlays', this.get('numPlays')+1 );
    this.trigger('play', this);

    console.log(this.get('numPlays'));
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  ended: function(){
    this.trigger('ended', this);
  },
  delete: function(){
    this.trigger('delete', this);
  }

});
