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
  } else {
    if (status === V++) {
      var O = cm.getMapId() % 100;
      cm.achievementRatio(O);
      if (O == 0) {
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/1");
        cm.addPopupSay(0, 2000, "时空裂缝出现的原因……", '', 0);
      } else {
        if (O == 20) {
          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
          cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/2");
          cm.addPopupSay(0, 2000, "空气沉重而憋闷。", '', 0);
        } else {
          if (O == 40) {
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/3");
            cm.addPopupSay(0, 2000, "他说过消灭所有怪物后，时空裂缝就会自动消失吧……", '', 0);
          } else if (O == 60) {
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/stage");
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/number/4");
            cm.addPopupSay(0, 2000, "我感觉到了令人不爽的力量。", '', 0);
          } else {
            cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
            cm.addPopupSay(0, 2000, "这些是时空裂缝里残余的最后一群怪物了。\r\n赶快消灭它们吧。", '', 0);
            if (cm.getNumberFromQuestInfo(500799, "type") == 1) {
              cm.spawnMob(9833563, cm.rand(cm.getMap().getLeft(), cm.getMap().getRight()), cm.rand(cm.getMap().getTop(), cm.getMap().getBottom()));
            }
          }
        }
      }
      cm.dispose();
    }
  }
}