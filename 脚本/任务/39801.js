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
      cm.sendNormalTalk("#h0#，你现在方便到前哨基地来吗？", 4, 1540451, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("有什么事吗？", 2, 3004203, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("你还记得不久前，那个#b跨海来客卡莱尔#k出现的时候吗？", 4, 1540451, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("那之后联盟就召开了紧急会议。", 4, 1540451, true, true);
          } else {
            if (status === v++) {
              cm.askYesNo("详情我们见面再说。\r\n我在前哨基地等着你。\r\n\r\n#r（※ 接受后，立即前往新前哨基地。）\r\n（※ 建议开启背景音乐。）", 4, 1540451);
            } else if (status === v++) {
              cm.forceStartQuest(39801, '');
              cm.updateInfoQuest(39800, "11=h1");
              cm.dispose();
              cm.warp(993141000, 0, false);
              cm.setNumberForQuestCustomData(3004300, 993141000);
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
  } else if (status == v++) {
    cm.warp(993141000, 0, false);
    cm.dispose();
  }
}