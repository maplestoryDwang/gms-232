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
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -555, -350);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_Monologue("#fs30##fn黑体#《遗物》", 0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n那是蕴含着诅咒之力的遗物。", 0);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n被古代遗物所吸引的冒险家，在探险的途中发现了那个遗物。", 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#……之后便中了诅咒，徘徊在生死的边缘。", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n好不容易捡回了一条命之后，他开始为了调查遗物而东奔西走……", 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#他发现自己的身体出现了两种变化。", 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/PF_two/0", 0, 300, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction22.img/effect/PF_two/1", 0, 300, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                        cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer('01', '', 1, 2000, 410, 170, 0, 0, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("#fs30##fn黑体#《远古弓》", 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n\r\n\r\n\r\n\r\n被认为是普通刀具的遗物，原来是古代的弓。", 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#受遗物的影响，可以释放出古代的力量。", 1);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction22.img/effect/PF_two/2", 0, 500, 410, 170, 1, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_Monologue("#fs30##fn黑体#《诅咒烙印》", 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n\r\n\r\n\r\n\r\n印在手上的烙印虽然变小了，但并未消失。", 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#感觉那个东西在不断消耗生命力。", 0);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("#fs20##fn黑体#\r\n“必须尽快摆脱这个诅咒才行。”", 1);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                              cm.fieldEffect_Hero9(0, 1000);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 169, -22);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Text(["#fn黑体##fs18#几天后，帕勒坦遗迹附近", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_Hero9(-2, 300);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm51/TheVillageOfKarupa", 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#……又到这里来了吗？", 37, 1013358, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face6##b（事件是在遗迹中发生的，里面也许能找到解开诅咒的线索。\r\n但是入口紧闭着，无法进入。）#k", 37, 1013358, false, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0##b（那现在能做的事情只有两样。\r\n寻找重新进入遗迹的方法，以及对周围进行调查。）#k", 37, 1013358, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#好的。在正式开始调查之前……\r\n要先准备一下吗？", 37, 1013358, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.setStandAloneMode(false);
                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                  while (cm.getPlayer().getLevel() < 10) {
                                                                                    cm.getPlayer().levelUp();
                                                                                  }
                                                                                  cm.forceCompleteQuest(35902);
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
  }
}