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
      cm.npc_ChangeController(9400929, "oid=19157220", -200, 270, 1, -250, -150, 0, true, false);
      cm.npc_SetSpecialAction("oid=19157220", "summon", 0, 0);
      cm.npc_ChangeController(9400928, "oid=19157221", -135, 270, 1, -185, -85, 0, true, false);
      cm.npc_SetSpecialAction("oid=19157221", 'summon', 0, 0);
      cm.npc_ChangeController(9400935, "oid=19157222", -70, 270, 1, -120, -20, 0, true, false);
      cm.npc_SetSpecialAction("oid=19157222", "summon", 0, 0);
      cm.npc_ChangeController(9400931, "oid=19157223", 90, 270, 1, 40, 140, 1, true, false);
      cm.npc_SetSpecialAction("oid=19157223", 'summon', 0, 0);
      cm.npc_ChangeController(9400933, "oid=19157224", 150, 270, 1, 100, 200, 1, true, false);
      cm.npc_SetSpecialAction("oid=19157224", 'summon', 0, 0);
      cm.npc_ChangeController(9400932, "oid=19157225", 225, 270, 1, 175, 275, 1, true, false);
      cm.npc_SetSpecialAction("oid=19157225", 'summon', 0, 0);
      cm.npc_ChangeController(9400936, "oid=19157226", 270, 250, 2, 220, 320, 1, true, false);
      cm.npc_SetSpecialAction("oid=19157226", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.sendNewEffects(17, [0, 1000, 2000, 50, 300]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs20#凯兰西亚居民商议会议"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#我分明听见了。\r\n“嗷呜~~~！嗷呜！嗷呜！嗷呜！”的声音。", 37, 9400924, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#哇，完全一样！", 37, 9400926, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#… ", 37, 9400924, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#我也听到了，不管怎么听都像是可怕的怪兽的声音！", 37, 9400921, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#嗯~~我因为在睡觉所以没听见呢。", 37, 9400920, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……看来比较了解情况的就只有我，艾丹了。", 37, 9400923, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=19157223", 1);
                          cm.npc_setForceFlip("oid=19157224", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我看到了！", 37, 9400923, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#什么？", 37, 9400922, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#巨大的脚印！", 37, 9400923, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#不久前，在我为了寻找木材去森林的时候。因为看到树下开着很漂亮的花，我就想把花给米兰……总之，正当我低下身子想摘花的时候！我发现了有我的脚两倍大的脚印！", 37, 9400923, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('#face3#难道！', 37, 9400920, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#是真的！甚至像是在那里待了很久一样，地上有很多它的脚印。那个家伙在那里做了什么呢……一想就觉得，呃，可怕。", 37, 9400923, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=19157223", -1);
                                          cm.npc_setForceFlip("oid=19157224", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……出大事了啊，至今从未发生过这种事……", 37, 9400922, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#真的吗？！那在它来村子之前，我们不应该先去把它消灭掉吗？", 37, 9400920, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#(点头点头) ", 37, 9400924, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face2#我们不是有勇士大人嘛！", 37, 9400920, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#b……我？", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2##h0#还不熟悉路，让艾丹去带路就可以了！", 37, 9400921, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……嗯？", 37, 9400923, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.askMenu_Bottom("#face0#不，这么危险的事情还是不要强制了，就让我去吧。\r\n#b#L0#我会去的。#l\r\n#L1#请早去早回吧。#l", 37, 9400922);
                                                        } else {
                                                          if (status === V++) {
                                                            selectionLog[666] = e;
                                                            if (selectionLog[666] == 0) {
                                                              cm.sendNormalTalk_Bottom("#face1#噢，你真的要去吗？", 37, 9400922, false, true);
                                                            } else {
                                                              cm.sendNormalTalk_Bottom("#face0#……还是我去吧，凯尼斯", 37, 9400924, false, true);
                                                            }
                                                          } else {
                                                            if (status === V++) {
                                                              if (selectionLog[666] == 0) {
                                                                cm.sendNormalTalk_Bottom("#face1#我，我也要去！这么重要的事情可不能少了我艾丹啊。哈哈。\r\n米兰达，不用担心我！我会安全地回来的！", 37, 9400923, true, true);
                                                              } else {
                                                                cm.sendNormalTalk_Bottom("#face1#嗯？！米兰达？不，米兰达就呆在这里吧。我，我本来就打算要去了！和#h0#一起！对，对吧？哈哈。", 37, 9400923, true, true);
                                                              }
                                                            } else {
                                                              if (status === V++) {
                                                                if (selectionLog[666] == 0) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……？\r\n好啊。", 37, 9400924, true, true);
                                                                } else {
                                                                  cm.sendNormalTalk_Bottom("#b……是啊", 57, 0, true, true);
                                                                }
                                                              } else {
                                                                if (status === V++) {
                                                                  if (selectionLog[666] == 0) {
                                                                    cm.sendNormalTalk_Bottom("#face2#果然，你们俩都很帅气！", 37, 9400920, true, true);
                                                                  } else {
                                                                    cm.sendNormalTalk_Bottom("#face2#果然！如果你们俩去，那就没什么可担心的了！对吧，凯尼斯？", 37, 9400920, true, true);
                                                                  }
                                                                } else {
                                                                  if (status === V++) {
                                                                    if (selectionLog[666] == 0) {
                                                                      cm.sendNormalTalk_Bottom("#face1#拜托你们了，#h0#，艾丹。", 37, 9400922, true, true);
                                                                    } else {
                                                                      cm.sendNormalTalk_Bottom("#face1#还真是可靠呢，虽然有点勉强，但是就拜托你们了，艾丹，#h0#。", 37, 9400922, true, true);
                                                                    }
                                                                  } else if (status === V++) {
                                                                    cm.eventSKill(0);
                                                                    cm.warp(871000001, 0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.forceCompleteQuest(500764);
                                                                    cm.updateInfoQuest(64620, "start=1;dir=1");
                                                                    cm.updateInfoQuest(500764, 'name=' + cm.getPlayer().getName());
                                                                    cm.npc_LeaveField("oid=19157220");
                                                                    cm.npc_LeaveField("oid=19157221");
                                                                    cm.npc_LeaveField("oid=19157222");
                                                                    cm.npc_LeaveField("oid=19157223");
                                                                    cm.npc_LeaveField("oid=19157224");
                                                                    cm.npc_LeaveField("oid=19157225");
                                                                    cm.npc_LeaveField("oid=19157226");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;