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
      cm.sendNormalTalk("听#p3001007#讲述惨状了吗？", 0, 3001000, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b(其实那个坐标所在的位置藏有敌人的补给基地。)#k", 2, 3001000, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk('什么？', 0, 3001000, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#b(而且补给基地的武器库被炮弹击中，补给基地已经彻底从地图上消失了。)#k", 2, 3001000, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("什么？你说的是真的？", 0, 3001000, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("#b(如果我再问可不可以洋洋自得一下的话，会不会挨揍？)#k", 2, 3001000, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("…真不知道你为什么每句话都(和)那个接在一起？", 0, 3001000, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("..？！你都听见了？！", 2, 3001000, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk(".. 总之就是说啊……爆莉萌天使。真的，真的太好了。说不定会有什么好运降临在你身上呢。#b战场翅膀#k的称号，#b战场女神#k的称号都名副其实。不过真不知道为什么还有一个#r战场的偶像#k的称号……", 0, 3001000, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("可，可爱？", 2, 3001000, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk('...', 0, 3001000, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("...", 2, 3001000, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk('...', 0, 3001000, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("...", 2, 3001000, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("...", 0, 3001000, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("...", 2, 3001000, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.askAcceptDecline("麻烦你件事吧。正好趁这次机会，扩大我们的移动半径，消灭掉那些#b离开补给基地游荡的敌人#k。他们现在应该已经吓得魂飞魄散，正四处逃窜呢，费不了你什么事。\r\n#b#e(接受后，即刻移动到战场地图。需要重新开始时，请放弃任务。)#n#k", 0, 3001000);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk("我在这里等你。早去早回。", 0, 3001000, false, true);
                                      } else if (status === v++) {
                                        cm.forceStartQuest(31621, '');
                                        cm.forceJoinEvent("爆莉萌天使_赫里希安_清怪3");
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