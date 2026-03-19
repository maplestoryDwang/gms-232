var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34257) && !cm.isQuestFinished(34258)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -475, -108);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哇塞！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
              cm.onTeleport(0, 3, cm.getPlayer().getId(), -464, -316);
              cm.inGameDirectionEvent_AskAnswerTime(650);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Aran/down", 100);
                cm.inGameDirectionEvent_MoveAction(4);
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.effect_LastingEff("Effect/CharacterEff.img/HofM/fall2", 1, 1000, 0);
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("那个所长竟然是#fs18##r阿卡伊勒#k#fs16#？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("这么说塔纳和阿卡伊勒早就认识了？", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这两个家伙……一定跟#fs18##r克里蒂亚斯封印#k#fs16#有某种关联。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("不过这是哪啊？特鲁埃博的地下监狱？感觉好可怕啊。", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                  cm.effect_Text(["#fn黑体##fs18#海加顿历54年，特鲁埃博地下监狱"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else if (status === V++) {
                                            cm.updateInfoQuest(34257, "enter=1");
                                            cm.dispose();
                                            cm.warp(450006240, 0, true);
                                            cm.setStandAloneMode(false);
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
function action10(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;