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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530110, "oid=38041840", 48, 78, 1, -2, 98, 0, true, false);
      cm.npc_SetSpecialAction("oid=38041840", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("唉，真是的，为什么科学室偏偏这个时候没电啊……\r\n我得尽快将实验准备物放回原位，然后回家。", 37, 1530110, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 120, 198, 78);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=38041840", 1, 350, 150);
              cm.inGameDirectionEvent_AskAnswerTime(4500);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(1530240, "oid=38045153", -152, 20, 1, -202, -102, 0, true, false);
                cm.npc_SetSpecialAction("oid=38045153", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                  cm.effect_Voice("SoundEff.img/thunder", 100);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(330002420, 1);
                  cm.inGameDirectionEvent_SetHideEffect(0);
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