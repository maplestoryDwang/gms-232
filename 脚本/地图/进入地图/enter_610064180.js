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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064180");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201534, "oid=2748329", 339, 212, 14, 289, 389, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2748329", "summon", 0, 0);
      cm.npc_ChangeController(9201535, "oid=2748330", -100, 212, 2, -150, -50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2748330", 'summon', 0, 0);
      cm.npc_ChangeController(9201536, "oid=2748331", -200, 212, 4, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2748331", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 100, 250);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
          cm.inGameDirectionEvent_AskAnswerTime(3200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('英雄！', 37, 9201536, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("很高兴再次见到你，小英雄！\r\n你阻止张博士了吗？", 37, 9201535, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#不可能，这可悲的杂种怎么会是她的对手。你肯定是夹着尾巴逃跑了。", 37, 9201534, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(1);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('并没有。', 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                        } else if (status === V++) {
                          cm.eventSKill(0);
                          cm.warp(610064190, 0, true);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.npc_LeaveField("oid=2748329");
                          cm.npc_LeaveField("oid=2748329");
                          cm.npc_LeaveField("oid=2748330");
                          cm.npc_LeaveField("oid=2748330");
                          cm.npc_LeaveField("oid=2748331");
                          cm.npc_LeaveField("oid=2748331");
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