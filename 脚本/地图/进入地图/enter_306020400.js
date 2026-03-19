var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.setAmbience("Ambience.img/blizzard_soft", 60, 60);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;