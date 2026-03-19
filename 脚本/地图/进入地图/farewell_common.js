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
      cm.npc_ChangeController(1540461, "oid=34134", -1576, 88, 6, -1626, -1526, 4, true, 0, false);
      cm.npc_ChangeController(1540461, "oid=34135", -1789, 88, 8, -1839, -1739, 4, true, 0, false);
      cm.npc_ChangeController(1540420, 'oid=34136', -1488, 88, 10, -1538, -1438, 5, true, 0, false);
      cm.npc_ChangeController(1540421, 'oid=34137', -1080, 88, 11, -1130, -1030, 1, false, 0, false);
      cm.npc_ChangeController(1540422, "oid=34138", -1042, 88, 9, -1092, -992, 1, false, 0, false);
      cm.npc_ChangeController(1540459, 'oid=34139', -1234, 88, 12, -1284, -1184, 5, true, 0, false);
      cm.npc_ChangeController(1540413, "oid=34140", -880, -14, 50, -930, -830, 4, true, 0, false);
      cm.npc_ChangeController(1540436, 'oid=34141', -1164, 88, 11, -1214, -1114, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -450, 100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("好了，那我们现在回去吧。", 37, 2400005, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('回去？', 37, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我们在这里已经没事情要处理了。我们没必要帮助别人战斗。", 37, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("那我们不乘坐那个吗？", 37, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(200);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.sendNormalTalk_Bottom("那个？", 37, 2400005, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -450, -250);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(3000, 1200, 3000, -900, -250);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(3000, 1200, 3000, -1404, -250);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(3000, 1200, 3000, -900, -250);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          cm.effect_NormalSpeechBalloon("如果要参战, 请抓紧上船", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 1540413, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("飞船？你不会是想坐那个飞船吧？", 37, 2400005, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom('嗯。', 37, 2400006, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -450, -250);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -450, 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("你也不是小孩，真是的……", 37, 2400005, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("等我们的事情都处理好之后再去坐吧。", 37, 2400005, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#(虽然这么说了，但……后面的事与我无关，呼。)", 37, 2400005, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("如果没有我们的帮助，联盟可能会输的……", 37, 2400006, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("呃，也有这个可能。", 37, 2400005, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("那样的话，可能什么都不会剩下了……", 37, 2400006, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face11#嗯，没错。但我不想在到处都是怪物的世界成为超越者。", 37, 2400005, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("人类全部消失，只留下熙熙攘攘的怪物。", 37, 2400006, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('……', 37, 2400005, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("嘁，拿你没办法。虽然很麻烦，但还是参战吧。", 37, 2400005, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face4#哈哈哈。", 37, 2400006, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("嗯？你好像很少这么开心呢？", 37, 2400005, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face4#现在可以乘坐飞船了。", 37, 2400006, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#就因为这个？！", 37, 2400005, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else if (status === V++) {
                                                                                      cm.dispose();
                                                                                      cm.warp(350020023, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;