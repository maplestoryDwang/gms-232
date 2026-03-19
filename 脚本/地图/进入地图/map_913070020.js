var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.playerMessage(-1, "杂货店后院");
    cm.resetMap(cm.getMapId());
    if (!cm.isQuestFinished(20033)) {
      cm.spawnMobLimit(9001051, 1, 229, 65, 100);
    }
    cm.dispose();
  } else {
    cm.dispose();
  }
}