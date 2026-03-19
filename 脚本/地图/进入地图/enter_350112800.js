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
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.Hidden_background("ice", 1, 0, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
      cm.forceCompleteQuest(33925);
      cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
      cm.updateInfoQuest(33960, "33920=1;33921=1;33922=1;33923=1;33924=1;33925=1");
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 2920, 250);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(1540805, "oid=288414830", 3600, 300, 4, 3550, 3650, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=288414830", "summon", 0, 0);
          cm.npc_ChangeController(1540807, "oid=288414831", 3600, 300, 4, 3550, 3650, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=288414831", "summon", 0, 0);
          cm.npc_ChangeController(1540802, "oid=288414832", 3600, 300, 4, 3550, 3650, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=288414832", "summon", 0, 0);
          cm.npc_ChangeController(1540806, "oid=288414833", 3600, 300, 4, 3550, 3650, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=288414833", "summon", 0, 0);
          cm.fieldEffect_复合图片动画(["Map/Effect2.img/Blizzard/skeleton", "normal", '', ''], [1, 1, 0, 0, 0, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=288414832", -1, 1130, 300);
                cm.userSetFieldFloating(350112800, 0, 3, 1);
                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion3", 100);
                cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=288414833", -1, 1075, 300);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=288414830", -1, 990, 300);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove("oid=288414831", -1, 920, 300);
                      cm.inGameDirectionEvent_AskAnswerTime(1800);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion10", 100);
                        cm.Hidden_background("ice", 1, 1, 0, 0);
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/cave", 100);
                        cm.onSetMapObjectCreateLayerMore("ice", 2, '01', 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=288414830", 1);
                              cm.npc_setForceFlip("oid=288414831", 1);
                              cm.npc_setForceFlip("oid=288414832", 1);
                              cm.npc_setForceFlip("oid=288414833", 1);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.onSetMapObjectCreateLayerMore("ice", 3, '02', 1);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.userSetFieldFloating(350112800, 0, 0, 0);
                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 2600, 400);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#现在差不多已经将追过来的势力给甩掉了吧。", 37, 1540806, false, true);
                                        cm.effect_Voice("Voice3.img/HofM/ACT1/END/1", 128);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#该死，那个魔族的家伙……这个仇我一定要报。", 37, 1540802, true, true);
                                          cm.effect_Voice("Voice3.img/HofM/ACT1/END/2", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_setForceFlip("oid=288414830", -1);
                                            cm.npc_setForceFlip("oid=288414831", -1);
                                            cm.npc_setForceFlip("oid=288414832", -1);
                                            cm.npc_setForceFlip("oid=288414833", -1);
                                            cm.setNpcSpecialActionReset("oid=288414830");
                                            cm.setNpcSpecialActionReset("oid=288414831");
                                            cm.setNpcSpecialActionReset("oid=288414832");
                                            cm.setNpcSpecialActionReset("oid=288414833");
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 2400, 400);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=288414830", -1, 100, 130);
                                                cm.npc_SetForceMove("oid=288414832", -1, 150, 130);
                                                cm.npc_SetForceMove("oid=288414833", -1, 150, 130);
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.setNpcSpecialActionReset("oid=288414830");
                                                  cm.setNpcSpecialActionReset("oid=288414831");
                                                  cm.setNpcSpecialActionReset("oid=288414832");
                                                  cm.setNpcSpecialActionReset("oid=288414833");
                                                  cm.npc_SetSpecialAction("oid=288414830", "stand2", -1, 1);
                                                  cm.npc_SetSpecialAction("oid=288414832", "stand2", -1, 1);
                                                  cm.npc_SetSpecialAction("oid=288414833", "stand2", -1, 1);
                                                  cm.npc_SetSpecialAction("oid=288414831", "special1", -1, 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=288414830", 1);
                                                    cm.npc_setForceFlip("oid=288414832", 1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=288414833", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayBGM("Bgm45.img/Heroes Of Maple Theme Piano", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom('#face5#米乐。', 37, 1540805, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face2#……", 37, 1540807, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("……我对不起大家，是我修炼得还不够。", 37, 1540802, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face5#我的心口好痛，我绝对不能饶恕那个人。", 37, 1540805, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("龙的痛苦就是主人的痛苦……\r\n毕竟你们的命运是紧密相连的。", 37, 1540806, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#我搞不明白，主人。\r\n先祖不惜忍受那份痛苦……到底想要传给我们什么？", 37, 1540807, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("阿弗利埃到最后都坚持了自己的信念，\r\n他就是想要给你们看到这一面。", 37, 1540806, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("有些人只要活着就能光芒夺目。", 37, 1540806, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("数百年前，弗里德和阿弗利埃最开始缔结契约的那一天也是如此，\r\n他们就是照亮黑暗时期的希望的证据。", 37, 1540806, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_ProcessOnOffLayer('1', "Effect/Direction17.img/effect/afrien/0", 0, 2500, 0, -70, 12, 4, 1);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#我，玛瑙龙之王，阿弗利埃，\r\n从现在起发誓与你友情常在。\r\n在对战黑暗之时，你绝对不会是一个人。", 37, 1540820, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#我弗里德发誓，要跟龙神你做一辈子的朋友。\r\n直到时间将我们分离。", 37, 1540836, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#直到时间将我们彼此分开。", 37, 1540820, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                              cm.fieldEffect_Hero8(1);
                                                                                              cm.fieldEffect_Hero9(0, 12000);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("龙和主人会越来越相像，\r\n不管是弗里德，还是阿弗利埃，都有着正直的灵魂。", 37, 1540806, false, true);
                                                                                                cm.effect_Voice("Voice3.img/HofM/ACT1/END/11", 128);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#龙神，米乐，你们的先祖就是这样的人，\r\n每当我们动摇不定之时，他们都会为我们重新找回目标。", 37, 1540806, true, true);
                                                                                                  cm.effect_Voice("Voice3.img/HofM/ACT1/END/12", 128);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#我不知道我能不能做到这么了不起的事情，但是……", 37, 1540805, true, true);
                                                                                                    cm.effect_Voice("Voice3.img/HofM/ACT1/END/13", 128);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=288414830", -1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/theme43", 80);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3#但我绝对不能就此坐以待毙。", 37, 1540805, false, true);
                                                                                                          cm.effect_Voice("Voice3.img/HofM/ACT1/END/14", 128);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#我们也都会帮忙的。", 37, 1540806, true, true);
                                                                                                            cm.effect_Voice("Voice3.img/HofM/ACT1/END/16", 128);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face3#谢谢，不过光靠我们三个还不够。", 37, 1540805, true, true);
                                                                                                              cm.effect_Voice("Voice3.img/HofM/ACT1/END/17", 128);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(800);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/END/18", 128);
                                                                                                                    cm.sendNormalTalk_Bottom("#face3#精灵之王双弩精灵、光之魔法师夜光法师，还有怪盗幻影。", 37, 1540805, false, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/HofM/ACT1/END/19", 128);
                                                                                                                      cm.sendNormalTalk_Bottom("#face3#我要再次召集所有当年封印黑魔法师的英雄，以弗里德的名义！", 37, 1540805, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_PushScaleInfo(10000, 2500, 10000, 2600, -1900);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/HofM_logo/logo_cn", "animation", '', ''], [1, 0, 1, 0, 0, 0, 0, 0]);
                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/logo2", 100);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(8000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_LeaveField("oid=288414830");
                                                                                                                                cm.npc_LeaveField("oid=288414830");
                                                                                                                                cm.npc_LeaveField("oid=288414831");
                                                                                                                                cm.npc_LeaveField("oid=288414831");
                                                                                                                                cm.npc_LeaveField("oid=288414832");
                                                                                                                                cm.npc_LeaveField("oid=288414832");
                                                                                                                                cm.npc_LeaveField("oid=288414833");
                                                                                                                                cm.npc_LeaveField("oid=288414833");
                                                                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("mark", "Map/Effect2.img/HofM/toBeContinued", 0, 2500, 0, 0, 16, 4, 1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer('mark', '', 2, 1000, 0, 0, 0, 0, 0);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else if (status === V++) {
                                                                                                                                    cm.dispose();
                                                                                                                                    cm.warp(350112900, 0, true);
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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