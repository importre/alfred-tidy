const cp = require('child_process');
const alfy = require('alfy');

function copy(output, lang) {
  if (output) {
    output = output.trim();
    cp.spawnSync('pbcopy', {
      encoding: 'utf8',
      input: output,
    });
    console.log(JSON.stringify({
      lang: lang,
      content: output,
    }));
  }
}

function beautify(lang) {
  const code = cp.spawnSync('pbpaste', {
    encoding: 'utf8',
  }).stdout;

  switch (lang) {
    case 'json':
      copy(JSON.stringify(JSON.parse(code), null, 2), lang);
      break;

    case 'xml':
      const output = cp.spawnSync('tidy', ['-utf8', '-i', '-xml'], {
        encoding: 'utf8',
        input: code,
      });

      if (output.stdout) {
        copy(output.stdout, lang);
      } else if (output.stderr) {
        copy(output.stderr, 'log');
      }
      break;
  }
}

const input = alfy.input.toLowerCase();
beautify(input);

