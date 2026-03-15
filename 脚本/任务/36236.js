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
      cm.sendNormalTalk_Bottom("#face0#啦啦姐……祝您万寿无疆。", 36, 3005110, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#要常来啊！", 36, 3005111, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#咂咂，来玩哦！", 36, 3005112, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face6#这是自然！", 36, 3005100, true, true, 1);
          } else if (status === v++) {
            cm.forceStartQuest(36236, '');
            cm.OnStartNavigation(410004000, 1, "3005152", 36236);
            cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face5#格里，你哥他……", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#恐怕是去给领主还钱的时候惹祸上身的。", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face4#没事的，我的心脏已经强大到足够送走哥哥了。", 36, 3005102, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face4#……这样啊，万幸。", 36, 3005100, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#你现在有什么打算呢？", 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#嗯……我打算顺着山路和水路，走到哪儿算哪儿。", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#或许就像离开故乡，能在这里摇响铃铛一样，\r\n等去了新的地方，搞不好就能找到有关铃铛的线索吧！", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#这份积极乐观实在是让人望尘莫及啊。", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face4#……要是能一起离开就好了。", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face4#毕竟每个人都有自己的路。", 36, 3005102, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face4#我要踏上去寻找自我的旅途。", 36, 3005102, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face4#长久以来，我对这个世界似乎有太多不了解的地方。", 36, 3005102, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face4#没错！你要是查到了什么事，也告诉我一声。", 36, 3005100, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face4#……", 36, 3005100, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#……", 36, 3005102, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face6#现在我真要走了，保重！", 36, 3005100, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face4#……嗯。", 36, 3005102, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（奶奶，有时候会有那个时刻无话可说。）", 36, 3005100, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#（我是通过那一刻明白的，明白不管是格里还是我都有所成长。）", 36, 3005100, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#虽然并非故乡，可现如今这里……", 36, 3005100, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#成为了一个珍惜之人所在的珍惜之地。", 36, 3005100, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#所以什么时候愿意了，就说出来吧。", 36, 3005100, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face6#前往纳林！", 36, 3005100, true, true, 1);
                                                } else if (status === v++) {
                                                  cm.teachSkill(160011074, 0, -1);
                                                  cm.teachSkill(160011074, 1, 1);
                                                  cm.getTopMsgFont("获得了<前往纳林！>技能。", 3, 20, 20, 0, 0);
                                                  cm.forceCompleteQuest(36236);
                                                  cm.gainExp(11153);
                                                  cm.gainExp(7959);
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