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
      cm.npc_ChangeController(3000100, "oid=309523", -148, 29, 2, -198, -98, 0, false, 0, false);
      cm.npc_ChangeController(3000101, 'oid=309524', -5, 29, 5, -55, 45, 1, false, 0, false);
      cm.npc_ChangeController(3000102, 'oid=309525', 117, 29, 8, 67, 167, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.sendNormalTalk("哇！！终于完成了！！", 1, 3000100, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("呵呵呵，真漂亮。", 1, 3000101, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('你要给它起什么名字？', 1, 3000102, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("嗯……起什么好呢？我不喜欢幼稚的名字……", 1, 3000101, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("叫“正义勇士据点”怎么样？", 1, 3000100, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("哈哈哈，又提正义啊？你也太喜欢“正义”了吧。", 1, 3000102, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("幼稚。", 1, 3000101, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk('那你说叫什么？', 1, 3000102, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("嗯，就叫“赫里希安攻击队”吧。", 1, 3000101, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("赫里希安攻击队？", 1, 3000102, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("我们的目标是夺回麦格纳斯占领的暴君城堡，使其重归赫里希安！", 1, 3000101, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("好！太帅了，贝德罗斯！", 1, 3000100, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("卡伊尔，你觉得怎么样？", 1, 3000101, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk('我随便咯。', 1, 3000102, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("那这里就是“赫里希安攻击队据点”啦！！", 1, 3000100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk('好！就这么定了！', 1, 3000101, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk('那贝德罗斯当队长咯？', 1, 3000100, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk('我当队长？', 1, 3000101, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("我同意。贝德罗斯是我们之中最厉害的！", 1, 3000102, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("真的可以吗？", 1, 3000101, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk('当然可以！队长！', 1, 3000100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("哈哈哈。好，赫里希安攻击队！开始进攻！！", 1, 3000101, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else if (status === V++) {
                                                      cm.dispose();
                                                      cm.warp(940012010, 0, false);
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
    }
  }
}