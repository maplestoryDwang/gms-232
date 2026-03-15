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
      cm.askAcceptDecline_Bottom("#face3#是我！现在马上到米纳尔森林龙的峡谷来。具体情况等到了之后再说！\r\n#r（※接受时，自动移动到任务地图。）", 37, 9401278, 1);
    } else if (status === v++) {
      cm.dispose();
      cm.warp(875003055, 0, false);
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
      cm.sendNormalTalk_Bottom("#face0#哎哟，浑身酸疼。好久没运动了，全身上下都疼。", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#不过幸亏一个人都没跑掉！", 36, 9401283, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#太好了。干掉了所有的手下，材料也抢到了，他们应该就无法配制灵药了……", 36, 9401278, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#一定是某人在那天的战斗中受了伤，需要服用灵药。 ", 36, 9401278, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face3#虽然不知道是谁，但能指使这么多手下，一定是很重要的人物……那个人一旦恢复，必定会给我们造成巨大威胁，因此必须尽快把他除掉。", 36, 9401278, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face1#是！我会尽快查明位置！", 36, 9401283, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#但是……这次云雾为什么没来呢？难道是……接到了别的任务？\r\n或者我们已经晚了一步？！", 36, 9401278, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face3##b……必须活下去，才能报仇……", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face4#嗯，以那样的实力，不管在什么地方都不会被埋没。", 36, 9401278, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#啊，对了，你上次让我调查有关武神的情报……", 36, 9401278, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face1#好像是存放武神记录的寺院。", 36, 9401278, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0##b那个地方在哪里？ ", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face1#还在确认位置，马上联系你。", 36, 9401278, true, true, 1);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0##b好的，谢谢。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0##b（武神记录……里面会有关于武神之力的内容吗？要是能获得什么情报，应该就能更快地发挥出力量……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                } else if (status === v++) {
                                  cm.forceCompleteQuest(65976);
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