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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064480");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201536, "oid=2758744", 1392, 95, 63, 1342, 1442, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2758744", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=2758744", 1, 100, 100);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
        cm.inGameDirectionEvent_AskAnswerTime(4200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("果然是这样……跟绯红之心意料的一样，幻日碎片依旧存在着。", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("但张博士已经死了，为什么穿越传送门还在这里？", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这肯定也是幻日碎片导致的……无论如何，我们都要找回碎片。", 37, 9201536, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我这就开找，稍等。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_QTE(6);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_OneTimeAction(9, 0);
                    cm.inGameDirectionEvent_QTE(7);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_OneTimeAction(5, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                          cm.updateInfoQuest(61371, "10=1;1=1;2=1;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
                          cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                        } else if (status === V++) {
                          cm.eventSKill(0);
                          cm.warp(610064490, 0, true);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.npc_LeaveField("oid=2758744");
                          cm.npc_LeaveField("oid=2758744");
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
    }
  }
}