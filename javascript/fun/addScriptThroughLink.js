src = "https://gnanasuriyan-gnanaoli.github.io/javascript/fun/addChildBorder.js"
function addScript( src ) {
  var script = document.createElement( 'script' );
  script.setAttribute( 'src', src );
  document.body.appendChild( script );
}
addScript(src);