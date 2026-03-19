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
      cm.npc_ChangeController(1520070, "oid=284516", -491, 245, 10, -541, -441, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -821, 144);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004112, "oid=2425587", -477, 230, 10, -527, -427, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425587", 'summon', 0, 0);
        cm.npc_ChangeController(3004111, "oid=2425588", -168, 228, 7, -218, -118, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425588", "summon", 0, 0);
        cm.npc_ChangeController(3004110, "oid=2425589", -272, 231, 6, -322, -222, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425589", "summon", 0, 0);
        cm.npc_ChangeController(3004109, "oid=2425590", -687, 231, 13, -737, -637, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2425590", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(13000, 0, 1500, 13000, -40, 144);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(4000);
              cm.effect_NormalSpeechBalloon("有没有什么方法能让这里恢复原样呢？", 1, 0, 0, 3000, 1, 25, -150, 0, 4, 3004112, 0, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
                cm.effect_NormalSpeechBalloon("对了，还有封印石啊！", 1, 0, 0, 3000, 1, 200, 0, 0, 4, 304111, 0, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                  cm.effect_NormalSpeechBalloon("去问问英雄们吧。", 1, 0, 0, 3000, 1, 100, 0, 0, 4, 304109, 0, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(993110785, 0, false);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=2425587");
                    cm.npc_LeaveField("oid=2425587");
                    cm.npc_LeaveField("oid=2425588");
                    cm.npc_LeaveField("oid=2425588");
                    cm.npc_LeaveField("oid=2425589");
                    cm.npc_LeaveField("oid=2425589");
                    cm.npc_LeaveField("oid=2425590");
                    cm.npc_LeaveField("oid=2425590");
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