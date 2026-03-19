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
      cm.npc_ChangeController(3000105, "oid=31077732", 1550, 0, 11, 1500, 1600, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=31077732", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(90);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=31077732", -1, 50, 100);
          cm.sendNormalTalk("怎么办？贝德罗斯好像已经穿过保护罩了。", 1, 3000105, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("贝德罗斯这家伙……终于还是……", 17, 3000105, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("事情已经这样，我们只能等贝德罗斯平安归来了。", 17, 3000105, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("贝德罗斯一定会回来的。在此之前我们要养精蓄锐，等他回来。", 1, 3000105, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("(贝德罗斯……我有种不好的预感。)", 17, 3000105, true, true);
                } else if (status === V++) {
                  cm.forceCompleteQuest(25761);
                  cm.gainExp(5000);
                  cm.eventSKill(0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=31077732");
                  cm.npc_LeaveField("oid=31077732");
                  cm.dispose();
                  cm.warp(400010200, 0, false);
                }
              }
            }
          }
        }
      }
    }
  }
}