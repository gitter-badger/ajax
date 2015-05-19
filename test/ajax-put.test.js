;(function ( root, factory ) {
  'use strict';
  /* istanbul ignore next */
  if ( typeof define === 'function' && define.amd ) {
    define([ 'chai.should', 'chai.expect', 'ajax' ], factory );
  }
  else if ( typeof exports === 'object' ) {
    exports = module.exports = factory(
      require( 'chai' ).should(),
      require( 'chai' ).expect,
      require( '../src/ajax' )
    );
  }
  else {
    root.testAjax = factory( root.chai.should(), root.chai.expect, root.ajax );
  }
})(this, function( should, expect, ajax ) {
  'use strict';

  describe( '#AJAX - Test `put` method', function() {
    it( 'Put error', function( done ) {
      ajax.put( 'http://localhost:3000/user/bla' ).error( function() {
        done();
      });
    });
  });
});