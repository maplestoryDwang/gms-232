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
      if (cm.getNumberFromQuestInfo(61368, '3') > 0) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(61333, "act1=610061210");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201536, "oid=2824420", 677, 191, 31, 627, 727, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2824420", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_PushMoveInfo(0, 400, -500, 150);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2701);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("啊啊，原来是你啊！\r\n就是你往城里发送那吓人的声音！", 37, 9201537, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 1800, 579, 178);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(600);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("这位是？他也，听到了我的求救吗？", 37, 9201536, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("好啦，让我先介绍下你，你再问他。", 57, 0, true, true);
                      } else if (status === V++) {
                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                        cm.updateInfoQuest(61368, "1=1;2=1;3=1");
                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.npc_SetForceMove("oid=2824420", -1, 800, 200);
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
  }
}