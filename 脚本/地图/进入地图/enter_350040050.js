var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.setPartner(1, 1540767, 80001596, 0);
    cm.getTopMsgFont("必须在限制时间内从敌人的攻势下生还. ", 3, 20, 20, 0);
    cm.fieldEffect_Tremble(1, 500, 30);
    cm.spawnMobLimit(8240057, 1, 361, -1232, 100);
    cm.addPopupSay(1540503, 2000, "哇, 你们看到那边那个家伙了吗?!它的个头好像是其他机器人的两倍!", '', 0);
    cm.addPopupSay(1540503, 2000, "队长, 那个大块头的家伙看起来好像很危险. 请小心啊!", '', 0);
    cm.scheduleWarpTask(60, 350040080, 0, true);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;