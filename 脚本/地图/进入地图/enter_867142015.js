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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("终于出来了……！\r\n啊……建筑倒塌了……！斯卡伊！趴下！", 56, 0, 0, 1);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(867142015, 6, 6, 40);
          cm.inGameDirectionEvent_AskAnswerTime(2200);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(867142015, 0, 0, 0);
            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PL_Beautyroid/explosion", 100);
            cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/Beautyroid/40", 0, 1000, 0, 0, 15, 4, 0, -1, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(5200);
          } else if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            cm.setStandAloneMode(false);
            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.forceCompleteQuest(64928);
            cm.updateInfoQuest(64936, "switch=4;64915=1;64928=1");
            cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
            cm.gainItem(4310284, 300);
            cm.dispose();
          }
        }
      }
    }
  }
}