var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    cm.spawnMobLimit(8230039, 1, -262, 18, 5);
    cm.spawnMobLimit(8230039, 1, 1007, -282, 5);
    cm.spawnMobLimit(8230039, 1, -316, -582, 5);
    cm.spawnMobLimit(8230039, 1, 424, -582, 5);
    cm.spawnMobLimit(8230039, 1, -262, 15, 5);
    cm.dispose();
  }
}