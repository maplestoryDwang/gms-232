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
  } else {
    if (status === V++) {
      var O = cm.getEventManager("十字猎人_堕落格莱特");
      O.startInstance(cm.getPlayer());
      if (cm.isQuestActive(31176)) {
        cm.forceStartQuest(31176);
        cm.spawnMob(9300487, 345, 2);
      }
      cm.dispose();
    }
  }
}