var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("你没事吧，主人？你看上去好像很累……", 0, 1013205, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b我没事。站在最前面战斗的战神好像受了一点伤，其他的人都没事。你没事吧？", 2, 1013205, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("没事。战斗对我来说没有任何问题。", 0, 1013205, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b我担心的不是你的身体。你的同族已经全部……", 2, 1013205, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("…………", 0, 1013205, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b对不起，我不应该把你拖入战斗。我应该让你跟随黑魔法师的，那样的话……玛瑙龙就可以继续存在下去……！", 2, 1013205, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("别说傻话，主人。我们是自愿参加战斗的，不是你的错。", 0, 1013205, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#b但是……！", 2, 1013205, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("虽然黑魔法师觊觎我们的力量……但我们绝不会站在黑魔法师一边的。我们玛瑙龙，是和拥有强大灵魂的人类相互吸引的种族，不可能和黑魔法师之类的邪恶的人待在一起。", 0, 1013205, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("所以你用不着道歉，主人。不，弗里德。即使我们在战斗中全部死去，那也是我们玛瑙龙自己的选择。希望你能尊重我们的选择。", 0, 1013205, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#b阿弗利埃……", 2, 1013205, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("但是我有个请求，在和黑魔法师的最后战斗中……如果我在战斗中死去，请保护好我的孩子。它还要很久才会醒来……你是我最信任的人。", 0, 1013205, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#b别说这种话，阿弗利埃。你要活下去，保护自己的孩子！", 2, 1013205, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("不知道我们之中谁会活下去，所以我才会这样拜托你。你能答应我吗，主人？", 0, 1013205, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("#b明白了。我……答应你。但是你也要答应我，一定要活下来。", 2, 1013205, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("当然，主人。", 0, 1013205, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#b绝对不要为了我而牺牲……", 2, 1013205, true, true);
                                    } else if (status === V++) {
                                      cm.forceStartQuest(22601, '1');
                                      cm.dispose();
                                      cm.warp(914100021, 0, false);
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