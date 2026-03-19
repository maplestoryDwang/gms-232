var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 6000, -505, -737);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#片刻后，水晶花园"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3004079, "oid=2363211", -474, -709, 83, -524, -424, 1, false, 2000, false);
          cm.npc_SetSpecialAction("oid=2363211", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#主人，您回来得比预定时间晚了一些。", 36, 3004079, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("嗯，刚刚途经某处，稍作逗留。", 56, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("红酒呢？应该还有剩吧？", 56, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#嗯……翘首等待雇主的佣人们一杯两杯下肚，就那么……", 36, 3004079, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('……', 56, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('哼，算了。', 56, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("(看来以后得偷偷藏着，独自拿来享用了。)", 56, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#看样子，您是顺道去了一趟圣地吧。", 36, 3004079, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("这种事你到底是怎么知道的？", 56, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#只是看表情就能猜个大概，希纳斯说了什么？", 36, 3004079, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("嗯……", 56, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else if (status === V++) {
                                    cm.warp(993110753, 0, false);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.npc_LeaveField("oid=2363211");
                                    cm.npc_LeaveField("oid=2363211");
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
  }
}