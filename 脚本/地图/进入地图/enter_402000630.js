var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestFinished(34931) && cm.getQuestStatus(34932) == 0) {
    action1(f, E, e);
  } else {
    cm.dispose();
    return;
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
      cm.updateInfoQuest(34931, "dir=1;exp=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -142, -250);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 100, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#叽，叽勒……好像就在这里的沙子底下。", 37, 3001510, 0, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face2#……哎呀，我们失散了。", 37, 3001510, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#但是……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 500, 0);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/PinkBean/expectation", 100);
                        cm.fieldEffect_ProcessOnOffLayer('d0', "Effect/Direction17.img/effect/ark/illust/7/1", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                          cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#至少拿到了这个！", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#啊，真了不起……在掉下来的时候，还能捡到这个，叽勒，叽楞……", 37, 3001510, 1, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#哎呀，没想到在这么深的沙子里……幸亏那个笨蛋引爆了炸弹。", 37, 3001510, 1, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#不过要找到其他人可就麻烦了，叽，叽楞……", 37, 3001510, 1, 1);
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
                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                          cm.eventSKill(0);
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
        }
      }
    }
  }
}