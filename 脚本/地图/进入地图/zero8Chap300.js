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
      cm.npc_ChangeController(2480011, "oid=3291840", 170, 160, 2, 120, 220, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3291840", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……？为什么突然把我喊到这种地方？有话要说？是不能在我们的神殿中说的话吗？", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face11#……#p2400005#，我有件事情想问你。", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("干嘛？干嘛说得那么严肃？", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face11#……在使用遗忘记忆碎片的时候。#p2400005#你真的什么都没看到？", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……没错！为什么突然这么问？", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face11#我…… 在遇到#p2400005#之前，一直被关在神殿…… 因此我根本连记忆都没有，当然什么都没看见。", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face11#但是#p2400005#你不是那样的啊？#p2400005#你…… 在遇到我之前，一直在影子骑士团啊。没有那时被忘却的记忆吗？", 41, 2400006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face3#……这不是当然的吗？我的脑袋不像你那么不灵光，没有忘却的记忆。", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face11#……你说谎。", 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face1#你说我说谎，什么意思啊？你是信不过我的记忆力吗？真是的。你就是为了说这些无聊的话，才把我喊到这里来的？", 41, 2400005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face11#……我就是不洁者吧？", 41, 2400006, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("不可能！别说这些奇怪的话了。", 41, 2400005, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face10#……为什么犹豫？我们还有必须要做的事情啊。你这样犹豫是不行的啦……", 41, 2400006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#face10#女神以自己的消亡为代价创造了我们…… 所以我们一定要去到冒险岛世界。并且，一定要阻止黑魔法师。你不是也知道的嘛？", 41, 2400006, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("…………", 41, 2400005, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#face10#女神付出了生命…… 我也要付出我的生命。", 41, 2400006, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("所以#p2400005#…… #r你把我杀掉吧#k。", 41, 2400006, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#face5#……你在说什么啊。我在忘却的记忆中什么也没看到。你也不可能是不洁者。", 41, 2400005, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#face5#比起那件事，我们应该寻找其他成为超越者的方法。", 41, 2400005, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("#face11#……你要继续装作不知道？那样的话…… 我自有办法……", 41, 2400006, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("#face11#你…… 打算做什么，怎么做？", 41, 2400005, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("#face11#我攻击你的话…… 你就不得不跟我战斗了…… 杀掉我吧。", 41, 2400006, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("#face1#你什么…… 意思啊？！别开玩笑了！我不想那样！", 41, 2400005, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("#face1#但是…… 必须得这么做……！", 41, 2400006, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=3291840");
                                                        cm.spawnMobLimit(9300808, 1, 171, 164, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;