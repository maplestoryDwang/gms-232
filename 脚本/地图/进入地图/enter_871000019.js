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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400931, "oid=19759646", 1600, 300, 56, 1550, 1650, 0, true, false);
      cm.npc_SetSpecialAction("oid=19759646", "summon", 0, 0);
      cm.npc_ChangeController(9400929, "oid=19759647", 1550, 300, 38, 1500, 1600, 0, true, false);
      cm.npc_SetSpecialAction("oid=19759647", "summon", 0, 0);
      cm.npc_ChangeController(9400928, "oid=19759648", 1500, 300, 38, 1450, 1550, 0, true, false);
      cm.npc_SetSpecialAction("oid=19759648", 'summon', 0, 0);
      cm.npc_ChangeController(9400933, "oid=19759649", 1450, 300, 56, 1400, 1500, 0, true, false);
      cm.npc_SetSpecialAction("oid=19759649", 'summon', 0, 0);
      cm.npc_ChangeController(9400935, "oid=19759650", 1400, 300, 54, 1350, 1450, 0, true, false);
      cm.npc_SetSpecialAction("oid=19759650", "summon", 0, 0);
      cm.npc_ChangeController(9400936, "oid=19759651", 1350, 300, 54, 1300, 1400, 0, true, false);
      cm.npc_SetSpecialAction("oid=19759651", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1760, 300);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400932, "oid=19759652", 1700, 300, 56, 1650, 1750, 1, true, false);
      cm.npc_SetSpecialAction("oid=19759652", "summon", 0, 0);
      cm.npc_ChangeController(9400934, "oid=19759653", 1900, 300, 55, 1850, 1950, 1, true, false);
      cm.npc_SetSpecialAction("oid=19759653", 'summon', 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 1600, 350]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face1#噢噢！你们安全地回来了啊！", 37, 9400922, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#但是旁边的是……谁？", 37, 9400922, true, true);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=19759653", -1, 50, 100);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#你好，我叫做杰弗里。", 37, 9400925, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#他在来凯兰西亚的时候迷路了，在森林里徘徊。我们正好遇上，就和他一起回来了。哈哈。", 37, 9400923, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#那个叫声究竟是怎么回事？", 37, 9400924, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#别担心，我们都解决了，哈哈。对吧，#h0#？", 37, 9400923, true, true);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=19759652", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b没错……", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=19759652", -1);
                            cm.sendNormalTalk_Bottom("#face0#原来如此，太好了，太好了。", 37, 9400922, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#杰弗里，很高心见到你。在森林里徘徊应该很累吧，今天你就好好休息一下，我会给你准备休息的地方的。", 37, 9400922, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#谢谢，谢谢！", 37, 9400925, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=19759651", -1);
                                  cm.npc_setForceFlip("oid=19759650", -1);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=19759649", -1);
                                    cm.npc_SetForceMove("oid=19759651", -1, 1000, 100);
                                    cm.npc_SetForceMove("oid=19759650", -1, 1000, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=19759648", -1);
                                      cm.npc_SetForceMove("oid=19759649", -1, 1000, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=19759647", -1);
                                        cm.npc_SetForceMove("oid=19759648", -1, 1000, 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=19759647", -1, 1000, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=19759653", -1, 150, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=19759653", 1);
                                              cm.sendNormalTalk_Bottom("#face2##h0#！艾丹！", 37, 9400925, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#[#i2630596:##t2630596#]\r\n……谢谢你们能相信我，帮助我。我也没什么能给你们的，你们能收下这个吗？这是我亲手画的蘑菇屋图纸！", 37, 9400925, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#我们以后好好相处吧！", 37, 9400925, true, true);
                                                } else if (status === V++) {
                                                  cm.warp(871000000, 3);
                                                  cm.eventSKill(0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.forceCompleteQuest(64624);
                                                  cm.updateInfoQuest(500764, "end=1;name=" + cm.getPlayer().getName());
                                                  cm.updateInfoQuest(64624, "end=19/10/11/22/14");
                                                  cm.gainItem(2630596, 1);
                                                  cm.npc_LeaveField("oid=19759646");
                                                  cm.npc_LeaveField("oid=19759647");
                                                  cm.npc_LeaveField("oid=19759648");
                                                  cm.npc_LeaveField("oid=19759649");
                                                  cm.npc_LeaveField("oid=19759650");
                                                  cm.npc_LeaveField("oid=19759651");
                                                  cm.npc_LeaveField("oid=19759652");
                                                  cm.npc_LeaveField("oid=19759653");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;