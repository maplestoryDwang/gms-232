var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1012106, "oid=116507", 4753, -56, 5);
      cm.npc_ChangeController(1012003, "oid=116508", 3367, 124, 5);
      cm.npc_ChangeController(1012133, "oid=116509", 5022, -56, 1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=1543349", 5536, 438, 1);
      cm.npc_SetSpecialAction("oid=1543349", "summon");
      cm.npc_ChangeController(9400063, "oid=1543350", 5736, 438, 1);
      cm.npc_SetSpecialAction("oid=1543350", "summon");
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNextNoESC_Bottom("#face2#我得先在这个射手村找找嘟嘟。这里是人们来往最多的地方！", 9400031);
      } else {
        if (status === V++) {
          cm.sendNextNoESC_Bottom("寻找失踪的人或动物时，首先就应该张贴传单！", 9400031);
        } else {
          if (status === V++) {
            cm.sendNextNoESC_Bottom("我得在人多的地方贴上传单，说不定会有人提供情报！", 9400031);
          } else {
            if (status === V++) {
              cm.sendNextNoESC_Bottom("好，在这里贴上事先制作好的传单吧。", 9400031);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=1543349", -1, 100, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2400);
                } else {
                  if (status === V++) {
                    cm.sendNextSNoESC_Bottom("嗯……在射手村贴传单的部分结束了。我也得照做才能看到接下来的故事吧？");
                  } else {
                    if (status === V++) {
                      cm.sendNextSNoESC_Bottom("前往射手村继续下个行动吧。");
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else if (status === V++) {
                        cm.inGameDirectionEvent_SetHideEffect(0);
                        cm.warp(867111050);
                        cm.setInGameDirectionMode(false, false, false);
                        cm.setStandAloneMode(false);
                        cm.npc_LeaveField("oid=1543349");
                        cm.npc_LeaveField("oid=1543350");
                        cm.npc_LeaveField("oid=116507");
                        cm.npc_LeaveField("oid=116508");
                        cm.npc_LeaveField("oid=116509");
                        cm.npc_ChangeController(9400050, "oid=116637", 1018, 574, 1);
                        cm.updateInfoQuest(59746, '');
                        cm.setStandAloneMode(true);
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