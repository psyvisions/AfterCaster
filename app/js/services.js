'use strict';

/* Services */

angular.module('ac.services', ['ngResource']).
  value('version', '0.1').
  factory('Block', function($resource) {
    var Block = $resource('http://www.corsproxy.com/blockchain.info/rawblock/:hash',
                        {}, {
                        'get': {method:'GET', cache: true},
                        'query': {method: 'GET', url: 'http://www.corsproxy.com/blockchain.info/blocks/0?format=json', isArray:false, cache: true},
                        'latest': {method: 'GET', url: 'http://www.corsproxy.com/blockchain.info/latestblock', isArray:false, cache: true}
                        });
    return Block;
  }).
  factory('Tx', function($resource) {
    var Tx = $resource('http://www.corsproxy.com/blockchain.info/rawtx/:hash',
                        {}, {
                        'get': {method:'GET', cache : true},
                        });
    return Tx;
  }).
  factory('Addr', function($resource) {
    var Addr = $resource('http://www.corsproxy.com/blockchain.info/rawaddr/:addr',
                        {}, {
                        'get': {method:'GET', cache : true},
                        });
    return Addr;
  });


