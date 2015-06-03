### Getting started
1. Check out the repository
2. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

3. Use [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

4. Open a browser and visit localhost:4040 and get the remotely url.

### Improvements of index.htmlre
1. Create async script requests.
2. Use print media types to load print.css.
3. Inline CSS.
4. Minify css/print.css and css/style.css with grunt-contrib-cssmin.
5. Minify index.html with grunt-contrib-htmlmin.
6. Replace font link with @font-face at style.min.css.

### Improvements of pizza.html
1. Add CSS property `will-change: transform;` to .mover.
2. In updatePositions(), use document.getElementsByClassName to access DOM elements.
3. In updatePositions(), Move the calcualtion outside the for loop.
4. Reduce the random pizzas number to 32.