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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 345, -64);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('2', "Effect/Direction17.img/effect/ark/noise/1366/2", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
        cm.fieldEffect_ProcessOnOffLayer('3', "Effect/Direction17.img/effect/ark/noise/1366/3", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
        cm.monadForceMove("back1", 0, 0);
        cm.monadForceMove('front1', 0, 0);
        cm.fieldEffect_PlayBGM("Bgm47.img/DeathOfAsylum", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(7400);
        cm.effect_Text(["#fn黑体##fs35#好像没被发现。他们在这种地方到底在干什么呢……"], [50, 6900, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                cm.inGameDirectionEvent_AskAnswerTime(7100);
                cm.effect_Text(["#fn黑体##fs35##b准将，我们收到了情报，说他们很快会进攻基地。"], [50, 6600, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(4700);
                  cm.effect_Text(["#fn黑体##fs35##b今天晚上……应该会按时到达。"], [50, 4200, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                    cm.effect_Text(["#fn黑体##fs35#林波准将……到底是怎么回事……"], [50, 4500, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4100);
                      cm.effect_Text(["#fn黑体##fs35#今天晚上……到底是谁……"], [50, 3600, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(8000);
                        cm.effect_Text(["#fn黑体##fs35##b蛮族的反抗很激烈……虽然设置吸收体花了不少功夫……"], [50, 7500, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(6800);
                          cm.effect_Text(["#fn黑体##fs35##b但是现在他们只能乖乖地成为高等翼人的祭品。"], [50, 6300, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                              cm.effect_Text(["#fn黑体##fs35##r……辛苦了。"], [50, 2000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, -431, -64);
                              } else {
                                if (status === V++) {
                                  cm.monadForceMove('back1', 1, 1000);
                                  cm.monadForceMove("back0", 0, 2000);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2600);
                                    cm.effect_Text(["#fn黑体##fs35##b胜利属于我们！"], [50, 2100, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2900);
                                      cm.effect_Text(["#fn黑体##fs35##r荣耀属于翼人……"], [50, 2400, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(6200);
                                        cm.effect_Text(["#fn黑体##fs35#所谓的和平只不过是借口……其实是侵略。"], [50, 5700, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(6500);
                                          cm.effect_Text(["#fn黑体##fs35#执行的时间就是今天晚上。没剩多少时间了。"], [50, 6000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(6500);
                                            cm.effect_Text(["#fn黑体##fs35#……危险。必须阻止他们，不能让他们过来。"], [50, 6000, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3200);
                                                cm.effect_Text(["#fn黑体##fs35##r现在根源的知识……"], [50, 2700, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -1081, 0);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.monadForceMove("front1", 1, 1000);
                                                      cm.monadForceMove("front0", 0, 2000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3350);
                                                      cm.effect_Text(["#fn黑体##fs35##r已.是.囊.中.之.物。"], [50, 2850, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(5300);
                                                            cm.effect_Text(["#fn黑体##fs35#那，那是林波准将……的真面目！？"], [50, 4800, 7, 0, -50, 0, 4, 3, 300, 300, 0]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('0', "Effect/Direction17.img/effect/ark/noise/1366/0", 0, 500, 0, -10, 0, 4, 1, -1, 1, 0, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer('2', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                cm.fieldEffect_ProcessOnOffLayer('3', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                cm.forceStartQuest(34936, '');
                                                                cm.forceCompleteQuest(34936);
                                                                cm.gainExp(7360);
                                                                cm.updateInfoQuest(34936, "exp=1");
                                                                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h1;07=h0;17=h0;09=h0");
                                                                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h0;09=h0");
                                                                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h0;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h1;09=h0");
                                                                cm.updateInfoQuest(34995, "00=h1;10=h0;01=h0;11=h0;02=h0;12=h0;13=h0;04=h0;23=h1;14=h0;05=h0;24=h0;15=h0;06=h0;16=h0;07=h0;17=h1;09=h0");
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
                                                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                                                      cm.setStandAloneMode(false);
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else if (status === V++) {
                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                      cm.warp(402000644, 0, false);
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