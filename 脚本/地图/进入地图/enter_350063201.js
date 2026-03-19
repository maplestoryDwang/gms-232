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
      cm.npc_ChangeController(1540744, "oid=56808", -1718, -237, 17, -1718, -1668, 4, true, 0, false);
      cm.npc_ChangeController(1540745, 'oid=56809', -1642, -237, 17, -1692, -1592, 4, true, 0, false);
      cm.npc_ChangeController(1540746, "oid=56810", -1558, -237, 17, -1608, -1541, 4, true, 0, false);
      cm.npc_ChangeController(1540446, "oid=56811", -2082, -364, 10, -2132, -2032, 1, false, 0, false);
      cm.npc_ChangeController(1540458, "oid=56812", -820, -118, 23, -870, -770, 5, true, 0, false);
      cm.npc_ChangeController(1540458, "oid=56813", -754, -118, 23, -804, -704, 5, true, 0, false);
      cm.npc_ChangeController(1540459, 'oid=56814', -1874, -237, 16, -1924, -1824, 4, true, 0, false);
      cm.npc_ChangeController(1540459, "oid=56815", -1793, -237, 16, -1843, -1753, 4, true, 0, false);
      cm.npc_ChangeController(1540458, "oid=56816", -1971, -237, 15, -2021, -1965, 4, true, 0, false);
      cm.npc_ChangeController(1540458, 'oid=56817', -2149, -237, 15, -2149, -2099, 4, true, 0, false);
      cm.npc_ChangeController(1540450, 'oid=56818', -1472, -237, 18, -1501, -1422, 4, true, 0, false);
      cm.npc_ChangeController(1540700, "oid=286867250", -1240, -278, 19, -1290, -1190, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286867250", "summon", 0, 0);
      cm.npc_ChangeController(1540701, "oid=286867251", -1310, -278, 18, -1360, -1260, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286867251", "summon", 0, 0);
      cm.npc_ChangeController(1540702, "oid=286867252", -1380, -278, 18, -1430, -1330, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=286867252", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_SetSpecialAction("oid=286867251", "cry", -1, 1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 5000, -2000, -356);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 500, -935, -300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -1354, -210);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("那……再见，队长。", 45, 1540454, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#呃呜呜，呜呜呜……", 45, 1540455, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("不要哭，德皮。", 45, 1540454, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("不要哭，哥哥。", 45, 1540456, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#和队长在一起我觉得很开心。我们以后一定要再见，队长。", 45, 1540455, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("好了，那……", 45, 1540454, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -1354, -230);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2300);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('再见，#h0#。', 45, 1540450, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#在我们下次见面之前，你一定要健健康康的啊。", 45, 1540452, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#能和你一起战斗我很开心。", 45, 1540453, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_MoveAction(2);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -1000, -230);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                        cm.playerMessage(5, "获得了12500声望. ");
                                                        cm.updateInfoQuest(33125, "honor=1");
                                                        cm.forceCompleteQuest(33125);
                                                        cm.gainHonorExp(12500, true);
                                                        cm.gainItem(1142804, 1);
                                                        cm.forceCompleteQuest(33288);
                                                        cm.finishAchievement(1193);
                                                        cm.forceCompleteQuest(33130);
                                                        cm.updateInfoQuest(500663, "BH_check=clear");
                                                        cm.forceStartQuest(33217, '');
                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 3);
                                                        cm.forceCompleteQuest(33284);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) * 3);
                                                        cm.updateInfoQuest(33315, "chapter1=1;chapter2=1;chapter3=1");
                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                        cm.forceStartQuest(33294, '');
                                                        cm.forceCompleteQuest(33294);
                                                      } else if (status === V++) {
                                                        cm.dispose();
                                                        cm.warp(350063202, 0, true);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.npc_LeaveField("oid=286867250");
                                                        cm.npc_LeaveField("oid=286867250");
                                                        cm.npc_LeaveField("oid=286867251");
                                                        cm.npc_LeaveField("oid=286867251");
                                                        cm.npc_LeaveField("oid=286867252");
                                                        cm.npc_LeaveField("oid=286867252");
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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