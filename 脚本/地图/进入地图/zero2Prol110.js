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
    cm.spawnMobLimit(9300745, 1, 1080, -298, 10);
    cm.spawnMobLimit(9300745, 1, 1678, -368, 10);
    cm.spawnMobLimit(9300745, 1, 1703, -368, 10);
    cm.spawnMobLimit(9300745, 1, 472, -6, 10);
    cm.spawnMobLimit(9300745, 1, 304, -6, 10);
    cm.spawnMobLimit(9300745, 1, 164, -379, 10);
    cm.spawnMobLimit(9300745, 1, 888, -379, 10);
    cm.spawnMobLimit(9300745, 1, -308, -6, 10);
    cm.spawnMobLimit(9300745, 1, -673, -388, 10);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;