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
      cm.forceCompleteQuest(100455);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9062261, "oid=30252767", -320, 11, 4, -370, -270, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=30252767", "summon", 0, 0);
      cm.npc_ChangeController(9062255, "oid=30252768", 304, 12, 7, 254, 354, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=30252768", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 397, 14);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -250, 26);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9062262, "oid=30253417", -144, 16, 5, -194, -94, 1, true, 1500, false);
            cm.npc_SetSpecialAction("oid=30253417", "summon", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1800);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#好像总有一只跑来跑去的老鼠。就是你吗？", 36, 9062262, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0##b忧郁的假面#k。你在这做什么？", 36, 9062262, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#对……#b我要找的东西#k。就是这个。", 36, 9062261, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#是不是诅咒效力好像#b稍微削弱#k了一些。\r\n这也难怪，变成这副样子还一直在做#b女儿的人偶#k……#b女儿的照片#k的确有可能会削减诅咒的威力。", 36, 9062262, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#你……是谁。把我的家人怎么了？", 36, 9062261, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#真是的。问错问题了哦。\r\n不应该是问你的家人在哪里，而应该要问你自己为什么变成了这个样子才对。#b乔纳斯#k.", 36, 9062262, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你这家伙在说什么呢……啊……我的头……", 36, 9062261, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#马车出事的那天……如果不是你背叛了我……我也不会落得如此下场。", 36, 9062262, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#？！", 36, 9062261, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#你以为我会忘了吗？因为觊觎我的财富而下咒咒我，而害我遭遇马车事故，丢了性命的你？", 36, 9062262, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#啊……你是#b约翰布利慈福特#k！", 36, 9062261, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#枉我曾把你当做我的朋友。我也真是蠢。", 36, 9062262, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#还记得以前，有个笨蛋一时妨碍了我的计划吗？", 36, 9062262, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#我那时暂时隐藏身份，\r\n对#b你#k和你#b最疼爱的人#k下了诅咒。", 36, 9062262, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#就是你的女儿，#b苏菲莉亚#k。", 36, 9062262, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你对#b苏菲莉亚#k做了什么……！", 36, 9062261, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#当然是下了让你和苏菲莉亚#b彼此无法认出彼此的诅咒#k……\r\n还有，为了让你们永远在这里协助我的计划，我又顺便都给你们戴上了#b假面#k", 36, 9062262, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0##b多亏#k你和你的女儿，我才能吸取那么多的灵魂……\r\n这一点，我倒是十分感谢。", 36, 9062262, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#虽然客人们有时也会对自己的真实身份和这里的假面舞会起疑心，但只要一与你们聊天，大家立刻就会消除疑虑、自然而然地参加了舞会。\r\n谁让你们谁都不会怀疑派对有猫腻啊。", 36, 9062262, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.updateInfoQuest(238, "count=3602;T=20201102122921");
                                                    cm.sendNormalTalk_Bottom("#face0#尤其是苏菲莉亚，更是一直在积极收集灵魂，\r\n我可真是太感谢她了。", 36, 9062262, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, 283, 26);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#啊……！爸爸。就是爸爸！", 36, 9062255, false, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("等等！苏菲莉亚。会被离开的假面绅士发现的！", 56, 0, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#我不管！", 36, 9062255, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=30252768", -1, 30, 100);
                                                                cm.sendNormalTalk_Bottom("不可以！", 56, 0, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 30);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -230, 26);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=30252767"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                        cm.sendNormalTalk_Bottom("#face0#（那人明明是我刚刚拜托的那个人……）", 36, 9062261, false, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#（不，在他旁边的人是……！）", 36, 9062261, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#（苏菲莉亚？！）", 36, 9062261, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#现在一切准备完毕。再过不久，所有的客人都会去舞会会场#b跳舞#k的，\r\n我就会像以往一样#b吸取他们的灵魂#k。", 36, 9062262, true, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#客人就这样在毫不知情的情况下被我永远地吸走灵魂……\r\n我离成为地狱管理人又近了一步。", 36, 9062262, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 152, 26);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0#我要去爸爸……去爸爸那里！", 36, 9062255, false, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -230, 26);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=30253417"], [0, 0, 0, 1, 0, 1, 0, 0, 0]);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#好像有什么声音……？", 36, 9062262, false, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0##fs30#布利慈福特……！我不会让你如愿的！", 36, 9062261, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetForceMove("oid=30252767", 1, 70, 200);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 2000, 1500, -230, 56);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#虽然和我的计划不太一样……但我不会吸走你的灵魂的，就直接让你#b消失#k好了。 ", 36, 9062262, false, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#毕竟如果你去其他客人面前乱说的话就不太好了。", 36, 9062262, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#啊……苏……苏菲莉亚！", 36, 9062261, true, true, 1);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetSpecialAction("oid=30252767", 'special', 0, 1);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/transitions_fast", 100);
                                                                                                                cm.fieldEffect_InsertCanvas(1, 500, 255, 255, 255, 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_LeaveField("oid=30252767");
                                                                                                                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -230, 26);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#明明有什么声音来着……", 36, 9062262, false, true, 1);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#该死，已经到这个点了。\r\n那就去舞会开心开心吧？", 36, 9062262, true, true, 1);
                                                                                                                          } else if (status === V++) {
                                                                                                                            cm.forceCompleteQuest(100455);
                                                                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                            cm.setStandAloneMode(false);
                                                                                                                            cm.npc_LeaveField("oid=30252768");
                                                                                                                            cm.npc_LeaveField("oid=30253417");
                                                                                                                            cm.dispose();
                                                                                                                            cm.warp(993175540, 0, false);
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}