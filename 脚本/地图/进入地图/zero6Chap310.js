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
      cm.npc_ChangeController(2470018, 'oid=27638', 1480, -473, 6, 1430, 1480, 1, false, 0, false);
      cm.npc_ChangeController(2470045, "oid=27639", 1146, -473, 6, 1096, 1196, 0, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……再次来到女神的神殿…… 女神会在哪里呢？得在空间关闭之前，抓紧找到女神才行呢。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("我感觉像是这边。", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 150, 1300, -473);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(9673);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……无数的字汇聚成了冒险岛的历史。我过去一直在记录着冒险岛的历史，以后也会继续记录。虽然我是这么想的，但是…… ", 33, 2470045, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("从某个瞬间开始，记录的内容开始减少。并且，我觉得我的记录即将…… 终止。女神…… 我的想法是错的吗？", 33, 2470045, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("没有错，记录者…… 我所看到的未来也是那样的。", 33, 2470018, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("……冒险岛世界…… 会灭亡吗？", 33, 2470045, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("我看见的只是我的未来。但是 #b其他人#k看到的未来会是怎么样的呢？他看到的未来也和我一样吗？", 33, 2470018, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("应该不可能存在其他能看到未来的人吧？一个世界一名超越者…… 除了女神之外，谁能看见未来呢？", 33, 2470045, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("超越者也不是永远存在的。虽然历史在继续，但是组成历史的人却时常发生着变化。", 33, 2470018, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("难道女神你……", 33, 2470045, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 250, 512, -473);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3150);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("这是女神决定消亡的瞬间……吗？", 41, 2400005, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#face1#不行…… 空间即将关闭！", 41, 2400006, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#face1#咳…… 时间太短了！", 41, 2400005, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else if (status === V++) {
                                              cm.dispose();
                                              cm.warp(327000000, 10, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;