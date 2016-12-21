const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

const languages = [{
  title: 'json',
  arg: 'json',
}, {
  title: 'xml',
  arg: 'xml',
}]

const output = alfy.inputMatches(languages, 'title');
alfredNotifier();
alfy.output(output);

