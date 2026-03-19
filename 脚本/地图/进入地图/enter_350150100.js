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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.forceStartQuest(33900, '6');
      cm.mapleHeroBecomeNpc(9, 0);
      cm.onActionBarResult(6, -1);
      cm.onActionBarResult(5, 32);
      cm.mapleHeroSetList([6]);
      cm.npc_ChangeController(1540801, "oid=286241901", -300, -400, 17, -350, -250, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286241901", "summon", 0, 0);
      cm.npc_ChangeController(1540807, "oid=286241902", -1470, -130, 235, -1520, -1420, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286241902", "summon", 0, 0);
      cm.npc_ChangeController(1540829, "oid=286241903", -105, -400, 18, -155, -55, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=286241903", 'summon', 0, 0);
      cm.npc_ChangeController(1540831, "oid=286241904", -10, -400, 18, -60, 40, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286241904", 'summon', 0, 0);
      cm.npc_ChangeController(1540832, "oid=286241905", 700, -40, 232, 650, 750, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=286241905", "summon", 0, 0);
      cm.npc_ChangeController(1540833, "oid=286241906", 600, -40, 232, 550, 650, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=286241906", "summon", 0, 0);
      cm.npc_ChangeController(1540834, "oid=286241907", 800, -40, 232, 750, 850, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286241907", 'summon', 0, 0);
      cm.npcMove(1540801, -1000, -650, 0);
      cm.npc_SetSpecialAction("oid=286241901", "special1", -1, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -180, -1500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_Monologue('精灵村庄，埃欧雷。', 0);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_Monologue("数百年前，冰冷笼罩在此地的残酷诅咒，", 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_Monologue("直到精灵之王归来，到现在却仍没有消失。", 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(7000, 1000, 7000, -180, -400);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(7000);
                      } else {
                        if (status === V++) {
                          cm.npcMove(1540801, 1000, 0, 0);
                          cm.sendNormalTalk_Bottom("果然用任何魔法都无法解开黑魔法师的诅咒啊。", 37, 1540831, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("虽说我们好不容易从寒冰中逃了出来，\r\n可孩子们抵抗力弱，看样子是没办法了吧。", 37, 1540829, true, true);
                          } else {
                            if (status === V++) {
                              cm.npcMove(1540801, 0, 650, 4000);
                              cm.npc_setForceFlip("oid=286241903", -1);
                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("您来了，王。", 37, 1540829, false, true);
                              } else {
                                if (status === V++) {
                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -180, -300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=286241901");
                                        cm.npc_LeaveField("oid=286241901");
                                        cm.npc_ChangeController(1540780, "oid=286259180", -300, -400, 17, -350, -250, 0, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=286259180", 'summon', 0, 0);
                                        cm.inGameDirectionEvent_头顶图片(["Skill/800019.img/skill/80001935/effect"], [0, -300, -310, 1, 0, 1, 1, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#孩子们呢？", 37, 1540801, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("还在沉睡。", 37, 1540829, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#我又找来了点冬季之花的叶片，用这些能够唤醒孩子们吗？", 37, 1540801, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 708, -20);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.sendNormalTalk_Bottom('……', 37, 1540829, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('……', 37, 1540831, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -180, -300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……都怪我能力不够。", 37, 1540801, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("您不要这么说。", 37, 1540831, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("从没有人责怪过您的决定。", 37, 1540829, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#我原以为只要打败了黑魔法师，世界就会迎来和平。", 37, 1540801, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#但是谁能想到我的这种选择却让整个种族陷入了危机……\r\n继续这样下去，我真是没脸见先王了。", 37, 1540801, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('双弩精灵！', 37, 1540830, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_setForceFlip("oid=286259180", -1);
                                                                            cm.npc_ChangeController(1540830, "oid=286269206", -620, -150, 27, -670, -570, 1, true, 0, false);
                                                                            cm.npc_SetSpecialAction("oid=286269206", "summon", 0, 0);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -180, -180);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.npc_SetForceMove("oid=286269206", 1, 200, 100);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("您正好在呢，双弩精灵！有客人来了呢？", 37, 1540830, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('客人？', 37, 1540801, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetSpecialAction("oid=286241902", 'special5', -1, 1);
                                                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -1415, 10);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0#哇，主人！这里有一些长得很奇怪的果实！\r\n果然精灵村庄就是不一样啊！", 37, 1540807, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face6#米乐，体面一点！我们可是来拜见王的。", 37, 1540805, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom('……', 37, 1540801, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("总是将那个少年和弗里德作比较应该不只是我的错吧。", 37, 1540801, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("哈哈……", 37, 1540830, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                    } else if (status === V++) {
                                                                                                      cm.dispose();
                                                                                                      cm.warp(350150110, 0, true);
                                                                                                      cm.npc_LeaveField("oid=286241902");
                                                                                                      cm.npc_LeaveField("oid=286241902");
                                                                                                      cm.npc_LeaveField("oid=286241903");
                                                                                                      cm.npc_LeaveField("oid=286241903");
                                                                                                      cm.npc_LeaveField("oid=286241904");
                                                                                                      cm.npc_LeaveField("oid=286241904");
                                                                                                      cm.npc_LeaveField("oid=286241905");
                                                                                                      cm.npc_LeaveField("oid=286241906");
                                                                                                      cm.npc_LeaveField("oid=286241907");
                                                                                                      cm.npc_LeaveField("oid=286259180");
                                                                                                      cm.npc_LeaveField("oid=286259180");
                                                                                                      cm.npc_LeaveField("oid=286269206");
                                                                                                      cm.npc_LeaveField("oid=286269206");
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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