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
  if (em == null || em == null) {
    cm.warp(993120101, 0, true);
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
      var O = cm.getNumberFromQuestInfo(100311, 'lv');
      cm.gainSkillBuff(80002794 + Math.min(4, O));
      cm.onActionBarResult(5, 44);
      cm.unstableBorderSetData(0, 0, 3000 * Math.pow(2, O - 1), 1, cm.getNumberFromQuestInfo(100311, 'speed'));
      cm.unstableBorderSetData(120, 1, 3000 * Math.pow(2, O - 1), 0, 0);
      cm.unstableBorderStart();
      cm.sendNewEffects(14, [100, 800, 800, 0, 0]);
    } else if (status === V++) {
      cm.setNumberForQuestInfo(100311, "play", 1);
      cm.fieldEffect_ScreenMsg("Effect/EventEffect.img/HundredShooting/start");
      cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/multiBingo/start", 100);
      cm.addPopupSay(9062198, 2000, "看那边！不稳定的能量正四处漂浮。", '', 0);
      cm.addPopupSay(9062198, 2000, "你必须发射与各个能量结晶的颜色对应的光线。", '', 0);
      cm.dispose();
      cm.spawnMobLimit(9833415, 1, -405, 635, 100);
      cm.spawnMobLimit(9833415, 1, -180, 635, 100);
      cm.spawnMobLimit(9833415, 1, 495, 635, 100);
      cm.spawnMobLimit(9833415, 1, 720, 635, 100);
      cm.spawnMobLimit(9833411, 1, -855, -376, 100);
      cm.spawnMobLimit(9833411, 1, -630, -376, 100);
      cm.spawnMobLimit(9833411, 1, 45, -376, 100);
      cm.spawnMobLimit(9833411, 1, 270, -376, 100);
    }
  }
}