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
    if (cm.isQuestActive(63045) && cm.getNumberFromQuestInfo(63045, "chk3") == 0) {
      cm.updateInfoQuest(63045, "chk1=1;chk2=1;chk3=1");
      cm.addPopupSay(9400205, 4000, '这里也……？', '', 0);
    }
    if (cm.isQuestActive(63075) && !cm.haveItem(4036004)) {
      cm.playerMessage(5, "一只发出奇异叫声的渡鸦出现了。");
      cm.addPopupSay(9400205, 4000, "这附近好像听见奇异的叫声！", '', 0);
      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402048/Attack1", 150);
      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402048/Die", 150);
      cm.spawnMobLimit(9402049, 1, -180, -242, 1);
    }
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;