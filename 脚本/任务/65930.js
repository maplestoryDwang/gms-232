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
      cm.sendNormalTalk_Bottom("#face0#果然这里也……", 36, 9401277, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "，要是没和你一起来，也许整天都会被缠住。", 36, 9401277, true, true, 1);
      } else {
        if (status === v++) {
          cm.askAcceptDecline_Bottom("#face3#嘿嘿，所以，" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "！这次拜托你再去消灭20只残暴的摩沙！", 36, 9401277, 1);
        } else if (status === v++) {
          cm.forceStartQuest(65930, '');
          cm.gainExp(20);
          cm.forceStartQuest(65930, "001");
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
  } else if (status == v++) {
    cm.dispose();
    cm.warp(875003011, 0, false);
  }
}