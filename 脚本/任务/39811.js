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
      cm.sendNormalTalk_Bottom("#face0#你们在找圣剑的主人吗？", 36, 3004434, false, true);
      cm.effect_Voice("Voice5.img/CH2/Arran/10", 128);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#卡莱尔是为了保卫圣地，所以想恢复圣剑的光芒。\r\n你们的目的是什么？", 36, 3004434, true, true);
        cm.effect_Voice("Voice5.img/CH2/Arran/11", 128);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("我想要确认一下#r古代神#k的力量。\r\n看看能否在即将来临的大战中起到作用。", 56, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#你说的大战是指……", 36, 3004434, true, true);
            cm.effect_Voice("Voice5.img/CH2/Arran/12", 128);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#最近城里议论纷纷的传闻，主人公就是你啊。\r\n#r对抗者 #h0#。", 36, 3004434, true, true);
              cm.effect_Voice("Voice5.img/CH2/Arran/13", 128);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("没错。", 56, 0, true, true);
              } else {
                if (status === v++) {
                  cm.askYesNo_Bottom("#face0#说到底，你也想对抗#r吉伦·达尔摩尔#k吗，\r\n明知道那会带来多大的浩劫？", 36, 3004434);
                  cm.effect_Voice("Voice5.img/CH2/Arran/14", 128);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#……看来你是不会改变主意了。\r\n毕竟你已经用那双手消灭了堕落的超越者……", 36, 3004434, false, true);
                    cm.effect_Voice("Voice5.img/CH2/Arran/15", 128);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#你们最好先阅读一下关于圣剑的古代文献。", 36, 3004434, true, true);
                      cm.effect_Voice("Voice5.img/CH2/Arran/17", 128);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#文献就保存在这座图书馆里吧？", 36, 3004431, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Idea/56", 128);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#是的。不过……这些古代文献分别保管在三个区域。\r\n而这三个区域，都会出现#r古代人的灵魂#k。", 36, 3004434, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Arran/18", 128);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face4#诶？那你是怎么做的？", 36, 3004431, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Idea/57", 128);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#之前我被它们附身，吃了不少苦头。", 36, 3004434, true, true);
                              cm.effect_Voice("Voice5.img/CH2/Arran/19", 128);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#连续几个月的时间内，那些灵魂不断从我的鼻子和嘴巴里冒出来，吓得人们都不敢来借书了。", 36, 3004434, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Arran/20", 128);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#啊……好吧……", 36, 3004431, true, true);
                                  cm.effect_Voice("Voice5.img/CH2/Idea/58", 128);
                                } else if (status === v++) {
                                  cm.forceStartQuest(39811, '');
                                  cm.OnStartNavigation(410000690, 0, "east00", 39811);
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
function stage0(g, w, a) {
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
  } else if (status == v++) {
    cm.warp(993141012);
    cm.dispose();
  }
}