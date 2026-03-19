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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 20, 10);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003271, "oid=1797769", -710, 130, 1, -760, -660, 0, true, false);
        cm.npc_SetSpecialAction("oid=1797769", 'summon', 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.npc_SetForceMove("oid=1797769", 1, 700, 200);
          cm.inGameDirectionEvent_AskAnswerTime(6000);
        } else {
          if (status === V++) {
            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 20, -5);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 20, 160);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=1797769", -1, 10, 160);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#我现在不想努力获得认可了。双弩精灵不需要我。", 37, 3003270, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#就算我再怎么努力，也无法得到，那不如干脆放弃。我要把自己藏在记忆中。无论是双弩精灵，还是其他人都将找不到我。", 37, 3003270, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face4#…到了晚上，在所有人沉睡的时候，我要把自己深深地藏在他们梦境的最深处。", 37, 3003270, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(250);
                                  } else if (status === V++) {
                                    cm.npc_LeaveField("oid=1797769");
                                    cm.dispose();
                                    cm.warp(940200121, 0);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;