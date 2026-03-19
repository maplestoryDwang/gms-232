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
    cm.getMap().startSimpleMapEffect("速度很快的金色的东西是暴风之翼。如果能抓到它，就能延长停留的时间！", 5120159);
    cm.setNumberForQuestCustomData(9930001, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;