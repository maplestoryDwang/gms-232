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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400032, "oid=1809068", -100, 15, 0);
      cm.npc_SetSpecialAction("oid=1809068", "summon");
      cm.npc_ChangeController(9400033, "oid=1809069", 140, 15, 1);
      cm.npc_SetSpecialAction("oid=1809069", "summon");
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNextNoESC_Bottom("神那？你怎么来这儿了？", 9400032);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=1809069", -1, 30, 100);
            cm.sendNextNoESC_Bottom("“奈奈”出了事，所以我就马上赶来了。", 9400033);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("剑斗怎么了？", 9400033);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("我……觉得应该来顺便看看……", 9400032);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC_Bottom("……真的吗？你以前不是没有这么毫无理由地来过吗？", 9400033);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("#face1#……够了，走吧。", 9400032);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=1809068", 1, 100, 100);
                        cm.npc_SetForceMove("oid=1809069", 1, 100, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_SetHideEffect(0);
                        cm.warp(867111009, 0, true);
                        cm.setInGameDirectionMode(false, false, false);
                        cm.setStandAloneMode(false);
                        cm.npc_LeaveField("oid=1809068");
                        cm.npc_LeaveField("oid=1809069");
                        cm.dispose();
                      } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;