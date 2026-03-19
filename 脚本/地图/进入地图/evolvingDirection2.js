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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(9075005, "oid=3319440", 87, 124, 7, 37, 137, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=3319440", "summon", 0, 0);
      cm.npc_ChangeController(9075004, "oid=3319441", 394, 124, 16, 344, 444, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3319441", "summon", 0, 0);
      cm.npc_ChangeController(9075001, "oid=3319442", 180, 124, 14, 130, 230, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3319442", "summon", 0, 0);
      cm.sendNormalTalk("斯乌……？斯乌！你真的醒了吗？斯乌！", 1, 9075005, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("…………", 1, 9075001, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("奥尔卡真的很想你！我等了很久……能再次见到你，真是太好了！", 1, 9075005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('…………', 1, 9075001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("现在我们就能向过去折磨过我们的家伙们复仇了。我们要像过去一样永远在一起……", 1, 9075005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk('…………', 1, 9075001, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("斯乌？你怎么不说话？听不到奥尔卡的话吗？", 1, 9075005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("…………", 1, 9075001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("……斯乌？斯乌？……格里梅尔！这到底是怎么回事？斯乌为什么没有反应？难道斯乌听不见我的话吗？", 1, 9075005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("怎么会呢，奥尔卡大人。斯乌大人一点事情都没有。要我证明给你看吗？像这样……动手。", 1, 9075004, true, true);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ScreenMsg("evolving/swoo2");
                          cm.npc_LeaveField("oid=3319440");
                          cm.npc_ChangeController(9075002, "oid=3319896", -74, 124, 9, -124, -24, 0, false, 0, false);
                          cm.npc_SetSpecialAction("oid=3319896", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(7000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……斯……乌……？为什么……", 1, 9075002, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("嗯，能量还是太弱了吗？嗯……不过能攻击奥尔卡，看来还不错。灵体果然无法战胜肉体吗……我的假说好像是对的。", 1, 9075004, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("格里……梅尔……你……？", 1, 9075002, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("奥尔卡，实验成功结束了。斯乌醒来了，虽然无法按照自己的意志控制肉体。", 1, 9075004, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("你……对斯乌……做了……什么……", 1, 9075002, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("擅长附身并操纵他人的人，却被其他人控制了肉体，是不是很讽刺？这样才好玩，哈哈哈。", 1, 9075004, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("为……为什么……要对斯乌？", 1, 9075002, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("是要为黑魔法师制造一个容器……这样说你应该就能明白了吧？现在你已经没用了，奥尔卡。希望你能没事……如果联盟的人愿意让你活下去的话，呵呵呵……", 1, 9075004, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("不……行……不行，斯乌……！别走……！", 1, 9075002, true, true);
                                          } else if (status === V++) {
                                            cm.forceStartQuest(1801, "end");
                                            cm.dispose();
                                            cm.warp(957020003, 0, false);
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