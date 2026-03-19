var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(34933) && cm.getQuestStatus(34934) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1033, -40);
      cm.npc_ChangeController(3001512, "oid=144226880", -745, -150, 47, -795, -695, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144226880", "summon", 0, 0);
      cm.npc_ChangeController(3001513, "oid=144226881", -657, -150, 47, -707, -607, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144226881", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#你们没事啊，维依！亚克！", 37, 3001512, 0, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#掉进流沙之后，醒来的时候就发现自己掉到了这里。", 37, 3001513, 1, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#出口好像就在上面。", 37, 3001512, 1, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#叽……叽勒……现在只要找到巴克巴克那个傻瓜就行了吗……", 37, 3001510, 1, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face4#啊，真想把他丢在这里……", 37, 3001510, 1, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face4#哈，哈哈……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                  } else {
                    if (status === V++) {
                      cm.updateInfoQuest(34933, "dir=1;exp=1");
                      cm.npc_LeaveField("oid=144226880");
                      cm.npc_LeaveField("oid=144226881");
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setStandAloneMode(false);
                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.setPartner(1, 3001512, 80002398, 0);
                            cm.setPartner(1, 3001513, 80002399, 0);
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