// Allows us to use ES6 in our migrations and tests.
require('babel-register')

// Edit truffle.config file should have settings to deploy the contract to the Rinkeby Public Network.
// Infura should be used in the truffle.config file for deployment to Rinkeby.

const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },

    rinkeby: {
      provider: () => new HDWalletProvider(
        'spike toddler sausage point okay effort dune say crew burger rack insane', 
        'https://rinkeby.infura.io/v3/f93d42eddcc6461fb2de277abe40ee8a'),
      network_id: '4',
      gas: 4500000,        //
      gasPrice: 10000000000,  
    },
  }
}
