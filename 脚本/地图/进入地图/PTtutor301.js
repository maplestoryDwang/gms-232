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
    cm.curNodeEventEnd(true);
    cm.setInGameDirectionMode(true, true, true);
    cm.inGameDirectionEvent_ChangeEquipment([1003421, 1052424, 1102039]);
    cm.setInGameDirectionMode(false, true, false);
    cm.spawnMobLimit(9300498, 1, -2070, -718, 2);
    cm.spawnMobLimit(9300507, 1, -2070, -477, 1);
    cm.spawnMobLimit(9300498, 1, -2430, -211, 2);
    cm.dispose();
  }
}