var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(33105)) {
    if (cm.getNumberFromQuestInfo(33100, 'count') == 0) {
      action0(f, E, e);
    } else {
      action1(f, E, e);
    }
  } else {
    cm.dispose();
  }
}
function action0(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.sendNormalTalk_Bottom("这里充满了未知的气息。说不定弗朗西斯遇到了什么危险。快到建筑物里面看看吧。", 56, 0, false, false);
    cm.dispose();
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
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
      cm.sendNormalTalk_Bottom("呼……真是些麻烦的家伙。不过，弗朗西斯究竟在什么地方呢？这些事分明是因弗朗西斯而起……", 56, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("嗯？！弗朗西斯打电话来了！", 56, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("喂？弗朗西斯！这究竟是怎么回事！？", 56, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("啊，那个……\r\n#b（说明事情的原委。）", 37, 1530140, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("当然，我安全逃脱了。你不会为了找我，到旧楼去了吧！？那里有非常强烈的死亡气息！", 37, 1530140, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b（原来他安全逃脱了。这真是太好了。如果让他看见我，又要拜托莉莉清除记忆了，这下应该没那个必要了吧？)", 56, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我现在在家呢。还有，你说什么黑暗精灵，那究竟是什么意思啊，弗朗西斯。", 56, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("没什么，我亲眼看到了。那力量……就像非常浓烈的黑暗气息……可以说我差点落入不尽的深渊之中？", 37, 1530140, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("我的黑龙差点就暴走了……不过，幸好我想起了奥尔卡，才忍耐下来。如果我没能忍耐，现在整个城市肯定都变为了废墟。咳咳", 37, 1530140, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("好……好吧，我知道了。总之没发生什么事就好。明天到了学校之后，你再详细跟我说说。", 56, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b（呼……黑暗精灵。说不定还会有其他孩子像弗朗西斯那样，出于好奇去召唤精灵呢！为了防止孩子们陷入危险，我得时刻注意旧楼附近才行。)", 56, 0, true, false);
                        } else if (status === V++) {
                          cm.forceCompleteQuest(33105);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;