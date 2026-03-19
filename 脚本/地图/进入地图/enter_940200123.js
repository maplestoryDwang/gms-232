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
        cm.npc_ChangeController(3003270, "oid=1797791", 0, 120, 1, -50, 50, 1, true, false);
        cm.npc_SetSpecialAction("oid=1797791", "summon", 0, 0);
        cm.setNpcSpecialActionReset("oid=1797791");
        cm.npc_SetSpecialAction("oid=1797791", "ice", -1, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#好像有什么事情要发生… 总觉得很奇怪…究竟是什么呢，这让人讨厌的气息…", 37, 3003270, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 20, 160);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("就这样路西德也受到了漫长的诅咒。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("…没能和任何人互相安慰或约定。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("…就那样被困在冰里，只有精神还清醒着。", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("操纵梦的能力反而变成了最残酷的刑罚。", 0);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(250);
                              } else if (status === V++) {
                                cm.npc_LeaveField("oid=1797791");
                                cm.dispose();
                                cm.warp(940200124, 0);
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