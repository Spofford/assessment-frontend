const noop = () => {}
const empty = () => ({})

require.extensions['.css'] = empty
require.extensions['.ico'] = noop
require.extensions['.png'] = noop
require.extensions['.jpg'] = noop
require.extensions['.svg'] = noop

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

var exposedProperties = ['window', 'navigator', 'document']

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
