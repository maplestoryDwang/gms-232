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
    cm.spawnMobLimit(9601656, 1, -230, 87, 20);
    cm.spawnMobLimit(9601656, 1, -30, 83, 20);
    cm.spawnMobLimit(9601656, 1, 2570, 80, 20);
    cm.spawnMobLimit(9601656, 1, 370, 80, 20);
    cm.spawnMobLimit(9601656, 1, -370, -104, 20);
    cm.spawnMobLimit(9601656, 1, -170, 85, 20);
    cm.spawnMobLimit(9601656, 1, 40, 82, 20);
    cm.spawnMobLimit(9601656, 1, 300, 79, 20);
    cm.spawnMobLimit(9601656, 1, 500, 81, 20);
    cm.spawnMobLimit(9601656, 1, -650, -480, 20);
    cm.spawnMobLimit(9601656, 1, -430, -480, 20);
    cm.spawnMobLimit(9601656, 1, 230, -352, 20);
    cm.spawnMobLimit(9601656, 1, 420, -399, 20);
    cm.spawnMobLimit(9601656, 1, -150, -480, 20);
    cm.spawnMobLimit(9601656, 1, 50, -646, 20);
    cm.spawnMobLimit(9601656, 1, 250, -644, 20);
    cm.setPartner(true, 9401317, 80012076, 0);
    cm.addPopupSay(9401278, 3000, "#face0#哎哟，实在太陡了。还有很多怪物，这可怎么往上爬？先帮我消灭掉一些！", '', 0);
    cm.addPopupSay(cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, 3000, "#face0#...", '', 0);
    cm.addPopupSay(9401278, 3000, "#face0#……等你到了这把年纪试试！", '', 0);
    cm.spawnMobLimit(9601656, 1, -395, -744, 20);
    cm.spawnMobLimit(9601656, 1, -788, -744, 20);
    cm.spawnMobLimit(9601656, 1, -279, -744, 20);
    cm.spawnMobLimit(9601656, 1, -788, -744, 20);
    cm.dispose();
  }
}