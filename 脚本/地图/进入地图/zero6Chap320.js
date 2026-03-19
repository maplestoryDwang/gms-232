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
      cm.npc_ChangeController(2470018, "oid=27641", -1620, 177, 18, -1670, -1570, 1, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=27642", -2028, 177, 17, -2050, -1978, 0, false, 0, false);
      cm.npc_ChangeController(2400012, "oid=27643", -1946, 177, 17, -1996, -1896, 0, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=27644", -2171, 177, 11, -2221, -2121, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……阿尔法。看那里…… 那是…… 卡西亚斯！？", 41, 2400006, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face11#……女神的过去里也有卡西亚斯啊…… 也对。他也是之前侍奉过女神的神官……", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 150, -1700, 177);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(8371);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face0#女神啊…… 我能问你一个问题吗？为什么是我们？为什么选我们来照顾你的接班人？", 33, 2400000, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face1#我，我也是！我也很好奇…… 我才成为神官没多久，为什么会选中我…… 如果是卡西亚斯的话，还说得过去。", 33, 2400007, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我也觉得很好奇。", 33, 2400008, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……皮埃，你是个懂得引导别人的人。我相信不论是怎样危急的状况，你都不会放弃，会很好地辅佐我的接班人的。", 33, 2470022, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……本尼迪克，你的责任感很强。我相信如果把接班人交给你，你一定会对他们负起责任的。", 33, 2470022, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("……卡西亚斯，你是个多情的人。我相信你会用你的爱来照顾我的接班人，尽你所能让他们幸福的。", 33, 2470022, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("我相信你们三位一定能好好辅佐我的接班人，引导他们成为超越者的。", 33, 2470022, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("这算是回答了你们的问题了吗？", 33, 2470022, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#face0#……女神你的决定，我们理应遵从…… 如你所说，我们会尽全力照顾你的接班人的。", 33, 2400000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#face0#但在你离开之前，我还是女神你的神官。所以请告诉我。女神你会在…… 接班人诞生之后消亡…… 吗？", 33, 2400000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk('？！', 33, 2400008, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#face1#恩！？女神会消亡吗？！", 33, 2400007, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("不要伤心。一个世界一名超越者…… 这是理所当然的事情。请照顾好我的接班人。", 33, 2470022, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("#face0#但我……", 33, 2400000, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("皮埃，我相信你。你总是能做出正确的选择…… ", 33, 2470022, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("请你也相信我。我的接班人…… 他们会看到全新的未来。", 33, 2470022, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(0, 250, -2678, 177);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(3911);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("#face10#……也许你会说我们冷漠无情…… 但女神要消亡，最伤心的是皮埃。", 41, 2400005, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("#face10#……啊。空间又消失了……", 41, 2400006, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.dispose();
                                                            cm.warp(327000000, 10, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;