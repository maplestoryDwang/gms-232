var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.execCommand("autoexec");
    cm.execCommand("Name[autoexec]");
    cm.execCommand("npc_9062208");
    cm.execCommand("Name[npc_9062208]");
    cm.askMenu("\r\n#e[荣耀特攻队普通任务]激战海洋#n\r\n\r\n\r\n#L0##b#e参加激战海洋#n#k#l\r\n\r\n#L1##b#e查看任务信息#n#k#l\r\n\r\n", 4, 9062208);
  } else {
    cm.dispose();
    if (U == 0) {
      cm.gloryRagingSeaStart();
    } else {
      cm.openNpc("帮助_激战海洋");
    }
  }
}