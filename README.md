# parcel-examples

## Features

- babel (preset-env)
- eslint (standard)
- sass
- autoprefixer

## Included

- [static-singlepage](static-singlepage)

## Usage

```bash
  cd ./static-singlepage
  yarn install
  yarn start
```

## Tips

### 1. use babel stage-x preset

Parcel default includes the preset-env, it's not necessarily to install again! 

First install the package:
``` bash
yarn add babel-preset-stage-2 -D
```
Then add this to your `.babelrc`
```json
{
  "presets": ["stage-2"]
}
```
