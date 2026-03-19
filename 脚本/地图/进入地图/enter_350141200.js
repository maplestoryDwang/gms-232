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
    cm.spawnMobLimit(8240179, 1, -731, 146, 100);
    cm.spawnMobLimit(8240179, 1, -557, 181, 100);
    cm.spawnMobLimit(8240179, 1, -349, 221, 100);
    cm.spawnMobLimit(8240179, 1, 238, 227, 100);
    cm.spawnMobLimit(8240179, 1, 439, 184, 100);
    cm.spawnMobLimit(8240179, 1, 674, 125, 100);
    cm.spawnMobLimit(8240180, 1, -662, -82, 100);
    cm.spawnMobLimit(8240180, 1, -819, -92, 100);
    cm.showMapleHero();
    cm.onSetMapTagedObjectVisible(1, "pt00", 512);
    cm.getTopMsgFont("只有将区域内的所有怪物全都消灭掉才能够前往下一地区。", 3, 20, 20, 0);
    cm.spawnMobLimit(8240181, 1, -861, -535, 100);
    cm.spawnMobLimit(8240181, 1, -425, -562, 100);
    cm.spawnMobLimit(8240181, 1, -261, -525, 100);
    cm.spawnMobLimit(8240181, 1, -215, -509, 100);
    cm.spawnMobLimit(8240181, 1, -58, -457, 100);
    cm.spawnMobLimit(8240181, 1, 258, -427, 100);
    cm.spawnMobLimit(8240180, 1, 431, -249, 100);
    cm.spawnMobLimit(8240180, 1, 381, -265, 100);
    cm.spawnMobLimit(8240180, 1, 175, -271, 100);
    cm.spawnMobLimit(8240180, 1, 211, -273, 100);
    cm.spawnMobLimit(8240180, 1, -27, -230, 100);
    cm.spawnMobLimit(8240180, 1, -946, -132, 100);
    cm.spawnMobLimit(8240179, 1, 822, -941, 100);
    cm.spawnMobLimit(8240179, 1, 636, -896, 100);
    cm.spawnMobLimit(8240179, 1, -344, -904, 100);
    cm.spawnMobLimit(8240179, 1, -397, -895, 100);
    cm.spawnMobLimit(8240179, 1, 721, -911, 100);
    cm.spawnMobLimit(8240179, 1, -34, -916, 100);
    cm.spawnMobLimit(8240179, 1, -141, -925, 100);
    cm.spawnMobLimit(8240179, 1, 835, -946, 100);
    cm.spawnMobLimit(8240179, 1, 844, -949, 100);
    cm.spawnMobLimit(8240179, 1, -398, -895, 100);
    cm.spawnMobLimit(8240179, 1, -324, -908, 100);
    cm.spawnMobLimit(8240179, 1, 838, -947, 100);
    cm.spawnMobLimit(8240179, 1, -157, -924, 100);
    cm.spawnMobLimit(8240179, 1, 59, -888, 100);
    cm.addPopupSay(1540807, 1000, "#face0#踩着胖嘟嘟的蘑菇形，心情都变好喽！", '', 0);
    cm.addPopupSay(1540805, 1000, "#face0#不过米乐，你可不要再想偷偷拿走哦，不然就麻烦了。", '', 0);
    cm.addPopupSay(1540801, 1000, "#face1#你自己的口袋里也没装什么不应该的东西吧，龙神？", '', 0);
    cm.addPopupSay(1540805, 1000, "#face6#......", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;