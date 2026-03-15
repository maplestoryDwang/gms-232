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
  } else if (status == v++) {
    cm.funckeySetByScript(1, 110001510, 42);
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
      cm.sendNormalTalk("哦,这么快!!!嘿嘿,嘿嘿。\r\n你知道吗,波波好喜欢你哦!", 0, 9390301, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("真了不起!呃呵呵呵!", 0, 9390301, true, true);
      } else if (status === v++) {
        cm.forceCompleteQuest(59015);
        cm.gainExp(560);
        cm.dispose();
        cm.warp(866128000, 0, true);
      }
    }
  }
}