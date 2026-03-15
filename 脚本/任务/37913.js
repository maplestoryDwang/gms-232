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
      cm.sendNormalTalk_Bottom("#face0#要察看这个得先把周围怪物清理掉。", 36, 3004851, false, true, 1);
    } else {
      if (status === v++) {
        cm.setAccountQuestInfo(252, "count=7994;T=20210430213153");
        cm.sendNormalTalk_Bottom("#face0#怪物们似乎变得比刚才更凶猛了。", 36, 3004851, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我也很想帮忙，可一想到休麦的叮嘱……就只能拜托你了。", 36, 3004851, true, true, 1);
        } else {
          if (status === v++) {
            cm.askYesNo_Bottom("#face0##b100只#k就够了。", 36, 3004851, 1);
          } else if (status === v++) {
            cm.forceStartQuest(37913, '');
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
      cm.sendNormalTalk_Bottom("#face0#那我找找是否有可用的零件。", 36, 3004851, false, true, 1);
    } else if (status === v++) {
      cm.dispose();
      cm.warp(993185009, 0, false);
    }
  }
}