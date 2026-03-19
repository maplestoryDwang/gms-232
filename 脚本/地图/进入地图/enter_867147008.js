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
      cm.npc_ChangeController(9401025, 'oid=201000', -533, 86, 9, -583, -483, 1, false, 0, false);
      cm.npc_ChangeController(9401026, "oid=201001", -475, 86, 9, -525, -425, 1, false, 0, false);
      cm.npc_ChangeController(9401027, "oid=201002", -436, 86, 4, -486, -386, 1, false, 0, false);
      cm.npc_ChangeController(9401028, "oid=201003", -376, 86, 4, -426, -326, 1, false, 0, false);
      cm.npc_ChangeController(9401129, "oid=201004", -131, 86, 2, -181, -81, 5, true, 0, false);
      cm.npc_ChangeController(9401130, "oid=201005", -176, 86, 2, -226, -126, 5, true, 0, false);
      cm.npc_ChangeController(9401050, "oid=201006", -322, 86, 1, -372, -272, 5, true, 0, false);
      cm.npc_ChangeController(9401051, "oid=201007", -274, 86, 1, -324, -224, 5, true, 0, false);
      cm.npc_ChangeController(9401049, "oid=201008", -226, 86, 3, -276, -176, 5, true, 0, false);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 250);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("哦！你终于回来了！", 37, 9401023, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("咳咳，咳咳……大家都在等着#h0#和你的远征队。", 37, 9401023, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("好了，现在请告诉我们吧！", 37, 9401023, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那下面有些……什么？", 37, 9401021, true, true);
                } else {
                  if (status === V++) {
                    cm.askMenu_Bottom("#b下面是……\r\n#L0#浓重的黑暗与虚无。除此之外别无他物。\r\n#L1#还有我们的未来和照顾彼此的心意。", 57, 0);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('嗯？', 37, 9401023, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("原来如此，太好了。你们能够在那里发现一些东西真是太好了。", 37, 9401021, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("……冒险就是如此，无法保证能够得到一个结果。", 37, 9401021, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("如果那下面存在着什么了不起的东西自然最好。但如果没有，只要我们充分享受了这场冒险，就足够了。", 37, 9401021, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("想想看……冒险不就是为了一个未知的结果，而铤而走险吗。但因为冒险而感到开心，这种表现不是很神奇吗？", 37, 9401021, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b呵呵，是啊。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("大家都开心吗？", 37, 9401021, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("真的！非常！这算是我18年人生中最开心的时光了！", 37, 9401032, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你？居然是比我……大？", 37, 9401029, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("诶咦，年纪多大有什么关系？我们是伙伴！", 37, 9401032, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("……噗。我也非常开心，托大家的福。", 37, 9401030, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("我也…… 感受到了许多。", 37, 9401033, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('呼呼……太好了。', 37, 9401021, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("好了！这次冒险也就此结束了。", 37, 9401021, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("直到约定的时间为止 ，我都会等在这里，帮助其他的冒险家。各位也请随意，稍事休息再离开。", 37, 9401021, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我们在路上……再相见。", 37, 9401021, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我这个大叔会为大家祈祷，愿女神的庇护与你们同在！", 37, 9401023, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.eventSKill(0);
                                                        cm.warp(867147001, 0, false);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.forceCompleteQuest(64787);
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