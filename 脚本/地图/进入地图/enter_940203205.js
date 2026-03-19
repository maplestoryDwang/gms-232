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
      cm.npc_ChangeController(3001204, 'oid=257785', -1701, 26, 246, -1751, -1651, 0, false, false);
      cm.npc_ChangeController(3001212, "oid=257786", -1550, -85, 51, -1600, -1500, 1, false, false);
      cm.npc_ChangeController(3001216, "oid=257787", 627, -49, 4, 577, 677, 1, false, false);
      cm.npc_ChangeController(3001217, "oid=257788", 450, -36, 2, 400, 500, 1, false, false);
      cm.npc_ChangeController(3001227, 'oid=257789', -1311, -136, 53, -1361, -1261, 1, false, false);
      cm.npc_ChangeController(3001228, 'oid=257790', -1474, 41, 247, -1524, -1424, 1, false, false);
      cm.npc_ChangeController(3001229, 'oid=257791', -1159, -260, 64, -1209, -1130, 1, false, false);
      cm.npc_ChangeController(3001231, 'oid=257792', -1603, 39, 246, -1653, -1553, 1, false, false);
      cm.npc_ChangeController(3001242, "oid=257793", -1469, -103, 52, -1519, -1419, 1, false, false);
      cm.npc_ChangeController(3004000, "oid=7123325", -2278, -40, 263, -2328, -2228, 1, true, false);
      cm.npc_SetSpecialAction("oid=7123325", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#做这件事我虽然心怀好意…… \r\n但有些人却好像不这么看。", 37, 3004001, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#总有一天，有人会理解我的，对吧？", 37, 3004001, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#总有一天……有人理解……真不容易。", 37, 3004000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("？？？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayBGM("Bgm47/SavageTerminal", 0, 0);
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1400);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("什么意思？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#这当中暗含着各种利害关系，十分复杂，对某人来说是好事，而对站在反对立场的人来说却会损害他们的利益。", 37, 3004000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('嗯……？', 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#比如说，净化污染虽是好事，但如果对方是荒蛮终点站会怎么样呢？", 37, 3004000, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#荒蛮终点站的动力大部分都来自于污染的海水。\r\n包括电灯、各种机械装置，以及我们使用的所有动力。", 37, 3004000, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#但如果海水都被净化后会怎么样？\r\n会立刻回到原始时代，很多人都会饿死街头。", 37, 3004000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#但这还算好的。\r\n在适应污染的过程中进化而来的古鲁格将会面临灭种危机。", 37, 3004000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("原来如此……", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#如果你了解这些情况，你也会对犯罪分子视而不见的。", 37, 3001259, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=7123325", 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(3001259, "oid=7123928", -2178, -40, 264, -2228, -2128, 1, false, 300, false);
                                        cm.npc_SetSpecialAction("oid=7123928", "summon", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#每次你说要解决问题的时候，犯罪分子就饱受威胁。", 37, 3001259, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#……", 37, 3004000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#不对，再怎么样犯罪就是犯罪。", 37, 3004000, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#嗯，你肯定会那样吧！\r\n算了……我是来说有关拜托………不，不对，有关委托方面的事的。", 37, 3001259, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我对事件发生时留在村里的#b拉宝拉托利安#k进行了全面调查。\r\n其他的都已经确认了所有人，只有一台至今都无法确定位置。", 37, 3001259, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#事件发生后，最后的信号是在#b斗战俱乐部#k中断的。", 37, 3001259, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#斗战俱乐部？", 37, 3004000, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#难道是#b哈扎尔的手下#k？", 37, 3004000, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#！！", 37, 3004000, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#我们得抓紧时间，赶紧行动。", 37, 3004000, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.askMenu_Bottom("去哪儿？\r\n\r\n#b#L0# 垃圾场？#l\r\n#L1# 斗战俱乐部？#l\r\n#L2# 黑市？#l", 57, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("垃圾场？", 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#错，我们要去的地方是黑市。", 37, 3004000, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#佩隆开始回收部件的消息传开了。\r\n那群家伙真要是导致飞艇坠落的罪魁祸首，就绝不会错过这次机会的。", 37, 3004000, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else if (status === V++) {
                                                                        cm.dispose();
                                                                        cm.warp(940203206, 0);
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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