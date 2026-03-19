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
      switch (cm.getMapId()) {
        case 957012000:
          cm.spawnMobLimit(9306203, 1, 138, -327, 1);
          break;
        case 912080100:
          cm.组队任务_更新任务(1, 'tangyoon_0', "tangyoon_", 0);
          break;
      }
      cm.dispose();
    }
  }
}