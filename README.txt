HH-60 Formation Sim: files for your own website

Upload every file in this folder to the same folder on a web host that uses https
(GitHub Pages, Netlify, Cloudflare Pages, and similar). Keep the file names as they are.

  index.html              the whole sim
  manifest.webmanifest    app name, colors, and icons
  sw.js                   keeps a copy on the device so it opens with no internet
  icon-192.png, icon-512.png, apple-touch-icon.png   home screen icons

Put it on an iPad home screen
  1. Open your site's address in Safari.
  2. Tap the Share button, then "Add to Home Screen".
  3. Open it from the new icon. It runs full screen.
  4. Open it once while online. After that it also opens offline.

Updating
  Upload the new index.html. Then open sw.js and change hh60-sim-v1 to hh60-sim-v2
  (and so on each time) so devices pick up the new copy.

Notes
  The home screen and offline parts only work from an https web address.
  They do not work if you open index.html straight from a folder, though the sim itself still runs that way.
