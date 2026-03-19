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
    cm.forceJoinEvent("虎影_怪异封印_蚂蚁洞之章");
    cm.spawnMobLimit(2400572, 1, 1211, 1459, 1);
    cm.dispose();
  }
}