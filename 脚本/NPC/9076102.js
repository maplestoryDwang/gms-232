var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(u, K, U) {
  if (cm.getzhizunvip() != 2) {
    cm.dispose();
    cm.playerMessage(1, "该菜单是至尊版专享。");
    return;
  }
  if (status == 0 && u == 0) {
    cm.dispose();
    return;
  }
  if (u == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var O = -1;
  if (status <= O++) {
    cm.dispose();
  } else {
    if (status === O++) {
      cm.sendNext("你好, 我是兴儿,我想要 #b年糕#k...#b\r\n#L0#我给你带来了年糕！#l\r\n#L1#在这里需要做些什么？#l#k");
    } else {
      if (status === O++) {
        if (U == 0) {
          if (!cm.isLeader()) {
            cm.sendNext("请把年糕交给队长，然后让队长与我讲话。");
            cm.dispose();
          } else if (cm.haveItem(4001101, 10)) {
            em.getPlayers().forEach(function (s) {
              s.getAPI().addPlayerLog("组队任务_月妙_周常记录", 0);
              s.getAPI().playerMessage(6, "[组队任务_月妙] 通关记录入库！");
              s.getAPI().removeAll(4001101);
              s.getAPI().removeAll(4000884);
              cm.gainItem(2430694, 2);
              cm.gainItem(2431303, 1);
              cm.warp(933000000, 0, false);
              cm.playerMessage(-1, "恭喜通关！");
              s.getAPI().gainSubAchievement(1221, 0);
              s.getAPI().updateAchievement(1218, 0, 1, 100);
              s.getAPI().updateAchievement(1219, 0, 1, 1000);
              s.getAPI().updateAchievement(1220, 0, 1, 10000);
              s.getAPI().updateAchievement(1387, 0, 1, 10000);
            });
            cm.dispose();
          } else {
            cm.sendNext("想要通关的话 #b#v4001101##z4001101##k 需要10个。 ");
          }
        } else if (U == 1) {
          cm.sendNext("这里是迎月花山丘，月妙会在满月的时候制作#b年糕#k。在月光下播种迎月花的种子，月妙就会出现。#r你必须保护月妙,防止其他怪物来攻击他#k. 如果#b月妙#k死亡了, 任务将会失败...我会再次变得饥饿...");
          cm.dispose();
        }
      } else if (status === O++) {
        cm.dispose();
      }
    }
  }
}