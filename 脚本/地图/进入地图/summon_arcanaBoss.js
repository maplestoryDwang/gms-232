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
    cm.dispose();
    cm.spawnMobMultipler(8644019, 2, 10, -377, 139);
    cm.spawnMobMultipler(8644019, 2, 10, -550, 139);
    cm.spawnMobMultipler(8644019, 2, 10, -464, 139);
    cm.spawnMobMultipler(8644019, 2, 10, 480, 139);
    cm.spawnMobMultipler(8644019, 2, 10, 762, 139);
    cm.spawnMobMultipler(8644019, 2, 10, 24, 139);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;