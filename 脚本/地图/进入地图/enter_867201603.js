var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestFinished(64081)) {
    cm.npc_ChangeController(9400580, "oid=7614491", -120, 480, 8, -170, -70, 1, true, false);
    cm.npc_SetSpecialAction("oid=7614491", "summon", 0, 0);
    cm.npc_ChangeController(9400595, "oid=7614492", -220, 480, 11, -270, -170, 0, true, false);
    cm.npc_SetSpecialAction("oid=7614492", "summon", 0, 0);
    cm.forfeitQuest(64083);
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
      cm.npc_ChangeController(9400570, 'oid=202981', -48, 219, 23, -98, 2, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 580, 444);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9400580, "oid=7614491", -120, 480, 8, -170, -70, 1, true, false);
      cm.npc_SetSpecialAction("oid=7614491", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400595, "oid=7614492", -220, 480, 11, -270, -170, 0, true, false);
      cm.npc_SetSpecialAction("oid=7614492", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_setForceFlip("oid=7614491", 1);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=7614491", 1, 50, 100);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=7614492", 1, 50, 50);
                  cm.sendNormalTalk_Bottom("#face0##h0#，你醒了啊？", 37, 9400580, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#早安。", 37, 9400580, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b艾丽卡起得真早啊。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#因为今天我们一定要找到老婆婆！", 37, 9400580, true, true);
                      } else {
                        if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439150, 0, 0, 0, 0, 0]);
                          cm.sendNormalTalk_Bottom("#face3#昨天我说的太多了吧？可能是因为在深夜，所以变得太感性了吧……", 37, 9400580, true, true);
                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face2#不过你可不能忘记昨天的约定哦！", 37, 9400580, true, true);
                          } else if (status === V++) {
                            cm.monadEndingScene(-1, -1, null);
                            cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                            cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                            cm.forceCompleteQuest(64081);
                            cm.gainItem(2439150, 1);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;