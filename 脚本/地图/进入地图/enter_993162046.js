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
      cm.npc_ChangeController(3001957, "oid=6681825", 193, -1200, 2, 143, 243, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=6681825", 'summon', 0, 0);
      cm.npc_ChangeController(3001955, "oid=6681826", 281, -1198, 2, 231, 331, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6681826", "summon", 0, 0);
      cm.npc_ChangeController(3001959, "oid=6681827", 1, -10, 4, -49, 51, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6681827", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=6681827", "special1", -1, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, -10);
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
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#咳呃……我该早点辞职的……", 36, 3001959, false, true, 1);
              cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#这下还能拿到离职金吗……", 36, 3001959, false, true, 1);
                  cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/2', 100);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 448, -470);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.setAmbience("Ambience.img/warfare2", 150, 60);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                            cm.effect_Text(["#fn黑体##fs18#此刻，城墙上", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.playSoundEffDirectly("Ambience.img/warfare2");
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission4", 100);
                              cm.sendNormalTalk_Bottom("#face0#呃……伯爵家士兵没有再涌上来了。", 36, 3001963, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我们胜利了……打退他们了。", 36, 3001963, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#这全多亏骑士扫清了尖塔的士兵。", 36, 3001962, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#希望他们二位平安无事。", 36, 3001963, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -130, -1184);
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
                                              cm.emotion(1, 999999);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 43, -1184);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 125);
                                                  cm.fieldEffect_InsertCanvas(1, 50, 0, 0, 0, 1000, 2);
                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(我有种不好的预感……又出现了与上次类似的感觉。)", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 100, 0, 0, 0, 1000, 2);
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 125);
                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(再往前走一段，就能救到杰罗姆了……)", 37, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(4);
                                                        cm.sendNormalTalk_Bottom("#face0#呵呵……西蒙，你果然是个能干的管家。\r\n和传说中的骑士对决，都不会露怯。", 36, 3001957, false, true, 1);
                                                        cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/3', 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#只要把这个交给高等翼人……我的位置就稳了！", 36, 3001957, true, true, 1);
                                                          cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/4', 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face6#……翼人？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                            cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/5', 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#哼，传说中的骑士也没什么了不起嘛。", 36, 3001957, true, true, 1);
                                                              cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/6', 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_MoveAction(4);
                                                                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(是因为魔力耗尽的缘故吗……我又开始看见亚空间了。)", 37, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/1/black out_smog", "black out_smog", '', '00'], [0, 0, 0, 0, 0, 0, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#如果你宁死也要保护这小子的话，\r\n你们就一起下地狱吧！", 36, 3001957, false, true, 1);
                                                                        cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/7', 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#(伯爵将杰罗姆推下了尖塔。\r\n我赶忙伸出手，试图拉住他，却……)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission3", 100);
                                                                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction18.img/effect/adele/illust/present/4/1", 0, 500, 0, 0, 1, 4, 1, -1, 0, 0, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#呃啊！！", 37, 3001954, false, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#哈哈……那我先走了～！", 36, 3001957, false, true, 1);
                                                                                      cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/8', 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face7#杰罗姆……", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                                        cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/9', 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_Hero9(0, 1000);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                            cm.fieldEffect_Hero9(100, 500);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_PlayBGM("Bgm53/AdelesOath", 0, 0);
                                                                                              cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#(这回我依旧……没守住主君吗？\r\n不……我不想再经历那种事情了！)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/8/skeleton", 'idle', '', '00'], [0, 1, 1, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                                                                cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#得到剑之恩宠的勇士……燃起盟誓之火吧。", "SampleType00"], [50, 3000, 7, 0, -60, 0, 4, 3, 0, 0, 0, 0]);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(6500);
                                                                                                  cm.effect_Text(["#fn黑体##fs30##fc0xFFd8d8d8#只有那明亮的火光，才能战胜黑暗……", "SampleType00"], [50, 3000, 7, 0, -60, 0, 4, 3, 0, 0, 0, 0]);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_取消复合图片动画('00', 1, 0);
                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/flame1", 100);
                                                                                                    cm.fieldEffect_复合图片动画(["Effect/Direction18.img/effect/adele/spine/etc/8/skeleton", '++', '', '01'], [0, 0, 1, 0, 0, 0, 0, 1, 0, 0]);
                                                                                                    cm.sendNormalTalk_Bottom("#face7#哪怕焚尽我的灵魂……我也一定会救你的，杰罗姆。", 37, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                                                                    cm.effect_Voice("Voice2.img/adele/present/H/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/10", 100);
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
                                                                                                            cm.fieldEffect_取消复合图片动画('01', 1, 0);
                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.warp(993162078, 0, false);
                                                                                                            cm.setStandAloneMode(false);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.npc_LeaveField("oid=6681825");
                                                                                                            cm.npc_LeaveField("oid=6681826");
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