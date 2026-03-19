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
    cm.npc_ChangeController(9401346, "oid=207222", -175, -58, 4, -225, -125, 1, false, 0, false);
    cm.spawnMobLimit(9601669, 1, 292, 365, 20);
    cm.spawnMobLimit(9601668, 1, -160, 366, 20);
    cm.spawnMobLimit(9601678, 1, 292, 783, 20);
    cm.addPopupSay(9401278, 3000, "#face0#混蛋！你们一个都休想活着回去！", '', 0);
    cm.spawnMobLimit(9601669, 1, 2455, 24305, 20);
    cm.spawnMobLimit(9601669, 1, 348, 24302, 20);
    cm.spawnMobLimit(9601668, 1, -79, 24303, 20);
    cm.spawnMobLimit(9601668, 1, 316, 24173, 20);
    cm.spawnMobLimit(9601668, 1, 226, 784, 20);
    cm.spawnMobLimit(9601668, 1, -79, 898, 20);
    cm.spawnMobLimit(9601669, 1, 249, 902, 20);
    cm.spawnMobLimit(9601668, 1, -277, 785, 20);
    cm.spawnMobLimit(9601668, 1, 240, 24662, 20);
    cm.spawnMobLimit(9601669, 1, 66, 24660, 20);
    cm.spawnMobLimit(9601669, 1, 206, 24652, 20);
    cm.spawnMobLimit(9601668, 1, -253, 24663, 20);
    cm.dispose();
  }
}