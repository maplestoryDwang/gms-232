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
      cm.updateInfoQuest(61333, "act1=610061560");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2870147", 980, -128, 8, 930, 1030, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2870147", "summon", 0, 0);
      cm.npc_ChangeController(9201534, "oid=2870148", 1200, -128, 9, 1150, 1250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2870148", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face3#……你真的不后悔吗？\r\n就算这么做可能也改变不了未来。", 37, 9201539, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("这就看你的了，博士。\r\n你已经发现了能够改变世界的事物。", 37, 9201534, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("所以，我对你的评价可是相当高的。", 37, 9201534, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=2870147", -1);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#……你这马屁拍的。", 37, 9201539, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("哪有。我可尊重你了。", 37, 9201534, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=2870147", 1);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2870148", -1, 50, 50);
                            cm.sendNormalTalk_Bottom("#face3要不是你的那块幻日碎片，我就造不出穿越传送门了。", 37, 9201539, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("要不是你，我还惨兮兮地被困在那块石头里呢。", 37, 9201534, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('#face3#……', 37, 9201539, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("让我们回到1000年前我失败的那天，共同纠正历史吧。", 37, 9201534, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("帮我修正我的错误。", 37, 9201534, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#我知道你可能有点害怕……甚至还有点由于……请请不要就此止步。", 37, 9201534, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("不是为了我，而是为了你自己……\r\n你难道不想揭露这个帝国的真正历史吗？", 37, 9201534, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("难道不想要我许诺给你的知识了吗……", 37, 9201534, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("这些你都不想要了吗？", 37, 9201534, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("记住……只要我得到了幻日，这个世界的人都会变得睿智而善良。", 37, 9201534, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#跟我来这套啊你？", 37, 9201539, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#还真是名副其实的控制狂……", 37, 9201539, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("但如果你不是这样的人，我也不会遇见你了。", 37, 9201534, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2870147", -1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=2870147", 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#那好吧。\r\n毕竟我也有自己的打算。", 37, 9201539, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#我等着你。", 37, 9201534, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#记得帮我跟过去的我……问好。", 37, 9201534, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else if (status === V++) {
                                                                        cm.eventSKill(0);
                                                                        cm.warp(610061570, 0, true);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.npc_LeaveField("oid=2870147");
                                                                        cm.npc_LeaveField("oid=2870147");
                                                                        cm.npc_LeaveField("oid=2870148");
                                                                        cm.npc_LeaveField("oid=2870148");
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
  }
}