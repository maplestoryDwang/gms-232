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
      cm.npc_ChangeController(1530603, "oid=40159804", 1951, -48, 41, 1901, 2001, 0, false, false);
      cm.npc_SetSpecialAction("oid=40159804", 'summon', 0, 0);
      cm.npc_ChangeController(1530608, "oid=40159805", 1600, -48, 46, 1550, 1650, 0, true, false);
      cm.npc_SetSpecialAction("oid=40159805", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 2171, 1);
      cm.inGameDirectionEvent_PushScaleInfo(10, 2000, 10, 1950, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_SetHideEffect(1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=40159805", 1, 200, 100);
            cm.inGameDirectionEvent_AskAnswerTime(3500);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
              cm.sendNormalTalk_Bottom("布吉？你在这里干什么啊？", 37, 1530120, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH6_05/1", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('嗯？没什么啊。', 37, 1530600, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH6_05/2", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你有什么事情吗？", 37, 1530120, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH6_05/3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('没什么事情啊。', 37, 1530600, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH6_05/4", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#嗯……我们不是3年级的嘛。", 37, 1530600, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH6_05/5", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("嗯，是啊。", 37, 1530120, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH6_05/6", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#现在我和朋友们一起玩的时间也没剩下多少了。我以前还认为和朋友们打打闹闹的日子也没什么特别之处……但现在，我觉得这样的日常生活很珍贵。", 37, 1530600, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH6_05/7", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#早上的时候，我突然想到，就这样和朋友们分开的话，那些瞬间就再也回不来了。", 37, 1530600, true, true);
                            cm.effect_Voice("Voice2.img/Friends/CH6_05/8", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#互相抄作业，因为一点小事而争吵……这样的日子，我还以为会永远持续下去……", 37, 1530600, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH6_05/9", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#如果毕业了，大家就都分开了，各自都要走上不同的道路……就算是以后再聚到一起，现在的时光也只能变成回忆，再也回不来了。", 37, 1530600, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH6_05/10", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom('……', 37, 1530120, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("嗯……虽然总会有遗憾……但我有一个能让你以后不那么后悔的方法。", 37, 1530120, false, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH6_05/31", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('嗯？', 37, 1530600, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH6_05/32", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("你只要尽力去留下让自己最深刻的回忆就行。", 37, 1530120, true, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH6_05/33", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("那要怎么做？", 37, 1530600, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH6_05/34", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("在庆典上演出吧。用你自己写的曲子。", 37, 1530120, true, true);
                                              cm.effect_Voice("Voice2.img/Friends/CH6_05/35", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("什么？啊……不行不行！我太害羞了，不行！\r\n我不可能在全校学生面前唱歌的。", 37, 1530600, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH6_05/36", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("嗯……好吧。", 37, 1530120, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("好吧……虽然很遗憾，但也没办法。", 37, 1530120, true, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH6_05/37", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("其实我也觉得这是不可能的。这对于小心谨慎的布吉来说是不可能的事情。", 37, 1530120, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("过几天你就会知道了。布吉会在庆典上出名的。", 37, 1530120, true, true);
                                                            } else if (status === V++) {
                                                              cm.dispose();
                                                              cm.warp(330002616, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;