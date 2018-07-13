#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'securedPasswordID',
    message:
      'password secured using bcryptjs at beginning of program. This is used to identify a unique user'
  },
  {
    type: 'input',
    name: 'pgpPublicKey',
    message: 'Users Public Key'
  },
  {
    type: 'input',
    name: 'signedMessage',
    message: 'a message signed by the user private key'
  }
];
