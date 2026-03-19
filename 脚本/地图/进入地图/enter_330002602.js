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
      cm.setAmbience("Ambience.img/thunder2", 100, 60);
      cm.npc_ChangeController(1530601, "oid=39596269", 200, 0, 9, 150, 250, 0, true, false);
      cm.npc_SetSpecialAction("oid=39596269", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(10, 2000, 10, 340, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我的乐谱……应该没人看见吧？\r\n我是笨蛋啊！笨蛋！", 37, 1530600, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH6_01/1", 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=39596269", 1, 400, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.dispose();
                    cm.warp(330002603, 0);
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