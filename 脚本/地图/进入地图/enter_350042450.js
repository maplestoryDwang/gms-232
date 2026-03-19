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
    cm.gainSkillBuff(80001592);
    cm.spawnMobLimit(8240077, 1, 732, -119, 100);
    cm.spawnMobLimit(8240014, 1, 999, -119, 100);
    cm.spawnMobLimit(8240014, 1, 896, -119, 100);
    cm.spawnMobLimit(8240014, 1, 750, -119, 100);
    cm.spawnMobLimit(8240014, 1, 635, -119, 100);
    cm.spawnMobLimit(8240014, 1, -38, -119, 100);
    cm.spawnMobLimit(8240014, 1, 75, -119, 100);
    cm.spawnMobLimit(8240014, 1, -123, -119, 100);
    cm.spawnMobLimit(8240014, 1, -238, -119, 100);
    cm.spawnMobLimit(8240014, 1, -361, -119, 100);
    cm.spawnMobLimit(8240012, 1, -274, -119, 100);
    cm.spawnMobLimit(8240012, 1, 1094, -119, 100);
    cm.spawnMobLimit(8240012, 1, 1346, -119, 100);
    cm.spawnMobLimit(8240012, 1, -353, -119, 100);
    cm.spawnMobLimit(8240012, 1, 681, -119, 100);
    cm.spawnMobLimit(8240014, 1, 1164, -119, 100);
    cm.spawnMobLimit(8240014, 1, -179, -119, 100);
    cm.spawnMobLimit(8240015, 1, 880, -119, 100);
    cm.spawnMobLimit(8240015, 1, -7, -119, 100);
    cm.spawnMobLimit(8240005, 1, 353, -119, 100);
    cm.addPopupSay(1540657, 3000, "#face1#什么?\r\n那家伙搭乘了盖奥勒克?!", '', 0);
    cm.addPopupSay(1540653, 3000, "目标, 无法攻击. \r\n目标不在攻击范围内. ", '', 0);
    cm.addPopupSay(1540657, 3000, "#face1#守住!\r\n守住防空炮和结界维持器!", '', 0);
    cm.effect_NormalSpeechBalloon("用Ctrl键攻击, 用Alt键跳跃. \r\n操作方法比想象的还简单啊. ", 1, 0, 1, 4500, 1, 0, -120, 0, 4, 0, cm.getPlayer().getId());
    cm.spawnMobLimit(8240015, 1, 1418, -119, 100);
    cm.spawnMobLimit(8240005, 1, 2312, -119, 100);
    cm.spawnMobLimit(8240013, 1, 1846, -119, 100);
    cm.spawnMobLimit(8240013, 1, 1988, -119, 100);
    cm.spawnMobLimit(8240013, 1, 1882, -119, 100);
    cm.spawnMobLimit(8240013, 1, 1469, -119, 100);
    cm.spawnMobLimit(8240013, 1, 1881, -119, 100);
    cm.spawnMobLimit(8240080, 1, 3243, -119, 100);
    cm.spawnMobLimit(8240014, 1, 3302, -119, 100);
    cm.spawnMobLimit(8240015, 1, 3177, -119, 100);
    cm.spawnMobLimit(8240071, 1, 2760, -119, 100);
    cm.spawnMobLimit(8240013, 1, 3452, -119, 100);
    cm.spawnMobLimit(8240013, 1, 3166, -119, 100);
    cm.spawnMobLimit(8240078, 1, 4003, -119, 100);
    cm.spawnMobLimit(8240013, 1, 3813, -119, 100);
    cm.spawnMobLimit(8240013, 1, 4214, -119, 100);
    cm.spawnMobLimit(8240013, 1, 3688, -119, 100);
    cm.spawnMobLimit(8240013, 1, 4179, -119, 100);
    cm.spawnMobLimit(8240014, 1, 5046, -119, 100);
    cm.spawnMobLimit(8240015, 1, 4797, -119, 100);
    cm.spawnMobLimit(8240071, 1, 4985, -119, 100);
    cm.spawnMobLimit(8240013, 1, 4622, -119, 100);
    cm.spawnMobLimit(8240013, 1, 4624, -119, 100);
    cm.spawnMobLimit(8240013, 1, 5440, -119, 100);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;