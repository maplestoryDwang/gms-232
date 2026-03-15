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
      cm.sendNormalTalk_Bottom("#face0#在不同的次元重新出发……\r\n也许这是个好机会，能让我回想起过去。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#更何况万神殿是我们一族的故乡，进去看看也不错。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else {
        if (status === v++) {
          cm.askAcceptDecline_Bottom("#face0#那就去万神殿看看？\r\n\r\n#r（※自动前往任务地图。）#k", 37, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, 1);
        } else if (status === v++) {
          cm.dispose();
          cm.warp(993164042, 0, false);
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
      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（眼下也只能相信了，还有不知为何总感觉和这个人很聊得来。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.askMenu("你还有什么其他问题吗？\r\n#b#L0#黑色诺巴#l\r\n#L1#冒险岛世界#l\r\n#L2#我没什么其他问题了。#l", 5, 3000001);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我所知道的也只有在古代文献上看到的那一行，上面说曾有诺巴一族被魔龙史缇拉斯的名为“恶意”的力量所魅惑。", 37, 3000001, false, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#神谕还加了这么一句，能够为了目的而不择手段的便是恶意。", 37, 3000001, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#说是……所有的一切都有其存在的理由。", 37, 3000001, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(难道也已经被诺巴遗忘了？\r\n话说恶意存在的理由……唔……)", 37, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askMenu("你还有什么其他问题吗？\r\n#b#L0#黑色诺巴#l\r\n#L1#冒险岛世界#l\r\n#L2#我没什么其他问题了。#l", 5, 3000001);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#我们也是最近才了解到这个世界的，这里有着许多冒险家和英雄。", 37, 3000001, false, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#我听说他们在与堕落的光明超越者——黑魔法师战斗。", 37, 3000001, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#听说与我们对立的麦格纳斯也在此地从黑魔法师那里获得了力量。", 37, 3000001, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#(这地方看起来很危险，不过越是乱世，就越有利于隐藏身份。)", 37, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.askMenu("你还有什么其他问题吗？\r\n#b#L0#黑色诺巴#l\r\n#L1#冒险岛世界#l\r\n#L2#我没什么其他问题了。#l", 5, 3000001);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#这里似乎已经不会有更多收获了，\r\n为了回想起过去，我最好去新的地方看看。", 37, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
                            } else if (status === v++) {
                              cm.forceCompleteQuest(39432);
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