var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2159439, 1210, 10, 1);
      cm.npc_SetSpecialAction(2159439, "summon");
      cm.npc_ChangeController(2159467, 830, 10, 0);
      cm.npc_SetSpecialAction(2159467, "summon");
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNextNoESC("……我从一开始就不喜欢你。", 2159439);
      } else {
        if (status === V++) {
          cm.sendNextNoESC("你那种圆滑的性格我也很讨厌。", 2159467);
        } else {
          if (status === V++) {
            cm.sendNextNoESC("我们之间唯一的共同点就是都不喜欢对方。但是弗里德却还是把我们一起派了过来，真不知道他在想些什么。那个家伙，难道是遇到了什么心情不好的事情吗？你说呢？", 2159439);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_SetHideEffect(0);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
                cm.effect_OnUserEff("Effect/BasicEff.img/Summoned");
              } else {
                if (status === V++) {
                  cm.sendNextNoESC("这个嘛，我也不太清楚。不过如果一直在这里浪费时间的话，弗里德可能真的要发火了。", 2159467);
                } else {
                  if (status === V++) {
                    cm.sendNextNoESC("弗里德发火？那一定很有趣。", 2159439);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC("不过很可能永远都不会见到。我先进去了。里面散发出来的气息很不寻常。", 2159467);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(1);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(0);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_SetHideEffect(1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 100, 1000, 18);
                              cm.inGameDirectionEvent_AskAnswerTime(191);
                            } else {
                              if (status === V++) {
                                cm.sendNextNoESC("……那就先聊到这里。再见面的话，让我们直接问问弗里德好了。不要在这里浪费时间。", 2159439);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction(2159439, "teleportation");
                                    cm.inGameDirectionEvent_AskAnswerTime(840);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField(2159439);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else if (status === V++) {
                                      cm.npc_LeaveField(2159467);
                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                      cm.curNodeEventEnd(true);
                                      cm.setInGameDirectionMode(false, true);
                                      cm.setStandAloneMode(false);
                                      cm.warp(927030010, 0);
                                      cm.dispose();
                                    } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;