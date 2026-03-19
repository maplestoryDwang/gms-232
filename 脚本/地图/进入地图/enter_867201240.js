var status = -1;
var selectionLog = [];
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
      cm.playerMessage(-1, "消灭怪物并进入森林深处吧");
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
      cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/3");
      cm.sendNormalTalk_Bottom("#b(如此安静，真是久违了……) ", 57, 0, false, true);
      cm.spawnMobLimit(9402238, 1, 530, 402, 100);
      cm.spawnMobLimit(9402242, 1, 270, -24, 100);
      cm.spawnMobLimit(9402238, 1, 600, 133, 100);
    } else if (status === V++) {
      cm.spawnMobLimit(9402238, 1, -678, 402, 100);
      cm.spawnMobLimit(9402243, 1, -402, 402, 100);
      cm.spawnMobLimit(9402242, 1, -300, 133, 100);
      cm.updateInfoQuest(26535, "effect=0");
      cm.updateInfoQuest(26535, "effect=1");
      cm.spawnMobLimit(9402238, 1, -455, 402, 100);
      cm.spawnMobLimit(9402243, 1, 210, 401, 100);
      cm.spawnMobLimit(9402242, 1, -715, 402, 100);
      cm.spawnMobLimit(9402242, 1, -525, 134, 100);
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;