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
      cm.fieldEffect_PlayBGM("Bgm40.img/SecretMission", 0, 0);
      cm.setAmbience("Ambience.img/flyingdeck_fire", 100, 60);
      cm.npc_ChangeController(1540473, "oid=22431745", 381, 69, 4, 331, 431, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=22431745", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 260, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(2);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.sendNormalTalk_Bottom("你没事吧？弗朗西斯呢？", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("还是让他逃跑了。", 37, 1540473, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("很抱歉。我无力阻拦他。", 37, 1540473, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("对不起，我违背了约定。", 37, 1540460, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("但我必须要救出奥尔卡。再见。", 37, 1540460, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……他让我这么转告你。", 37, 1540473, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.userSetFieldFloating(350031501, 0, 10, 20);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                cm.effect_Voice("SoundEff.img/blackHeaven/explosion1", 100);
                              } else {
                                if (status === V++) {
                                  cm.userSetFieldFloating(350031501, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("冲击来自上方。", 37, 1540473, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我没事，请你到上面去看看吧。", 37, 1540473, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else if (status === V++) {
                                            cm.dispose();
                                            cm.warp(350032000, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;