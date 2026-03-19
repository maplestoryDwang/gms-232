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
    cm.updateInfoQuest(64014, "scene1=1;scene2=1;scene4=0;mapIdx=0");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
    cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/4");
    cm.playerMessage(-1, "消灭区域内的所有怪物再下去。");
    cm.setPartner(1, 9400588, 80011688, 0);
    cm.addPopupSay(9400588, 2000, "怪物数量比刚才更多了，怎么回事……它们从哪儿冒出来的！", '', 0);
    cm.addPopupSay(9400588, 2000, '你多小心，勇士！！！', '', 0);
    cm.spawnMob(9402242, 8, -173, -254);
    cm.spawnMob(9402243, 3, -173, -254);
    cm.spawnMob(9402245, 3, -173, -254);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;