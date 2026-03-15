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
      cm.sendNormalTalk("来啦，爆莉萌天使。等你很久了。这段期间狂龙战士，不，狂龙战士大人奋力整顿城市中心地区，现在终于可以攻击敌人的城堡了。不过我们首先要处理些事情。", 0, 3001100, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("啊~知道了~城门侦查？", 2, 3001100, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("..?!", 0, 3001100, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#b(吼吼。一猜即中，好像很吃惊的样子。)#k\r\n\r\n是吧？对吧？", 2, 3001100, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("不对。请你消灭掉集结在城门前面的#b#o2400111#和#o2400112##k 。各100只，不，150，不不，#b200只#k就行了。", 0, 3001100, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("啊？！那么多？", 2, 3001100, true, true);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline("你在想什么？请消灭#b#o2400111#和#o2400112#各200头#k，可以吗？\r\n\r\n#r#e（接受时，将自动移至该区域。）", 0, 3001100);
                } else {
                  if (status === v++) {
                    cm.forceStartQuest(31673, '');
                    cm.forceStartQuest(31684, '1');
                    cm.sendNormalTalk("你休息了那么长时间，请再一展身手吧，战场之星。", 0, 3001100, false, true);
                  } else if (status === v++) {
                    cm.dispose();
                    cm.warp(401040800, 0, false);
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