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
      cm.npc_ChangeController(3003710, "oid=276991", -843, 206, 16, -893, -793, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 317, 90);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.npc_ChangeController(3003770, "oid=2308420", 690, 180, 19, 640, 740, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2308420", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2308420", -1, 500, 180);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1000, 1500, 40, 90);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=2308420"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#……那个……你认识路吧？", 37, 3003770, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("啊……那个……", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(明明就是这个方向啊……来时看到的痕迹也都还在……)", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('#face2#唉……', 37, 3003770, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("就是这条路啊……", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#再这样下去我们真的会迷路吧？", 37, 3003770, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#真不知道能不能再找到其他人了……", 37, 3003770, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=2308420", -1, 500, 180);
                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                                          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -600, 90);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction20.img/effect/BM2_effect/0"], [0, -846, 100, 1, 0, 1, 1, 0]);
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/glass", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("嗯？那是……", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#啊？你有什么发现吗？", 37, 3003770, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2308420", -1, 200, 180);
                                                      cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3500);
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
                                                              cm.forceCompleteQuest(35715);
                                                              cm.gainExp(170671356);
                                                              cm.updateInfoQuest(35715, "dir=end");
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