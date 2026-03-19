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
      cm.npc_ChangeController(9400032, "oid=1809207", -456, 17, 0);
      cm.npc_SetSpecialAction("oid=1809207", "summon");
      cm.npc_ChangeController(9400033, "oid=1809208", -581, 17, 0);
      cm.npc_SetSpecialAction("oid=1809208", 'summon');
      cm.npc_ChangeController(9400049, "oid=1809209", -190, 17, 1);
      cm.npc_SetSpecialAction("oid=1809209", "summon");
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNextNoESC_Bottom("您终于来了！糟糕了，奈奈……奈奈……！", 9400049);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("#face0#哎？不见了？！", 9400032);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("就在我走神的时候……它就消失了。我真是没脸见您了。", 9400049);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("您不需要道歉。本来照看奈奈就是剑斗的工作。", 9400033);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("这是“特别”交给剑斗的任务啊。", 9400033);
              } else {
                if (status === V++) {
                  cm.sendNextNoESC_Bottom("#face0#说什么呢！我一开始就说不要啊！我可没闲到要照顾乌龟啊！", 9400032);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC_Bottom("嗯……你真的不想照顾它吗……？", 9400033);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else if (status === V++) {
                      cm.inGameDirectionEvent_SetHideEffect(0);
                      cm.warp(867111010, 0, true);
                      cm.setInGameDirectionMode(false, false, false);
                      cm.setStandAloneMode(false);
                      cm.npc_LeaveField("oid=1809207");
                      cm.npc_LeaveField("oid=1809208");
                      cm.npc_LeaveField("oid=1809209");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;