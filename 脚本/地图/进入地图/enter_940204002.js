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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.monadForceMove('appear', 0, 0);
      cm.monadForceMove("after", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 959, -186);
      cm.npc_ChangeController(3003405, "oid=1819457", 1510, -300, 16, 1460, 1560, 0, true, false);
      cm.npc_SetSpecialAction("oid=1819457", "summon", 0, 0);
      cm.npc_ChangeController(3003409, "oid=1819458", 850, -300, 8, 800, 900, 0, true, false);
      cm.npc_SetSpecialAction("oid=1819458", "summon", 0, 0);
      cm.npc_ChangeController(3003400, "oid=1819459", 1670, -300, 38, 1620, 1720, 1, true, false);
      cm.npc_SetSpecialAction("oid=1819459", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 870, -100);
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
            cm.sendNormalTalk_Bottom("#face0#就在这前面。", 37, 3003409, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 1620, -170);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayBGM("SoundEff.img/morass/magic_ab", 0, 0);
                  cm.sendNormalTalk_Bottom("那难道是阿卡伊勒？！！旁边的是谁？", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face15#嗬呃……", 37, 3003400, true, true);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=1819459", 'special5', -1, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(950);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#伤势越来越重了。", 37, 3003405, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face18#你……咳，是谁……把我……带到哪里去了……", 37, 3003400, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#你的名字叫塔纳。\r\n某个伟大的人答应帮你摆脱痛苦。", 37, 3003405, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face18#黑魔法师……？他……封印了……我？", 37, 3003400, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#应该是。否则就会因无尽的痛苦而疯掉。", 37, 3003405, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#总是重复一样的话，搞得我现在都烦了。", 37, 3003405, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#没时间了，动作要快。", 37, 3003405, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#看来你打算移动了。跳得过去吗？", 37, 3003409, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('那当然了。', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(500, 1500, 500, 1300, -170);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("住手，阿卡伊勒！！", 57, 0, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=1819457", -1);
                                              cm.npc_setForceFlip("oid=1819459", -1);
                                              cm.sendNormalTalk_Bottom("#face0##h0#？！切！", 37, 3003405, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_PlayBGM("Bgm35.img/Hekaton", 0, 0);
                                                cm.sendNormalTalk_Bottom("#face18#敌人……妨碍……", 37, 3003400, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=1819459", "special2", -1, 1);
                                                  cm.userSetFieldFloating(940204002, 3, 3, 1);
                                                  cm.sendNormalTalk_Bottom("什么啊？水流怎么更急了？！", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#都是因为那个塔纳的力量。太厉害了。鳞片都竖起来了。", 37, 3003409, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("什么？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.monadForceMove("before", 0, 0);
                                                        cm.monadForceMove("appear", 1, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.monadForceMove("appear", 0, 0);
                                                          cm.monadForceMove("after", 1, 0);
                                                          cm.sendNormalTalk_Bottom("#fs20#莫非……生气了？！", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.userSetFieldFloating(940204002, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.setNpcSpecialActionReset("oid=1819459");
                                                              cm.npc_SetSpecialAction("oid=1819459", 'special3', -1, 1);
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1645, 0, 1680, -220);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(500);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.userSetFieldFloating(940204002, 3, 3, 1);
                                                                  cm.sendNormalTalk_Bottom("#face19#特鲁埃……博……？我还不能……在这里……不可能……", 37, 3003400, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=1819457", 1);
                                                                    cm.sendNormalTalk_Bottom("#face0#可、可恶！", 37, 3003405, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#要被卷进去了，快离开这。", 37, 3003409, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("！！！", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_SetHideEffect(1);
                                                                          cm.npc_SetSpecialAction("oid=1819459", "special4", 0, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1300);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.userSetFieldFloating(940204002, 0, 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=1819457", "special", -1, 1);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/morass/tana2", 100);
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                      cm.setNpcSpecialActionReset("oid=1819459");
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                        cm.sendNormalTalk_Bottom("#face0#咳呃呃！！！", 37, 3003405, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.setNpcSpecialActionReset("oid=1819457");
                                                                                          cm.sendNormalTalk_Bottom("#face0#这力量果然……", 37, 3003405, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face15#呼……呼……", 37, 3003400, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#现在冷静点了吗？", 37, 3003405, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face15#那个……咳，怎么会在这里……", 37, 3003400, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#没错，是假的。所以要挺住，我们必须马上到里面去。", 37, 3003405, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face15#……", 37, 3003400, true, true);
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
                                                                                                            cm.updateInfoQuest(34271, "20=h1;21=h0;30=h0;31=h0;32=h0;33=h0;34=h0;35=h0;36=h0;29=h1");
                                                                                                            cm.updateInfoQuest(34252, "enter=1");
                                                                                                            cm.forceCompleteQuest(34252);
                                                                                                            cm.npc_LeaveField("oid=1819459");
                                                                                                            cm.npc_LeaveField("oid=1819457");
                                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.npc_LeaveField("oid=1819458");
                                                                                                            cm.dispose();
                                                                                                            cm.warp(450006040, 0, true);
                                                                                                            cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;