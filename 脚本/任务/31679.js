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
      cm.sendNormalTalk("额呃嗝……呃，爆莉萌天使……来啦……呃嗝……", 0, 3001013, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#p3001101#！#p3001101#！很难受吗？", 2, 3001013, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("呃哈……咳……嗬！我没事……！呜呜！", 0, 3001013, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#p3001101#！啊~", 2, 3001013, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("呼……呼……最后一次……哪怕是一次……看到爆莉萌天使的慰问公演……我#p3001101#……就再无遗憾了……", 0, 3001013, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("别这么说！如果我表演给你看，你就要毫无遗憾的死去吗！不~", 2, 3001013, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("那，那么……如果能看到慰问演出……我#p3001101#……会彻底忘记所有伤痛，重新站起来……如果一个人公演觉得吃力的话…… 就和被称作#b诺巴冰块魔女#k的，令士兵们畏惧的……#p3001100#一起……表演……咳", 0, 3001013, true, true);
                } else {
                  if (status === v++) {
                    cm.askAcceptDecline("看到公演后，士兵们的士气……如日中天……你觉得呢……？！", 0, 3001013);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("不愧是爆莉萌天使！我等你！咳咳……嗬！……呃……那么去找#p3001100#……#p3001100#吧……\r\n\r\n#b(皮塔斯对静静守护他的士兵们竖起了拇指。怎么又有一种上当的感觉。)#k", 1, 3001013, false, true);
                    } else if (status === v++) {
                      cm.forceStartQuest(31679, '');
                      cm.dispose();
                      cm.warp(401040000, 0, false);
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
      cm.sendNormalTalk('嗯？有什么事？', 0, 3001100, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#p3001100#！我们一起为士兵们作慰问演出吧！\r\n\r\n#b(用这段期间学到的方法努力说服#p3001100#)#k", 2, 3001100, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk('这真是……没辙。', 1, 3001100, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#b(成功说服#p3001100# ！)#k\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 120,653", 3, 3001100, true, true);
          } else {
            if (status === v++) {
              cm.forceCompleteQuest(31679);
              cm.gainExp(120653);
              cm.sendNormalTalk("哎呀，既然决定作慰问演出，就速战速决吧。快，走吧。", 2, 3001100, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("等下，请你先去拜托#b哈伦和马伦双胞胎#k准备些舞台道具。既然已经决定去慰问演出了，就要认认真真的做啊。不是吗？", 0, 3001100, true, true);
              } else if (status === v++) {
                cm.dispose();
                cm.warp(401000000, 1, false);
              }
            }
          }
        }
      }
    }
  }
}