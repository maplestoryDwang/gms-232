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
      cm.updateInfoQuest(33266, "save=3;or=1;he=1");
      cm.npc_ChangeController(1540700, "oid=286796460", -1449, -245, 7, -1499, -1399, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796460", "summon", 0, 0);
      cm.npc_ChangeController(1540701, "oid=286796461", -1366, -245, 7, -1416, -1316, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796461", "summon", 0, 0);
      cm.npc_ChangeController(1540702, "oid=286796462", -1283, -245, 8, -1333, -1233, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796462", 'summon', 0, 0);
      cm.npc_ChangeController(1540453, "oid=286796463", -1524, -245, 6, -1574, -1474, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796463", "summon", 0, 0);
      cm.npc_ChangeController(1540450, "oid=286796464", -1930, -245, 5, -1980, -1880, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796464", "summon", 0, 0);
      cm.npc_ChangeController(1540452, "oid=286796465", -1812, -245, 5, -1862, -1762, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796465", "summon", 0, 0);
      cm.npc_ChangeController(1540451, "oid=286796466", -1859, -245, 5, -1909, -1809, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796466", "summon", 0, 0);
      cm.npc_ChangeController(1540459, "oid=286796467", -2080, -372, 4, -2130, -2030, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796467", "summon", 0, 0);
      cm.npc_ChangeController(1540458, "oid=286796468", -2283, -372, 2, -2333, -2233, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796468", "summon", 0, 0);
      cm.npc_ChangeController(1540464, "oid=286796469", -1113, -252, 8, -1163, -1063, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796469", "summon", 0, 0);
      cm.npc_ChangeController(1540461, "oid=286796470", -2233, -252, 2, -2283, -2183, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796470", "summon", 0, 0);
      cm.npc_ChangeController(1540466, "oid=286796471", -2038, -248, 4, -2088, -1988, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796471", "summon", 0, 0);
      cm.npc_ChangeController(1540463, "oid=286796472", -1182, -252, 8, -1232, -1132, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796472", "summon", 0, 0);
      cm.npc_ChangeController(1540611, "oid=286796473", -2136, -252, 4, -2186, -2086, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796473", 'summon', 0, 0);
      cm.npc_ChangeController(1540457, "oid=286796474", -2186, -248, 2, -2236, -2136, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796474", 'summon', 0, 0);
      cm.npc_ChangeController(1540612, "oid=286796475", -1036, -252, 9, -1086, -986, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286796475", "summon", 0, 0);
      cm.npc_setForceFlip("oid=286796460", -1);
      cm.npc_setForceFlip("oid=286796461", -1);
      cm.npc_setForceFlip("oid=286796462", -1);
      cm.npc_setForceFlip("oid=286796463", -1);
      cm.npc_setForceFlip("oid=286796469", -1);
      cm.npc_setForceFlip("oid=286796472", -1);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ChangeEquipment([1012506]);
      cm.inGameDirectionEvent_MoveAction(4);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.emotion(7, 900000);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#h0#吸入了格里梅尔的毒气……", 37, 1540453, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("怎么样才能解毒……？", 45, 1540452, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("现在是……", 37, 1540453, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('不可能的……', 37, 1540453, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_SetSpecialAction("oid=286796460", "cry", -1, 1);
                          cm.npc_SetSpecialAction("oid=286796461", "cry", -1, 1);
                          cm.npc_SetSpecialAction("oid=286796462", "cry", -1, 1);
                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1416, -200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#不行……队长！\r\n队长是最努力战斗的人！", 45, 1540455, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#现在都结束了…… \r\n真的结束了……", 45, 1540455, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#队长……请振作起来！队长！", 45, 1540454, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#队长不是世界上最强的人嘛！", 45, 1540454, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face2#我还没有来得及和队长道别……", 45, 1540456, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face2#你就要这么离开吗……队长……？", 45, 1540456, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, -1687, -245);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#不。 #h0#会没事的。", 37, 1540450, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=286796464", 1, 170, 140);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -1640, -200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetSpecialAction("oid=286796464", "stone", -1, 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("虽然我无法让死去的生命复活，但……", 37, 1540450, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("现在还不晚。她还有呼吸。", 37, 1540450, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("那是……#b神兽的眼泪#k？", 37, 1540452, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("……女皇。封印石拥有修复整个圣地的力量。", 37, 1540451, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("神兽的眼泪是#b这世界上仅剩的封印石#k。\r\n你知道现在使用这封印石，意味着什么吗？", 37, 1540451, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("数百年前，当龙之魔法师制造这封印石时……\r\n他在其中加入了想要守护重要东西之人的心愿。", 37, 1540450, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我们现在所要守护的是#b封印石#k吗？还是#b#h0##k？", 37, 1540450, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("……我愿意遵从女皇的意愿。", 37, 1540451, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=286796464", "heal", 0, 1);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/blackHeaven/heal"], [4000, 0, 0, 1, 0, 0, 0, 0]);
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 4000, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("请和我们在一起。\r\n这个世界仍然需要你。", 37, 1540450, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else if (status === V++) {
                                                                                      cm.dispose();
                                                                                      cm.warp(350063100, 0, true);
                                                                                      cm.npc_LeaveField("oid=286796460");
                                                                                      cm.npc_LeaveField("oid=286796460");
                                                                                      cm.npc_LeaveField("oid=286796461");
                                                                                      cm.npc_LeaveField("oid=286796461");
                                                                                      cm.npc_LeaveField("oid=286796462");
                                                                                      cm.npc_LeaveField("oid=286796462");
                                                                                      cm.npc_LeaveField("oid=286796463");
                                                                                      cm.npc_LeaveField("oid=286796463");
                                                                                      cm.npc_LeaveField("oid=286796464");
                                                                                      cm.npc_LeaveField("oid=286796464");
                                                                                      cm.npc_LeaveField("oid=286796465");
                                                                                      cm.npc_LeaveField("oid=286796465");
                                                                                      cm.npc_LeaveField("oid=286796466");
                                                                                      cm.npc_LeaveField("oid=286796466");
                                                                                      cm.npc_LeaveField("oid=286796467");
                                                                                      cm.npc_LeaveField("oid=286796467");
                                                                                      cm.npc_LeaveField("oid=286796468");
                                                                                      cm.npc_LeaveField("oid=286796468");
                                                                                      cm.npc_LeaveField("oid=286796469");
                                                                                      cm.npc_LeaveField("oid=286796469");
                                                                                      cm.npc_LeaveField("oid=286796470");
                                                                                      cm.npc_LeaveField("oid=286796470");
                                                                                      cm.npc_LeaveField("oid=286796471");
                                                                                      cm.npc_LeaveField("oid=286796471");
                                                                                      cm.npc_LeaveField("oid=286796472");
                                                                                      cm.npc_LeaveField("oid=286796472");
                                                                                      cm.npc_LeaveField("oid=286796473");
                                                                                      cm.npc_LeaveField("oid=286796473");
                                                                                      cm.npc_LeaveField("oid=286796474");
                                                                                      cm.npc_LeaveField("oid=286796474");
                                                                                      cm.npc_LeaveField("oid=286796475");
                                                                                      cm.npc_LeaveField("oid=286796475");
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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