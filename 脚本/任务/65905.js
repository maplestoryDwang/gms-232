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
      cm.sendNormalTalk("#b#h0#！！#k\r\n#b一起玩烟花游戏#k有趣吗？", 5, 9400791, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("幸福与他人共享就会翻倍。", 5, 9400791, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("向朋友\r\n送出#r5次#k#b一起玩烟花游戏#k后再来找我，我准备好了特定的礼物。\r\n\r\n#i2632191:# #b#t2632191:# 200个#k", 5, 9400791, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("和朋友一起玩烟花游戏的方法非常简单！\r\n\r\n1.找到一起玩烟花游戏的朋友。\r\n2.#e#b[鼠标右击]#n#k朋友后，#r点击#k#e#b[一起玩烟花游戏]#n#k菜单。\r\n3.和朋友一起参与愉快的烟花游戏。", 5, 9400791, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("那就请你和珍贵的朋友一起体验愉快的烟花游戏吧。\r\n\r\n※ 当前一起玩烟花游戏礼物次数#b#e( 0 / 5 )#n#k", 5, 9400791, true, true);
            } else if (status === v++) {
              cm.forceStartQuest(65905, '');
              cm.dispose();
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