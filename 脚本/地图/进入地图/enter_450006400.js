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
      if (cm.isQuestFinished(34267)) {
        cm.dispose();
        return;
      }
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 130, 400);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
          cm.inGameDirectionEvent_PushScaleInfo(10000, 1000, 10000, 130, -700);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm35.img/Hekaton", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(7500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("海加顿……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("这样下去该不会失去肉体，变成真正的怪物吧……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_Monologue("那一瞬间，我感到了时间的一去不复返。", 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("整个克里蒂亚斯被巨浪卷走，不知冲到了哪里。", 0);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue('', 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("女神伦娜？", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("不，不对。这不是女神的气息。", 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_Monologue("那一瞬间，我有了一种直觉。", 0);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_Monologue('', 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("#fnBatang##r#fn黑体#―――――――「巨大的黑暗正等着我们。」#k", 1);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1600);
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
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("江说往#b右边#k走是吧。", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("啊，回忆录在发光。", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.gainItem(4161100, -1);
                                                      cm.gainItem(4161101, 1);
                                                      cm.userSetFieldFloating(450006400, 3, 3, 1);
                                                      cm.updateInfoQuest(34267, 'enter0=1');
                                                      cm.playerMessage(5, "消灭区域内的所有怪物后再离开吧。");
                                                      cm.dispose();
                                                      cm.setStandAloneMode(false);
                                                      var O = cm.getEventManager("莫拉斯_剧情_战斗1");
                                                      O.startInstance(cm.getPlayer(), cm.getMap());
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