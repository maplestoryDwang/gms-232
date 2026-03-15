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
      cm.sendNormalTalk_Bottom("#face0#希纳斯女皇听闻你的突出表现之后，曾说过有机会想要邀你来这里，顺便商讨商讨联盟事宜。", 36, 3003651, false, true, 1);
    } else {
      if (status === v++) {
        cm.askAcceptDecline_Bottom("#face0#如果你准备好拜见，我会带你去见女皇陛下的，\r\n你要去见女皇陛下吗？", 36, 3003651, 1);
      } else if (status === v++) {
        cm.forceStartQuest(39437, '');
        cm.sendNormalTalk_Bottom("#face0#女皇就在我的右手边，\r\n你不妨过去和女皇慢慢聊。", 36, 3003651, false, true, 1);
        cm.dispose();
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
    cm.npc_LeaveField('oid=5766');
    cm.npc_LeaveField("oid=5767");
    cm.npc_LeaveField("oid=5768");
    cm.npc_LeaveField("oid=5769");
    cm.npc_LeaveField('oid=5770');
    cm.sendNormalTalk_Bottom("#face0#你好，该隐，\r\n我是圣地女皇希纳斯，\r\n我很想亲自见你一面。", 36, 3003655, false, true, 1);
    cm.forceCompleteQuest(39437);
    cm.dispose();
  }
}