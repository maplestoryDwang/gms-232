var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (cm.getNumberFromQuestInfo(39712, "dir") < 2) {
    start0(g, w, a);
  } else {
    start1(g, w, a);
  }
}
function start0(g, w, a) {
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
      cm.sendNormalTalk("#h0#，你可以立刻到前哨基地来吗？", 4, 1540451, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("有什么事吗？", 2, 3004203, true, true);
      } else {
        if (status === v++) {
          cm.askYesNo("有要事相商，详情见面再说。\r\n我在新前哨基地等着你。\r\n\r\n#r（※ 接受后，立即前往新前哨基地。） \r\n（※ 建议开启背景音乐。）", 4, 1540451);
        } else if (status === v++) {
          cm.updateInfoQuest(39712, "dir=1");
          cm.forceStartQuest(39750);
          cm.dispose();
          cm.warp(993120000, 1, false);
        }
      }
    }
  }
}
function start1(g, w, a) {
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
      cm.sendNormalTalk_Bottom("#face2#还好你很快就过来了。", 36, 1540451, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face2#我是因为#r“那个男人”#k，才叫#h0#你过来的。", 36, 1540451, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("（哪个男人？是在说谁？）", 56, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#那个知晓了黑魔法师的全部计划，仍然支持他的唯一一个男人。", 36, 1540451, true, true);
          } else {
            if (status === v++) {
              cm.askMenu_Bottom("啊！如果是那样的人……#b\r\n#L0#威尔#l\r\n#L1#班·雷昂#l\r\n#L2#阿卡伊勒#l\r\n#L3#戴米安#l", 56, 0);
            } else {
              if (status === v++) {
                if (selectionLog[5] == 0) {
                  cm.sendNormalTalk_Bottom("#face2#没错。你果然很清楚。", 36, 1540451, false, true);
                } else {
                  if (selectionLog[5] == 1) {
                    cm.sendNormalTalk_Bottom("#face2#班·雷昂只是被复仇蒙蔽了双眼，\r\n他对黑魔法师的计划并不感兴趣。", 36, 1540451, false, true);
                    status -= 2;
                  } else if (selectionLog[5] == 2) {
                    cm.sendNormalTalk_Bottom("#face2#阿卡伊勒作为黑魔法师的忠实部下，\r\n却不知道黑魔法师的全部计划。", 36, 1540451, false, true);
                    status -= 2;
                  } else {
                    cm.sendNormalTalk_Bottom("#face2#黛米安他……不知道黑魔法师的计划。\r\n一心只想要变强。", 36, 1540451, false, true);
                    status -= 2;
                  }
                }
              } else {
                if (status === v++) {
                  if (selectionLog[5] == 0) {
                    cm.sendNormalTalk_Bottom("#face2#关于那个人，我有很多话要说。\r\n此事非同小可，容我酝酿。", 36, 1540451, true, true);
                  } else {
                    cm.sendNormalTalk_Bottom("#face2#反而被利用了。", 36, 1540451, true, true);
                    cm.dispose();
                  }
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face2#黑魔法师死后，在埃斯佩拉的海中发现了失去意识的蜘蛛王威尔。", 36, 1540451, false, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#我们发现他时，立刻将其秘密转移到冒险岛世界，直到不久前他才恢复意识。", 36, 1540451, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("不久前？那么……", 56, 0, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face2#对，他已经醒来。幸好他精神没有受损，也比预想中要配合一些。", 36, 1540451, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face2#太过顺从，反而引人生疑。", 36, 1540451, true, true);
                          } else {
                            if (status === v++) {
                              cm.askYesNo_Bottom("#face2#汉斯大人现下正在审问他。\r\n你应该也有很多疑问吧。不如和我一起去看看？", 36, 1540451);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face2#在右边坐船移动即可。", 36, 1540451, false, true);
                              } else if (status === v++) {
                                cm.forceStartQuest(39712, '');
                                cm.OnStartNavigation(993120000, 0, 'east00', 0);
                                cm.setNumberForQuestCustomData(3004300, 993130000);
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