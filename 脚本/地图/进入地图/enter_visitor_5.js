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
    em.startEventTimer(300000);
    cm.setNumberForQuestInfo(17204, "step", 5);
    cm.setNumberForQuestInfo(17204, 'stg', 5);
    cm.外星异次元_显示UI(1);
    cm.fieldEffect_PlayFieldSound("Dojang/start", 100);
    cm.fieldEffect_ScreenMsg("Visitor/nBoss");
    cm.spawnMobLimit(9390111, 1, 883, 32, 1);
    cm.dispose();
  }
}