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
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/BgmGL.img/MBlockbuster_3", 100);
        cm.fieldEffect_ScreenMsg("newPirate/TimeTravel/0");
        cm.inGameDirectionEvent_AskAnswerTime(5200);
      } else if (status === V++) {
        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
        cm.updateInfoQuest(61368, "1=1;2=1;3=1;4=1");
        cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
        cm.eventSKill(0);
        cm.warp(610061260, 0, true);
        cm.setInGameDirectionMode(false, true, false);
        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
        cm.dispose();
      }
    }
  }
}