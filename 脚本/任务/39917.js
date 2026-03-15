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
      cm.sendNext_Bottom("#face1#情况变得严重了，\r\n再这样下去搞不好会被攻陷的。", 3004435);
    } else {
      if (status == v++) {
        cm.askYesNo_Bottom("#face1##h0#，帮忙解决一下那些翻过城墙而来的翼人吧！叫他们好好尝尝你的厉害！", 3004435);
      } else {
        if (status === v++) {
          cm.sendNext_Bottom("#face1#是右边！有劳了！！", 3004435);
        } else if (status === v++) {
          cm.forceStartQuest(39917, '');
          cm.OnStartNavigation(410000980, 0, '', 39917);
          cm.dispose();
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
  } else {
    if (status == v++) {
      cm.sendNext_Bottom("#face2#啊……结果还是这样……", 3004433);
    } else if (status == v++) {
      cm.warp(993151019);
      cm.dispose();
    }
  }
}