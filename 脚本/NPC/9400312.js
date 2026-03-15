var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestFinished(63104)) {
    cm.sendNormalTalk("#b现在只是一个空空荡荡的袋子。", 3, 0, false, true);
    cm.dispose();
    return;
  }
  if (cm.getQuestStatus(63100) > 0) {
    cm.sendNormalTalk("#b挂着首富#r阿尔玛因#b的宝物。", 3, 0, false, true);
    cm.dispose();
    return;
  }
  if (cm.getNumberFromQuestInfo(63072, 'Start') == 0) {
    cm.sendNormalTalk("#b不知道谁把宝物挂在那么高的地方。", 3, 0, false, true);
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#b那地方挂着的宝物是谁的？", 3, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("看样子你对这里的情况不太了解。", 5, 9400314, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b是的，我来到这里的时间还不久。那些宝物是谁的？", 3, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("那些是这地方的首富#r阿尔玛因#k的宝物。这里虽然遍地都是富人，但其中又数阿尔玛因最为富有。", 5, 9400314, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b真了不起。这么说其他人应该都很尊敬并羡慕他咯。", 3, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("哼，别开玩笑了。", 5, 9400314, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#b有什么问题吗？这里既然是崇尚#b富裕#k的地方，他足以成为模范了吧。", 3, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("假如这些财富是通过正当途径积累而来当然是这样。", 5, 9400314, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#b正当途径？你是说那些财物是通过非正当手段获取的啊。", 3, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("阿尔玛因是个极度贪婪的人。他大多数的财富都是通过各种卑鄙手段欺骗人们夺来的。", 5, 9400314, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("我的宝物也被他骗走了。所以现在许多人都失去了生存的热情。", 5, 9400314, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#b这就不太好了。我去请他还给你们。", 3, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("算了吧。那贪心鬼要是会听你的话，老早就把宝物还给我们了。", 5, 9400314, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#b嗯……我先去找他谈谈吧。", 3, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("我觉得你去也是白去，但你执意如此就去试试吧。", 5, 9400314, true, true);
                                } else if (status === V++) {
                                  cm.updateInfoQuest(63100, "state=1");
                                  cm.forceStartQuest(63100, '');
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