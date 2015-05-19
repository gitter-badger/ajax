;(function ( should, Ajax ) {
  'use strict';

  describe( '#AJAX - Test module interface', function() {
    it( 'Should have `get`, `post`, `put` and `delete` methods', function() {
      ajax.should.have.property( 'get' );
      ajax.should.have.property( 'post' );
      ajax.should.have.property( 'put' );
      ajax.should.have.property( 'delete' );
    });

    it( 'Should methods have a promise `done`, `error` and `always`',
    function() {
      var methods = [ 'get', 'post', 'put', 'delete' ];
      methods.forEach(function( method ) {
        ajax[ method ]().should.have.property( 'done' );
        ajax[ method ]().should.have.property( 'error' );
        ajax[ method ]().should.have.property( 'always' );
      });
    });

  });
})( window.chai.should(), window.ajax );