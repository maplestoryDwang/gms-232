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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushMoveInfo(1, 1000, 0, 0);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b#h0##k，请抬起头。", 1, 1105000, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk('是，女皇。', 17, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("我想起第一次见到#b#h0##k你的情景。实际上，那时我就感受到#b#h0##k你体内的强大力量。", 1, 1105000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("这段时间发生了很多事情…… 你一直都在尽全力做好每件事。", 1, 1105000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b#h0##k你这段时间所做的善行和贡献足以让你成为冒险岛联盟的一员……", 1, 1105000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("所以现在，在这里…… 我希纳斯代表联盟的所有成员宣布，#b#h0##k你已经成为冒险岛联盟中的一员了。", 1, 1105000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("哼。早就应该这样了！", 1, 9390384, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("伊卡，别这样喵！你看#b#h0##k的样子喵！难道不让人自豪吗！", 1, 9390381, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("我的直觉果然没错~ 我第一次见到#b#h0##k的时候，就知道他终将成为英雄的！", 1, 9390383, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("波波为#b#h0##k感到自豪~", 1, 9390382, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("哼。大家都在称赞你，但你不要因此就得意忘形！小鬼！", 1, 9390384, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("哈哈。谢谢。谢谢大家。", 17, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我也祝贺你。我之前可能对你不太好，请你一定要谅解。", 1, 9390388, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("南哈特实际上是很关心#b#h0##k你的……", 1, 1105000, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk('女，女皇！我哪有！', 1, 9390388, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("哈哈。谢谢。南哈特。还有女皇！", 17, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("恭喜你！ #b#h0##k！", 1, 9390397, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("以后多多关照。", 1, 9390398, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("恭喜你！", 1, 9390400, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("恭喜你，#b#h0##k！", 1, 9390396, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("呼…… 新英雄诞生了…… 恭喜。", 1, 9390393, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("以后多多关照！#b#h0##k~", 1, 9390390, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("不愧是~ #b#h0##k！我能遇到你看来不是偶然！！", 1, 9390391, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("谢谢大家！我太高兴了，简直要飞起来了！", 17, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("#b#h0##k，现在你有何打算？这段时间的旅程让你没能好好休息……你就在这里好好休息，缓解一下吧。", 1, 9390388, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("谢谢你如此为我着想！南哈特！", 17, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("不过，我决定和我的伙伴们重新踏上冒险的旅途！是不是，伙伴们？", 17, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("我波波呢，想环游世界吃各种各样的美食。", 1, 9390382, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("嗨~老大！以我拉伊的个性，这圣地太小了！", 1, 9390383, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("哼,这些二货们……可别做有失我面子的事情啊!", 1, 9390384, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("休息一会儿再走多好,不过没办法。", 1, 9390388, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("有时间的话，请你随时来圣地啊。因为现在你也是堂堂正正的联盟一员了。\r\n也许我们很快就能见面。", 1, 9390388, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("知道了!到那时会欢迎我们吧?", 17, 9390388, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("哈哈，那是当然的。#b#h0##k。", 1, 9390388, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk("那么，再见了，南哈特！女皇殿下！还有大家！", 17, 9390388, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("走吧!朋友们!开始新的冒险之旅!", 17, 0, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk('喵!', 1, 9390381, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                    cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterH/0", 1, 1, 1, 0, 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_SaveEff("dScreenEffect/fadeInOut");
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      cm.effect_REPEAT("Effect/Direction14.img/effect/ShamanBT/ChapterH/1", 1, 0, 0, 0, 0);
                                                                                    } else if (status === V++) {
                                                                                      cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                      cm.setStandAloneMode(false);
                                                                                      cm.dispose();
                                                                                      cm.warp(130000000, 0, false);
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