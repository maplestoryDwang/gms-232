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
      cm.sendNormalTalk("来啦，爆莉萌天使。#p3001007#的状态怎么样啊？", 0, 3001000, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("还可以。", 2, 3001000, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("这样啊。现在要正式开始战斗了。我已经在峡谷精心设置了终极魔法仪式。现在只要将敌人引诱到那里……", 0, 3001000, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("这不是正适合身手敏捷的我来做吗？！就交给我吧！", 2, 3001000, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk(".. 狂龙战士，这是狂龙战士大人的任务。他对我们来说，有着象征性意义。只要狂龙战士在，他们就会去追狂龙战士，狂龙战士大人的。", 0, 3001000, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("(真想直接称作狂龙战士，但又觉得好像太随便了，只好放弃~) 那么我呢？又是运送物资？", 2, 3001000, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("不是。爆莉萌天使也有要做的事。是非常重要的事。狂龙战士，不，是狂龙战士大人对他们来说是既危险又必须优先追击的对象。但是即便如此，敌人的数量实在太多了。因此还会有不去追击狂龙战士，不是狂龙战士大人的敌人。", 0, 3001000, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("你将那些敌人全部引到峡谷中去可就可以了。简单的说就是，我们要实现狂龙战士在前面吸引敌人，爆莉萌天使你在后面驱赶敌人的状态。", 0, 3001000, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("这次忘了加“大人”二字了！", 2, 3001000, true, true);
                    } else {
                      if (status === v++) {
                        cm.askAcceptDecline("… 就我们两个人的时候，就直接叫狂龙战士吧。现在已经清楚作战内容了吧？那么就做好准备，瞬间移动到敌人后方去。\r\n#b(接受后，即刻移动到战场地图。需要重新开始时，请放弃任务。)#k", 0, 3001000);
                      } else if (status === v++) {
                        cm.forceStartQuest(31651, '');
                        cm.forceJoinEvent("爆莉萌天使_赫里希安_清怪4");
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