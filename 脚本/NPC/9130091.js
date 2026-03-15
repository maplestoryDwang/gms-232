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
  } else {
    if (status === V++) {
      if (cm.isLeader()) {
        cm.askAcceptDecline("无需多言了。你有那个能力来阻止我吗？#k", 1, 9130090);
      } else {
        cm.sendOk("你们的队长才有资格跟我对话。", 9130090);
        cm.dispose();
      }
    } else {
      if (status === V++) {
        for (var V = 0; V < em.getPlayerCount(); V++) {
          em.getPlayers().get(V).getAPI().npc_LeaveField("oid=1");
        }
        cm.spawnMobLimit(9421589, 1, -424, -15, 1);
        cm.dispose();
      }
    }
  }
}