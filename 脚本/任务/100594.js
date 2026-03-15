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
      cm.sendNormalTalk("你好，#b#h0##k。您在这里的体验是否愉快？\r\n我是#b#p9062291##k，负责在#b#e<冒险岛大酒店>#n#k中管理各种设施", 4, 9062291, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("为了给本次来到#b#e<冒险岛大酒店>#n#k的各位勇士提供乐趣，我们制造了#b#e<冒险岛拳击王>#n#k游戏机。\r\n参与#b冒险岛拳击王#k，可根据达到的分数获得#b17周年纪念币#k。", 4, 9062291, true, true);
      } else {
        if (status === v++) {
          cm.updateInfoQuest(100594, "point=0;start=1");
          cm.askYesNo("怎么样？立即参与#b#e冒险岛拳击王#n#k试试吧？", 4, 9062291);
        } else if (status === v++) {
          cm.dispose();
          cm.warp(993177210, 1, false);
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