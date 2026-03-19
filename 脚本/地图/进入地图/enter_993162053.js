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
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.forceCompleteQuest(39671);
      cm.Hidden_background("gold", 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -33);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 150);
            cm.fieldEffect_BackgroundCanvas(1, 70, 70, 70, 1000, 0, 0);
            cm.fieldEffect_BackgroundCanvas(4, 70, 70, 70, 1000, 0, 0);
            cm.fieldEffect_BackgroundCanvas(2, 70, 70, 70, 1000, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -33);
                  } else {
                    if (status === V++) {
                      cm.forceStartQuest(39671, '');
                      cm.Hidden_background("gold", 1, 1, 0, 0);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/toair", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(5500);
                          cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#得到剑之恩宠的勇士啊……张开怀抱迎接试炼吧。", "SampleType00"], [50, 1000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1600);
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
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 240, 90);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我伸出手，触及了神秘光芒。\r\n一瞬间，铭刻在灵魂深处的、被黑暗掩盖的记忆顿时变得鲜活起来。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                            cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/5/skeleton", 'new', '', '5'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/6/skeleton", 'new', '', '6'], [0, 1, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                cm.fieldEffect_Hero9(0, 1000);
                                                cm.inGameDirectionEvent_AskAnswerTime(1300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                  cm.fieldEffect_Hero9(100, 500);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayBGM("Bgm53/ForEinherjar", 0, 0);
                                                    cm.setAmbience("Ambience.img/warfare2", 100, 60);
                                                    cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/5', 100);
                                                    cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#只要再坚持一会儿，援军就到了。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("Voice2.img/adele/past/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                      cm.effect_Text(["#fn黑体##fs30#阿，阿黛尔！连那些家伙也……！", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/1', 100);
                                                        cm.effect_Text(["#fn黑体##fs30#阿黛尔……我以违逆神王之罪，", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/2', 100);
                                                          cm.effect_Text(["#fn黑体##fs30#在此处决你。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction18.img/effect/adele/spine/past_job/2/0", 0, 1000, 0, -80, 1, 4, 1, -1, 0, 0, 0);
                                                            cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/3', 100);
                                                            cm.effect_Text(["#fn黑体##fs30#你这个叛徒！", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                                              cm.effect_Text(["#fn黑体##fs30#我不早和你说这是最后的机会了嘛！？", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/5', 100);
                                                                cm.effect_Text(["#fn黑体##fs30#现在还不迟，乖乖投降吧。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                                  cm.effect_Text(["#fn黑体##fs30#说不定神王陛下会放你一马哦！", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/swordEff2", 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                                        cm.effect_Text(["#fn黑体##fs30#哼，你到底不肯认输是吧？", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : 'Female') + '/8', 100);
                                                                          cm.effect_Text(["#fn黑体##fs30#今天，你我这没完没了的较量也要结束了。", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                            cm.effect_Text(["#fn黑体##fs30#咳呃……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
                                                                              cm.effect_Text(["#fn黑体##fs30#咳……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/11', 100);
                                                                                cm.effect_Text(["#fn黑体##fs30#快，逮捕罪人！", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/12", 100);
                                                                                  cm.effect_Text(["#fn黑体##fs30#魔法兵，到大门前面来！", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/pendant", 100);
                                                                                        cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction18.img/effect/adele/spine/past_job/2/1", 0, 1500, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                                                        cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/13", 100);
                                                                                        cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#神王殿的门……", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.effect_Voice("Voice2.img/adele/past/C/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/14", 100);
                                                                                          cm.effect_Text(["#fn黑体##fs30##fc0xFF8d8d8d#“你们竟推倒了……英灵之门。”", ''], [10, 100, 7, 0, -60, 0, 4, 3, 0, 0, -1, 1]);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/memory_in", 100);
                                                                                              cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/7/skeleton", "new", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                                              cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                              cm.fieldEffect_取消复合图片动画('5', 0, 0);
                                                                                              cm.fieldEffect_取消复合图片动画('6', 0, 0);
                                                                                              cm.playSoundEffDirectly("Ambience.img/warfare2");
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#假面舞会上的那个声音……她叫我叛徒。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face3#违逆神王之罪……背叛主君的人，正是我吗！？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face6#我为什么干出那种事……到底是为了什么？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(5500);
                                                                                                            cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#从绝望中绽放出的光芒，会更加明亮……", "SampleType00"], [50, 1000, 4, 0, 0, 0, 4, 3, 0, 0, 0, 0]);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.forceStartQuest(39653, '');
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                                                                                                          cm.warp(cm.getNumberFromQuestInfo(39653, "rMap"), 0, false);
                                                                                                                          cm.setStandAloneMode(false);
                                                                                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}