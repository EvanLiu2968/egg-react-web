// https://github.com/jonschlinkert/remarkable
var Remarkable = require('remarkable');
var hljs = require('highlight.js');

var markdown = new Remarkable({
  html:         true,        // Enable HTML tags in source
  xhtmlOut:     true,        // Use '/' to close single tags (<br />)
  breaks:       true,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks
  linkify:      true,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  false,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
  quotes: '“”‘’',

  // Highlighter function. Should return escaped HTML,
  // or '' if the source string is not changed
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
        try {
            return hljs.highlight(lang, str).value;
        } catch (err) {
          console.log(err)
        }
    }
    try {
        return hljs.highlightAuto(str).value;
    } catch (err) {
      console.log(err)
    }
    return str; // use external default escaping
  }
})

// 运行shell
function runCmd(cmd, args, callback) {
  var spawn = require('child_process').spawn;
  var child = spawn(cmd, args);
  var res = "";

  child.stdout.on('data', function(buffer) { res += buffer.toString(); });
  child.stdout.on('end', function() { callback (res) });
}

module.exports = {
  isMobile(){
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobi/i.test(this.get('user-agent'));
  },
  isIOS(){
    return /iphone|ipad|ipod/i.test(this.get('user-agent'));
  },
  isWechat(){
    return /micromessenger/i.test(this.get('user-agent'));
  },
  markdown,
  runCmd
}