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
      cm.npc_ChangeController(9401057, "oid=201076", -183, 70, 6, -263, -163, 4, true, 0, false);
      cm.npc_ChangeController(9401057, "oid=201077", 526, -150, 57, 520, 620, 3, true, 0, false);
      cm.npc_ChangeController(9401057, "oid=201078", 827, 69, 23, 802, 902, 4, true, 0, false);
      cm.npc_ChangeController(9401056, 'oid=201079', 1081, -150, 59, 1030, 1130, 5, true, 0, false);
      cm.npc_ChangeController(9401056, "oid=201080", 627, 73, 22, 627, 708, 5, true, 0, false);
      cm.npc_ChangeController(9401056, 'oid=201081', 61, 72, 7, -30, 70, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9401124, "oid=59294764", -320, -250, 9, -370, -270, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59294764", "summon", 0, 0);
      cm.npc_ChangeController(9401127, "oid=59294765", -260, -250, 9, -310, -210, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59294765", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.npc_ChangeController(9401123, "oid=59294766", -120, -250, 10, -170, -70, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59294766", 'summon', 0, 0);
      cm.npc_ChangeController(9401126, "oid=59294767", -60, -250, 10, -110, -10, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59294767", "summon", 0, 0);
      cm.npc_ChangeController(9401125, "oid=59294768", -380, -250, 9, -430, -330, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=59294768", 'summon', 0, 0);
      cm.sendNewEffects(12, [0, -200, -500, 0, 0]);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
          cm.effect_Text(["#fn黑体##fs20##e深渊地下13层"], [50, 2000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.sendNewEffects(12, [4000, 1300, -80, 0, 0]);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b天……天啊……！", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(17, [0, 1000, 2000, 1500, 140]);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b已经……无法单纯用美丽这个词来形容了。", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNewEffects(12, [0, -80, -170, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=59294766", 1, 200, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这里……是深渊的尽头吗？", 37, 9401029, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b现在还不清楚，这下面说不定还有什么在等着我们。", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("……这里好像就是尽头了，真的……存在…… ", 37, 9401029, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=59294766", 1, 500, 100);
                                      cm.sendNormalTalk_Bottom("原来真的……存在…… ", 37, 9401029, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("真的……呃呃！早知道就好好学习了，面对如此美丽的景象，我竟然想不到任何词汇来形容！", 37, 9401032, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("这是我们第一次看见的风景，它会永远成为我向别人炫耀的资本。", 37, 9401031, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("……居然有如此神奇的植物存在，我再一次感受到了世界之大。", 37, 9401033, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("谁能想到，在地底深处竟然还有这样一个地方？", 37, 9401033, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_LeaveField("oid=59294766");
                                                cm.npc_LeaveField("oid=59294766");
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b别再感叹了，我们进去看看吧？", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("莫妮卡呢？", 37, 9401032, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=59294767", -1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_setForceFlip("oid=59294767", 1);
                                                        cm.sendNormalTalk_Bottom("莫妮卡？", 37, 9401033, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#b莫妮卡！！！", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=59294767", 1, 200, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=59294765", 1, 200, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("……永生之光。", 37, 9401033, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=59294765", -1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("她一定是去找永生之光了。她不是一直将那个名词挂在嘴边嘛，生长在最底层的那个花朵！", 37, 9401033, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#b怎么会……", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("如果不是这样，那她突然之间会去哪里呢？", 37, 9401033, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#b……（如果从一开始，这就是她的目的，那就算不是我，她也会找到别人，不管是谁都无所谓吧。）", 57, 0, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#b…………（还不如……) ", 57, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("你在想什么呢？我们几个继续探险吧？", 37, 9401033, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#b莫妮卡一个人会很危险，她自己应该也知道……还不如请求我们的帮助。", 57, 0, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("可能她自己都觉得请求帮助很不好意思吧。", 37, 9401033, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#b我们既然愿意帮助他人，又怎么会不帮助自己的伙伴呢。", 57, 0, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#b……还是去找找莫妮卡吧。", 57, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.eventSKill(0);
                                                                                            cm.updateInfoQuest(64783, "chk=1");
                                                                                            cm.npc_LeaveField("oid=59294764");
                                                                                            cm.npc_LeaveField("oid=59294764");
                                                                                            cm.npc_LeaveField("oid=59294765");
                                                                                            cm.npc_LeaveField("oid=59294765");
                                                                                            cm.npc_LeaveField("oid=59294767");
                                                                                            cm.npc_LeaveField("oid=59294767");
                                                                                            cm.npc_LeaveField("oid=59294768");
                                                                                            cm.npc_LeaveField("oid=59294768");
                                                                                            cm.dispose();
                                                                                            var O = cm.getEventManager("深渊远征队_教程7");
                                                                                            O.startInstance(cm.getPlayer());
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