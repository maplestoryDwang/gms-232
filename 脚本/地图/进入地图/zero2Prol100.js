var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(41929) > 0) {
    cm.dispose();
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2400006, "oid=1360424", 507, -24, 2, 457, 557, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1360424", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
        cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_MoveAction(2);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_OnUserEff("Effect/OnUserEff.img/questEffect/phantom/tutorial");
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……神殿外原来是这样啊……很黑很安静呢……", 41, 2400006, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("这里就是影子神殿所在的地方。你不知道影子神殿吗？就是你被关着的神殿，还真只剩下空地了。", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("……现在没了。就如同#p2400000#所说，已经到了冒险岛世界和镜世界的中间了吗……", 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("快走吧。", 41, 2400005, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(1);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_MoveAction(0);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(2400024, "oid=1360494", 750, -31, 3, 700, 800, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=1360494", "summon", 0, 0);
                                cm.sendNormalTalk("#face1#两位，请稍等！", 33, 2400024, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("……？", 41, 2400006, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk('什么？有什么问题？', 41, 2400005, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face1#啊，不是。只是我想到两位成为神之子之后……好像没有真正地施展经验！我担心……", 33, 2400024, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("但是，两位看起来毫无忧虑啊！哈哈！果然自信心也和神一样啊！", 33, 2400024, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#face1#不过，既然来到这里，我还是说明一下吧？就这么走了就太可惜了……该不会是不想听吧？", 33, 2400024, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("哼，我一个人打就足够了……不过听听也无妨。", 41, 2400005, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("好，那我就说了。成为超越者的两位，会使用#b时间之力#k来代替魔法，就是说两位的技能会消耗时间之力。", 33, 2400024, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk('时间之力……', 41, 2400006, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("是的，就是时间的力量。时间之力有着特殊属性，会随着时间的流动自动恢复。", 33, 2400024, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("要不我们来试一下吧？我给你们准备一个稻草人，两位对着稻草人使用技能试试吧？", 33, 2400024, true, true);
                                                    } else if (status === V++) {
                                                      cm.updateInfoQuest(41925, '');
                                                      cm.forceStartQuest(41925, '');
                                                      cm.playerMessage(-1, "点击Shift按键使用[月袭斩]。");
                                                      cm.playerMessage(5, "点击Shift按键使用[月袭斩]。");
                                                      cm.spawnMobLimit(9300799, 1, 670, -6, 100);
                                                      cm.setInGameDirectionMode(false, true, false);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;