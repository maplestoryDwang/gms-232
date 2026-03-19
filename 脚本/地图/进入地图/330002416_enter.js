var status = -1;
var selectionLog = [];
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
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(1530190, "oid=37945998", 200, 20, 3, 150, 250, 1, true, false);
      cm.npc_SetSpecialAction("oid=37945998", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=37945998", "black", -1, 1);
      cm.sendNormalTalk_Bottom("嗯……快吃……很好吃……好吃吧……\r\n呃呵呵呵……呵呵呵呵……", 37, 1530190, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("他究竟在做什么呢……？", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1530330, "oid=37946398", 150, 20, 3, 100, 200, 1, false, 1000, false);
          cm.npc_SetSpecialAction("oid=37946398", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=37945998", "feeding", -1, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那是……猫食？？", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=37945998", 'suprise', -1, 1);
                cm.inGameDirectionEvent_PushMoveInfo(0, 500, -550, -550);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1967);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, 130, 120);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("什么人！站在那里不要动！！", 37, 1530190, false, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else if (status === V++) {
                          cm.forceStartQuest(32866, '');
                          cm.gainExp(Math.pow(cm.getLevel(), 3));
                          cm.forceCompleteQuest(32866);
                          cm.dispose();
                          cm.warp(330004100, 0);
                          cm.setInGameDirectionMode(false, true, false);
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