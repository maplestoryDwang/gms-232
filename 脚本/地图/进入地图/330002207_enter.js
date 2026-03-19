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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530140, "oid=36297942", -199, 80, 3, -249, -149, 0, true, false);
      cm.npc_SetSpecialAction("oid=36297942", "summon", 0, 0);
      cm.npc_ChangeController(1530130, "oid=36297943", 701, 80, 19, 651, 751, 0, true, false);
      cm.npc_SetSpecialAction("oid=36297943", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=36297943", 'sad', -1, 1);
      cm.inGameDirectionEvent_Monologue("你知道希腊神话中的皮格梅隆王吗? ", 0);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Voice2.img/Friends/CH2_04/1", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_Monologue("他从来对现实中的女人看都不会看一眼, 一辈子就只爱慕雕像. ", 0);
        cm.effect_Voice("Voice2.img/Friends/CH2_04/2", 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_Monologue("而我和他一样. ", 1);
          cm.effect_Voice("Voice2.img/Friends/CH2_04/3", 100);
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
                cm.inGameDirectionEvent_PushMoveInfo(0, 120, -199, 80);
              } else {
                if (status === V++) {
                  cm.effect_Text(["#fn黑体##fs26#雨中的街道"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2997);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("呃啊啊，要来不及了！\r\n得去买《魔法少女水灵》角色首发限量版才行啊！这样下去的话很快就会卖光的！", 37, 1530140, false, true);
                    cm.effect_Voice("Voice2.img/Friends/CH2_04/4", 100);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=36297942", 1, 500, 150);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(0, 120, 301, 80);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_Monologue("没错, 我就是出生在现今时代的皮格梅隆……我只对人偶有兴趣, 对现实中的女子丝毫不关心. ", 0);
                            cm.effect_Voice("Voice2.img/Friends/CH2_04/5", 100);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_Monologue("然而却让我偶然间发现了……", 0);
                              cm.effect_Voice("Voice2.img/Friends/CH2_04/6", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_Monologue("淅淅沥沥的春雨中, 她的样子……", 1);
                                cm.effect_Voice("Voice2.img/Friends/CH2_04/7", 100);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("……？那是我们学校的校服？", 37, 1530140, false, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH2_04/8", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=36297942", 1, 200, 100);
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 120, 501, 80);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2167);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("那个，你站在这里做什么呢？", 37, 1530140, false, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH2_04/9", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我是魔族，所以不要紧，可像你这样柔弱的人类被雨淋到的话，是会感冒的。", 37, 1530140, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH2_04/10", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#……？", 37, 1530130, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                cm.setAmbience("Ambience.img/rain", 100, 60);
                                                cm.npc_setForceFlip("oid=36297943", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=36297942"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face1#…………", 37, 1530130, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=36297943", 1);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('orca', "Map/Effect2.img/spinOff1/OrcaInTheRain", 0, 1500, 0, 0, 12, 4, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("…………！！", 37, 1530140, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer("orca", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.playSoundEffDirectly("Ambience.img/rain");
                                                                    cm.setAmbience("Ambience.img/heart", 100, 60);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("打那以后，我的心脏就停止了跳动。", 37, 1530140, false, true);
                                                                      cm.effect_Voice("Voice2.img/Friends/CH2_04/11", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("……我明明能听见你心跳的声音。", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("别纠结那些细节好不好。总之，从第一眼见到她，我就被她迷住了。", 37, 1530140, true, true);
                                                                          cm.effect_Voice("Voice2.img/Friends/CH2_04/12", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=36297943");
                                                                            cm.npc_LeaveField("oid=36297943");
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("呵呵……是不是很没出息。作为魔族后裔的我……竟然会爱上一个区区人类。而不能自拔？", 37, 1530140, false, true);
                                                                                cm.effect_Voice("Voice2.img/Friends/CH2_04/13", 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("哎呦……平静平静吧，我的心脏啊。这样砰砰乱跳的话，我可如何是好啊。", 37, 1530140, true, true);
                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_04/14", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.playSoundEffDirectly("Ambience.img/heart");
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    cm.effect_Voice("SoundEff.img/heartFast", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.setAmbience("Ambience.img/heartfast", 100, 60);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("嗬……我现在已经无法控制我的心律了。这就是所谓的爱情吧？", 37, 1530140, false, true);
                                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_04/15", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.playSoundEffDirectly("Ambience.img/heartfast");
                                                                                            cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
                                                                                            cm.sendNormalTalk_Bottom("好吧，如果说这是神对我的惩罚……那么我愿意承受！！", 37, 1530140, false, true);
                                                                                            cm.effect_Voice("Voice2.img/Friends/CH2_04/16", 100);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#b（别……别干傻事）#k", 57, 0, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 800, 594, 130);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("从今天开始，我要#r解除#k自己的封印！", 37, 1530140, false, true);
                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_04/17", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#b（别……别干傻事）#k", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 4000, 800, 594, 130);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("神啊，请不要阻止我！从今天开始我要不顾一切地去爱她！\r\n#fs28#哇哈哈哈哈！", 37, 1530140, false, true);
                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_04/18", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 8000, 800, 594, 130);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                            } else if (status === V++) {
                                                                                                              cm.forceStartQuest(32774, '');
                                                                                                              cm.dispose();
                                                                                                              cm.warp(330000400, 1);
                                                                                                              cm.inGameDirectionEvent_SetHideEffect(0);
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