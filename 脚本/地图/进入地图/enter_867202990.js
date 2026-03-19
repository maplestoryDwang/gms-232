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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400608, "oid=7564319", 294, 230, 1, 244, 344, 1, false, false);
      cm.npc_SetSpecialAction("oid=7564319", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("哦哦？", 37, 9400607, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=7564319", 'special1', 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3500);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=7564319", 'say', -1, 0);
            cm.sendNormalTalk_Bottom("咖…真是了不起！", 37, 9400607, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("这么好玩的研究怎么这么快就结束了…", 37, 9400607, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我还有很多东西想知道呢？", 37, 9400607, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("…呵呵，不过已经很了不起了。", 37, 9400607, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("等你回来了，我得好好表扬一下，呵呵呵……", 37, 9400607, true, true);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=7564319");
                      cm.inGameDirectionEvent_AskAnswerTime(250);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=7564319", 'special1', -1, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 4000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                        } else if (status === V++) {
                          cm.dispose();
                          cm.forceCompleteQuest(64144);
                          cm.warp(867202290, 0);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.npc_LeaveField("oid=7564319");
                          cm.npc_LeaveField("oid=7564319");
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