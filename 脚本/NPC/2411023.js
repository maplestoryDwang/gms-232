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
      if (cm.getNumberFromQuestCustomData(40062) > 0) {
        cm.sendNormalTalk("果然神之子就是不一样。", 32, 2400009, false, true);
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("Zzz……额啊，睡得可真舒服！你就是神的孩子吧！是来接我的吗？", 33, 2411023, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("嗯……不过，好奇怪，为什么就我一个人？#p2400005#哪里去了？", 41, 2400006, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face1##p2400005#？嗯……虽然不太清楚，但这里只有神之子才能进得来，其他人是来不了的。", 33, 2400009, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("是啊，但是#p2400005#也是神之子啊。", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face1#什么？这次有两个神之子？啊哈，难怪，#b我就说圣物怎么会多了一个呢。#k。", 33, 2400009, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk('……圣物不是一个吗？', 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("嗯，除了我还有另一个，那家伙很烦的……", 33, 2400009, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("那我该选择哪一个……？", 41, 2400006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face0#说的也是，不过既然你来到了我的内心世界，#b不正是说明你是我的主人吗#k？", 33, 2400009, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("是这样吗？", 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("嗯，我觉得你很不错，你讨厌我吗？", 33, 2400009, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("不，那倒不是。只是怕#p2400005#会说我。", 41, 2400006, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face1#嗯……有那么麻烦吗？", 33, 2400009, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("也不是，只是觉得他会啰里啰嗦。", 41, 2400006, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("啊哈？#p2400005#的家伙原来也和#b#p2400010##k差不多啊。#p2400010#是另一个圣物。", 33, 2400009, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("那家伙也很啰嗦，但是你不去管他就没事了。#p2400005#也是如此吧？", 33, 2400009, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("嗯……说不定……", 41, 2400006, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("那就行了，你来考试就好了。通过了考试，你就是我的主人了。", 33, 2400009, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("考什么？难么？", 41, 2400006, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#face2#这个是因人而异的……你不喜欢打架吗？", 33, 2400009, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk('不，我喜欢。', 41, 2400006, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("那就简单了，#r把我打赢就行#k。那么，我们开始了！", 33, 2400009, true, true);
                                              } else if (status === V++) {
                                                cm.npc_LeaveField("oid=2019696");
                                                cm.spawnMobLimit(9300758, 1, 645, 179, 100);
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