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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(9330201, "oid=843549", 488, 27, 1, 438, 538, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=843549", "summon", 0, 0);
      cm.setSessionValue("zhizonbo", "843549");
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("修炼进行的怎样呢？", 1, 9330201, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("每天每天，都有在进步中，父亲。", 3, 9330201, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("听起来秀禾讲的话, 好像很认真的做下去的样子。", 1, 9330201, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("不管多么努力, 都不愿意肯定秀禾. 可是你跟父亲说过这些话吗？", 3, 9330201, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("哈哈，那么是代表不努力吗？", 1, 9330201, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("不, 才不是!我也想要快点认真修炼, 成为像父亲这样的宏武团的一员！", 3, 9330201, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("好的，我会更认真。啊！可以过来一下吗？", 1, 9330201, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("好\u3000父亲...!", 3, 9330201, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(2);
                              cm.sendNormalTalk("你的生日是明天吗？", 1, 9330201, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("(哇，父亲没有忘记耶!)", 3, 9330201, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("是啊。父亲，明天是我的生日。可是好像太认真修炼了，连生日都忘了", 3, 9330201, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("是吗？想送什么礼物给你，如果不送的话也没有关系吗？", 1, 9330201, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("不，不是，不是这样的….", 3, 9330201, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(9330203, "oid=843560", 647, 20, 1, 597, 697, 1, true, 0, false);
                                        cm.npc_SetSpecialAction('oid=843560', 'summon', 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                                      } else {
                                        if (status === V++) {
                                          cm.setSessionValue("Suha", '843560');
                                          cm.npc_SetSpecialAction("oid=843560", "move", 0, 0);
                                          cm.npc_SetForceMove("oid=843560", -1, 97, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk('宏武团长', 9, 9330203, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("我有话要跟你说。", 9, 9330203, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("秀禾，你去过什么地方吗？", 3, 9330203, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("是小姐有事外出回来了。虽然很冒昧，我可以和团长谈一下话吗？", 9, 9330203, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("#h0#。我去一下，所以，在这期间你好好进行练习吧。", 1, 9330201, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=843549", 'move', 0, 1);
                                                              cm.npc_SetForceMove('oid=843549', 1, 158, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=843560", "move", 0, 1);
                                                                cm.npc_SetForceMove("oid=843560", 1, 80, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(720);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_LeaveField('oid=843549');
                                                                  cm.inGameDirectionEvent_AskAnswerTime(780);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(720);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_LeaveField("oid=843560");
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_MoveAction(2);
                                                                        cm.curNodeEventEnd(true);
                                                                        cm.sendNormalTalk("秀禾的表情看起来心情不好。是什么事呢？", 3, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg2/0"], [2000, 290, -100, 0, 0, 0, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg2/2"], [1500, 0, -100, 0, 0, 0, 0, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_MoveAction(2);
                                                                                cm.curNodeEventEnd(true);
                                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg2/1"], [2000, 120, -100, 0, 0, 0, 0, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/balloonMsg2/3"], [2000, 120, -100, 0, 0, 0, 0, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("是不是发生什么事了呢？我要跟她去看看吗？", 3, 0, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_ChangeController(9330203, 'oid=843580', 573, 3, 1, 523, 623, 1, true, 0, false);
                                                                                          cm.npc_SetSpecialAction('oid=843580', "summon", 0, 0);
                                                                                          cm.setSessionValue("Suha1", "843580");
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("吼，秀禾，不要这么突然间出现", 3, 9330203, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("小姐不管怎样，偷听的习惯是不好的。", 1, 9330203, false, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.emotion(3, 5000);
                                                                                                    cm.sendNormalTalk("偷，偷…。我没有偷听!", 3, 9330203, false, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk("宏武团长突然间有事情，所以，离开了。小姐 的修练，请在跟我委托之后进行", 1, 9330203, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                      } else if (status === V++) {
                                                                                                        cm.curNodeEventEnd(true);
                                                                                                        cm.npc_LeaveField("oid=843580");
                                                                                                        cm.dispose();
                                                                                                        cm.warp(743000000, 0, false);
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}