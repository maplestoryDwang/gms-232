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
      cm.forceStartQuest(63024, '');
      cm.updateInfoQuest(63024, '');
      cm.forceCompleteQuest(63021);
      cm.forceCompleteQuest(63022);
      cm.forceCompleteQuest(63023);
      cm.npc_ChangeController(9400200, "oid=23053510", 650, 220, 11, 600, 700, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=23053510", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
        cm.effect_NormalSpeechBalloon("#fs15##e喂，年轻人！我在这里！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400200, cm.getPlayer().getId());
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 650, 245);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我的小狗跑进那座蝙蝠怪神殿了……！", 37, 9400200, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b(蝙蝠怪……？我还对付不了蝙蝠怪？怎么办……？)", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("求求你快帮我找找我的小狗！", 37, 9400200, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else if (status === V++) {
                    cm.setStandAloneMode(false);
                    cm.dispose();
                    cm.warp(867113631, 0, true);
                    cm.npc_LeaveField("oid=23053510");
                    cm.npc_LeaveField("oid=23053510");
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