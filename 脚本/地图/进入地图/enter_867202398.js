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
      cm.npc_ChangeController(9400602, "oid=7539939", -200, -90, 18, -250, -150, 0, true, false);
      cm.npc_SetSpecialAction("oid=7539939", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 2000, -100, -60]);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#b你以前打过仗吗？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#以前也就去打过猎。", 37, 9400602, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b啊… ", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400602, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#b你会用矛和盾吗？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#不会… ", 37, 9400602, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(9400582, "oid=7539980", -650, -90, 18, -700, -600, 0, true, false);
                        cm.npc_SetSpecialAction("oid=7539980", "summon", 0, 0);
                        cm.npc_ChangeController(9400580, "oid=7539981", -650, -90, 18, -700, -600, 0, true, false);
                        cm.npc_SetSpecialAction("oid=7539981", "summon", 0, 0);
                        cm.npc_SetForceMove("oid=7539980", 1, 250, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=7539981", 1, 200, 80);
                          cm.sendNormalTalk_Bottom("#face0##h0#！艾伊纳尔！", 37, 9400582, false, true);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=7539939", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#b你又什么时候知道名字的。", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#他已经是我的徒弟，我当然得知道名字吧？", 37, 9400582, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400602, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b凯恩是受过专业训练的骑士，他能教会你更多的东西。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##h0# 会当你的训练对手。", 37, 9400582, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#… 非常感谢。", 37, 9400602, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#时间不多，我们就来个速成班吧。", 37, 9400582, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你这种程度，盾牌就别想了。", 37, 9400582, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#来，跟着我做。", 37, 9400582, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=7539980", "skill", 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#怎么样？", 37, 9400582, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#b…凯恩？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#…凯恩，你在做什么，他怎么能跟的上。", 37, 9400580, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7539939"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.sendNormalTalk_Bottom("#face0#…！", 37, 9400602, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我都计划好了。本来对师父的信任，是出自师父的实力！看到了吗？我的徒弟。", 37, 9400582, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#请… 多关照。", 37, 9400602, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=7539981", 1, 320, 100);
                                                                    cm.npc_setForceFlip("oid=7539980", -1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetForceMove("oid=7539980", -1, 150, 100);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#没什么难的，记住两点就好。", 37, 9400582, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            cm.effect_NormalSpeechBalloon("#fs15##e格挡！刺！", 0, 0, 0, 3000, 9400582, cm.getPlayer().getId());
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=7539939", -1, 50, 50);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              cm.effect_NormalSpeechBalloon("#fs15#格挡，刺。", 0, 0, 0, 3000, 9400602, cm.getPlayer().getId());
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=7539981", -1);
                                                                                cm.sendNormalTalk_Bottom("#face0#千万别忘了。", 37, 9400582, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=7539980", 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=7539980", "attack1", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    cm.effect_NormalSpeechBalloon("#fs15##e格挡！", 1, 0, 0, 3000, 9400582, cm.getPlayer().getId());
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetSpecialAction("oid=7539939", "attack2", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetSpecialAction("oid=7539939", 'attack1', 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        cm.effect_NormalSpeechBalloon("#fs15##e下一个，刺！", 1, 0, 0, 3000, 9400582, cm.getPlayer().getId());
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_SetSpecialAction("oid=7539980", "skill", 0, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#噢~~~ 还可以嘛？", 37, 9400582, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#格挡、刺！连续反复三次！", 37, 9400582, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_SetSpecialAction("oid=7539939", 'attack2', 0, 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetSpecialAction("oid=7539939", "attack1", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#b…在亚皮纳斯都是这么教的吗？", 57, 0, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetSpecialAction("oid=7539939", "attack2", 0, 0);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_SetSpecialAction("oid=7539939", "attack1", 0, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#…千万，请你别误会…", 37, 9400580, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetSpecialAction("oid=7539939", "attack2", 0, 0);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.npc_SetSpecialAction("oid=7539939", "attack1", 0, 0);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1800);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#咳呵…", 37, 9400602, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#啧啧，看你也不好好吃饭，又整天窝在家里，肯定是没有体力。", 37, 9400582, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.sendNormalTalk_Bottom("#face0#咳…咳…怎么… 知道的？", 37, 9400602, true, true);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#当然能知道。", 37, 9400582, true, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#来！开始对练，#h0# 准备好了吗？", 37, 9400582, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom('#b是的。', 57, 0, true, true);
                                                                                                                          } else if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                                                                                                                            cm.warp(867202480, 0);
                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                            cm.forceStartQuest(64129, '');
                                                                                                                            cm.npc_LeaveField("oid=7539939");
                                                                                                                            cm.npc_LeaveField("oid=7539939");
                                                                                                                            cm.npc_LeaveField("oid=7539980");
                                                                                                                            cm.npc_LeaveField("oid=7539980");
                                                                                                                            cm.npc_LeaveField("oid=7539981");
                                                                                                                            cm.npc_LeaveField("oid=7539981");
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;