var status = -1;
var selectionLog = [];
function action(f, E, e) {
  var V = cm.getMapId();
  if (V == 940203280) {
    action1(f, E, e);
  } else if (V == 940203290) {
    action2(f, E, e);
  } else {
    action3(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
      cm.fieldEffect_ScreenMsg("aswan/stageEff/number/1");
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3004023, "oid=7157538", 1250, 50, 455, 1200, 1300, 0, false, false);
      cm.npc_SetSpecialAction("oid=7157538", 'summon', 0, 0);
      cm.npc_ChangeController(3004023, "oid=7157539", 1370, 50, 548, 1320, 1420, 0, false, false);
      cm.npc_SetSpecialAction("oid=7157539", 'summon', 0, 0);
      cm.npc_ChangeController(3004023, "oid=7157540", 1490, 50, 454, 1440, 1540, 0, false, false);
      cm.npc_SetSpecialAction("oid=7157540", "summon", 0, 0);
      cm.Npc_Fadeout("oid=7157538", 0, 0);
      cm.Npc_Fadeout("oid=7157539", 0, 0);
      cm.Npc_Fadeout("oid=7157540", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1800, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("才一会儿工夫，水位就升到这么高了！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400338/Regen", 100);
              cm.npc_SetSpecialAction("oid=7157538", 'regen', 1, 1);
              cm.Npc_Fadeout("oid=7157538", 255, 0);
              cm.inGameDirectionEvent_AskAnswerTime(400);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400338/Regen", 100);
                cm.npc_SetSpecialAction("oid=7157539", "regen", 1, 1);
                cm.Npc_Fadeout("oid=7157539", 255, 0);
                cm.inGameDirectionEvent_AskAnswerTime(400);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/2400338/Regen", 100);
                  cm.npc_SetSpecialAction("oid=7157540", "regen", 1, 1);
                  cm.Npc_Fadeout("oid=7157540", 255, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(400);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#咕噜咕噜！！", 37, 3004023, false, true);
                    cm.spawnMobLimit(2400343, 1, 716, 35, 1);
                    cm.spawnMobLimit(2400343, 1, 876, 35, 1);
                    cm.spawnMobLimit(2400344, 1, 528, 35, 1);
                    cm.spawnMobLimit(2400343, 1, 341, 47, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("是古鲁格！！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("呃，我赶时间啊……", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(700);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#咕噜咕噜！！", 37, 3004007, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#在月光下！墨色的！他来了咕噜！", 37, 3004007, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3004007, "oid=7157755", 1922, 0, 434, 1872, 1972, 1, true, false);
                                cm.npc_SetSpecialAction("oid=7157755", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(700);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("又一条古鲁格？！", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#喝了奇怪的水，就变得好奇怪，生气的咕噜，好害怕咕噜。", 37, 3004007, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#可是，攻击好人的古鲁格，是坏古鲁格。", 37, 3004007, true, true);
                                      cm.spawnMobLimit(2400343, 1, 876, 35, 1);
                                      cm.spawnMobLimit(2400344, 1, 528, 35, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#帮助好人的古鲁格，是好古鲁格。", 37, 3004007, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('莫非……你要帮助我？', 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#没错咕噜！！", 37, 3004007, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(3004026, "oid=7157925", 1700, 0, 405, 1650, 1750, 1, false, 700, false);
                                              cm.npc_SetSpecialAction("oid=7157925", "summon", 0, 0);
                                              cm.npc_ChangeController(3004026, "oid=7157926", 1800, 0, 404, 1750, 1850, 1, false, 700, false);
                                              cm.npc_SetSpecialAction("oid=7157926", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#战斗吧咕噜！！", 37, 3004007, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我们是好古鲁格！", 37, 3004007, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_LeaveField("oid=7157538");
                                                      cm.npc_LeaveField("oid=7157538");
                                                      cm.npc_LeaveField("oid=7157539");
                                                      cm.npc_LeaveField("oid=7157539");
                                                      cm.npc_LeaveField("oid=7157540");
                                                      cm.npc_LeaveField("oid=7157540");
                                                      cm.npc_LeaveField("oid=7157925");
                                                      cm.npc_LeaveField("oid=7157925");
                                                      cm.npc_LeaveField("oid=7157926");
                                                      cm.npc_LeaveField("oid=7157926");
                                                      cm.spawnMobLimit(2400343, 1, 1250, 35, 1);
                                                      cm.spawnMobLimit(2400343, 1, 1370, 35, 1);
                                                      cm.spawnMobLimit(2400343, 1, 1490, 35, 1);
                                                      cm.spawnMobLimit(2400345, 1, 1700, 35, 1);
                                                      cm.spawnMobLimit(2400345, 1, 1800, 35, 1);
                                                      cm.sendNormalTalk_Bottom("黑鸦应该正在奋战中。", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("我得趁此机会赶紧走过去。", 57, 0, true, true);
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
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.setStandAloneMode(false);
                                                                cm.sendNormalTalk_Bottom("用不着清理所有怪物！集中精力穿过这里。", 56, 0, false, true);
                                                              } else if (status === V++) {
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
function action2(f, E, e) {
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
      cm.npc_ChangeController(3004018, "oid=257959", -2488, -310, 359, -2538, -2438, 5, true, false);
      cm.npc_ChangeController(3004018, "oid=257960", 1711, -68, 580, 1661, 1761, 5, true, false);
      cm.npc_ChangeController(3001358, "oid=257961", 1800, -241, 586, 1750, 1850, 5, true, false);
      cm.npc_ChangeController(3001358, "oid=257962", 1451, -88, 578, 1401, 1501, 4, true, false);
      cm.npc_ChangeController(3001358, "oid=257963", 1045, -367, 493, 995, 1095, 5, true, false);
      cm.npc_ChangeController(3001358, "oid=257964", -726, -166, 295, -776, -676, 5, true, false);
      cm.npc_ChangeController(3001358, "oid=257965", -576, -43, 287, -626, -526, 5, true, false);
      cm.npc_ChangeController(3004018, "oid=257966", 1641, -104, 580, 1591, 1691, 5, true, false);
      cm.npc_ChangeController(3004018, "oid=257967", -2381, -311, 361, -2431, -2331, 5, true, false);
      cm.fieldEffect_ScreenMsg("aswan/stageEff/stage");
      cm.fieldEffect_ScreenMsg("aswan/stageEff/number/2");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1850, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#黑鸦说得没错。", 37, 3001358, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我早说过，他不会为了那种事情撒谎的。", 37, 3004018, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#那家伙不会有事吧？", 37, 3001358, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#虽然他挺讨厌的……", 37, 3001358, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#现在是操心他的时候吗？我们都快小命不保了！", 37, 3004018, true, true);
                    cm.spawnMobLimit(2400344, 1, 1509, 35, 1);
                    cm.spawnMobLimit(2400343, 1, 1405, 35, 1);
                    cm.spawnMobLimit(2400343, 1, 1676, 35, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#反正都是犯罪者，就算死了也不会有人伤心，倒可能有人感到高兴。", 37, 3001358, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你别说这种晦气话！！", 37, 3004018, true, true);
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
                            } else if (status === V++) {
                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.setStandAloneMode(false);
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
function action3(f, E, e) {
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
      cm.npc_ChangeController(3004020, "oid=258119", -3228, -321, 390, -3278, -3178, 5, true, false);
      cm.npc_ChangeController(3004020, 'oid=258120', -2413, -320, 253, -2463, -2363, 5, true, false);
      cm.npc_ChangeController(3004021, "oid=258121", -2493, -308, 252, -2543, -2443, 5, true, false);
      cm.npc_ChangeController(3004021, "oid=258122", -1655, -61, 209, -1705, -1605, 5, true, false);
      cm.npc_ChangeController(3004022, "oid=258123", -717, -165, 294, -767, -667, 5, true, false);
      cm.npc_ChangeController(3004022, "oid=258124", -802, -148, 293, -852, -752, 5, true, false);
      cm.npc_ChangeController(3004017, 'oid=258125', 347, -300, 538, 297, 397, 5, true, false);
      cm.npc_ChangeController(3004017, 'oid=258126', 234, -270, 536, 184, 284, 5, true, false);
      cm.npc_ChangeController(3004004, 'oid=258127', 2076, 11, 431, 2026, 2126, 1, false, false);
      cm.npc_ChangeController(3004005, "oid=258128", 2153, -20, 432, 2103, 2203, 1, false, false);
      cm.npc_ChangeController(3004004, "oid=258129", 2239, -63, 432, 2189, 2289, 1, false, false);
      cm.fieldEffect_ScreenMsg("aswan/stageEff/final");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1850, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#怎么办！水一直在上涨！", 37, 3004004, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#别担心！黑鸦会救我们的！", 37, 3004005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#黑鸦不但给我们送吃的，还给我们讲了很多道理。嘤……", 37, 3004004, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#黑鸦对不起！我不该骂你！", 37, 3004004, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#华生！你去帮帮黑鸦吧！", 37, 3004004, true, true);
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
                        } else if (status === V++) {
                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                          cm.setInGameDirectionMode(false, true, false);
                          cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;