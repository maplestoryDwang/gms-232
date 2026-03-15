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
  if (cm.getQuestStatus(40805) == 0) {
    cm.sendNormalTalk("……两位通过右边的传送带，就能见到回答你们问题的人。", 1, 2491000, false, true);
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("疑问都解决了吗？怎么样？你们决心成为两个世界的超越者了吗？", 9, 2491000, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("那个我们没必要告诉你吧。", 1, 2400005, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……这样啊。很抱歉。是我太无礼了。", 9, 2491000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……好熟悉的声音。", 1, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("…………", 9, 2491000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……你是谁？为什么要把我们带到黑魔法师手下那里？你是军团长的手下？", 1, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("怎么可能。我服从于别人。并且，我服从的那位不在那里面。他们就在…… 我的眼前。", 9, 2491000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……难道你……！", 1, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.forceStartQuest(40804, '1');
                      cm.sendNormalTalk("……好久不见，阿尔法…… 还有贝塔。", 1, 2491000, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/5"], [2000, 0, -100, 1, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("卡西亚斯！", 1, 2400006, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……卡西亚斯？你…… 由于在神殿外待的太久…… 所以消亡了，不是吗？", 1, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("……我也以为我会消失。如果偶然和必然没有重叠的话，现在我应该完全消失了。但是由于军团长奇异的能力…… 我又以这样奇怪的模样活下来了。", 9, 2491010, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("虽然我本来认为即使这样活着也没有任何意义，也能再见到两位…… 但我突然有了这种想法。如果我继续活着的话，应该能为两位做点什么……", 9, 2491010, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("……所以你把我们带到军团长那？！", 1, 2400005, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("他们是这么对我说的。他们将给新的时间超越者阿尔法和贝塔获得更大荣耀的机会……", 9, 2491010, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("如果他们是在说谎，只是想利用我去欺骗两位的话，我就算是死也会想办法救出两位的…… 不过还好他们说的是真的。", 9, 2491010, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("两个世界的超越者…… 那不是很了不起的事情吗？更何况，不与最危险的黑魔法师为敌，两位的安全就有保障了。", 9, 2491010, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("虽然我不希望两位错过这样的机会……", 9, 2491010, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("……你觉得那是为我们好才做的？不会因为…… 你成了军团长的手下？", 1, 2400005, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("不是的！虽然我还能继续活着，是多亏了军团长的力量…… 但是我的性命仍然是两位的！", 9, 2491010, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("……我是两位的神官。那个事实永远不会改变。绝对不会。", 9, 2491010, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("…………", 1, 2400006, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("该死…… 该死！即使是死而复生，还没一点都没有改变啊……", 1, 2400005, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("很惭愧。但是我…… 不认为我错了。请两位深思。哪条路更有利于两位…… 并且，请一定要选择正确的路。", 9, 2491010, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("那，我现在就将两位送到冒险岛世界。真希望能尽快再见到你们。", 9, 2491010, true, true);
                                                      } else if (status === V++) {
                                                        cm.forceStartQuest(40804, '2');
                                                        cm.dispose();
                                                        cm.warp(100000000, 0, false);
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
}