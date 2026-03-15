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
      cm.sendNormalTalk_Bottom("（现在该去图书馆见伊黛娜了。）", 56, 0, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#如果您是去找伊黛娜大人，可以帮我把这个转交给她吗？", 36, 3004430, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("这是什么？", 56, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#这是圣水。伊黛娜大人嘱咐我准备的。", 36, 3004430, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom('圣水？', 56, 0, true, true);
            } else if (status === v++) {
              cm.forceStartQuest(39907, '');
              cm.OnStartNavigation(410000670, 0, 'east00', 39907);
              cm.dispose();
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
    cm.warp(993151004, 0, false);
    cm.dispose();
  }
}