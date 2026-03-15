function action(f, W, U) {
  cm.sendOk("I can answer your questions on the wedding hall.");
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;