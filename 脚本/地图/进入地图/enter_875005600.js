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
    cm.spawnMobLimit(9601657, 1, -230, 87, 20);
    cm.spawnMobLimit(9601657, 1, -30, 83, 20);
    cm.spawnMobLimit(9601657, 1, 2570, 80, 20);
    cm.spawnMobLimit(9601657, 1, 370, 80, 20);
    cm.spawnMobLimit(9601657, 1, -370, -160, 20);
    cm.spawnMobLimit(9601657, 1, -170, -158, 20);
    cm.spawnMobLimit(9601657, 1, 40, -157, 20);
    cm.spawnMobLimit(9601657, 1, 300, -159, 20);
    cm.spawnMobLimit(9601657, 1, 500, -161, 20);
    cm.spawnMobLimit(9601657, 1, -650, -460, 20);
    cm.spawnMobLimit(9601657, 1, -430, -460, 20);
    cm.spawnMobLimit(9601657, 1, 230, -466, 20);
    cm.spawnMobLimit(9601657, 1, 420, -464, 20);
    cm.spawnMobLimit(9601657, 1, -630, -752, 20);
    cm.spawnMobLimit(9601657, 1, -420, -750, 20);
    cm.spawnMobLimit(9601657, 1, -150, -752, 20);
    cm.spawnMobLimit(9601657, 1, 50, -753, 20);
    cm.spawnMobLimit(9601657, 1, 250, -755, 20);
    cm.spawnMobLimit(9601657, 1, 50, -753, 20);
    cm.spawnMobLimit(9601657, 1, 250, -755, 20);
    cm.setPartner(true, 9401317, 80012076, 0);
    cm.addPopupSay(9401278, 3000, "#face0#陡坡这个名字果然不是吹牛。我都快喘不过气来了！", '', 0);
    cm.addPopupSay(9401278, 3000, "#face0#差不多有一半了，加油！", '', 0);
    cm.dispose();
  }
}