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
    cm.forceJoinEvent("虎影_怪异封印_地球防御本部之章");
    cm.spawnMobLimit(2400576, 1, 273, 0, 1);
    cm.dispose();
  }
}