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
      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（眼下我手上毫无情报，只能在陌生之地徘徊，最好是去找找狼牙所说的赫丽娜。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else if (status === v++) {
      cm.OnStartNavigation(100000201, 1, '1012100', 39434);
      cm.forceStartQuest(39434, '');
      cm.npc_LeaveField('oid=2605');
      cm.npc_LeaveField("oid=2607");
      cm.dispose();
      cm.warp(100010100, 4, false);
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
      cm.sendNormalTalk_Bottom("我本就一直在等着呢，狼牙和我说过了，你就是冒险家吧？", 36, 3003658, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#首先……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(39434);
        cm.dispose();
      }
    }
  }
}