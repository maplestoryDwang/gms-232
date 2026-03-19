var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (!cm.getQuestStatus(35929) == 1) {
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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -36, -358);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(4000, 1000, 4000, -36, 0);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#片刻之后，卡鲁帕村"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(5500);
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 0, 80, 90);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNextNoESC_Bottom("#face0#呵呵……玩笑开过头了吧，布里。进入了那个凶物内部？\r\n对于我们卡鲁帕来说是绝对不可能的事情……", 1013352);
                      } else {
                        if (status === V++) {
                          cm.sendNextNoESC_Bottom("#face0#在废墟中跟没有形体的声音对话……\r\n简直就是天方夜谭……", 1013353);
                        } else {
                          if (status === V++) {
                            cm.sendNextNoESC_Bottom("#face1#抽泣……抽泣……", 1013350);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === V++) {
                                cm.sendNext_Bottom("#face6##b（因为觉得不放心，所以又回来看看。\r\n村民们果然不相信那个小孩说的话。）#k", 1013358);
                              } else {
                                if (status === V++) {
                                  cm.sendNext_Bottom("#face0##b（虽然我不喜欢多管闲事，\r\n但这次感觉不能袖手旁观……）#k", 1013358);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextNoESC_Bottom("#face0#是跟那个不祥的外地人在一起，所以学坏了吗……\r\n啧啧，本来是个善良的孩子……真可惜……", 1013352);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextNoESC_Bottom("#face1#不，不是的……勇士……勇士……", 1013350);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNext_Bottom("#face0#打起精神来，小孩。这是帮助我的代价。", 1013358);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Fever");
                                                cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction22.img/effect/PF_flower/0", 0, 0, -20, 85, -1200000, 4, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextNoESC_Bottom("#face0#啊……这是……", 1013350);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 300, 0, 0, 0, 0, 0);
                                                    cm.sendNext_Bottom("#face1##b（小孩捡起了一朵花，紧紧地握在手里。\r\n之后好像下定了什么决心似的，用力擦了擦眼泪。）#k", 1013358);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 6000, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNextNoESC_Bottom("#face1#村外的废墟不是什么凶物。那是……\r\n我们卡鲁帕的祖先为了存放神物而建造的场所。", 1013350);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNextNoESC_Bottom("#face1#但是那个神物被注入了邪恶的力量……\r\n废墟担心邪恶气息会伤害到卡鲁帕们，所以才会发出那种可怕的声音……", 1013350);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNext_Bottom("#face0##b（呼……这可不太像我的风格。\r\n啧，所以我不喜欢跟人有什么瓜葛。）#k", 1013358);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNext_Bottom("#face0##b（不过总算可以安心离开了。\r\n后面的事情应该就能自己解决了吧。那么现在我应该去哪里呢……）#k", 1013358);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNext_Bottom("#face3##b（啊，在这之前……我得去一个地方。\r\n弓箭手培训中心离这里不太远。）#k", 1013358);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
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
                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                            } else if (status === V++) {
                                                                              cm.setStandAloneMode(false);
                                                                              cm.setInGameDirectionMode(false, false, false);
                                                                              cm.forceCompleteQuest(35929);
                                                                              cm.updateInfoQuest(35948, "00=h1;10=h0;02=h1;11=h1;12=h0;21=h0;22=h1;13=h0;23=h1;14=h0;24=h0;06=h0;15=h0;16=h0;07=h0;25=h0;26=h1;17=h0;08=h0;09=h0;19=h1");
                                                                              cm.updateInfoQuest(35948, "00=h1;10=h0;02=h1;11=h1;12=h0;21=h0;22=h1;13=h0;23=h1;14=h0;24=h0;06=h0;15=h0;16=h0;07=h0;25=h0;26=h1;17=h0;08=h0;09=h0;19=h0");
                                                                              cm.dispose();
                                                                              cm.warp(100000201);
                                                                            } else {
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