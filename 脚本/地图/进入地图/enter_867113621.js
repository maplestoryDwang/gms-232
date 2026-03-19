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
      cm.forceForfeitQuest(63023);
      cm.forceStartQuest(63023, '');
      cm.updateInfoQuest(63023, '');
      cm.forceCompleteQuest(63021);
      cm.forceCompleteQuest(63022);
      cm.forceCompleteQuest(63024);
      cm.npc_ChangeController(9400200, "oid=23069059", -690, 528, 25, -740, -640, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=23069059", "summon", 0, 0);
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
          cm.sendNormalTalk_Bottom("我给生病的妻子买了药，正在回家的路上，谁知不小心把药掉在那树下了！", 37, 9400200, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -878, 950);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("请你帮我找回妻子的药……！", 37, 9400200, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b(他把妻子的药弄掉了……帮帮他吧。)", 57, 0, true, true);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(867113620, 0, true);
                  cm.setStandAloneMode(false);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=23069059");
                  cm.npc_LeaveField("oid=23069059");
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