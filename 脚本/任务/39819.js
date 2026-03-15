var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (cm.getNumberFromQuestInfo(39819, "dir") == 0) {
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
      cm.sendNext("幸会，#b#h0 ##k，\r\n我是火焰祭司，侍奉赤炎与火焰之斯皮萨。");
    } else {
      if (status == v++) {
        cm.sendNextPrev("除了侍奉赤炎与火焰之斯皮萨之外，还负责调查塞尔提乌地区，进行研究。");
      } else {
        if (status == v++) {
          cm.sendNext("#b#h 0##k，听说你的实力很强大，能否协助我进行研究呢？");
        } else {
          if (status == v++) {
            cm.askAcceptDecline("当然你会用你需要的东西作为谢礼的。\r\n\r\n#b#e5个#i1713000##z1713000#");
          } else {
            if (status == v++) {
              cm.sendNext("好，任务的进行方式很简单，只要在我提出的#b#e消灭塞尔提乌地区怪物任务中选择一种#n#k去执行就好，执行完任务就回来。");
            } else {
              if (status == v++) {
                cm.sendNextPrev("只不过，如果在发放任务#b当天晚上零点#k之前不能完成，发放的任务就会消失，这一点你还要多留意。");
              } else {
                if (status == v++) {
                  cm.sendOk("那等你下次来找我，就开始今日任务。");
                } else if (status == v++) {
                  cm.setNumberForQuestInfo(39819, "dir", 1);
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
      var H = "选择心仪的任务吧。\r\n\r\n";
      for (var v = 1; v <= 5; v++) {
        for (var v = 39820; v <= 39825; v++) {
          H += '#L' + v + "##b#e#y" + v + "##k#n#l\r\n";
        }
      }
      cm.askMenu(H, 3004540);
    } else if (status === v++) {
      cm.forceStartQuest(a);
      cm.sendNormalTalk("等任务结束了就来找我完成吧，一定要在今晚零点之前来哦。", 0, 3004540, false, false);
      cm.forceCompleteQuest();
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}