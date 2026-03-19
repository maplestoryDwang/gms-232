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
      cm.npc_ChangeController(9400597, "oid=7536774", -270, -70, 1, -320, -220, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536774", "summon", 0, 0);
      cm.npc_ChangeController(9400632, "oid=7536775", -450, -70, 1, -500, -400, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536775", "summon", 0, 0);
      cm.npc_ChangeController(9400633, "oid=7536776", -520, -70, 1, -570, -470, 0, true, false);
      cm.npc_SetSpecialAction("oid=7536776", "summon", 0, 0);
      cm.npc_ChangeController(9400583, "oid=7536777", -110, -70, 1, -160, -60, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536777", "summon", 0, 0);
      cm.npc_ChangeController(9400585, "oid=7536778", -45, -70, 1, -95, 5, 1, true, false);
      cm.npc_SetSpecialAction("oid=7536778", 'summon', 0, 0);
      cm.sendNormalTalk_Bottom("#b哈啊~！辛苦了。", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#哈啊，哈啊- 想当年我也是个很出色的渔夫…", 37, 9400597, true, true);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=7536777", -1, 50, 50);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#哇呜！你们比想象中还要厉害哦？", 37, 9400583, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#是吗？", 37, 9400597, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#嗯~~！不过力量还是不够。", 37, 9400583, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#切…真的吗？", 37, 9400597, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#可能是因为每天对着小鱼扔的缘故，攻击的速度和准确度很高。", 37, 9400583, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是吗~~~~！？！", 37, 9400597, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我觉得用渔网限制移动的话更有效。", 37, 9400583, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#渔网？！", 37, 9400597, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                              cm.effect_NormalSpeechBalloon("怎么弄？！", 0, 0, 0, 2000, 9400632, cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                cm.effect_NormalSpeechBalloon("真的吗？！", 0, 0, 0, 2000, 9400633, cm.getPlayer().getId());
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0##h0#！你能再做一次对手吗？", 37, 9400583, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b当然！", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#亚皮纳斯的三位，也能来帮忙吗？", 37, 9400583, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('是！', 37, 9400585, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#很好。各位，听我的信号，向 #h0# 和士兵们扔出渔网！", 37, 9400583, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#那个很简单！", 37, 9400597, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                cm.effect_NormalSpeechBalloon('是！', 0, 0, 0, 2000, 9400632, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  cm.effect_NormalSpeechBalloon("明白。", 0, 0, 0, 2000, 9400633, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我也会一起攻击的！小心哦，#h0#！", 37, 9400583, false, true);
                                                  } else if (status === V++) {
                                                    cm.forceCompleteQuest(64119);
                                                    cm.forceStartQuest(64120, '');
                                                    cm.warp(867202460, 0);
                                                    cm.npc_LeaveField("oid=7536774");
                                                    cm.npc_LeaveField("oid=7536774");
                                                    cm.npc_LeaveField("oid=7536775");
                                                    cm.npc_LeaveField("oid=7536775");
                                                    cm.npc_LeaveField("oid=7536776");
                                                    cm.npc_LeaveField("oid=7536776");
                                                    cm.npc_LeaveField("oid=7536777");
                                                    cm.npc_LeaveField("oid=7536777");
                                                    cm.npc_LeaveField("oid=7536778");
                                                    cm.npc_LeaveField("oid=7536778");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;