var status = -1;
function action(f, W, U) {
  status++;
  if (status == 0) {
    cm.sendNextNoESC("吱吱，吱吱！");
  } else if (status == 1) {
    cm.setStandAloneMode(false);
    cm.setInGameDirectionMode(false);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;