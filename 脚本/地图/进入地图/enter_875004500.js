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
    cm.spawnMobLimit(9601657, 1, -650, 307, 20);
    cm.spawnMobLimit(9601657, 1, -500, 307, 20);
    cm.spawnMobLimit(9601657, 1, -350, 307, 20);
    cm.spawnMobLimit(9601657, 1, -200, 307, 20);
    cm.spawnMobLimit(9601657, 1, -50, 307, 20);
    cm.spawnMobLimit(9601657, 1, 50, 307, 20);
    cm.spawnMobLimit(9601657, 1, 250, 307, 20);
    cm.spawnMobLimit(9601657, 1, 400, 307, 20);
    cm.spawnMobLimit(9601657, 1, 650, 307, 20);
    cm.spawnMobLimit(9601657, 1, 800, 307, 20);
    cm.spawnMobLimit(9601681, 1, -830, 307, 20);
    cm.setNPC_Fadein(9401298, 1);
    cm.addPopupSay(9401298, 3000, "玄、玄山派大侠！这里！", '', 0);
    cm.spawnMobLimit(9601657, 1, 20174, 307, 20);
    cm.dispose();
  }
}