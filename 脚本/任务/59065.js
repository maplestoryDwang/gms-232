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
      cm.sendNormalTalk("我们的小宝贝~ 你是从哪里听来的，你想去射手村啊？", 4, 9390336, false, true);
    } else {
      if (status === v++) {
        cm.askYesNo("波波也一起去的吧？那么，现在就去#b射手村#k吗？我是海盗……不对，我对这里的地理环境很熟悉，马上就能送你去#b射手村#k。\r\n(接受后，立即移动)", 4, 9390336);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("那么，就由亲切的我送你过去吧，呵呵呵。", 4, 9390336, false, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk('不要错过波波~~！', 4, 9390336, true, true);
          } else if (status === v++) {
            cm.forceStartQuest(59065, '');
            cm.dispose();
            cm.warp(866000390, 0, false);
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