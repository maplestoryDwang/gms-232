var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestFinished(40307)) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.spawnMobLimit(9300767, 1, -181, 543, 100);
    cm.spawnMobLimit(9300767, 1, -81, 543, 100);
    cm.spawnMobLimit(9300767, 1, 81, 543, 100);
    cm.spawnMobLimit(9300767, 1, 181, 543, 100);
    cm.spawnMobLimit(9300767, 1, 281, 543, 100);
    cm.spawnMobLimit(9300767, 1, 381, 543, 100);
    cm.spawnMobLimit(9300767, 1, 481, 543, 100);
    cm.spawnMobLimit(9300767, 1, 581, 543, 100);
    cm.spawnMobLimit(9300767, 1, 681, 543, 100);
    cm.spawnMobLimit(9300767, 1, 781, 543, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;