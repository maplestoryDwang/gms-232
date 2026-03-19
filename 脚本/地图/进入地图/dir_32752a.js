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
      cm.npc_ChangeController(1530060, "oid=21201881", 447, 20, 36, 397, 497, 1, true, false);
      cm.npc_SetSpecialAction("oid=21201881", "summon", 0, 0);
      cm.npc_ChangeController(1530230, "oid=21201882", 247, 20, 34, 197, 297, 0, true, false);
      cm.npc_SetSpecialAction("oid=21201882", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("呵呵呵呵呵。事实上，我才是命运之转学生！", 37, 1530230, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#天啊，还真是嘴唇很厚呢！", 37, 1530060, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("好吧。你已经听说要想不让这所学校倒闭，该怎么做了吧~？", 37, 1530230, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=21201881"], [0, 0, 0, 1, 0, 1, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#呃，命运之学生竟然会是你……为了学校的未来，也没有别的办法了。好吧，请你吻我吧。", 37, 1530060, false, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=21201881", -1, 10, 100);
                  cm.npc_SetForceMove("oid=21201882", 1, 10, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=21201881", -1, 10, 100);
                    cm.npc_SetForceMove("oid=21201882", 1, 10, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=21201881", -1, 10, 100);
                      cm.npc_SetForceMove("oid=21201882", 1, 10, 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer("kiss", "Map/Effect2.img/spinOff1/kiss", 0, 1500, 0, 0, 12, 4, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer('kiss', '', 2, 1500, 0, 0, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(330002115, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;