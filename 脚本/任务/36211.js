var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.effect_Voice("Voice6.img/lara/5/Female/1", 100);
      cm.sendNormalTalk_Bottom("#face6#你回来了啊，我一直在担心，生怕你出事了！", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.effect_Voice("Voice6.img/lara/5/Female/2", 100);
        cm.sendNormalTalk_Bottom("#face0#为什么想都不想要就把铃铛给我？", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.effect_Voice("Voice6.img/lara/5/Female/3", 100);
          cm.sendNormalTalk_Bottom("#face0#既然是贵重物品，为什么……", 36, 3005102, true, true, 1);
        } else {
          if (status === v++) {
            cm.effect_Voice("Voice6.img/lara/5/Female/4", 100);
            cm.sendNormalTalk_Bottom("#face0#我不是未经思索就转手出去的。", 36, 3005100, true, true, 1);
          } else {
            if (status === v++) {
              cm.effect_Voice("Voice6.img/lara/5/Female/5", 100);
              cm.sendNormalTalk_Bottom("#face0#我认为你是个好人，所以我相信你会回来的。", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.effect_Voice("Voice6.img/lara/5/Female/6", 100);
                cm.sendNormalTalk_Bottom("#face0#不是这样的。", 36, 3005102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.effect_Voice("Voice6.img/lara/5/Female/7", 100);
                  cm.sendNormalTalk_Bottom("#face0#我之所以从那些小流氓手里把你救下，是打算借着这个由头坑你一笔辛苦费的……", 36, 3005102, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.effect_Voice("Voice6.img/lara/5/Female/8", 100);
                    cm.sendNormalTalk_Bottom("#face0#说什么会带路去村庄，全都在打自己的小算盘。", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.effect_Voice("Voice6.img/lara/5/Female/9", 100);
                      cm.sendNormalTalk_Bottom("#face0#即便如此，在你眼中，我还是个好人吗？", 36, 3005102, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.effect_Voice("Voice6.img/lara/5/Female/10", 100);
                        cm.sendNormalTalk_Bottom("#face4#元素灵不会轻易靠近其他人，也不会轻易追随。", 36, 3005100, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.effect_Voice("Voice6.img/lara/5/Female/11", 100);
                          cm.sendNormalTalk_Bottom("#face4#这群孩子喜欢如大地一般纯粹的气息！", 36, 3005100, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.effect_Voice("Voice6.img/lara/5/Female/12", 100);
                            cm.sendNormalTalk_Bottom("#face4#如果你是个坏人，元素灵会最先认出来的。", 36, 3005100, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.effect_Voice("Voice6.img/lara/5/Female/13", 100);
                              cm.sendNormalTalk_Bottom("#face0#那不过是巧合……", 36, 3005102, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.effect_Voice("Voice6.img/lara/5/Female/14", 100);
                                cm.sendNormalTalk_Bottom("#face4#我刚刚脚下踩空差点掉下去的时候……", 36, 3005100, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.effect_Voice("Voice6.img/lara/5/Female/15", 100);
                                  cm.sendNormalTalk_Bottom("#face0#你为了从下面接住我就一口气跑过来了吧？", 36, 3005100, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.effect_Voice("Voice6.img/lara/5/Female/16", 100);
                                    cm.sendNormalTalk_Bottom("#face0#那只是出于本能……", 36, 3005102, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.effect_Voice("Voice6.img/lara/5/Female/17", 100);
                                      cm.sendNormalTalk_Bottom("#face0#你和小朋友放风筝的时候，我看到你的脸。", 36, 3005100, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.effect_Voice("Voice6.img/lara/5/Female/18", 100);
                                        cm.sendNormalTalk_Bottom("#face6#说真的，表情真的很温暖来着。", 36, 3005100, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.effect_Voice("Voice6.img/lara/5/Female/19", 100);
                                          cm.sendNormalTalk_Bottom("#face0#最重要的是，你最终还是回来了啊！", 36, 3005100, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.effect_Voice("Voice6.img/lara/5/Female/20", 100);
                                            cm.sendNormalTalk_Bottom("#face0#……行了，行了。", 36, 3005102, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.effect_Voice("Voice6.img/lara/5/Female/21", 100);
                                              cm.sendNormalTalk_Bottom("#face0#他们说人品犹如香味，是藏不住的。", 36, 3005100, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.effect_Voice("Voice6.img/lara/5/Female/22", 100);
                                                cm.sendNormalTalk_Bottom("#face6#我很会闻花香的！", 36, 3005100, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.effect_Voice("Voice6.img/lara/5/Female/23", 100);
                                                  cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（说起来，我为什么要回来？）", 36, 3005102, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.effect_Voice("Voice6.img/lara/5/Female/24", 100);
                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（没错，只要搞清楚怎么修好铃铛……）", 36, 3005102, true, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.effect_Voice("Voice6.img/lara/5/Female/25", 100);
                                                      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（当时真的……）", 36, 3005102, true, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.effect_Voice("Voice6.img/lara/5/Female/26", 100);
                                                        cm.sendNormalTalk_Bottom("#face0#说起来，你为什么没把耳朵和尾巴藏起来？", 36, 3005100, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face0#我奶奶曾经说过，我们的样子可能会吓到一些人，\r\n所以奶奶就告诉我要如何隐藏自己！", 36, 3005100, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.sendNormalTalk_Bottom("#face0#要说具体怎么做吧……\r\n来，跟我学。", 36, 3005100, true, true, 1);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom("#face7#我知道的！别把人当傻子！", 36, 3005102, true, true, 1);
                                                            } else {
                                                              if (status === v++) {
                                                                cm.sendNormalTalk_Bottom("#face0#我根本就不是不会藏，而是干脆就没有藏！", 36, 3005102, true, true, 1);
                                                              } else {
                                                                if (status === v++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#反正这一带所有人都知道我是一头来自后巷的恶狼。", 36, 3005102, true, true, 1);
                                                                } else {
                                                                  if (status === v++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#没关系的！奶奶曾经说过，不知者无罪。", 36, 3005100, true, true, 1);
                                                                  } else {
                                                                    if (status === v++) {
                                                                      cm.askYesNo_Bottom("#face0#只要够专注，就能让阿尼玛的的兽化特征消失不见！想要试试看吗？", 37, 3005100, 1);
                                                                    } else {
                                                                      if (status === v++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#没错！就是是这样弄的！下次如果还有问题，你可以直接来问我！", 37, 3005100, false, true, 1);
                                                                      } else {
                                                                        if (status === v++) {
                                                                          cm.sendNormalTalk_Bottom('#face7#……', 36, 3005102, true, true, 1);
                                                                        } else if (status === v++) {
                                                                          cm.teachSkill(160011075, 0, -1);
                                                                          cm.teachSkill(160011075, 1, 1);
                                                                          cm.getTopMsgFont("获得了<变形术>技能。", 3, 20, 20, 0, 0);
                                                                          cm.forceStartQuest(36211, '');
                                                                          cm.forceCompleteQuest(36211);
                                                                          cm.gainExp(999);
                                                                          cm.gainExp(3320);
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
                }
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}