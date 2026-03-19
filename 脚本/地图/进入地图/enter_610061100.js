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
      cm.npc_ChangeController(9201536, "oid=2812784", -270, 200, 8, -320, -220, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2812784", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=2812784", "hurt", -1, 0);
      if (cm.getNumberFromQuestInfo(61339, 'a') > 0) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(61333, "act1=610061100");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 400, 400, 50);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(5345);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 1800, -1737, 45);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1187);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("脑子出问题了才会来这种地方吧？\r\n这是跟我说话的那个人吗？", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else if (status === V++) {
                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                    cm.updateInfoQuest(61368, "1=1");
                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                    cm.updateInfoQuest(61339, "a=1");
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                    cm.dispose();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}