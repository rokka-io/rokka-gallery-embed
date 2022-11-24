# Rokka Gallery Embed

## Usage
To use the Rokka Gallery Embed on your site, embed it with 
```html
<script 
    src="/rokka-gallery.js" 
    data-org="your-rokka-organization"
    data-album="your-album"
></script>
```
You can either build the project yourself, and host the script on your site, or use a CDN.

### API
You may wish to prevent scrolling on your page while the user has opened a Rokka Gallery.

We provide the `rokka-gallery--open` and `rokka-gallery--close` events, you can listen for on the document.
```js
document.addEventListener('rokka-gallery--open', lockScrollingOnBody) 
document.addEventListener('rokka-gallery--close', unlockScrollingOnBody)
```

## Development
Clone the repository, and install all dependencies with `npm i`.

Preview the project with `npm run dev`.
Be careful with this, as some styles may get overwritten by the 'host' page, so building is more often the safer option.

Lint the project before committing with `npm run lint`.

### Build
Build the Rokka Gallery Embed project with `npm run build`. 
The output file is located at `dist/rokka-gallery.js`.
