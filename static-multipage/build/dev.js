const glob = require('glob')
const Bundler = require('parcel-bundler')

const entries = glob.sync('src/**/*.html')

for (const entry of entries) {
  const [filename] = entry.split('/').slice(-2)

  new Bundler(entry, {
    outFile: `${filename}.html`
  }).serve(1234)
}
