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
      cm.inGameDirectionEvent_AskAnswerTime(600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("看来是我先到了。#p3000014#还没来吗？", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.npc_ChangeController(3000104, "oid=34323887", -310, 0, 4, -360, -260, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=34323887", 'summon', 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(90);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/0", "oid=34323887"], [900, 0, -120, 1, 0, 1, 0, 0]);
            cm.inGameDirectionEvent_MoveAction(1);
            cm.inGameDirectionEvent_AskAnswerTime(60);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(60);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("呃，你什么时候来的？我输了？真难以置信。", 1, 3000104, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("了不起，不愧是狂龙战士。我不过是个普通骑士，当然赢不了狂龙战士，不是吗？", 1, 3000104, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#p3000104#……", 17, 3000104, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk('我很忙，先走啦。', 1, 3000104, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=34323887");
                        cm.npc_LeaveField("oid=34323887");
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else if (status === V++) {
                        cm.forceStartQuest(25729, '');
                        cm.forceCompleteQuest(25729);
                        cm.gainExp(1000);
                        cm.eventSKill(0);
                        cm.setInGameDirectionMode(false, true, false);
                        cm.gainItem(4000709, -30);
                        cm.dispose();
                        cm.warp(400020300, 0, false);
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