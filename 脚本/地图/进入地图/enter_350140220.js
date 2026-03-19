var status = -1;
var selectionLog = [];
function action(I, S, A) {
  if (status == 0 && I == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = A;
  var U = -1;
  if (status <= U++) {
    cm.dispose();
  } else {
    if (status === U++) {
      cm.npc_ChangeController(1540901, "oid=293552534", -75, 210, 4, -125, -25, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293552534", "summon", 0, 0);
      cm.npc_ChangeController(1540902, "oid=293552535", -280, 210, 1, -330, -230, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293552535", 'summon', 0, 0);
      cm.npc_ChangeController(1540903, "oid=293552536", -350, 210, 1, -400, -300, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=293552536", "summon", 0, 0);
      cm.npc_ChangeController(1540904, "oid=293552537", 130, 210, 7, 80, 180, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293552537", "summon", 0, 0);
      cm.npc_ChangeController(1540905, "oid=293552538", 175, 210, 7, 125, 225, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=293552538", 'summon', 0, 0);
      cm.npc_ChangeController(1540906, "oid=293552539", 230, 210, 6, 180, 280, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293552539", "summon", 0, 0);
      cm.npc_ChangeController(1540907, "oid=293552540", 70, 210, 5, 20, 120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293552540", "summon", 0, 0);
      cm.npc_ChangeController(1540908, "oid=293552541", 25, 210, 5, -25, 75, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293552541", "summon", 0, 0);
      cm.npc_ChangeController(1540909, "oid=293552542", 275, 210, 9, 225, 325, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293552542", 'summon', 0, 0);
      cm.npc_ChangeController(1540910, "oid=293552543", 325, 210, 9, 275, 375, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=293552543", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 300, 210);
      cm.curNodeEventEnd(true);
    } else {
      if (status === U++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === U++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -150, 210);
        } else {
          if (status === U++) {
            cm.inGameDirectionEvent_AskAnswerTime(2500);
          } else {
            if (status === U++) {
              cm.npc_SetForceMove("oid=293552534", -1, 30, 197);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === U++) {
                cm.sendNormalTalk_Bottom("#face1#那是从前将黑魔法师封印的英雄，他们一定能够做到。", 37, 1540453, false, true);
              } else {
                if (status === U++) {
                  cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 125, 210);
                } else {
                  if (status === U++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === U++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === U++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                        cm.effect_NormalSpeechBalloon("……我也会贡献出一份力量的！", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 1540907, cm.getPlayer().getId());
                      } else {
                        if (status === U++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=293552534"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.npc_SetForceMove("oid=293552534", 1, 30, 197);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === U++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                            cm.effect_NormalSpeechBalloon("我会一同作战！", 1, 0, 0, 1500, 0, 0, 0, 0, 4, 1540906, cm.getPlayer().getId());
                          } else {
                            if (status === U++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                              cm.effect_NormalSpeechBalloon("我也会参与作战！", 1, 0, 0, 1500, 0, 0, 0, 0, 4, 1540909, cm.getPlayer().getId());
                            } else {
                              if (status === U++) {
                                cm.sendNormalTalk_Bottom("谢谢你们的心意，但是保护居民免受威胁是我们联盟军的义务。", 37, 1540453, false, true);
                              } else {
                                if (status === U++) {
                                  cm.sendNormalTalk_Bottom("不能再放任大家以身涉险了，接下来的战斗就交给我和士兵们吧。", 37, 1540453, true, true);
                                } else {
                                  if (status === U++) {
                                    cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 3000, 0, 70, 230);
                                  } else {
                                    if (status === U++) {
                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === U++) {
                                        cm.sendNormalTalk_Bottom('……', 37, 1540907, false, true);
                                      } else {
                                        if (status === U++) {
                                          cm.sendNormalTalk_Bottom("……知道了，就这么办吧。", 37, 1540907, true, true);
                                        } else {
                                          if (status === U++) {
                                            cm.sendNormalTalk_Bottom("#face0#那，还请长老赶紧将居民们带到安全的地方去。", 37, 1540453, true, true);
                                          } else {
                                            if (status === U++) {
                                              cm.OverlapScreenDetail19(0, 1000, 1000, 1);
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 125, 210);
                                            } else {
                                              if (status === U++) {
                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === U++) {
                                                  cm.npc_SetForceMove("oid=293552535", -1, 300, 197);
                                                  cm.npc_SetForceMove("oid=293552536", -1, 300, 197);
                                                  cm.npc_SetForceMove("oid=293552540", 1, 500, 197);
                                                  cm.npc_SetForceMove("oid=293552541", 1, 500, 197);
                                                  cm.npc_SetForceMove("oid=293552542", 1, 500, 197);
                                                  cm.npc_SetForceMove("oid=293552543", 1, 500, 197);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === U++) {
                                                    cm.npc_SetForceMove("oid=293552534", -1, 50, 197);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === U++) {
                                                      cm.npc_SetForceMove("oid=293552537", -1, 0, 197);
                                                      cm.sendNormalTalk_Bottom("赫丽娜！", 37, 1540904, false, true, 1, 1000);
                                                    } else {
                                                      if (status === U++) {
                                                        cm.npc_SetForceMove("oid=293552539", -1, 0, 197);
                                                        cm.npc_SetForceMove("oid=293552534", 1, 140, 197);
                                                        cm.npc_SetForceMove("oid=293552537", -1, 15, 197);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === U++) {
                                                          cm.sendNormalTalk_Bottom("那个，和那些英雄一起作战的就是我的儿子龙神吗？", 37, 1540904, false, true);
                                                        } else {
                                                          if (status === U++) {
                                                            cm.sendNormalTalk_Bottom("#face1#没错，你的儿子很出色。", 37, 1540453, true, true);
                                                          } else {
                                                            if (status === U++) {
                                                              cm.sendNormalTalk_Bottom("哎哟喂，都说猫捉老鼠狗打洞，他终究还是……", 37, 1540904, true, true);
                                                            } else {
                                                              if (status === U++) {
                                                                cm.npc_SetSpecialAction("oid=293552538", "stand2", 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === U++) {
                                                                  cm.sendNormalTalk_Bottom("是狗看门，看门啦，老公。", 37, 1540905, false, true);
                                                                } else {
                                                                  if (status === U++) {
                                                                    cm.sendNormalTalk_Bottom("#face1#龙神，他已经是非常勇敢的冒险岛世界的英雄了。\r\n相信他吧，祝令郎好运。", 37, 1540453, true, true);
                                                                  } else {
                                                                    if (status === U++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === U++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === U++) {
                                                                          cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 2);
                                                                          cm.forceCompleteQuest(34011);
                                                                          cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                                                          cm.updateInfoQuest(33964, '34011=1');
                                                                          cm.updateInfoQuest(34020, "check1=1;check2=1;check3=1;check4=1");
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                        } else {
                                                                          if (status === U++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 0, 0);
                                                                          } else {
                                                                            if (status === U++) {
                                                                              cm.fieldEffect_Hero8(1);
                                                                              cm.fieldEffect_Hero9(0, 3000);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === U++) {
                                                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                cm.fieldEffect_Hero8(0);
                                                                                cm.fieldEffect_Hero9(100, 3000);
                                                                                cm.playVideoByScript("Heroes4.avi");
                                                                              } else if (status === U++) {
                                                                                cm.dispose();
                                                                                cm.warp(350140500, 0, false);
                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.npc_LeaveField("oid=293552534");
                                                                                cm.npc_LeaveField("oid=293552534");
                                                                                cm.npc_LeaveField("oid=293552535");
                                                                                cm.npc_LeaveField("oid=293552535");
                                                                                cm.npc_LeaveField("oid=293552536");
                                                                                cm.npc_LeaveField("oid=293552536");
                                                                                cm.npc_LeaveField("oid=293552537");
                                                                                cm.npc_LeaveField("oid=293552537");
                                                                                cm.npc_LeaveField("oid=293552538");
                                                                                cm.npc_LeaveField("oid=293552538");
                                                                                cm.npc_LeaveField("oid=293552539");
                                                                                cm.npc_LeaveField("oid=293552539");
                                                                                cm.npc_LeaveField("oid=293552540");
                                                                                cm.npc_LeaveField("oid=293552540");
                                                                                cm.npc_LeaveField("oid=293552541");
                                                                                cm.npc_LeaveField("oid=293552541");
                                                                                cm.npc_LeaveField("oid=293552542");
                                                                                cm.npc_LeaveField("oid=293552542");
                                                                                cm.npc_LeaveField("oid=293552543");
                                                                                cm.npc_LeaveField("oid=293552543");
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