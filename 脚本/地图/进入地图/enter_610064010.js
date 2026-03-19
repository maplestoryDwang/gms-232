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
      if (cm.getNumberFromQuestInfo(61371, '1') > 0) {
        cm.playerMessage(5, "击败张博士和她的终极武器吧！");
        cm.playerMessage(-1, "击败张博士和她的终极武器吧！");
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064010");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNormalTalk_Bottom("……！", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face5#这个机器我本来是用来对付绯红之心的，但没想到最后净不得不用在你身上。", 37, 9201539, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#如果它连你都无法阻止，那恐怕也无法阻止他吧。", 37, 9201539, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
              cm.updateInfoQuest(61371, "1=1");
              cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
              cm.inGameDirectionEvent_AskAnswerTime(4200);
              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
            } else if (status === V++) {
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}