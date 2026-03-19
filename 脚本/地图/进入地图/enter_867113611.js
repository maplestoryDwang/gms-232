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
      cm.forceForfeitQuest(63022);
      cm.forceStartQuest(63022, '');
      cm.updateInfoQuest(63022, '');
      cm.forceCompleteQuest(63021);
      cm.forceCompleteQuest(63023);
      cm.forceCompleteQuest(63024);
      cm.npc_ChangeController(9400200, "oid=23124626", 680, 1500, 77, 630, 730, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=23124626", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1494, 1550);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("#fs15##e你好，年轻人！我在这里！", 0, 0, 0, 3000, 0, 0, 0, 0, 4, 9400200, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 700, 1550);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我被木妖追赶，一路爬到了这里，实在不敢下去。", 37, 9400200, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("请你帮助我下去！\r\n#e你先上来！", 37, 9400200, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b(那么矮都不敢下来，赶紧帮帮他吧。)", 57, 0, true, true);
                    } else if (status === V++) {
                      cm.setStandAloneMode(false);
                      cm.dispose();
                      cm.warp(867113610, 0, true);
                      cm.setInGameDirectionMode(false, true, false);
                      cm.npc_LeaveField("oid=23124626");
                      cm.npc_LeaveField("oid=23124626");
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