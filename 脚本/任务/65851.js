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
  if (Math.floor(cm.getJob()) == 42) {
    start1(g, w, a);
  } else {
    start2(g, w, a);
  }
}
function start1(g, w, a) {
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#神那，最近修行还顺利吗？今天我是特意来告诉你一个重要通知的。", 36, 9130021, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("请问是什么重要通知啊？", 56, 0, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我们似乎已经找到#b#p9130090##k现在身在何处了。", 36, 9130021, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#b#p9130090##k……我记得曾在武陵见过他一次。他现在正在做什么呢……", 56, 0, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#我这才想起来，#b#p9130090##k曾经和你一起修行过对吧？你们当时似乎关系不错啊。但是接下来，你们可能就要兵戎相向了。你肯定会很难过吧？", 36, 9130021, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#啊，干嘛要提这件事啊……", 36, 9130081, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("我和他……其实关系也不算很好……而且，我本来就对那家伙没什么兴趣。", 56, 0, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#你的反应也差太多了吧！之前我和你提到这个家伙的时候，你瞪着我的眼神那叫一个凶狠啊！", 36, 9130081, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#这段时间，这位#b#p9130090##k一直没有出现在本能寺中。不过现在，加入了联合军的#b#p9130087##k终于掌握到了这家伙的动向。", 36, 9130021, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom('他现在究竟身在何处？', 56, 0, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.askAcceptDecline_Bottom("他在冰峰雪域山脉废矿坑的深处建造了一个祭坛。据说，是在准备进行一些目的不明的奇怪仪式……我们都很担心，不知道他是不是在准备进行新的魔王降临仪式。可不可以请你尽快赶赴此地，去阻止他的行径呢？", 36, 9130021, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("我明白了。阻止#b#p9130090##k的行径正是我的职责。", 56, 0, false, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#那就请你立刻赶赴冰峰雪域山脉的#b#m211041700##k，去那里找#b#p9130087##k见面吧。具体情况他会告诉你的。你切记，不要掺杂太多的个人感情进去。", 36, 9130021, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("……刚才也说了，我是不会掺杂个人感情进去的。", 56, 0, true, true, 1);
                              } else if (status === v++) {
                                cm.forceStartQuest(65851, '');
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
function start2(g, w, a) {
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#你好啊，#h0#。我是#b#m807000000##k联盟成员，我名为#b#p9130021##k。", 36, 9130021, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#你有没有听说#b#p9130090##k这个名字？他不仅是我们的敌人，还是威胁到冒险岛和平的新势力——织田军的阴阳师首领。", 36, 9130021, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0##b#p9130090##k是个非常危险的人。他虽然年纪不大，却非常聪明，非常厉害。同时，他也拥有强大的野心。但问题就是，他的野心已经彻底扭曲了。", 36, 9130021, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#正是他主导了魔王降临仪式，导致出现了此次异常问题。可以说，之所以织田军和我们联合军会来到冒险岛，都是因为他的缘故。", 36, 9130021, true, true, 1);
          } else {
            if (status === v++) {
              cm.askAcceptDecline_Bottom("#face0#这个#b#p9130090##k在冰峰雪域山脉废矿坑的深处建造了一个祭坛。据说，是在准备进行一些目的不明的奇怪仪式。我们都很担心，不知道他是不是在准备进行新的魔王降临仪式。可不可以请#h0#你前去阻止他的行径呢？", 36, 9130021, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#真是太谢谢你了。那就请你立刻前往冰峰雪域山脉的#b#m211041700##k，去那里寻找#b#p9130087##k吧。具体情况他会告诉你的。", 36, 9130021, false, true, 1);
              } else if (status === v++) {
                cm.forceStartQuest(65851, '');
                cm.dispose();
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
      cm.sendNormalTalk_Bottom("我听说#b#p9130090##k现在人在这里。", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#没错。这个阴险的男人似乎又在搞着什么小动作……他不会是在准备进行新的魔王降临仪式吧…… ", 36, 9130145, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#如果他真的企图再次进行魔王降临的仪式，那么不仅会对我们#b#m807000000##k联合军造成巨大的威胁，更会直接影响到冒险岛全域。", 36, 9130145, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0##b#p9130090##k应该就在这里面。请你一定要阻止他的行径啊。", 36, 9130145, true, true, 1);
          } else if (status === v++) {
            cm.forceCompleteQuest(65851);
            cm.dispose();
          }
        }
      }
    }
  }
}