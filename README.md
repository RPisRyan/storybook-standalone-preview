# Storybook Standalone Preview

Derived from https://github.com/storybookjs/storybook/tree/next/examples/standalone-preview

This project demonstrates a preview running in standalone mode using `parcel`.

Storybook host `/storybook` and parcel app `/client` are packaged in separate directories. To run the standalone preview:

```
cd storybook; npm install; cd ..
cd client; npm install
npm run storybook
```

This starts a `parcel` dev server on port `1337` and storybook server on `1338`.
