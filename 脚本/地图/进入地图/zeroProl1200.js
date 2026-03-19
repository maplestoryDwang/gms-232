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
  } else {
    if (status === V++) {
      cm.teachSkill(100001273, -1, 0);
      cm.teachSkill(100000275, -1, 0);
      cm.teachSkill(100000278, -1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.playVideoByScript("zero2.avi");
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.setInGameDirectionMode(false, true, false);
      cm.dispose();
      cm.warp(321190000, 0, false);
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;