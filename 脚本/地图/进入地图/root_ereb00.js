var status = -1;
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(30000)) {
    action30000(f, E, e);
  } else if (cm.isQuestActive(30007)) {
    action30007(f, E, e);
  } else {
    cm.dispose();
  }
}
function action30000(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1064023, "oid=221381", 501, 88, 6, 451, 551, 1, false, false);
      cm.npc_ChangeController(1064022, "oid=221382", 391, 88, 8, 341, 441, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(1064000, "oid=19926781", -6, 80, 1, -56, 44, 1, true, false);
      cm.npc_SetSpecialAction("oid=19926781", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 300, 300, 50);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1659);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=19926781", 1, 50, 100);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=19926781", -1, 50, 100);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=19926781", 1, 50, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=19926781", -1, 50, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction2.img/effect/chat/nugu/0", "oid=19926781"], [0, -25, -80, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=19926781", 1, 180, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("你来啦。我一直在等你。", 1, 1064000, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("因为听说事情非常紧急，我就赶紧过来了。到底发生了什么事？", 3, 1064000, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("冒险岛联盟收到了重要的情报，我急着把你叫过来，是想把情况告诉你。根据情报，最近在林中之城北部地区出现了之前没有的神秘地区。", 1, 1064000, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("新的地区？", 3, 1064000, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("可以隐约地感觉到结界的气息，好像是之前被结界隐藏起来的地区。现在我们对那里还一无所知。", 1, 1064000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("问题是在那个地区可以感觉到很强的黑暗气息。冒险岛联盟推测那里也许是黑魔法师一伙的基地，但是还无法确定。", 1, 1064000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("你能到那里去，看看到底是什么地方吗？", 3, 1064000, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("我们已经派遣冒险骑士团成员前去调查，但是那里被迷雾笼罩着，还有很多茂盛的树木，现在连地形都还没有调查清楚。", 1, 1064000, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("那我应该怎么做呢？", 3, 1064000, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("我们怀疑那个突然出现的地区是黑魔法师一伙的基地，必须先调查一下那个地区为什么会突然出现。但是现在冒险骑士团的人手非常不足。", 1, 1064000, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("#b#h2##k，希望你能帮帮我们。我现在马上把你送到#b#m105010000##k去。请你去对和那里相连的新地区进行探索。如果发现了什么，请立即向我报告。", 1, 1064000, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("好的，我马上用神兽的力量把你送到#b#m105010000##k去。", 1, 1064000, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else if (status === V++) {
                                                    cm.warp(105010000, 3);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setStandAloneMode(false);
                                                    cm.npc_LeaveField("oid=19926781");
                                                    cm.npc_LeaveField("oid=19926781");
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
      }
    }
  }
}
function action30007(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.npc_ChangeController(1064000, 150, 10, 1);
    cm.npc_SetSpecialAction(1064000, "summon");
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;