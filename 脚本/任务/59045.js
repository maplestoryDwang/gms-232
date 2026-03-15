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
      cm.sendNormalTalk("还记不记得我之前说过的地精巢穴呢？\r\n我拜托你一件事……\r\n我在那附近丢了一件东西，\r\n而且现在应该在它们身上。", 0, 9390313, false, true);
    } else {
      if (status === v++) {
        cm.askYesNo("你能前往#m866000130#，帮我从#o9390914#那里搜集30个#t4034003#吗？", 0, 9390313);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("谢谢你!只要找到我的东西,以后我再也不会吹牛了。", 0, 9390313, false, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk(" 是真的吧! 你要遵守约定, 不再吹牛! 英雄必须要遵守约定。", 2, 9390313, true, true);
          } else if (status === v++) {
            cm.forceStartQuest(59045, '');
            cm.OnStartNavigation(866000130, 0, '', 0);
            cm.dispose();
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