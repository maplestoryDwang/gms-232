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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064450");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayFieldSound("Sound/BgmGL.img/MBlockbuster_3", 100);
      cm.fieldEffect_ScreenMsg("newPirate/TimeTravel/0");
      cm.inGameDirectionEvent_AskAnswerTime(4200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/illust3");
        cm.inGameDirectionEvent_AskAnswerTime(5200);
      } else {
        if (status === V++) {
          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
          cm.updateInfoQuest(61371, "1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
          cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
          cm.inGameDirectionEvent_AskAnswerTime(4200);
          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
        } else if (status === V++) {
          cm.eventSKill(0);
          cm.warp(610064460, 0, true);
          cm.setInGameDirectionMode(false, true, false);
          cm.dispose();
        }
      }
    }
  }
}