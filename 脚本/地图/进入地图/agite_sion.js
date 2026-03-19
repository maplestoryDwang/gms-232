var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(17663) && !cm.isQuestFinished(17666)) {
    action1(f, E, e);
  } else if (cm.isQuestFinished(17666) && !cm.isQuestFinished(17668)) {
    cm.npc_ChangeController(9390236, "oid=2387216", -200, 80, 11, -250, -150, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=2387216", "summon", 0, 0);
    cm.npc_ChangeController(9390238, "oid=2387217", -344, 80, 12, -394, -294, 1, true, 0, false);
    cm.npc_SetSpecialAction("oid=2387217", 'summon', 0, 0);
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.forceForfeitQuest(17664);
      cm.forceForfeitQuest(17665);
      cm.forceForfeitQuest(17666);
      cm.npc_ChangeController(9390236, "oid=1743273", -200, 90, 11, -250, -150, 5, true, 0, false);
      cm.npc_ChangeController(9390238, "oid=1743274", -344, 90, 12, -394, -294, 5, true, 0, false);
      cm.npc_LeaveField("oid=1743273");
      cm.npc_LeaveField("oid=1743274");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9390236, "oid=2386128", 300, 80, 3, 250, 350, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2386128", 'summon', 0, 0);
      cm.updateInfoQuest(17664, "reonNpcVal=2386128");
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=2386128", -1, 650, 100);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(4000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这里就是那些家伙们的据点吗？", 5, 9390236, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("看来应该是那样的。", 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("但是特来敏小姐好像不在这里。不会是被监禁在什么地方了吧。", 5, 9390236, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("说不定就是那样呢。再找找看吧。找特来敏小姐的同时也找找有没有能掌握那些家伙的来历的资料。", 17, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("虽然很简陋，但是这边请。", 5, 9390207, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("好像有谁来了！快躲起来！", 17, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2386128", -1, 360, 200);
                            cm.inGameDirectionEvent_MoveAction(1);
                            cm.inGameDirectionEvent_AskAnswerTime(700);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                            } else {
                              if (status === V++) {
                                cm.forceStartQuest(17664, '');
                                cm.npc_ChangeController(9390237, "oid=2386488", 300, 80, 3, 250, 350, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2386488", "summon", 0, 0);
                                cm.npc_ChangeController(9390238, "oid=2386489", 400, 80, 4, 350, 450, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2386489", 'summon', 0, 0);
                                cm.npc_ChangeController(9390218, "oid=2386490", 500, 80, 1, 450, 550, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2386490", "summon", 0, 0);
                                cm.npc_SetForceMove("oid=2386488", -1, 650, 100);
                                cm.npc_SetForceMove("oid=2386489", -1, 650, 100);
                                cm.npc_SetForceMove("oid=2386490", -1, 650, 100);
                                cm.inGameDirectionEvent_PushMoveInfo(0, 100, -350, 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(9000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom('(特来敏小姐！！)', 37, 9390236, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('嘘！！', 35, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("克莱尔你好吗。我离开海本王国之前在那见过你，没想到在这儿又碰见你了啊。", 37, 9390207, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("就是说啊。我也没想到。在这种地方又见到你西温。", 37, 9390205, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("克莱尔，你父亲班·特来敏知道你在这里吗？", 37, 9390207, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("…………你现在是在要挟我克莱尔·特来敏吗？", 37, 9390205, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("请别太担心。我也不是不能理解克莱尔你想摆脱你这年龄段的生活环境的心情。我不会告诉你父亲的", 37, 9390207, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("难道要我谢谢你吗？", 37, 9390205, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("这可怎么说呢。我会为你做好明早回海本的准备的。", 37, 9390207, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("我是…！", 37, 9390205, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("啊，我们会保护精锐要员们确保他们人身安全的，请勿挂念。", 37, 9390207, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("切…………", 37, 9390205, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("(喂，#h0#，听得见说什么吗。)", 37, 9390236, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("(不，听不清。)", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("(哎，就这么冲进去吧？特来敏小姐的表情不太好。)", 37, 9390236, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom('(等等。)', 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("(你看他们不像是在逼迫特来敏小姐吗？)", 37, 9390236, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("(说逼迫的话，我倒觉得克莱尔和那使节团是旧相识的关系)", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("(我再也看不下去了。)", 37, 9390236, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("(喂，喂！！)", 57, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.forceStartQuest(17665, '');
                                                                              cm.sendNormalTalk_Bottom('在那里的是谁。', 37, 9390207, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetForceMove("oid=2386128", 1, 200, 100);
                                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 100, -450, 100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("还记得我吗，西温！", 37, 9390236, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("竟然有这种事。我还以为是谁呢，竟然是凯梅尔兹首领的儿子啊。您怎么会到这么偏僻的地方来的呢？", 37, 9390207, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("吵死了！赶紧给我从特来敏小姐身边滚开！", 37, 9390236, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("嗯？吼哦，看来您和克莱尔小姐相互认识啊。我也是和莱文大人你一样和克莱尔小姐有一点点交情。希望你不要产生不必要的误会。", 37, 9390207, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("像你这样装死的家伙如何能信。你为什么要装死？你在策划什么阴谋。", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("原来是那时的那位佣兵啊。是啊。会是什么事情呢。你要先和我的部下们先聊聊吗？", 37, 9390207, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 100, 0, 0);
                                                                                            } else if (status === V++) {
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.setStandAloneMode(false);
                                                                                              cm.forceCompleteQuest(17664);
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