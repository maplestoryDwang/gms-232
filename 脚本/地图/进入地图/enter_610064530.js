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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064530");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("说起来，卢坎好像送了我什么东西。\r\n不知道是啥呢……", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else if (status === V++) {
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
      cm.updateInfoQuest(61371, "10=1;11=1;12=1;13=1;1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
      cm.dispose();
    }
  }
}