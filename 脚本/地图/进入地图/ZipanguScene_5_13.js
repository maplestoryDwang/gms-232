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
      cm.forceCompleteQuest(58755);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
      cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9110002, "oid=3970776", 2395, -290, 12, 2345, 2445, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3970776", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
          cm.inGameDirectionEvent_AskAnswerTime(1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("巫女！我把木之五行带回来了。", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#终于全部集齐了！", 37, 9110002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("快去救竹野子吧……！", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#……嗯！", 37, 9110002, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_SlideText('#fs15#继续。', 1, 1);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else if (status === V++) {
                          cm.warp(800000000, 2, false);
                          cm.npc_LeaveField("oid=3970776");
                          cm.npc_LeaveField("oid=3970776");
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
          }
        }
      }
    }
  }
}