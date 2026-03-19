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
      cm.forceForfeitQuest(63021);
      cm.forceStartQuest(63021, '');
      cm.updateInfoQuest(63021, '');
      cm.forceCompleteQuest(63022);
      cm.forceCompleteQuest(63023);
      cm.forceCompleteQuest(63024);
      cm.npc_ChangeController(9400200, "oid=23135266", 78, 145, 8, 28, 128, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=23135266", "summon", 0, 0);
      cm.npc_ChangeController(9400227, "oid=23135267", -43, 240, 14, -93, 7, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23135267", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_NormalSpeechBalloon("#fs15##e喂，年轻人！我在这里！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400200, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 100, 245);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那漂漂猪老是追着我跑，我已经在这里呆了几个小时没法行动了。", 37, 9400200, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("麻烦你帮我消灭漂漂猪吧！", 37, 9400200, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b(他居然被漂漂猪困住了。快点帮忙吧。)", 57, 0, true, true);
                } else if (status === V++) {
                  cm.setStandAloneMode(false);
                  cm.dispose();
                  cm.warp(867113600, 0, true);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=23135266");
                  cm.npc_LeaveField("oid=23135266");
                  cm.npc_LeaveField("oid=23135267");
                  cm.npc_LeaveField("oid=23135267");
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