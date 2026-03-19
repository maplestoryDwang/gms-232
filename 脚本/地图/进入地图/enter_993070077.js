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
      cm.npc_ChangeController(3003659, "oid=277970", -1252, -535, 18, -1289, -1202, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=277971", 1576, 190, 12, 1526, 1626, 1, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=277972", 878, 190, 13, 828, 928, 1, true, 0, false);
      cm.npc_ChangeController(3003659, 'oid=277973', -548, 190, 11, -551, -498, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=277974", -905, 190, 15, -955, -855, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=277975", -1251, 190, 16, -1301, -1201, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=277976", -1353, -535, 21, -1403, -1329, 0, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=277977", -1607, 190, 14, -1657, -1557, 0, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onSetMapObjectMove('attack', [1, 0, 0]);
      cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
      cm.monadForceMove('giantHit1', 0, 0);
      cm.npc_ChangeController(3003922, "oid=2180652", -1500, 193, 1, -1550, -1450, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2180652", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2180653", -1150, 193, 2, -1200, -1100, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2180653", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2180654", -800, 193, 3, -850, -750, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2180654", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2180655", -450, 193, 4, -500, -400, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2180655", 'summon', 0, 0);
      cm.npc_ChangeController(3003922, "oid=2180656", 450, 193, 6, 400, 500, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2180656", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2180657", 800, 193, 7, 750, 850, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2180657", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2180658", 1150, 193, 7, 1100, 1200, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2180658", "summon", 0, 0);
      cm.npc_ChangeController(3003922, "oid=2180659", 1500, 193, 8, 1450, 1550, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2180659", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1070, 182);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/Falldown", 100);
          cm.sendNormalTalk_Bottom("呃！这里是……", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayBGM("Bgm50/TheWorld’sEnd", 0, 0);
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.onSetMapObjectMove("attackAll", [1, 100, 0]);
                cm.onSetMapObjectMove("attackAll", '1', [2, 0]);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_attack", 100);
                cm.npc_ChangeController(3003751, "oid=2180660", 968, 120, 13, 918, 1018, 1, true, 1000, false);
                cm.npc_SetSpecialAction("oid=2180660", 'summon', 0, 0);
                cm.sendNormalTalk_Bottom("#face0#准备应对巨人的攻击！！", 37, 3003751, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 500, 500, 0, -450);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(993070077, 50, 50, 1);
                      cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM3_giant2/skeleton", "animation", '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_wave", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(993070077, 25, 25, 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.userSetFieldFloating(993070077, 3, 3, 6);
                          cm.sendNormalTalk_Bottom("怎么会这样……那种东西到底是什么时候……", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#没有受损！好像在射程之外！", 37, 3003758, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#呼……", 37, 3003751, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("南哈特！！", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=2180660", 1);
                                  cm.sendNormalTalk_Bottom("#face0##h0#？你怎么突然回来了……", 37, 3003751, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#总之，你没事就好。真是太好了。\r\n事情我已经从迷宫中回来的士兵们那里听说了。", 37, 3003751, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("那个东西……到底发生了什么？", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#从黑太阳中流出的水，把埃斯佩拉染成了红色。\r\n那个东西就是在那里诞生的。", 37, 3003751, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#创世之卵所在的地方现在成了#r巨人心脏#k。", 37, 3003751, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/giant_core", 100);
                                                cm.fieldEffect_复合图片动画(["Effect/Direction20.img/effect/BM3_giant/skeleton", '1', '', "intro"], [0, 0, 1, 0, 0, 0, 0, 1]);
                                                cm.inGameDirectionEvent_AskAnswerTime(10000);
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
                                                      cm.sendNormalTalk_Bottom("#face0#红色眼泪诞下吞噬心脏的巨人……预言最终成真了。", 37, 3003751, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#他那形象，仿佛在宣称自己就是即将毁灭这世界的神……", 37, 3003751, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#fs18#那光芒的正中央，就是我刚才待的地方吗？", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("那么说，奥尔卡刚才在那个冲击波中……", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#准备好了吗？", 37, 3003750, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_ChangeController(3003750, "oid=2180682", -1122, -590, 22, -1172, -1072, 0, true, 500, false);
                                                                    cm.npc_SetSpecialAction("oid=2180682", "summon", 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#女皇陛下，发射准备已经做好了！", 37, 3003758, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#没时间犹豫了！", 37, 3003750, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=2180682", "attack", 1, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#发射！！！", 37, 3003750, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetSpecialAction("oid=2180652", "special", -1, 1);
                                                                              cm.npc_SetSpecialAction("oid=2180659", "special", -1, 1);
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=2180653", "special", -1, 1);
                                                                                cm.npc_SetSpecialAction("oid=2180658", "special", -1, 1);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=2180654", "special", -1, 1);
                                                                                  cm.npc_SetSpecialAction("oid=2180657", 'special', -1, 1);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=2180655", "special", -1, 1);
                                                                                    cm.npc_SetSpecialAction("oid=2180656", "special", -1, 1);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/cannon", 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.monadForceMove("giantHit1", 1, 0);
                                                                                      cm.setAmbience("SoundEff.img/BM3/boomb", 100, 60);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.userSetFieldFloating(993070077, 0, 0, 0);
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1070, 182);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.userSetFieldFloating(993070077, 1, 1, 5);
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#我们会为你打开一条缝，让你可以重新进入。\r\n可能需要一点时间，请做好心理准备。", 37, 3003751, false, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("等一下，南哈特。\r\n你知道有关“路”的事情吗？", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom('#face0#！！', 37, 3003751, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("古瓦洛和奥尔卡都提到了“路”。\r\n说我们还在路上，必须摆脱之类。", 57, 0, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#……", 37, 3003751, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#前方！出现大量怪物！！正在向本舰靠近！", 37, 3003758, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#有关路的事情，我以后再跟你说。\r\n先解决掉这些家伙再说。", 37, 3003751, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                              } else if (status === V++) {
                                                                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250);
                                                                                                                cm.forceStartQuest(35806, '');
                                                                                                                cm.forceCompleteQuest(35806);
                                                                                                                cm.gainExp(1082698525);
                                                                                                                cm.updateInfoQuest(35831, "52=h1;53=h1;55=h1;56=h1;57=h1");
                                                                                                                cm.updateInfoQuest(35831, "52=h1;53=h1;55=h1;56=h1;57=h1;58=h0");
                                                                                                                cm.dispose();
                                                                                                                cm.warp(450012310, 0, false);
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
}