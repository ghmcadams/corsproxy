CORS Proxy
===========

A Node.js based command line interface (CLI) for creating a stand-alone CORS proxy server for development

[![NPM](https://nodei.co/npm/corsproxy-cli.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/corsproxy-cli/)

## Installation

    $ npm install corsproxy-cli -g


## Usage

    $ corsproxy http://www.google.com -p 4000
    $ corsproxy https://api.mydomain.com --port=4000 -l /Users/myname/code/dev

- p (optional - Default: 3000): port number that the local proxy server should listen on
- l (optional - Default: ./public): path to the local static files

In your browser, you can then browse to

    http://localhost:4000/corshome
	
Displays a status page for the proxy server

    http://localhost:4000/cors/somefile.html
	
Loads a static file from the location specified

    http://localhost:4000/api/users/delete
	
Request is rerouted to your target server



## License

(The MIT License)

Copyright (c) 2016 Gabriel McAdams &lt; ghmcadams@yahoo.com &gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
