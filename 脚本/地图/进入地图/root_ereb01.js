var status = -1;
function action(q, L, B) {
  status++;
  var P = -1;
  if (status <= P++) {
    cm.dispose();
  } else {
    if (status === P++) {
      cm.npc_ChangeController(1064023, "oid=221765", 501, 88, 6, 451, 551, 1, false, 0, false);
      cm.npc_ChangeController(1064022, "oid=221766", 391, 88, 8, 341, 441, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(1064000, "oid=11854280", -6, 80, 1, -56, 44, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=11854280", "summon", 0, 0);
      cm.npc_ChangeController(1064024, "oid=11854281", 900, 80, 12, 850, 950, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=11854281", "summon", 0, 0);
      cm.npc_ChangeController(1064018, "oid=11854282", 1000, 80, 14, 950, 1050, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=11854282", 'summon', 0, 0);
      cm.npc_ChangeController(1064019, "oid=11854283", 1100, 80, 16, 1050, 1150, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=11854283", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === P++) {
        cm.sendNormalTalk('你把世界树带来了吗？', 1, 1064000, false, true);
      } else {
        if (status === P++) {
          cm.sendNormalTalk("现在正在和冒险骑士团一起过来呢。啊，他们来了。", 3, 1064000, true, true);
        } else {
          if (status === P++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 300, 700, 38);
          } else {
            if (status === P++) {
              cm.inGameDirectionEvent_AskAnswerTime(2543);
            } else {
              if (status === P++) {
                cm.npc_SetForceMove("oid=11854281", -1, 650, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === P++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === P++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === P++) {
                      cm.sendNormalTalk("我正在等你，世界树！", 1, 1064000, false, true);
                    } else {
                      if (status === P++) {
                        cm.sendNormalTalk("欢迎你。我一直在等待见到你的这一天。", 5, 1064023, true, true);
                      } else {
                        if (status === P++) {
                          cm.sendNormalTalk("这里就是圣地啊……真漂亮。温暖又安静，真好。终于可以放心地睡觉了。", 5, 1064024, true, true);
                        } else {
                          if (status === P++) {
                            cm.sendNormalTalk("#b#h0##k！真的非常感谢。没有你的话，我就无法从鲁塔比斯逃出来。", 5, 1064024, true, true);
                          } else {
                            if (status === P++) {
                              cm.sendNormalTalk("没什么。你好好睡吧。以后我们再见。", 3, 1064000, true, true);
                            } else {
                              if (status === P++) {
                                cm.sendNormalTalk('(点头点头)', 5, 1064024, true, true);
                              } else {
                                if (status === P++) {
                                  cm.npc_SetSpecialAction("oid=11854281", "fade", 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(3500);
                                } else {
                                  if (status === P++) {
                                    cm.npc_LeaveField("oid=11854281");
                                    cm.npc_LeaveField("oid=11854281");
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === P++) {
                                      cm.sendNormalTalk("希望你能在女皇和神兽的庇护下，做个幸福的梦……", 0, 1064000, false, true);
                                    } else if (status === P++) {
                                      cm.forceStartQuest(30013, '');
                                      cm.forceCompleteQuest(30013);
                                      cm.gainExp(460000);
                                      cm.warp(130000000, 0, false);
                                      cm.eventSKill(0);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.setStandAloneMode(false);
                                      cm.npc_LeaveField("oid=11854280");
                                      cm.npc_LeaveField("oid=11854280");
                                      cm.npc_LeaveField("oid=11854282");
                                      cm.npc_LeaveField("oid=11854282");
                                      cm.npc_LeaveField("oid=11854283");
                                      cm.npc_LeaveField("oid=11854283");
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