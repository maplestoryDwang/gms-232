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
      if (cm.isQuestFinished(39716)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 130, 400);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
          cm.inGameDirectionEvent_PushScaleInfo(10000, 0, 1000, 10000, 130, -700);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm35/Hekaton", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(7000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("特鲁埃博？！这里难道是莫拉斯吗？", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#超越者的力量真是难以置信。\r\n居然可以利用艾尔达重现过去的城市。", 37, 3004323, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#等、等一下！如果这里是莫拉斯的话，那接下来我们岂不是一定会见到#r“那个家伙”#k嘛。", 37, 3004322, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#你在说#r黑魔法师#k吗？\r\n创世已经失败，真正的黑魔法师也消失了，况且他好像也不打算与我们为敌……", 37, 3004323, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#话是这样说啦，如果情况有变，我们要怎么办啊？", 37, 3004322, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#但是……也没有其它路可以选啊。", 37, 3004323, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face3#那……希望不要出问题？", 37, 3004322, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Unknown9(0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else if (status === V++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.eventSKill(0);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.setStandAloneMode(false);
                                    cm.forceCompleteQuest(39716);
                                    cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
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