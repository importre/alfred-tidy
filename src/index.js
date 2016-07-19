const alfy = require('alfy');

const languages = [{
  title: 'json',
  arg: 'json',
}, {
  title: 'xml',
  arg: 'xml',
}]

const output = alfy.inputMatches(languages, 'title');
alfy.output(output);

