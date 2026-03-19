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
      cm.npc_ChangeController(1530603, "oid=40155586", 1007, -48, 1, 957, 1057, 1, false, false);
      cm.npc_SetSpecialAction("oid=40155586", "summon", 0, 0);
      cm.npc_ChangeController(1530616, "oid=40155587", 768, 47, 6, 718, 818, 0, true, false);
      cm.npc_SetSpecialAction("oid=40155587", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 859, -25);
      cm.inGameDirectionEvent_PushScaleInfo(10, 2000, 10, 788, 30);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(1530608, "oid=40157233", 152, -9, 4, 102, 202, 0, true, false);
            cm.npc_SetSpecialAction("oid=40157233", "summon", 0, 0);
            cm.npc_SetForceMove("oid=40157233", 1, 350, 100);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=40155587"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.npc_setForceFlip("oid=40155587", -1);
              cm.sendNormalTalk_Bottom('怎么样？', 37, 1530120, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(400);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.sendNormalTalk_Bottom("不用担心。多亏了#h0#的帮忙，烧已经退了。", 37, 1530070, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('……#ho#？', 37, 1530120, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我听说了乐队的事情。你把情况和#ho#说明一下比较好吧？", 37, 1530070, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('……', 37, 1530120, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……我知道了，我会说明的。", 37, 1530120, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(330002615, 0);
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