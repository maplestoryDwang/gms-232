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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("该死的……已经让他跑掉了吗？", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk('贝德罗斯……', 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3000149, "oid=210439434", 1000, 0, 6, 950, 1050, 0, true, 0, false);
            cm.npc_SetSpecialAction("oid=210439434", 'summon', 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(1);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=210439434", 1, 300, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("怎么办？贝德罗斯好像已经穿过保护罩了。", 17, 3000149, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("贝德罗斯这家伙……终于还是……", 1, 3000149, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("事情已经这样，我们只能等贝德罗斯平安归来了。", 1, 3000149, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("贝德罗斯一定会回来的。在此之前我们要养精蓄锐，等他回来。", 17, 3000149, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("(可我总有不好的预感。)", 17, 3000149, true, true);
                          } else if (status === V++) {
                            cm.forceCompleteQuest(25874);
                            cm.gainExp(5000);
                            cm.eventSKill(0);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.npc_LeaveField("oid=210439434");
                            cm.npc_LeaveField("oid=210439434");
                            cm.dispose();
                            cm.warp(400000000, 0, false);
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