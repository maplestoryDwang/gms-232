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
    cm.setPartner(1, 1531006, 80001788, 0);
    cm.addPopupSay(1531003, 2000, "#face2#超能力者,  怪物没完没了了！！", '', 0);
    cm.spawnMobLimit(2700315, 1, 0, 149, 100);
    cm.spawnMobLimit(2700315, 1, 0, 149, 100);
    cm.spawnMobLimit(2700315, 1, 100, 161, 100);
    cm.spawnMobLimit(2700315, 1, 100, 161, 100);
    cm.spawnMobLimit(2700315, 1, 200, 157, 100);
    cm.spawnMobLimit(2700315, 1, 200, 157, 100);
    cm.spawnMobLimit(2700315, 1, 300, 149, 100);
    cm.spawnMobLimit(2700315, 1, 300, 149, 100);
    cm.spawnMobLimit(2700315, 1, 400, 151, 100);
    cm.spawnMobLimit(2700315, 1, 400, 151, 100);
    cm.spawnMobLimit(2700315, 1, 500, 150, 100);
    cm.spawnMobLimit(2700315, 1, 500, 150, 100);
    cm.spawnMobLimit(2700315, 1, 600, 153, 100);
    cm.spawnMobLimit(2700315, 1, 600, 153, 100);
    cm.spawnMobLimit(2700315, 1, 700, 155, 100);
    cm.spawnMobLimit(2700315, 1, 700, 155, 100);
    cm.spawnMobLimit(2700315, 1, 800, 154, 100);
    cm.spawnMobLimit(2700315, 1, 800, 154, 100);
    cm.spawnMobLimit(2700315, 1, 900, 149, 100);
    cm.spawnMobLimit(2700315, 1, 900, 149, 100);
    cm.spawnMobLimit(2700315, 1, 1000, 151, 100);
    cm.spawnMobLimit(2700315, 1, 1000, 151, 100);
    cm.spawnMobLimit(2700315, 1, 1100, 150, 100);
    cm.spawnMobLimit(2700315, 1, 1100, 150, 100);
    cm.spawnMobLimit(2700315, 1, 1200, 147, 100);
    cm.spawnMobLimit(2700315, 1, 1200, 147, 100);
    cm.spawnMobLimit(2700315, 1, 1300, 155, 100);
    cm.spawnMobLimit(2700315, 1, 1300, 155, 100);
    cm.spawnMobLimit(2700315, 1, 1400, 157, 100);
    cm.onActionBarResult(6, -1);
    cm.spawnMobLimit(2700315, 1, 1135, 150, 100);
    cm.dispose();
  }
}