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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 843, 360);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074116, "oid=2606965", 852, 321, 520, 802, 902, 1, false, 500, false);
        cm.npc_SetSpecialAction("oid=2606965", "summon", 0, 0);
        cm.npc_ChangeController(2074143, "oid=2606966", 806, 322, 525, 756, 856, 0, false, 500, false);
        cm.npc_SetSpecialAction("oid=2606966", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=2606966", "beauty", -1, 1);
        cm.sendNormalTalk_Bottom("欢迎光临，客人，您有什么要买的，\r\n哎哟……那身衣服？", 37, 2074116, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('……', 37, 2074148, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("小荳姑娘？那衣服难不成是，", 37, 2074116, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你喜欢他吗？", 37, 2074148, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("什么？你，你突然说的这是什么话？", 37, 2074116, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我问你，你喜欢郡守吗？\r\n我都听说了，\r\n你，有个喜欢的人，却一直没能表白，\r\n那个人，是郡守吧？", 37, 2074148, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("那很重要吗……我，反正身份低微，\r\n而他……", 37, 2074116, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("既然你喜欢那又有什么关系！\r\n他现在就要离开了，你还要继续在这里工作吗？\r\n赶紧追上去，跟他表白啊！", 37, 2074148, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我这副模样要怎么……\r\n还有店里要是没人守着，我会立刻被开除的。", 37, 2074116, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("店里我帮你看着，\r\n衣服……好吧，\r\n不是在这里嘛。", 37, 2074148, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("但是，那，那身衣服。", 37, 2074116, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("反正都是你的嘛，\r\n来，赶紧，没时间了，还不知道那家伙什么时候会走呢，\r\n你可一定，一定要表白啊，以后可别后悔了。", 37, 2074148, true, true);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=2606966", 'standn', -1, 1);
                                  cm.npc_SetSpecialAction("oid=2606965", 'standn', -1, 1);
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('我真的……没关系吗？', 37, 2074149, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("挺漂亮的，\r\n那家伙肯定会被迷倒……", 37, 2074150, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("小荳姑娘……真的谢谢你，这份恩惠我不知该如何报答。", 37, 2074149, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("来，别废话了，赶紧去吧，那家伙，应该还在花间小路上，\r\n店里我帮你看着，\r\n我，眼睛有点痛会转过身去，你赶紧走吧。", 37, 2074150, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("……谢谢你。", 37, 2074149, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_LeaveField("oid=2606965");
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('……', 37, 2074150, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.dispose();
                                                        cm.warp(224000055, 27);
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