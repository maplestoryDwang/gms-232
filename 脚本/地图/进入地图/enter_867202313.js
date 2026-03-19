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
      cm.npc_ChangeController(9400580, "oid=7543565", -700, 80, 8, -750, -650, 1, true, false);
      cm.npc_SetSpecialAction("oid=7543565", 'summon', 0, 0);
      cm.npc_ChangeController(9400638, "oid=7543566", -600, 80, 9, -650, -550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7543566", 'summon', 0, 0);
      cm.npc_SetForceMove("oid=7543565", -1, 300, 150);
      cm.npc_SetForceMove("oid=7543566", -1, 300, 120);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0##h0#！我说过你不要出城，你怎么！", 37, 9400580, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#b呐… ", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#这是…？", 37, 9400580, true, true);
                cm.gainItem(4036379, -10);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#b恶心的粉红触手的绳索，不知道这个行不行… 但是能用的只有这个了… ", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("虽然有点恶心… 但是挺结实的。这个程度应该够了。", 37, 9400604, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#真的吗？", 37, 9400580, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我先拿过去试一下，你们慢慢来！", 37, 9400604, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=7543566", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=7543566", 1, 1000, 150);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#我很担心你… 都怪我说了不该说的话… ", 37, 9400580, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b不不，能完成投石器就好了，我也没出什么事。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#万一出什么事呢！那样的话信任 #h0# 并且做好战斗准备的所有人，都会陷入绝望之中的。", 37, 9400580, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#现在这个时候 #h0# 比投石器还重要，你知道你的行为是多么愚蠢的吗！", 37, 9400580, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b… 对不起。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#知道错了就好，下不为例。", 37, 9400580, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#b是，我答应。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b…艾丽卡，森林外围… 飘着红色的雪。", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#红色的… 雪… ", 37, 9400580, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#b快要开始了，要做好心理准备…", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_ChangeController(9400639, "oid=7543616", -350, 80, 10, -400, -300, 1, true, false);
                                                  cm.npc_SetSpecialAction("oid=7543616", "summon", 0, 0);
                                                  cm.npc_ChangeController(9400640, "oid=7543617", -250, 80, 10, -300, -200, 1, true, false);
                                                  cm.npc_SetSpecialAction("oid=7543617", "summon", 0, 0);
                                                  cm.npc_SetForceMove("oid=7543616", -1, 500, 200);
                                                  cm.npc_SetForceMove("oid=7543617", -1, 500, 200);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNewEffects(13, [1000, 100, 0, 0, 0]);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("艾丽卡学者！终于做好了！", 37, 9400604, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=7543565", 1);
                                                        cm.sendNormalTalk_Bottom("#face2#真的吗？！", 37, 9400580, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("是真的！按照艾丽卡学者的方式做了出来，火力好像增加了30倍！", 37, 9400604, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('#b什么火力？', 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("什么什么火力！当然是地雷啊！", 37, 9400604, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#b地雷？！", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("原本挖掘用的火药，按照艾丽卡学者的配方做成了地雷！", 37, 9400604, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#b艾丽卡？真是太了不起了！你怎么会知道这个？", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#我只是在书上看到过而已，实际上都是由斯库亚斯的工程部队制作的。", 37, 9400580, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("额哈哈，真是厉害！太不可思议了！走之前请你教我们更多的东西。", 37, 9400604, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("不不，现在不是这样的时候！我得让你们看一下效果！", 37, 9400604, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom('捂住耳朵！', 37, 9400604, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_setForceFlip("oid=7543617", 1);
                                                                              cm.npc_SetForceMove("oid=7543617", 1, 100, 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=7543617", "mine", 0, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_ChangeController(9400579, "oid=7543737", -750, 80, 8, -800, -700, 1, false, false);
                                                                                  cm.npc_SetSpecialAction("oid=7543737", "summon", 0, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_ChangeController(9400579, "oid=7543738", -550, 80, 9, -600, -500, 1, false, false);
                                                                                    cm.npc_SetSpecialAction("oid=7543738", "summon", 0, 0);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetSpecialAction("oid=7543737", "special1", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetSpecialAction("oid=7543738", 'special1', 0, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_LeaveField("oid=7543737");
                                                                                          cm.npc_LeaveField("oid=7543737");
                                                                                          cm.npc_LeaveField("oid=7543738");
                                                                                          cm.npc_LeaveField("oid=7543738");
                                                                                          cm.npc_setForceFlip("oid=7543617", -1);
                                                                                          cm.npc_SetForceMove("oid=7543617", -1, 100, 100);
                                                                                          cm.sendNormalTalk_Bottom('哈哈哈，怎么样？！', 37, 9400604, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_ChangeController(9400600, "oid=7543759", -400, 70, 10, -450, -350, 1, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=7543759", 'summon', 0, 0);
                                                                                            cm.npc_ChangeController(9400588, "oid=7543760", -350, 70, 10, -400, -300, 1, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=7543760", "summon", 0, 0);
                                                                                            cm.npc_ChangeController(9400582, "oid=7543761", -300, 70, 10, -350, -250, 1, true, false);
                                                                                            cm.npc_SetSpecialAction("oid=7543761", "summon", 0, 0);
                                                                                            cm.npc_SetForceMove("oid=7543759", -1, 250, 200);
                                                                                            cm.npc_SetForceMove("oid=7543760", -1, 250, 200);
                                                                                            cm.npc_SetForceMove("oid=7543761", -1, 250, 200);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("出什么事了？！", 37, 9400600, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("难道怪物们攻过来了？！", 37, 9400588, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#艾丽卡！！艾丽卡你在哪儿！！", 37, 9400582, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_setForceFlip("oid=7543759", 1);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_setForceFlip("oid=7543761", 1);
                                                                                                      cm.npc_setForceFlip("oid=7543759", -1);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_setForceFlip("oid=7543760", 1);
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=7543761", -1);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.npc_setForceFlip("oid=7543760", -1);
                                                                                                            cm.sendNormalTalk_Bottom("刚才那阵巨响是…？", 37, 9400600, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("村长！那是我们斯库亚斯产的地雷！", 37, 9400604, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("啊，怎么会…", 37, 9400600, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT3/horn1", 128);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNewEffects(12, [2000, -1300, -610, 0, 0]);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                      cm.npc_setForceFlip("oid=7543565", -1);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("门！快开城门！", 37, 9400603, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("快点！！！！！！！！！！！", 37, 9400603, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNewEffects(19, [0]);
                                                                                                                            } else if (status === V++) {
                                                                                                                              cm.warp(867202203, 0);
                                                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                                                              cm.forceCompleteQuest(64134);
                                                                                                                              cm.forceStartQuest(64135, '');
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;