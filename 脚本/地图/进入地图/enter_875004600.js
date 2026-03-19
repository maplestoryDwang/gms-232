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
    cm.spawnMobLimit(9601657, 1, 2000, 307, 20);
    cm.spawnMobLimit(9601657, 1, 250, 307, 20);
    cm.spawnMobLimit(9601668, 1, 400, 307, 20);
    cm.spawnMobLimit(9601668, 1, 550, 307, 20);
    cm.spawnMobLimit(9601657, 1, 700, 307, 20);
    cm.spawnMobLimit(9601657, 1, 850, 307, 20);
    cm.spawnMobLimit(9601681, 1, -900, 307, 20);
    cm.spawnMobLimit(9601678, 1, -800, 307, 20);
    cm.addPopupSay(9401299, 3000, "#face0#玄山派大侠来了！我们得救了！", '', 0);
    cm.addPopupSay(9401278, 3000, "#face0#墨玄" + (cm.getPlayer().getGender() == 0 ? '公子' : '姑娘') + "，见到你真是太高兴了！", '', 0);
    cm.dispose();
  }
}