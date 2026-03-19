var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(34401) && cm.getQuestStatus(34402) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(1052124, 'oid=2385', -992, 419, 14, -1042, -992, 0, false, false);
      cm.npc_ChangeController(1052122, 'oid=2386', -831, 419, 13, -881, -781, 1, false, false);
      cm.npc_ChangeController(1052204, "oid=2387", 86, 419, 7, 36, 136, 1, false, false);
      cm.npc_ChangeController(1052205, "oid=2388", 351, 419, 5, 301, 401, 1, false, false);
      cm.npc_ChangeController(1052202, "oid=2389", 932, 419, 2, 882, 982, 1, false, false);
      cm.updateInfoQuest(34435, "s2=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_同时移动镜头和人(1, 1);
      cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 440, 441);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b（……这里估计就是过去的废都广场吧。）#k", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 90, 441);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b（看到超级明星时期的阿赫，由于警卫森严，似乎无法直接靠近他。）#k", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("啊！阿赫哥最棒啦！看看这里嘛！", 37, 1052227, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 390, 441);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b（前面站了一个看似是阿赫脑残粉的少女，也许这个少女对阿赫有所了解。）#k", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else if (status === V++) {
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                cm.setStandAloneMode(false);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.dispose();
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