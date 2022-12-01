# Rokka Gallery Embed

|            Teaser             |             Overview              |             Carousel             |
|:-----------------------------:|:---------------------------------:|:--------------------------------:|
| ![Teaser](.github/Teaser.png) | ![Overview](.github/Overview.png) | ![Gallery](.github/Carousel.png) |

## Usage

You can embed any rokka gallery in your site with the following snippet:

```html
<script
  async
  src="https://embed.rokka.io/v1/rokka-gallery.js"
  data-lang="de"
  data-organization="your-rokka-organization"
  data-album="your-album"
></script>
```

You can either build the project yourself
and host the script on your site, or use a CDN.

### Languages

| Language |          Code         |
|:--------:|:---------------------:|
| English  | `en` (Default option) |
| German   | `de`                  |

### Events

We provide the following events on the document

- `rokkagallery.open` is triggered when the overlay is opened
- `rokkagallery.close` is triggered when the overlay is closed

```js
document.addEventListener('rokkagallery.open', rokkaOverlayOpened)
document.addEventListener('rokkagallery.close', rokkaOverlayClosed)
```

You can use them for example to restrict scrolling or tabbing on your page while the user has opened Rokka Gallery.

## Development

Clone the repository, and install all dependencies with `npm i`.

Preview the project with `npm run dev`.
Be careful with this, as some styles may get overwritten by the 'host' page, so building is more often the safer option.

Lint the project before committing with `npm run lint`.

### Build

Build the Rokka Gallery Embed project with `npm run build`.
The output file is located at `dist/rokka-gallery.js`.
