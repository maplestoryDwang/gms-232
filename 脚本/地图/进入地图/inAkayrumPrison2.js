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
    cm.spawnMobLimit(8860003, 1, 88, 95, 1);
    cm.getMap().startSimpleMapEffect("看到自己内心丑陋的样子，感觉如何？", 5120057);
    cm.dispose();
  }
}