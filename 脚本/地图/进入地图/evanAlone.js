function action(f, E, e) {
  cm.setStandAloneMode(true);
  cm.dispose();
}
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;