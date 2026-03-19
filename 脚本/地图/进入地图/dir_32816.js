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
      cm.npc_ChangeController(1530150, "oid=37673608", -78, 61, 17, -128, -28, 0, true, false);
      cm.npc_SetSpecialAction("oid=37673608", "summon", 0, 0);
      cm.npc_ChangeController(1530170, "oid=37673609", 922, 61, 28, 872, 972, 1, false, false);
      cm.npc_SetSpecialAction("oid=37673609", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("老师！", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=37673608", -1);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#嗯？又是你？", 37, 1530150, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("对不住了，这都是为了老师您好。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("这又是什么意思？", 37, 1530150, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 1200);
                  cm.inGameDirectionEvent_AskAnswerTime(6000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("那个，把足球借我一下。", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=37673609"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("足球？几个？", 37, 1530170, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('有100个应该够了！', 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(330007200, 0);
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