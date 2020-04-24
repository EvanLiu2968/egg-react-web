/**
 * generate ie-polyfill js files.
 * TODO: concat multiple cdn files into one.
 */

// stage-1: main
// https://cdnjs.cloudflare.com/ajax/libs/core-js/2.5.7/core.min.js

// stage-2: ie9, ie10
// <!--[if lt IE 10]>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-sham.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/json3/3.3.2/json3.min.js"></script>
// <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.min.js"></script>
// <script src="https://gist.githubusercontent.com/eirikbacker/2864711/raw/dcc32b15ea79f8f364ca1707f81ec74a15fa25db/addEventListener-polyfill.js"></script>
// <![endif]-->

// stage-3: ie8
// <!--[if IE 8]>
// <script src="//cdnjs.cloudflare.com/ajax/libs/ie8/0.8.0/ie8.js"></script>
// <![endif]-->