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
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(120);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.sendNormalTalk("等一下！", 1, 2159390, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("......!", 3, 2159390, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(90);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.npc_ChangeController(2159390, "oid=1260484", -1040, -30, 8, -1090, -990, 1, true, 0, false);
              cm.npc_SetSpecialAction("oid=1260484", "summon", 0, 0);
              cm.inGameDirectionEvent_PushMoveInfo(0, 50, -1400, -14);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2643);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=1260484", -1, 500, 100);
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("还好。听了#p2152009#的话之后，我赶紧追了过来。听说你要离开埃德尔斯坦……。", 1, 2159390, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("是的，我是这么打算的。抱歉，没打声招呼就急着走了。", 3, 2159390, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("嗯……你是不喜欢埃德尔斯坦吗？这里的变化太大了吗？", 1, 2159390, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("不是的。我有特殊的情况，不能继续留在这里……是我自己的问题。", 3, 2159390, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("有需要我们帮助的地方吗？", 1, 2159390, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("如果我继续留在这里，大家都可能会有危险。", 3, 2159390, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("……既然你这么坚决，我就不再多说什么了。给……拿着这个。", 1, 2159390, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("这个？这不是#p2159390#的短剑吗。", 3, 2159390, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("我把它还给你。也算#b物归原主#k了。", 1, 2159390, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("……！", 3, 2159390, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("(#p2159390#……一直认为我是她失踪了的朋友。虽然现在还没能找到任何决定性的证据……连我自己都不相信自己，#p2159390#却一直相信着我。)", 3, 2159390, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("(我也很信任#p2159390#。虽然失去了记忆，即使我不是那个失踪了的朋友，我也是#p2159390#的朋友。即使我们不在一起。)", 3, 2159390, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("谢谢你，#p2159390#。这个东西你还是留着吧。现在你比我更需要它。", 3, 2159390, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("但是……", 1, 2159390, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("总有一天，埃德尔斯坦会重新恢复和平。等#p2159390#你不再需要这把短剑的时候，到时再把它还给我好了。", 3, 2159390, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("……知道了。那就先把它放在我这里。在再见面之前，希望你能注意身体。", 1, 2159390, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("好的，#p2159390#，你也保重。再见。", 3, 2159390, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_MoveAction(1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                                        } else if (status === V++) {
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.npc_LeaveField("oid=1260484");
                                                          cm.dispose();
                                                          cm.warp(100000000, 3, false);
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}