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
      cm.forceStartQuest(33189, '');
      cm.forceCompleteQuest(33190);
      cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
      cm.npc_ChangeController(1540458, "oid=22522419", 115, -180, 1, 65, 165, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22522419", 'summon', 0, 0);
      cm.npcMove(1540458, -90, 70, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 0, -50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
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
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我要到六岔路口。", 37, 1540617, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("大概需要5分钟的时间。", 37, 1540617, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.setInGameDirectionMode(false, true, false);
                        cm.curNodeEventEnd(true);
                        cm.setInGameDirectionMode(true, false, true);
                        cm.inGameDirectionEvent_ForcedFlip(-1);
                        cm.sendNormalTalk_Bottom("话说，联盟的人还真是无情。", 37, 1540617, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("居然把最卖力战斗的你赶走了……", 37, 1540617, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我不是被赶走的。", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我是自愿退出的，为了阻止纠纷。", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.forceStartQuest(33189, '');
                                  cm.forceCompleteQuest(33190);
                                  cm.setAmbience("Ambience.img/flyingdeck", 70, 60);
                                  cm.curNodeEventEnd(true);
                                  cm.setInGameDirectionMode(true, false, true);
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                  cm.sendNormalTalk_Bottom('我想问问你……', 37, 1540617, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 0, -50);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("你当初选择救弗朗西斯。", 37, 1540617, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                          cm.sendNormalTalk_Bottom('？', 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.askMenu_Bottom("如果重新给你选择的机会，你会做出什么选择呢？\r\n#b#L0#(救弗朗西斯。)#l\r\n#L1#(不救。)#l", 37, 1540617);
                                          } else {
                                            if (status === V++) {
                                              if (e == 0) {
                                                cm.sendNormalTalk_Bottom("呜……我好感动！", 37, 1540617, false, true);
                                              } else {
                                                cm.sendNormalTalk_Bottom("嘁……总之，我确实接受了你的帮助……", 37, 1540617, false, true);
                                              }
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                cm.sendNormalTalk_Bottom('？？', 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayBGM("Bgm40.img/TheDollMaster", 0, 0);
                                                    cm.npc_LeaveField("oid=22522419");
                                                    cm.npc_LeaveField("oid=22522419");
                                                    cm.npc_ChangeController(1540641, "oid=22524920", 115, -180, 1, 65, 165, 0, false, 0, false);
                                                    cm.npc_SetSpecialAction("oid=22524920", "summon", 0, 0);
                                                    cm.npcMove(1540641, -90, 70, 0);
                                                    cm.fieldEffect_PlayFieldSound("Kite/Crown", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npcMove(1540641, 0, -70, 2500);
                                                      cm.sendNormalTalk_Bottom("嘿嘿，是我啦！弗朗西斯！", 37, 1540460, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_OneTimeAction(62, 10000);
                                                            cm.emotion(15, 10000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.askMenu_Bottom("#face0#好了，等等！你为什么这副表情？！\r\n#b#L0#打他。#l\r\n#L1#用力打他。#l\r\n#L2#非常用力地打他。#l", 37, 1540460);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_OneTimeAction(62, 5000);
                                                                cm.emotion(15, 5000);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#等等等等等等！！！\r\n不会连你也怀疑我吧？", 37, 1540460, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#格里梅尔是背叛奥尔卡的坏蛋。\r\n我怎么会帮助那种家伙呢？", 37, 1540460, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#我是来向你表示感谢的。\r\n我有一个非常非常重要的情报！", 37, 1540460, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#如果你不听，真的会后悔的！", 37, 1540460, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
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
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("……那么重要的情报你为什么不早点告诉我？", 57, 0, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("你傻啊？！", 37, 1540460, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("你们违背了与我的约定，是你们的错！", 37, 1540460, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("为了报答你救了我，所以我才特意告诉你的。", 37, 1540460, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("我可是讲义气的男人，哈哈哈！", 37, 1540460, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("啊，对了，还有一件事。", 37, 1540460, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("这人偶会在5秒后爆炸。", 37, 1540460, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.emotion(5, 5000);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.inGameDirectionEvent_QTE(4);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_LeaveField("oid=22524920");
                                                                                                                cm.npc_LeaveField("oid=22524920");
                                                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                cm.inGameDirectionEvent_MoveAction(4);
                                                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/pung1", "oid=22524920"], [0, -90, -30, 1, 0, 1, 0, 0]);
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                                                                                                                cm.userSetFieldFloating(350033203, 5, 5, 50);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.userSetFieldFloating(350033203, 0, 0, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("按照弗朗西斯提供的情报，#r联盟是绝对无法战胜黑色天堂的。#k\r\n想要击退黑色天堂只有一个方法……", 57, 0, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom('调转船头吧。', 57, 0, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("目的地是……", 57, 0, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/secretmission5", 100);
                                                                                                                                cm.sendNormalTalk_Bottom("#fs25#埃德尔斯坦的#b机械坟墓。#k", 57, 0, false, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/signal_l", 100);
                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1700, 2000, 1700, 0, 600);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                        cm.forceCompleteQuest(33189);
                                                                                                                                        cm.forceForfeitQuest(33190);
                                                                                                                                        cm.forceStartQuest(33190, '');
                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 300, -50);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(7000, 1000, 7000, -1500, -50);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.forceStartQuest(33189, '');
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3));
                                                                                                                                                      cm.forceCompleteQuest(33176);
                                                                                                                                                      cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                                                                                                      cm.playerMessage(5, "获得了5000声望. ");
                                                                                                                                                      cm.gainHonorExp(5000, true);
                                                                                                                                                      cm.updateInfoQuest(33122, 'honor=1');
                                                                                                                                                      cm.forceCompleteQuest(33122);
                                                                                                                                                      cm.finishAchievement(1190);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                      cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.inGameDirectionEvent_Monologue("\r\n\r\n\r\n\r\n#fs40#   Act 3.激战苍穹\r\n\r\n                    完结。\r\n\r\n#fs20#(与联盟会场的摩柯搭话，即可以开始下一个Act。)", 1);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                                                                                        } else if (status === V++) {
                                                                                                                                                          cm.dispose();
                                                                                                                                                          cm.warp(913050010, 0, true);
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
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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