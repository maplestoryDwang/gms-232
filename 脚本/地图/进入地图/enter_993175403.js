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
  if (cm.getInfoQuest(100442) == 'enter=1') {
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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9062263, "oid=13971266", -154, 103, 87, -204, -104, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=13971266", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#小声点，小心地下去。", 37, 9062263, false, true, 1);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(9062262, "oid=13971412", 176, 31, 104, 126, 226, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=13971412", 'summon', 0, 0);
            cm.sendNormalTalk_Bottom("#face0#蓝色的月亮，仿佛握在手中的浓雾，摇曳的南瓜灯光。", 37, 9062262, true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0##b#h0##k，快把假面……！", 37, 9062263, true, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ChangeEquipment([1022013]);
                cm.sendNormalTalk_Bottom("#face0#还有梦幻的假面舞会。\r\n所有的一切都是这个万圣节夜晚的趣味之处。", 37, 9062262, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#假面绅士……", 37, 9062263, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#看来你没从管家那里听说舞会的规则。\r\n在舞会开始前，所有客人都必须待在客房里。", 37, 9062262, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#还有，好像有一位面生的客人。畏惧的假面，那客人是谁？", 37, 9062262, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这……这位也是被邀请的客人。#b冷漠脸假面#k。", 37, 9062263, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你也受到了邀请函吗？", 37, 9062262, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('……', 57, 0, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(9062256, "oid=13971445", -89, 31, 87, -139, -39, 0, true, 0, false);
                              cm.npc_SetSpecialAction("oid=13971445", "summon", 0, 0);
                              cm.sendNormalTalk_Bottom("#face0#这位的确是客人。", 37, 9062256, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#我看到了他的邀请函。", 37, 9062256, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('#face0#……', 37, 9062262, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#而且……参加舞会的客人越多不是越好吗？", 37, 9062256, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#这是自然。", 37, 9062262, false, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#派对当然是人越多越有趣。希望你度过一个愉快的夜晚。", 37, 9062262, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField("oid=13971412");
                                            cm.sendNormalTalk_Bottom("#face0#咻……差点就被发现了。", 37, 9062256, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#真是惊险……\r\n女仆，谢谢你了。", 37, 9062263, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#不客气……\r\n我也希望能结束这个舞会……你不是也知道嘛？", 37, 9062256, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#不说这个了。小姐，\r\n我听到#b坟墓旁#k有#b悲伤的哭声#k。", 37, 9062256, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('坟墓旁？', 57, 0, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#应该是#b别的客人#k中的一位。去#b墓地#k看看吧。", 37, 9062263, true, true, 1);
                                                    } else if (status === V++) {
                                                      cm.updateInfoQuest(100442, "enter=1");
                                                      cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                      cm.setInGameDirectionMode(false, true, false);
                                                      cm.setStandAloneMode(false);
                                                      cm.npc_LeaveField("oid=13971266");
                                                      cm.npc_LeaveField("oid=13971445");
                                                      cm.dispose();
                                                      cm.warp(993175400, 1, false);
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}