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
  if (cm.getMapId() == 180000001) {
    cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
    cm.dispose();
  } else {
    if (status == 0) {
      var V = "         #fUI/UIPVP.img/DmgEffect/DmgRed/excellentCritical#\r\n";
      V += "        #e#L1##fUI/CashShop.img/CSBeauty/hairColor/Enable/4##r5000万#d金币=#b10000#d抵用卷#fUI/CashShop.img/CSBeauty/hairColor/Enable/4##l\r\n       #L2##fUI/CashShop.img/CSBeauty/hairColor/Enable/4##r 1 亿#d金币=#b20000#d抵用卷#fUI/CashShop.img/CSBeauty/hairColor/Enable/4##l\r\n";
      V += "             #g#L3#查看抵用卷商店#l\r\n";
      cm.askMenu(V);
    } else {
      if (status == 1) {
        switch (U) {
          case 0:
            cm.dispose();
            cm.openShop(1012123);
            break;
          case 1:
            if (cm.getMeso() >= 50000000) {
              cm.getPlayer().modifyCSPoints(2, 10000, true);
              cm.gainMeso(-50000000);
              cm.sendOk("兑换成功，金币减少5000W");
              cm.worldSpouseMessage(32, "『抵用卷兑换』 : 恭喜" + cm.getPlayer().getName() + ",用5000W金币兑换10000抵用卷。");
              cm.dispose();
            } else {
              cm.sendOk("#r兑换失败:\r\n\r\n#b1). 金币不足。");
              cm.dispose();
            }
            break;
          case 2:
            if (cm.getMeso() >= 100000000) {
              cm.getPlayer().modifyCSPoints(2, 20000, true);
              cm.gainMeso(-100000000);
              cm.sendOk("兑换成功，金币减少1亿");
              cm.worldSpouseMessage(32, "『抵用卷兑换』 : 恭喜" + cm.getPlayer().getName() + ",用1亿金币兑换20000抵用卷。");
              cm.dispose();
            } else {
              cm.sendOk("#r兑换失败:\r\n\r\n#b1). 金币不足。");
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