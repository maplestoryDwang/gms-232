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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9401278, "oid=2256159", 90, 50, 13, 40, 140, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256159", 'summon', 0, 0);
      cm.npc_ChangeController(9401283, "oid=2256160", 10, 50, 10, -40, 60, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2256160", "summon", 0, 0);
      cm.setNPC_Fadein(9401278, 1);
      cm.setNPC_Fadein(9401283, 1);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.sendNewEffects(17, [0, 1000, 2000, 0, 90]);
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
            cm.sendNormalTalk_Bottom("#face1#这里，这里！", 37, 9401278, false, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#又见面了，大侠！", 37, 9401283, true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(2, 170);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#之前在冰峰雪域发现了空青石乳，所以这是一条非常重要的线索。", 37, 9401278, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#从之前的行踪判断，他们应该正在为了配制魔教代代相传的灵药而收集材料。\r\n林中之城，冰峰雪域，尼哈沙漠……", 37, 9401278, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#如果猜得没错，他的下一个目的地就是这里，米纳尔森林。\r\n这次我们抢先了一步！", 37, 9401278, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0##b到底是要配制……什么灵药呢？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#那个嘛……", 37, 9401278, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#那边！那边过来了！", 37, 9401283, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2256159", 1);
                              cm.npc_setForceFlip("oid=2256160", 1);
                              cm.npc_ChangeController(9401378, "oid=2256161", 20, 1280, 132, -30, 70, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2256161", "summon", 0, 0);
                              cm.npc_ChangeController(9401375, "oid=2256162", 240, 1280, 108, 190, 290, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2256162", "summon", 0, 0);
                              cm.npc_ChangeController(9401378, "oid=2256163", -30, 1635, 156, -80, 20, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2256163", "summon", 0, 0);
                              cm.npc_ChangeController(9401378, "oid=2256164", 125, 1635, 159, 75, 175, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2256164", "summon", 0, 0);
                              cm.npc_ChangeController(9401375, "oid=2256165", -200, 1635, 151, -250, -150, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2256165", "summon", 0, 0);
                              cm.npc_ChangeController(9401376, "oid=2256166", 250, 1635, 161, 200, 300, 1, true, 0, false);
                              cm.npc_SetSpecialAction("oid=2256166", "summon", 0, 0);
                              cm.npc_SetSpecialAction("oid=2256162", 'attack', -1, 0);
                              cm.npc_SetSpecialAction("oid=2256165", "attack", -1, 0);
                              cm.npc_SetSpecialAction("oid=2256166", "attack", -1, 0);
                              cm.npc_SetSpecialAction("oid=2256161", "attack", -1, 0);
                              cm.npc_SetSpecialAction("oid=2256163", "attack", -1, 0);
                              cm.npc_SetSpecialAction("oid=2256164", "attack", -1, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(12, [3000, 0, 1750]);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#怎么好像没看见大师，不不不，云雾的踪迹？", 37, 9401283, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#……稍微再等等看吧。", 37, 9401278, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3##b你在干什么？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#他们在这里寻找的材料应该是火灵神草。那是火龙吃的草……看来应该没错。", 37, 9401278, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.sendNewEffects(12, [0, 0, 90]);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2#我们是不是应该马上去找到并夺取火灵神草？ \r\n现在可是已经火烧眉毛了，分舵主？！", 37, 9401283, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face3#……怎么没有出现呢……", 37, 9401278, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#分舵主？！", 37, 9401283, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2256159", -1);
                                                            cm.sendNormalTalk_Bottom("#face3##b是不是应该先把他放走，然后跟踪呢？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#要是让他们得到那个东西，灵药材料就找齐了。那样就太危险了。", 37, 9401278, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#虽然不知道云雾为何没有出现，但先把他们解决掉再说。", 37, 9401278, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2256159", 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=2256159", 1, 100, 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face2#这些家伙！", 37, 9401278, false, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.updateInfoQuest(65976, "dir=1");
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNewEffects(19, [0]);
                                                                          } else if (status === V++) {
                                                                            cm.forceStartQuest(65976, '');
                                                                            cm.npc_LeaveField("oid=2256159");
                                                                            cm.npc_LeaveField("oid=2256160");
                                                                            cm.dispose();
                                                                            cm.openNpc(9110002, '墨玄_龙的峡谷');
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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