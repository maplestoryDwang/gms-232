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
      cm.sendNormalTalk_Bottom("#face0#小风灵们，谢谢你们！你们这是又要去哪儿啊？", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('#face0#……', 36, 3005118, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face6#走掉了呢，这群小风灵总是让人捉摸不透。", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#格里，你也放过风筝吗？", 36, 3005100, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#嗯……小时候有过几次吧。", 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#据说风筝之中承载着放飞灾难之意，\r\n我虽然从未试过，但是曾在书里看到过。", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face6#希望以后所有坏事都会烟消云散！", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#我的风筝恐怕是飞着飞着卡在哪里的树上了。", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#为什么？", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#要不然怎么会这么……", 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#不。", 36, 3005102, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（找上门来的总不能一直只有不幸吧。）", 36, 3005102, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#说、说起来，你一直带在身上的那个铃铛到底是个什么东西？", 36, 3005102, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#这个铃铛吗？这是我们村庄世代相传的宝物。", 36, 3005100, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#那东西对我来说也很珍贵。", 36, 3005100, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#是、是嘛？", 36, 3005102, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#嗯！可因为没有声响，所以在寻找摇响铃铛的方法。", 36, 3005100, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（既然如此……）", 36, 3005102, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face1#那……你能把铃铛给我看一下吗？", 36, 3005102, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face1#因、因为我知道一个对所有东西都了如指掌的人。", 36, 3005102, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face1#要是拿出铃铛来，搞不好他能告诉你怎么修好，\r\n不过那地方对你来说可能会有点危险。", 36, 3005102, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face1#所以只要你待在这里不要动，好好等着，\r\n我会替你找到办法，回来找你的。", 36, 3005102, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face1#格里，你……", 36, 3005100, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（切，果然不相信人吗？", 36, 3005102, true, true, 1);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.sendNormalTalk_Bottom("#face6#原来你也很看重我在乎的那些东西啊！", 36, 3005100, true, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face6#铃铛，在这里。", 36, 3005100, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（这，这么轻易就交出来了？）", 36, 3005102, true, true, 1);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.sendNormalTalk_Bottom("#face0#谢谢！我会听你的，在这里一动不动地等着！", 36, 3005100, true, true, 1);
                                                          } else {
                                                            if (status === v++) {
                                                              cm.sendNormalTalk_Bottom("#face0#……", 36, 3005102, true, true, 1);
                                                            } else if (status === v++) {
                                                              cm.dispose();
                                                              cm.warp(993165507, 0, true);
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
      cm.sendNormalTalk_Bottom("#face1#……格里迟到了呢，难道是出什么事了？", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#我说，我看你刚刚就一直站在那里一动不动，是遇到什么麻烦事了吗？", 36, 3005120, true, true, 1);
      } else if (status === v++) {
        cm.dispose();
        cm.warp(993165530, 0, true);
      }
    }
  }
}