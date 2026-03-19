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
      if (cm.isQuestFinished(35712)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1138, 175);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18#痛苦迷宫中心区"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(5000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这里是……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("咳咳……空气……令人窒息。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("啊……那边的光……", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, 317, 90);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("是门……吗？", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("过去看看。", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else if (status === V++) {
                                    cm.setStandAloneMode(false);
                                    cm.setInGameDirectionMode(false, true, false);
                                    cm.updateInfoQuest(35712, "dir=end");
                                    cm.updateInfoQuest(35750, "01=h0;11=h1;02=h0;03=h1;04=h0;15=h1;09=h0;79=h1");
                                    cm.OnStartNavigation(450011500, 0, 'east00', 0);
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