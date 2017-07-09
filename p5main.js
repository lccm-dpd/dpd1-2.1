// A small shim to allow p5 to call into
// ECMAScript 6 functions. Also conveniently
// times preload and setup operations

//noinspection JSUnusedGlobalSymbols
function preload() {
  if (typeof(_preload) === 'undefined') return;

  const started = Date.now();
  _preload();
  console.log(`Preload in ${Date.now()-started}ms`);
}

//noinspection JSUnusedGlobalSymbols
function setup() {
  if (typeof(_setup) === 'undefined') return;

  const started = Date.now();
  _setup();
  console.log(`Setup in ${Date.now()-started}ms`);
}

//noinspection JSUnusedGlobalSymbols
function draw() {
  if (typeof(_draw) === 'undefined') return;
  _draw();
}