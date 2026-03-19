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
      cm.updateInfoQuest(58747, "0=0");
      cm.updateInfoQuest(58747, "0=0;1=0");
      cm.updateInfoQuest(58747, "0=0;1=0;2=0");
      cm.updateInfoQuest(58747, "0=0;1=0;2=0;3=0");
      cm.sendNormalTalk_Bottom("在脑中把思绪理理清楚吧。", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.askMenu_Bottom("鵺到底是什么来历……？\r\n#b#L0#亡者窟的神#l\r\n#L1#不知道#l\r\n#L2#蘑菇神社的巫女#l\r\n#L3#我的爱#l", 37, cm.getNumberFromQuestInfo(58740, "state"));
      } else {
        if (status === V++) {
          if (e == 0) {
            cm.sendNormalTalk_Bottom("简单来说，鵺是亡者窟的神，某天他突然冒出来，就受到了亡灵们的大肆推崇。", 57, 0, false, true);
          } else {
            if (e == 1) {
              cm.sendNormalTalk_Bottom("实在是没什么头绪啊。答案会是什么呢？", 57, 0, false, true);
              status -= 2;
            } else if (e == 2) {
              cm.sendNormalTalk_Bottom("也不对。跟巫女差太远了。答案还可能是什么呢……", 57, 0, false, true);
              status -= 2;
            } else {
              cm.sendNormalTalk_Bottom("不对不对……肯定不是这个。我再想想。", 57, 0, false, true);
              status -= 2;
            }
          }
        } else {
          if (status === V++) {
            var O = '证据呢……？';
            if (cm.getNumberFromQuestInfo(58747, '0') == 0) {
              O += "\r\n#b#L0#鵺的可疑宗教活动#l";
            }
            if (cm.getNumberFromQuestInfo(58747, '1') == 0) {
              O += "\r\n#b#L1#鵺的黑色圣水#l";
            }
            if (cm.getNumberFromQuestInfo(58747, '2') == 0) {
              O += "\r\n#b#L2#鵺提到了大太法师。#l";
            }
            if (cm.getNumberFromQuestInfo(58747, '3') == 0) {
              O += "\r\n#b#L3#圣经的内容很古怪。什么叫亡者复活为亡灵？#l";
            }
            cm.askMenu_Bottom(O, 37, cm.getNumberFromQuestInfo(58740, "state"));
          } else {
            if (status === V++) {
              if (e == 0) {
                cm.sendNormalTalk_Bottom("我看，鵺搞的活动只是为了他私人的利益，跟超度亡灵没半点关系。\r\n如果真是在超度，他这个神也太残酷了。\r\n但是我的推测无法作为确凿的证据。", 57, 0, false, true);
                cm.setNumberForQuestInfo(58747, '0', 1);
              } else {
                if (e == 1) {
                  cm.sendNormalTalk_Bottom("对了，他好像在利用黑色圣水给亡灵们洗脑，让他们变得更暴躁。\r\n但这也不是决定性的证据。", 57, 0, false, true);
                  cm.setNumberForQuestInfo(58747, '1', 1);
                } else if (e == 2) {
                  cm.sendNormalTalk_Bottom("这事没法确认。据棘鬼所说，他在这里见不到任何妖怪……可是这话也不能作为决定性的证据。", 57, 0, false, true);
                  cm.setNumberForQuestInfo(58747, '2', 1);
                } else {
                  cm.sendNormalTalk_Bottom("可我明显感觉到这是邪教……", 57, 0, false, true);
                  cm.setNumberForQuestInfo(58747, '3', 1);
                }
              }
              if (cm.getNumberFromQuestInfo(58747, '0') < 1 || cm.getNumberFromQuestInfo(58747, '1') < 1 || cm.getNumberFromQuestInfo(58747, '2') < 1 || cm.getNumberFromQuestInfo(58747, '3') < 1) {
                status -= 2;
              }
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("为了确保万无一失，还需要“证据”。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.askMenu_Bottom("这事明显很可疑。可我要怎么查明真相呢？\r\n#b#L0#直接去问鵺。#l\r\n#L1#打进亡者窟。#l\r\n#L2#进行更多打探。#l\r\n#L3#潜入窟内寻找证据。#l", 37, cm.getNumberFromQuestInfo(58740, "state"));
                } else {
                  if (status === V++) {
                    if (e == 0) {
                      cm.sendNormalTalk_Bottom("恐怕对方绝对不会承认自己的阴谋。我再想想。", 57, 0, false, true);
                      status -= 2;
                    } else {
                      if (e == 1) {
                        cm.sendNormalTalk_Bottom("可能会打草惊蛇。感觉不妥。", 57, 0, false, true);
                        status -= 2;
                      } else if (e == 2) {
                        cm.sendNormalTalk_Bottom("现在能探索的地方都探索过了。只能去更深入的地区看看。", 57, 0, false, true);
                        status -= 2;
                      } else {
                        cm.sendNormalTalk_Bottom('嗯，还是潜入窟里吧。', 57, 0, false, true);
                      }
                    }
                  } else {
                    if (status === V++) {
                      cm.askMenu_Bottom("会不会有什么变数？\r\n#b#L0#鵺#l\r\n#L1#众亡灵#l\r\n#L2#无头鬼#l\r\n#L3#木野子#l\r\n#L4#棘鬼#l", 37, cm.getNumberFromQuestInfo(58740, "state"));
                    } else {
                      if (status === V++) {
                        if (e == 0) {
                          cm.sendNormalTalk_Bottom("鵺是问题的核心。除了他之外，是否还有其他影响要素呢？", 57, 0, false, true);
                          status -= 2;
                        } else {
                          if (e == 1) {
                            cm.sendNormalTalk_Bottom("我压根儿就不能让他们发现我的存在。这个不算变数。", 57, 0, false, true);
                            status -= 2;
                          } else {
                            if (e == 2) {
                              cm.sendNormalTalk_Bottom("对了，那个陌生的亡灵武士。\r\n其他亡灵武士好像都很听从无头鬼的话。\r\n看样子她是他们的头目。我要多注意言行。", 57, 0, false, true);
                            } else if (e == 3) {
                              cm.sendNormalTalk_Bottom("她离这里太远了。不可能有什么影响。", 57, 0, false, true);
                              status -= 2;
                            } else {
                              cm.sendNormalTalk_Bottom("棘鬼还是值得信赖的。不应该会有什么麻烦。", 57, 0, false, true);
                              status -= 2;
                            }
                          }
                        }
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("好，思路整理到此为止。", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("潜入亡者窟吧。", 57, 0, true, true);
                          } else if (status === V++) {
                            cm.forceCompleteQuest(58747);
                            cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
                            cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
                            cm.dispose();
                            cm.warp(800022000, 0, false);
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