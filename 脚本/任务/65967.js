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
      cm.askAcceptDecline_Bottom("#face0#要是有更详细的情报，应该就能确认了。\r\n你再到阿尔卡斯特那里去一趟！", 36, 9401283, 1);
    } else if (status === v++) {
      cm.forceStartQuest(65967, '');
      cm.OnStartNavigation(211000000, 1, "2020005", 0);
      cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face1#不好意思，你能再和我说一下吗？", 36, 9401283, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("在书中也只提到了只言片语，所以我也不太清楚。", 36, 2020005, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#原来如此。有没有提到在什么地方？", 36, 9401283, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("书上说寒铁在万年冰雪之下，灵药在冰雪峡谷中。 ", 36, 2020005, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#冰雪峡谷！", 36, 9401283, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("你们不会是想找那个东西吧？\r\n不是我吓唬你，在几百年间有无数的勇士前去寻找，但所有人都空手而归。", 36, 2020005, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#谢谢你能抽出时间！", 36, 9401283, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face1#墨玄大侠！发现黑衣人的地方不就是冰雪峡谷吗？\r\n难道他们是在寻找空青石乳？", 36, 9401283, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.askAcceptDecline_Bottom("#face1#最好再去看看！\r\n\r\n#r（※接受时，自动移动到任务地图。）", 36, 9401283, 1);
                    } else if (status === v++) {
                      cm.dispose();
                      cm.warp(875003042, 0, false);
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