var status = 0;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(k, j, Q) {
  if (status == 0 && k == 0) {
    cm.dispose();
    return;
  }
  if (k == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 180000001) {
    cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
    cm.dispose();
  } else {
    if (status == 0) {
      var N = "#d今日已刷废弃：#r" + cm.getAccountLog("废弃都市") + "#d次\r\n";
      N += "#e#L1#废弃组队通关50次领取#v5062002#80个，#v5062500#50个#l\r\n";
      N += "#e#L2#废弃组队通关100次领取#v4001839#100个#l\r\n";
      cm.askMenu(N);
    } else {
      if (status == 1) {
        switch (Q) {
          case 0:
            cm.dispose();
            cm.openShop(1012123);
            break;
          case 1:
            if (cm.getAccountLog('废弃都市') >= 50 && cm.getAccountLog("废弃通关50奖励") < 1) {
              cm.addAccountLog('废弃通关50奖励');
              cm.gainItem(5062002, 80);
              cm.gainItem(5062500, 50);
              cm.sendOk("领取成功，获得#v5062002#80个，#v5062500#50个");
              cm.worldSpouseMessage(32, "『废弃组队』 : 恭喜" + cm.getPlayer().getName() + ",领取了废弃通过50次奖励。");
              cm.dispose();
            } else {
              cm.sendOk("#r领取失败，通关不足");
              cm.dispose();
            }
            break;
          case 2:
            if (cm.getAccountLog("废弃都市") >= 100 && cm.getAccountLog("废弃通关100奖励") < 1) {
              cm.addAccountLog("废弃通关100奖励");
              cm.gainItem(4001839, 100);
              cm.sendOk("领取成功，获得#v4001839#100个");
              cm.worldSpouseMessage(32, "『废弃组队』 : 恭喜" + cm.getPlayer().getName() + ",领取了废弃通过100次奖励。");
              cm.dispose();
            } else {
              cm.sendOk("#r领取失败，通关不足");
              cm.dispose();
            }
            break;
          case 3:
            cm.dispose();
            cm.openNpc(9900004, 6);
            break;
          case 4:
            cm.dispose();
            cm.openShop(22224);
            break;
          case 5:
            cm.dispose();
            cm.openShop(9310117);
            break;
          case 6:
            cm.dispose();
            cm.openShop(1033001);
            break;
          case 7:
            cm.dispose();
            cm.openShop(2161010);
            break;
          case 8:
            cm.dispose();
            cm.openNpc(9900003, 21);
            break;
          case 9:
            cm.dispose();
            cm.openNpc(9310144, 222);
            break;
          case 10:
            cm.dispose();
            cm.openShop(22200);
            break;
          case 11:
            cm.dispose();
            cm.openShop(20000);
            break;
          case 12:
            cm.dispose();
            cm.openNpc(9310073);
            break;
          case 13:
            cm.dispose();
            cm.openNpc(9900003, 16);
            break;
          case 14:
            cm.dispose();
            cm.openNpc(9900002, 11);
            break;
          case 15:
            cm.dispose();
            cm.openNpc(9900002, 10);
            break;
          case 16:
            cm.dispose();
            cm.openNpc(9310071);
            break;
          case 17:
            cm.dispose();
            cm.openNpc(9310072);
            break;
          case 18:
            cm.dispose();
            cm.openNpc(9900003, 10);
            break;
          case 19:
            cm.dispose();
            cm.openNpc(9000069, 5);
            break;
          case 20:
            cm.dispose();
            cm.openNpc(9000069, 1);
            break;
          case 21:
            cm.dispose();
            cm.openNpc(9000069, 2);
            break;
          case 22:
            cm.dispose();
            cm.openNpc(9000069, 4);
            break;
          case 23:
            cm.dispose();
            cm.openNpc(9000069, 3);
            break;
          case 24:
            cm.dispose();
            cm.openNpc(9310144, 999);
            break;
          case 25:
            if (cm.getMeso() >= 100000) {
              cm.gainMeso(-100000);
              cm.gainItem(2500000, 1);
              cm.sendOk("恭喜您购买成功!!!");
            } else {
              cm.sendOk("需要100000金币,你没有!!!");
            }
            cm.dispose();
            break;
          case 50:
            cm.dispose();
            cm.openNpc(9310144, 101);
            break;
          case 26:
            cm.dispose();
            cm.openNpc(9900004, 8);
            break;
          case 27:
            cm.dispose();
            cm.openNpc(9900004, 9);
            break;
          case 28:
            cm.dispose();
            cm.openNpc(9900004, 10);
            break;
          case 29:
            cm.dispose();
            cm.openNpc(9900004, 11);
            break;
          case 30:
            cm.dispose();
            cm.openNpc(9900004, 12);
            break;
        }
      }
    }
  }
}