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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2074155, "oid=1942997", 694, -11, 8, 644, 744, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942997", 'summon', 0, 0);
      cm.npc_ChangeController(2074100, "oid=1942998", 593, -11, 23, 543, 643, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942998", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 619, 44);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你这又是从哪儿回来呢？", 37, 2074155, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#鬼，鬼怪！\r\n你在这里做什么！", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=1942997", -1, 10, 200);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#啊啊啊！", 37, 2074100, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你的毛到处粘着东西，这样会弄坏你漂亮的白毛的，\r\n也就是我才会帮你清理清理。", 37, 2074155, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#怎，怎么了？你认识我吗？", 37, 2074100, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 300, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.dispose();
                        cm.warp(224000073, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;