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
      cm.npc_ChangeController(2142937, 'oid=221242', 703, -25, 12, 701, 753, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b(好黑……这就是操纵梦的人的记忆吗？时间和空间对这里好像毫无意义。)#k", 17, 2142937, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b(等等……好像哪里传来了说话声。注意听听看吧。)#k", 17, 2142937, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b(……是个少女的声音。那个少女好像就是#e操纵梦的人#n……是这个梦的主人。)#k", 17, 2142937, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我还得沉睡多久呢？十年？二十年？或者又是几百年？", 1, 2142937, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……太闷了，我再也坚持不下去了。", 1, 2142937, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("……嗯？好像有种强大的力量在吸引着我。到底是什么呢，这种感觉……？", 1, 2142937, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("那边有人在吗？你一直在看着我吗？", 1, 2142937, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ScreenMsg("twilightPerion/text3");
                          cm.inGameDirectionEvent_AskAnswerTime(5600);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("你是谁？你……好像不是我梦里的人。", 1, 2142937, false, true);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ScreenMsg("twilightPerion/text4");
                              cm.inGameDirectionEvent_AskAnswerTime(5600);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("流进来……？这个空间是你的梦吗？", 1, 2142937, false, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ScreenMsg("twilightPerion/text5");
                                  cm.inGameDirectionEvent_AskAnswerTime(5600);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("……你的气息非常不祥。", 1, 2142937, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("不过也许你就是我等待已久的人……", 1, 2142937, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk('可否请你离我近一点？', 1, 2142937, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_ScreenMsg("twilightPerion/someonesDream");
                                            cm.inGameDirectionEvent_AskAnswerTime(17500);
                                          } else if (status === V++) {
                                            cm.warp(913051201, 0, false);
                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                            cm.eventSKill(0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.forceStartQuest(31915, '');
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