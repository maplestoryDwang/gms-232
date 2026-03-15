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
      cm.sendNext_Bottom("#h0 #大人，有消息说东城墙情况危急，特申请支援。");
    } else {
      if (status == v++) {
        cm.askYesNo_Bottom("看起来翼人军的空袭不容小觑，要现在就去支援#b夜晚的东城墙#k吗？");
      } else {
        if (status == v++) {
          cm.sendNext_Bottom("好的，那我现在就送您过去！");
        } else if (status == v++) {
          cm.warp(993151018, 0, false);
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
      cm.sendNext_Bottom("#face1#唔，这帮家伙也是动真格的啊。", 3004435);
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.gainExp(30 * Math.pow(cm.getLevel(), 3));
      cm.dispose();
    }
  }
}