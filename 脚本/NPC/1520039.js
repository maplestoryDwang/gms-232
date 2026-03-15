var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status >= 0 && f == 0) {
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
      if (!cm.isQuestActive(32323)) {
        cm.playerMessage(-1, "好像没有别的事。");
        cm.dispose();
      } else {
        cm.sendNormalTalk("在战神来之前，我要考考你，看你到底对战神了解多少。如果你答不上我出的问题，就算战神出现了，我也不会让你见他。所以请你仔细听清楚，好好回答我的问题。", 0, 1520039, false, true);
      }
    } else {
      if (status === V++) {
        cm.askMenu("那么，第一个问题，战神是哪个职业的英雄？\r\n#r#L0# 战士#l\r\n#b#L1# 魔法师#l\r\n#b#L2# 弓箭手#l\r\n#b#L3# 飞侠#l\r\n#b#L4# 海盗#l", 0, 1520039);
      } else {
        if (status === V++) {
          if (U == 0) {
            cm.sendNormalTalk("答对了。战神是战士英雄。这种问题可是基本中的基本，对吧？那么请听第二题。", 0, 1520039, false, true);
          } else {
            cm.playerMessage(-1, "好像错了，再想想吧。");
            cm.dispose();
          }
        } else {
          if (status === V++) {
            cm.askMenu("以下哪个是战神使用的武器呢？\r\n#b#L0# 双手剑#l\r\n#r#L1# 矛#l\r\n#b#L2# 饭勺#l\r\n#b#L3# 口才#l", 0, 1520039);
          } else {
            if (status === V++) {
              if (U == 1) {
                cm.sendNormalTalk("嗯，第二个问题你也答得不错嘛。战神使用的武器是巨大的矛。那个武器本来就很显眼，应该不难回答吧。", 0, 1520039, false, true);
              } else {
                cm.playerMessage(-1, "好像错了，再想想吧。");
                cm.dispose();
              }
            } else {
              if (status === V++) {
                cm.sendNormalTalk("那么，接下来是最后一题。", 0, 1520039, true, true);
              } else {
                if (status === V++) {
                  cm.askMenu("战神的性别是？\r\n#b#L0# 男#l\r\n#b#L1# 女#l\r\n#b#L2# 战神#l", 0, 1520039);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("怎么可能！你别开玩笑好不好！", 0, 1520039, false, true);
                  } else {
                    if (status === V++) {
                      cm.askMenu("好好回答。战神的性别是？\r\n#b#L0# 男#l\r\n#b#L1# 女#l", 0, 1520039);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("..................................", 0, 1520039, false, true);
                      } else {
                        if (status === V++) {
                          cm.updateInfoQuest(49011, "QET=cGYexgyc1gE$");
                          cm.updateInfoQuest(49011, "QET=cGYexgyc1gE$");
                          cm.updateInfoQuest(49011, "QET=cGYexgyc1gE$");
                          cm.forceStartQuest(49011, '');
                          cm.sendNormalTalk(".................................", 2, 1520039, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("(对了吗？或者错了？)", 2, 1520039, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("好吧，提问到此结束。那么，请耐心等待战神回来。你没有什么要问的了吧？", 0, 1520039, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("稍等一下！刚刚最后一个问题，我不知道自己有没有答对！", 2, 1520039, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("啊？.......你并不是因为知道答案才回答的啊？难道，你连自己都不确定正确答案，就回答了吗？那样的话，我可不能算你答对了……", 0, 1520039, true, true);
                                } else if (status === V++) {
                                  cm.forceStartQuest(32324, '2');
                                  cm.sendNormalTalk("战神, 你回来啦！", 0, 1520039, true, true);
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