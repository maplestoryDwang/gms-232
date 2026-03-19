var status = -1;
var selectionLog = [];
function action(f, E, e) {
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.playVideoByScript("zero1.avi");
    } else if (status === V++) {
      cm.dispose();
      cm.warp(321000000, 0, false);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;