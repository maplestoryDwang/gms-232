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
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1093, 77);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400243, "oid=23279658", -426, 80, 1, -476, -376, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23279658", "summon", 0, 0);
      cm.npc_ChangeController(9400244, "oid=23279659", 200, 80, 4, 150, 250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23279659", "summon", 0, 0);
      cm.npc_ChangeController(9400245, "oid=23279660", 450, 80, 5, 400, 500, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23279660", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 100, -30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
              cm.effect_NormalSpeechBalloon("#fs12#!?", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400245, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.effect_NormalSpeechBalloon("#fs12#!?", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400244, cm.getPlayer().getId());
                  cm.inGameDirectionEvent_AskAnswerTime(200);
                  cm.effect_NormalSpeechBalloon("#fs12#!?", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400243, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=23279660", 1, 600, 100);
                    cm.inGameDirectionEvent_AskAnswerTime(200);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=23279658", 1, 1200, 200);
                      cm.npc_SetForceMove("oid=23279659", 1, 950, 200);
                      cm.inGameDirectionEvent_PushScaleInfo(5000, 1000, 5000, 700, -30);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(7000);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=23279660", -1);
                          cm.npc_setForceFlip("oid=23279659", -1);
                          cm.sendNormalTalk_Bottom("#b(大家好像都在新奇地看着我，没一个人跟我说话)", 57, 0, false, true);
                          cm.effect_NormalSpeechBalloon("#fs12#...!!", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400245, cm.getPlayer().getId());
                          cm.effect_NormalSpeechBalloon("#fs12#...?!", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400244, cm.getPlayer().getId());
                          cm.effect_NormalSpeechBalloon('#fs12#...!', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400243, cm.getPlayer().getId());
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b(我先开口搭话吧)", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b你好……？", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 1005, 120);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                    cm.effect_NormalSpeechBalloon("#fs12#你从哪里来的？", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400244, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        cm.effect_NormalSpeechBalloon("#fs12#你跟我们不太一样。你……有色彩耶？", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400245, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                          cm.effect_NormalSpeechBalloon("#fs12#你的身上为什么有色彩呢？", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400243, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                              cm.effect_NormalSpeechBalloon("#fs12#我们一来到这里就失去了色彩。", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400245, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                  cm.effect_NormalSpeechBalloon("#fs12#之前一直以为那是正常的……", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400244, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    cm.effect_NormalSpeechBalloon("#fs12#你……", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400243, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b打住！你们能不能一个一个说？", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b还有，没有色彩怎么能是正常的！一切事物都有色彩。", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("那么这个地方呢？", 37, 9400220, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#b这里应该也是有色彩的！", 57, 0, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("我们至今为止从没见过带颜色的东西。", 37, 9400220, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        cm.effect_NormalSpeechBalloon("#fs12#因为那是理所当然的。", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400244, cm.getPlayer().getId());
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#b大家别激动！我去给你们找色彩。在这个村庄外面一定找得到色彩。", 57, 0, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我们一直认为多亏了这个世界没有色彩，让我们可以更专注更深入地进行思考。", 37, 9400220, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("但是我们从没想过为什么没有色彩。", 37, 9400218, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("有色彩的话会变成什么样？", 37, 9400219, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#b(看样子很难跟他们继续对话下去。出去找找色彩的证据吧)", 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#b(在这片白色世界里周游一圈，说不定能找到点什么)", 57, 0, true, true);
                                                                                            } else if (status === V++) {
                                                                                              cm.dispose();
                                                                                              cm.updateInfoQuest(63098, "FirstEnter1=1;FirstEnter2=1;FirstEnter3=1;FirstEnter=1;FirstEnterC=1");
                                                                                              cm.forceStartQuest(63045, '');
                                                                                              cm.warp(867113400, 0, true);
                                                                                              cm.setStandAloneMode(false);
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.npc_LeaveField("oid=23279658");
                                                                                              cm.npc_LeaveField("oid=23279658");
                                                                                              cm.npc_LeaveField("oid=23279659");
                                                                                              cm.npc_LeaveField("oid=23279659");
                                                                                              cm.npc_LeaveField("oid=23279660");
                                                                                              cm.npc_LeaveField("oid=23279660");
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