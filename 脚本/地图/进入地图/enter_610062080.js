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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062080");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201536, "oid=2667883", 1595, 97, 65, 1545, 1645, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2667883", "summon", 0, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_setForceFlip("oid=2667883", -1);
        cm.inGameDirectionEvent_AskAnswerTime(2200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 1550, 150);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.sendNormalTalk_Bottom("你这是干什么？", 37, 9201536, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我要跟你一起去！", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我可好奇1000年前的世界是什么样的呢。", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#不可以！\r\n你已经为我做了那么多了。", 37, 9201536, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我知道你是个强大的战士。", 37, 9201536, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("但过去的事就让我这个来自过去的人解决吧。\r\n这里才是你的归属。", 37, 9201536, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("只要冒险岛世界有难，我就不能袖手旁观，卢坎。", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("无论是过去、现在还是未来……冒险岛世界，就由我来守护。", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("而现在，纳瑞坎得到幻日就是对你我的世界最大的威胁。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=2667883", 1);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=2667883", -1);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#你真是个勇敢的战士……", 37, 9201536, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("你就让我帮你吧，我可擅长这种事了。", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("……好吧。\r\n我得承认，你在我身边给我一种奇妙的安全感。\r\n你的牺牲会被千古流传的。", 37, 9201536, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("那，那啥，我没想送命来着……", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#啊哈，是的，当然了。\r\n我会让你安然回家的。", 37, 9201536, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("这才像话嘛。\r\n按下那个按钮吧！", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=2667883", 1);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                    } else if (status === V++) {
                                                                      cm.eventSKill(0);
                                                                      cm.setInGameDirectionMode(false, true, false);
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