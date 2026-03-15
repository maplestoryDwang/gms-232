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
      cm.sendNormalTalk_Bottom("#face1#呃……这边的怪物会喷出像墨汁一样的东西。", 36, 3004851, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#请你去消灭它们，别让它们妨碍搜索。", 36, 3004851, true, true, 1);
      } else {
        if (status === v++) {
          cm.askYesNo_Bottom("#face3#这回也消灭100只，怎么样？", 36, 3004851, 1);
        } else if (status === v++) {
          cm.forceStartQuest(37915, '');
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
      cm.sendNormalTalk_Bottom("都搞定了。", 56, 0, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#我要乘隙赶紧去搜索残骸。", 36, 3004851, true, true, 1);
      } else if (status === v++) {
        cm.dispose();
        cm.warp(993185010, 0, false);
      }
    }
  }
}