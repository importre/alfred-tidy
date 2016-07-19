const cp = require('child_process');
const got = require('got');
const alfy = require('alfy');

const baseUrl = 'https://api.github.com/gists';

function sendGist(data, ext) {
  if (data === '') return;

  const payload = {
    'description': 'alfred-tidy',
    'public': false,
    'files': {},
  };

  const filename = `output.${ext}`;
  payload.files[filename] = {
    'content': data,
  };

  const options = {
    method: 'post',
    headers: {
      'accept': 'application/vnd.github.v3+json',
      'user-agent': 'alfred-tidy',
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  got(baseUrl, options).then(response => {
    const url = JSON.parse(response.body).html_url.trim();
    cp.spawnSync('pbcopy', {
      encoding: 'utf8',
      input: url,
    });
    cp.spawnSync('open', [url], {
      encoding: 'utf8',
    });
  });
}

const input = JSON.parse(alfy.input);
sendGist(input.content, input.lang);

