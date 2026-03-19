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
  } else {
    if (status === V++) {
      cm.setInGameDirectionMode(false, true, false);
      cm.setStandAloneMode(false);
      cm.npc_ChangeController(1540446, "oid=35902", -707, 28, 173, -757, -657, 1, false, 0, false);
      cm.fieldEffect_PlayBGM("Bgm40.img/SecretMissionBase", 0, 0);
      cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350040030");
      cm.setPartner(1, 1540765, 80001594, 0);
      cm.setPartner(1, 1540766, 80001595, 0);
      cm.setPartner(1, 1540767, 80001596, 0);
      cm.useItem(2023447);
      cm.useItem(2023448);
      cm.useItem(2023449);
      cm.spawnMobLimit(8240056, 1, 678, 28, 4);
      cm.spawnMobLimit(8240056, 1, -863, -632, 4);
      cm.getTopMsgFont("请在不被监视智能机器人发现的情况下, 移动到下一地区. ", 3, 20, 20, 0);
      cm.spawnMobLimit(8240056, 1, 626, -752, 4);
      cm.spawnMobLimit(8240056, 1, 987, -392, 4);
      if (cm.getNumberFromQuestInfo(33200, false)) {
        cm.askYesNo_Bottom("好像能通过没有监视智能机器人的道路，顺利经过这里。\r\n要那么做吗？\r\n#b（是：跳过）\r\n（否：重新挑战）#k", 56, 0);
      } else {
        cm.dispose();
      }
    } else if (status === V++) {
      if (f > 0) {
        cm.warp(350040040, 0, false);
      }
      cm.dispose();
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;