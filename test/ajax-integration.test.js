;(function ( should, Ajax ) {
  'use strict';

  describe( '#AJAX - Integration tests', function() {
    function postResponse( name, done ) {
      return function( response, xhr ) {
        response.should.be.an.object;
        response.name.should.be.equal( name );
        done();
      };
    }

    it( 'Should `get` method return by `done` promise an object from /users',
    function(done) {
      ajax.get( 'http://127.0.0.1:3000/api/users' ).done(function( response ) {
        response.should.be.an.object;
        done();
      });
    });

    it([
      'Should `get` method return by `error` promise the xhr.status 404',
      'from /everything'
    ].join( ' ' ), function( done ) {
      ajax.get( 'http://127.0.0.1:3000/everything' )
      .error(function( response, xhr ) {
        xhr.status.should.be.equal( 404 );
        done();
      });
    });

    it([
      'Should `post` method return by `done` and `always` method data about',
      '`joao` when pass { slug: \'joao\' } as data'
    ].join( ' ' ), function( done ) {
      ajax.post( 'http://127.0.0.1:3000/api/user', { slug: 'joao' })
        .done( postResponse( 'João da Silva', done ) )
        .always( postResponse( 'João da Silva', done ) );
    });

    it([
      'Should `post` method return by `done` and `always` methods, data about',
      '`maria` when pass slug from url'
    ].join( ' ' ), function( done ) {
      ajax.post( 'http://127.0.0.1:3000/api/user/maria' )
        .done( postResponse( 'Maria Firmina', done ) )
        .always( postResponse( 'Maria Firmina', done ) );
    });

    it([
      'Should `post` method return by `done` and `always` methods, data about',
      '`paulo` when pass slug like a query string'
    ].join( ' ' ), function( done ) {
      ajax.post( 'http://localhost:3000/api/user', 'slug=paulo' )
      .always( postResponse( 'Paulo Torres', done ) )
      .done( postResponse( 'Paulo Torres', done ) );
    });
  });
})( window.chai.should(), window.ajax );