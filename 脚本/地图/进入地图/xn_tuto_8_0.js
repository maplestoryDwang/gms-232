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
      cm.npc_ChangeController(2159384, "oid=307092", 700, 193, 3, 650, 750, 5, true, 0, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.npc_ChangeController(2159380, "oid=23868172", 450, 180, 8, 400, 500, 1, true, 0, false);
          cm.npc_SetSpecialAction("oid=23868172", "summon", 0, 0);
          cm.setSessionValue('luti', "23868172");
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.sendNormalTalk("#h0#，#h0#，你在这里干什么？", 1, 2159380, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("鲁提，有件事我想问问那个俘虏。你能帮我保密吗？", 3, 2159380, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("这么说来，你刚刚见到那个人的时候好像迟疑了一下，#h0#，你难道想起什么了吗？你的过去……", 1, 2159380, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("记忆？过去？你在说什么啊？鲁提，你是怎么知道的？", 3, 2159380, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("你先拿着这个。", 1, 2159380, true, true);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ScreenMsg("xenon/knife");
                      cm.inGameDirectionEvent_AskAnswerTime(4200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("这是那个人的东西。我想那个人一定是你找回记忆的重要线索。你们好好谈谈吧。我去看看格里梅尔有没有回来。", 1, 2159380, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=23868172", 1, 700, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("鲁提，谢谢你。", 3, 2159380, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(2);
                                cm.curNodeEventEnd(true);
                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                              } else {
                                if (status === V++) {
                                  cm.npc_LeaveField("oid=23868172");
                                  cm.sendNormalTalk("喂……。我想问你。", 3, 2159384, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/2", 'oid=0'], [900, 700, 50, 1, 0, 1, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(810);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("你！是黑色之翼的……！", 1, 2159384, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("(果然……一看到那个人，就有一种奇怪的感觉。明明是今天第一次见到，但却感觉好像认识这个人。)", 3, 2159384, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("(还有，这个人的这把短剑，感觉好像是我的东西。)", 3, 2159384, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("这，这个。", 3, 2159384, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_ScreenMsg("xenon/knife");
                                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/1", "oid=0"], [900, 700, 50, 1, 0, 1, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(810);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk('这是我的短剑！', 1, 2159384, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("这是你的东西吧？这个有什么特别的力量吗？你是从哪里得到的？", 3, 2159384, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("黑色之翼的成员为什么要问这个？", 1, 2159384, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("看到它的瞬间，我好像想起了什么，但是却记不太清楚。鲁提说这个东西和你好像跟我的记忆和过去有关……。如果你知道我的过去，请你告诉我。", 3, 2159384, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("(这个人到底在说什么啊？记忆？)", 1, 2159384, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/1", "oid=0"], [1200, 700, 50, 1, 0, 1, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("等等，你说那把短剑很眼熟？难道你是……！", 1, 2159384, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_ChangeController(2159381, "oid=23880214", 1200, 180, 4, 1150, 1250, 0, true, 0, false);
                                                                cm.npc_SetSpecialAction("oid=23880214", "summon", 0, 0);
                                                                cm.npc_SetForceMove("oid=23880214", -1, 350, 100);
                                                                cm.sendNormalTalk('#h0#，#h0#！', 1, 2159381, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("不好了，格里梅尔马上就要回来了！你从那个人那里知道什么了吗？", 1, 2159381, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("不，什么都没有。我也想不起刚才那个场面了。", 3, 2159381, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("哎呀……果然光是这样是无法恢复记忆的。", 1, 2159381, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("记忆？你在说什么啊，鲁提？", 3, 2159381, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("现在不是说这些的时候，#h0#。我看这是最后的机会了。你快和这个人一起逃走。不然的话，你好不容易恢复的记忆又会被格里梅尔清除掉。", 1, 2159381, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("记忆，清除掉？", 3, 2159381, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("是的，你一定不知道我在说什么……事实上，过去我曾经答应过。一定要让你从这里逃出去。", 1, 2159381, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("答应？答应谁？", 3, 2159381, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("……失去记忆之前的你。", 1, 2159381, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/1", "oid=0"], [1200, 700, 50, 1, 0, 1, 1, 0, 0]);
                                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/1"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk("你也许已经不记得了。那是因为格里梅尔把你的记忆全部清除了。但是在记忆被清除掉之前，你想离开这里。我就是那时候答应你的。答应一定要把你从这里救出去。", 1, 2159381, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk("所以我一直装作是格里梅尔的忠实部下……。\r\n为了等待今天这个机会。", 1, 2159381, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk("这个人一定和你的过去有关。所以你在见到这个人的瞬间好像想起了什么……", 1, 2159381, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk("你快和她一起逃走。不然的话，你好不容易恢复的记忆就又要失去了。", 1, 2159381, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk("记忆……刚才浮现在眼前的那个场面是我过去的记忆吗？", 3, 2159381, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk("是的。\r\n没时间了。格里梅尔马上就会回来。那样的话，他一定会清除掉你的记忆，这个人也会有危险。你决定怎么办？", 1, 2159381, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk("我想找回我的记忆。", 3, 2159381, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk("事实上我也不知道那是什么。但是我有种感觉，我必须找回我的记忆。而这个人，虽然我不认识，但我觉得不能让她受伤。", 3, 2159381, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/1", "oid=0"], [1200, 700, 50, 1, 0, 1, 1, 0, 0]);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk("好的，既然决定了，就在格里梅尔回来之前赶快逃走。后面的事情就交给我吧……。", 1, 2159381, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk("鲁提，你也一起逃走吧。要是格里梅尔知道我逃走了，你一定会受到牵连。", 3, 2159381, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk("但我不是战斗型机械人。带我走只会成为你的累赘。", 1, 2159381, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk("那样的话，我就更不能把你留在这里了。跟我一起逃走吧。", 3, 2159381, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk("……好吧，现在我们没时间站在这里多说了。我和你一起走。快点吧！", 1, 2159381, true, true);
                                                                                                              } else if (status === V++) {
                                                                                                                cm.npc_LeaveField("oid=23880214");
                                                                                                                cm.curNodeEventEnd(true);
                                                                                                                cm.dispose();
                                                                                                                cm.warp(931050970, 0, false);
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}