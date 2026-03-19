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
      cm.npc_ChangeController(3003601, "oid=275646", 1208, 117, 21, 1158, 1208, 1, false, 0, false);
      cm.npc_ChangeController(3003608, "oid=275647", 1544, 117, 24, 1494, 1580, 0, false, 0, false);
      cm.updateInfoQuest(35157, "save=993060002;return=450006130");
      cm.npc_ChangeController(3003659, "oid=2199408", 1389, 102, 19, 1339, 1439, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2199408", "summon", 0, 0);
      cm.npc_ChangeController(3003659, "oid=2199409", 1314, 102, 20, 1264, 1364, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2199409", 'summon', 0, 0);
      cm.npc_ChangeController(3003653, "oid=2199410", 1030, 102, 22, 980, 1080, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2199410", "summon", 0, 0);
      cm.npc_ChangeController(3003654, "oid=2199411", 1110, 102, 21, 1060, 1160, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2199411", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.updateInfoQuest(35150, "01=h0");
      cm.npc_ChangeController(3003651, "oid=2199412", 1208, 102, 21, 1158, 1258, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2199412", "summon", 0, 0);
      cm.npc_ChangeController(3003652, "oid=2199413", 50, -135, 10, 0, 100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2199413", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 150, -300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 250, 50);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 500, 50);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                } else {
                  if (status === V++) {
                    cm.onTeleport(0, 3, cm.getPlayer().getId(), 930, 102);
                    cm.npc_LeaveField("oid=2199413");
                    cm.npc_LeaveField("oid=2199413");
                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                        cm.npc_ChangeController(3003652, "oid=2199420", 850, 102, 18, 800, 900, 0, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2199420", "summon", 0, 0);
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1070, 170);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你来啦，沃莉……还有，#b#ho##k。", 37, 3003651, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#嗯，时间神官们都去哪儿了……", 37, 3003653, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#趁电波稳定下来的时候，他们全都出发了。\r\n多亏你们清理掉了周围的怪物。", 37, 3003651, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我留在这里，是为了把你们带到前哨基地去。", 37, 3003651, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("前哨基地？", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#啊，#b#ho##k，看来我得为你介绍一下情况。\r\n这段时间你一直在神秘河，不知道这里发生了什么……", 37, 3003651, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#嗯……但是……我们好像没太多的时间。\r\n我在路上慢慢给你讲吧。", 37, 3003651, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#休麦，先把我们送去圣地天渡好吗？", 37, 3003651, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#刚才电波有点不稳定。\r\n嗯……嗯……虽然还不到危险的水平。", 37, 3003653, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#既然没什么大问题，好像就没有必要再辛苦一趟了。\r\n我们先出发吧。", 37, 3003651, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#那，好吧……我马上连接。", 37, 3003653, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.updateInfoQuest(35602, "enter=1");
                                                  cm.npc_LeaveField("oid=2199412");
                                                  cm.npc_LeaveField("oid=2199412");
                                                  cm.npc_LeaveField("oid=2199420");
                                                  cm.npc_LeaveField("oid=2199420");
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else if (status === V++) {
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.updateInfoQuest(35150, "01=h1");
                                                        cm.npc_ChangeController(3003652, "oid=2199430", 850, 102, 18, 800, 900, 0, true, 0, false);
                                                        cm.npc_SetSpecialAction("oid=2199430", "summon", 0, 0);
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