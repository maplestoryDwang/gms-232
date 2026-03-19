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
      cm.setAmbience("Ambience.img/wind", 100, 60);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530190, "oid=37818078", 150, 20, 3, 100, 200, 1, true, false);
      cm.npc_SetSpecialAction("oid=37818078", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=37818078", "black", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("在空无一人的旧楼里……看门大叔做着不为人知的事情。", 37, 1530180, false, true);
            cm.effect_Voice("Voice2.img/Friends/CH4_04/13", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("那就是………！", 37, 1530180, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH4_04/14", 100);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face1#进行召唤出鬼怪的恶魔仪式……！！", 37, 1530180, false, true);
                  cm.effect_Voice("Voice2.img/Friends/GHOST/9", 100);
                  cm.effect_Voice("Voice2.img/Friends/CH4_04/15", 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                    cm.effect_Voice("Voice2.img/Friends/GHOST/9", 100);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(330002414, 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;