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
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000106, "oid=2593581", 160, 50, 3, 110, 210, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2593581", "summon", 0, 0);
        cm.npc_ChangeController(3000107, "oid=2593582", 10, 50, 3, -40, 60, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2593582", "summon", 0, 0);
        cm.npc_ChangeController(3000152, "oid=2593583", 90, 50, 3, 40, 140, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2593583", 'summon', 0, 0);
        cm.sendNormalTalk("#h #你恢复意识了。", 1, 3000152, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("呃……这里是？", 17, 3000152, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这里是万神殿。你觉得怎么样？", 1, 3000106, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("就是头有点疼，其他还好。", 17, 3000106, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(600);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("嗯？这是什么？", 17, 3000106, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("唉……看来得跟你说实话了。#h0#，你受到东侧圣殿圣物的诅咒，圣物附在你的身上了。", 1, 3000106, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("啊？？诅咒？什么叫做“附在我身上”？", 17, 3000106, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("圣物附在你身上变成了这个手镯。也就是说有一个圣物消失了。", 1, 3000107, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("卡塔利安，别怪他。要不是狂龙战士和 #h #，这圣物就被抢走了。", 1, 3000106, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("是……知道了。", 1, 3000107, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("哈……哈哈哈……真不知道你们在说什么。我只记得我碰到了圣物，然后就……", 17, 3000107, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("你们说那圣物附到我身上变成了手镯？开什么玩笑……", 17, 3000107, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("你别激动。圣物已经附上去，暂时也没办法处理了。不过看样子圣物附在你身上并没有什么坏处。", 1, 3000152, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("我……我没想过要把圣物毁掉……", 17, 3000152, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#h0#，谁也不会怪你什么的。万神殿里还有3个圣物，应该不会有大问题。", 1, 3000106, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk('可……可是……我……', 17, 3000106, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#h0#，你又要哭了吗？", 1, 3000107, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("呃……", 17, 3000107, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("卡塔利安！！", 1, 3000106, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("对不起，我不是故意的……", 1, 3000107, true, true);
                                              } else if (status === V++) {
                                                cm.inGameDirectionEvent_MoveAction(1);
                                                cm.npc_LeaveField("oid=2593581");
                                                cm.npc_LeaveField("oid=2593582");
                                                cm.npc_LeaveField("oid=2593583");
                                                cm.dispose();
                                                cm.warp(940011070, 0, false);
                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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