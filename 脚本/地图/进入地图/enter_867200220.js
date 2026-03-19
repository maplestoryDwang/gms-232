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
  } else if (status === V++) {
    cm.updateInfoQuest(64014, "scene1=1;scene2=0;mapIdx=0");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
    cm.playerMessage(-1, "消灭区域内的所有怪物再下去。");
    cm.spawnMob(9402246, 1, 948, -1154);
    cm.spawnMob(9402245, 1, 1030, -1151);
    cm.spawnMob(9402245, 1, 1270, -1151);
    cm.spawnMob(9402246, 1, 866, -896);
    cm.spawnMob(9402245, 1, 1200, -802);
    cm.spawnMob(9402245, 1, 1690, -728);
    cm.spawnMob(9402245, 1, 1476, -561);
    cm.spawnMob(9402245, 1, 2160, -601);
    cm.spawnMob(9402242, 1, 1272, -569);
    cm.spawnMob(9402245, 1, 1419, -561);
    cm.spawnMob(9402242, 1, 2212, -270);
    cm.spawnMob(9402245, 1, 2739, -349);
    cm.spawnMob(9402245, 1, 2494, -262);
    cm.spawnMob(9402242, 1, 2787, -261);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;