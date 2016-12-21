# <div align="center"><img src="./icon.png" width=256><br>alfred-tidy</div>

> [Alfred 3](https://www.alfredapp.com) workflow to beautify JSON/XML in clipboard


## Prerequisites

You need [Node.js 4+](https://nodejs.org) and [Alfred 3](https://www.alfredapp.com) with the paid [Powerpack](https://www.alfredapp.com/powerpack/) upgrade.


## Usage

### Copy JSON/XML snippet to clipboard

- <kbd>cmd</kbd> + <kbd>C</kbd>


### Beautify

- Type `tidy`, <kbd>Space</kbd>, select JSON or XML
- <kbd>Enter</kbd>
- <kbd>Cmd</kbd> + <kbd>V</kbd> to your editor

<img width="607" alt="json" src="https://cloud.githubusercontent.com/assets/1744446/16941092/fa874e36-4dc8-11e6-8226-7e1cc0b20351.png">
<img width="607" alt="xml" src="https://cloud.githubusercontent.com/assets/1744446/16941091/fa855932-4dc8-11e6-8f40-a7aec38c5764.png">


### Beautify and deploy clipboard data to [Gist](https://gist.github.com/)(anonymous & private)

- Type `tidy`, <kbd>Space</kbd>, select JSON or XML
- <kbd>Cmd</kbd> + <kbd>Enter</kbd>

You can send code snippet in clipboard to anonymous gist and see the gist page is opened in your browser.

![gist](https://cloud.githubusercontent.com/assets/1744446/16941324/5b7784d0-4dca-11e6-8d23-99a76df89c61.png)


## Install

```
$ npm i -g alfred-tidy
```


## Reference

- [importre/alfred-workflows: 🔧my alfred workflows](https://goo.gl/GOFxDC)


## License

MIT © Jaewe Heo
