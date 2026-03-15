var status = -1;
function action(f, W, U) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.onScriptMessage_黑色之翼密码锁(-1);
    } else {
      if (status === V++) {
        if (U == 1) {
          cm.onScriptMessage_黑色之翼密码锁(0);
        } else {
          cm.onScriptMessage_黑色之翼密码锁(1);
          cm.playerMessage(-1, "好像没有什么反应");
          status--;
        }
      } else {
        if (status === V++) {
          cm.curNodeEventEnd(true);
          cm.setInGameDirectionMode(true, false, true);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 1850, 15);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=32861", "vanish", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
                cm.effect_Voice("SoundEff.img/barrier2", 100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(350011410, 0, true);
                  cm.setInGameDirectionMode(false, true, false);
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