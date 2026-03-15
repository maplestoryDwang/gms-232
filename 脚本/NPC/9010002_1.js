var status = 0;
var zyms0 = new Array(1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 100, 200, 300, 400, 500, 600, 700, 800, 900, 100, 200, 300, 400, 500, 600, 700, 800, 900);
var zymss0 = Math.floor(Math.random() * zyms0.length);
var zyms1 = new Array(10, 20, 30, 40, 50, 60, 70, 100, 80, 90, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 110, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17);
var zymss1 = Math.floor(Math.random() * zyms1.length);
var zyms2 = new Array(1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
var zymss2 = Math.floor(Math.random() * zyms2.length);
var zymsvip2 = new Array(1010, 1100, 1210, 1310, 1410, 1510, 1610, 1710, 1810, 1910, 1010, 1110, 1210, 1310, 1410, 1510, 1610, 1710, 1810, 1910, 2010);
var zymssvip2 = Math.floor(Math.random() * zymsvip2.length);
var zymsvip3 = new Array(1020, 1220, 1220, 1420, 1420, 1520, 1620, 1720, 1820, 1920, 1020, 1120, 1220, 1320, 1420, 1520, 1620, 1720, 1820, 1920, 2020, 3020);
var zymssvip3 = Math.floor(Math.random() * zymsvip3.length);
var zymsvip4 = new Array(1030, 1130, 1230, 1330, 1430, 1530, 1630, 1730, 1830, 1930, 1060, 1130, 1230, 1330, 1430, 1530, 1630, 1730, 1830, 1930, 2030, 3030, 4030);
var zymssvip4 = Math.floor(Math.random() * zymsvip4.length);
var zymsvip5 = new Array(1040, 1140, 1240, 1340, 1440, 1540, 1640, 1740, 1840, 1940, 1040, 1140, 1240, 1340, 1440, 1540, 1640, 1740, 1840, 1940, 2040, 3040, 4040, 5040);
var zymssvip5 = Math.floor(Math.random() * zymsvip5.length);
var zymsvip6 = new Array(1050, 1150, 1250, 1350, 1450, 1550, 1650, 1750, 1850, 1950, 1050, 1150, 1250, 1350, 1450, 1550, 1650, 1750, 1850, 1950, 2050, 3050, 4050, 5050, 6050);
var zymssvip6 = Math.floor(Math.random() * zymsvip6.length);
var zymsvip7 = new Array(1060, 1160, 1260, 1360, 1460, 1560, 1660, 1760, 1860, 1960, 1060, 1160, 1260, 1360, 1460, 1560, 1660, 1760, 1860, 1960, 2060, 3060, 4060, 5060, 6060, 7060);
var zymssvip7 = Math.floor(Math.random() * zymsvip7.length);
var zymsvip8 = new Array(1060, 1160, 1260, 1360, 1460, 1560, 1660, 1760, 1860, 1960, 1060, 1160, 1260, 1360, 1460, 1560, 1660, 1760, 1860, 1960, 2060, 3060, 4060, 5060, 6060, 7060, 8060);
var zymssvip8 = Math.floor(Math.random() * zymsvip8.length);
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(S, g, Y) {
  if (S == -1) {
    cm.dispose();
  } else {
    if (S == 0) {
      cm.dispose();
      return;
    }
    if (S == 1) {
      status++;
    }
    if (status == 0) {
      if (cm.getPlayerLog("VIP福利") == 1) {
        var l = '#g已领取#k';
      } else {
        var l = "#b未领取#k";
      }
      if (cm.getPlayerLog("VIP工资") == 1) {
        var p = "#g已领取#k";
      } else {
        var p = "#b未领取#k";
      }
      var C = '';
      C = "\r\n#k办理VIP后, 可以每天找我领取福利。\r\n#rVIP2#k以上有魔方领取哦。\r\n#r注意:领取福利前最好是保持背包每个栏位有2个以上的空间。负责失去物品概不负责。\r\n\r\nVIP等级: #r" + cm.getVip() + "\r\n";
      C += "#L1##b领取VIP每日福利  #k状态：" + l + "#l\r\n\r\n";
      C += "#L3##b领取VIP每日工资  #k状态：" + p + "#l\r\n\r\n";
      C += "#L2##b升级#v1112446##z1112446##l\r\n\r\n";
      cm.askMenu(C);
    } else {
      if (Y == 1) {
        if (cm.getPlayerLog('VIP福利') >= 1) {
          cm.sendOk("VIP专属福利。\r\n\r\n每天只可以领取一次。");
        } else {
          if (cm.getVip() == 1) {
            cm.addPlayerLog("VIP福利");
            cm.getPlayer().modifyCSPoints(1, zyms0[zymss0]);
            cm.gainItem(4001465, zyms0[zymss1]);
            cm.sendOk("领取成功, 祝您游戏开心愉快。");
            cm.worldSpouseMessage(21, "玩家 " + cm.getPlayer().getName() + " 领取了VIP1福利, 获得了" + zyms0[zymss0] + "点卷 " + zyms1[zymss1] + "个爱心宝石。");
          } else {
            if (cm.getVip() == 2) {
              cm.addPlayerLog('VIP福利');
              cm.getPlayer().modifyCSPoints(1, zymsvip2[zymssvip2]);
              cm.gainItem(4001465, zyms1[zymss1]);
              cm.gainItem(5062000, zyms2[zymss2]);
              cm.sendOk("领取成功, 祝您游戏开心愉快。");
              cm.worldSpouseMessage(21, "玩家 " + cm.getPlayer().getName() + " 领取了VIP2福利, 获得了" + zymsvip2[zymssvip2] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + '。');
            } else {
              if (cm.getVip() == 3) {
                cm.addPlayerLog("VIP福利");
                cm.getPlayer().modifyCSPoints(1, zymsvip3[zymssvip3]);
                cm.gainItem(4001465, zyms1[zymss1]);
                cm.gainItem(5062000, zyms2[zymss2]);
                cm.gainItem(5062002, zyms2[zymss2]);
                cm.sendOk("领取成功, 祝您游戏开心愉快。");
                cm.worldSpouseMessage(21, "玩家 " + cm.getPlayer().getName() + " 领取了VIP3福利, 获得了" + zymsvip3[zymssvip3] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + '。');
              } else {
                if (cm.getVip() == 4) {
                  cm.addPlayerLog("VIP福利");
                  cm.getPlayer().modifyCSPoints(1, zymsvip4[zymssvip4]);
                  cm.gainItem(4001465, zyms1[zymss1]);
                  cm.gainItem(5062000, zyms2[zymss2]);
                  cm.gainItem(5062002, zyms2[zymss2]);
                  cm.sendOk("领取成功, 祝您游戏开心愉快。");
                  cm.worldSpouseMessage(21, "玩家 " + cm.getPlayer().getName() + " 领取了VIP4福利, 获得了" + zymsvip4[zymssvip4] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + '。');
                } else {
                  if (cm.getVip() == 5) {
                    cm.addPlayerLog('VIP福利');
                    cm.getPlayer().modifyCSPoints(1, zymsvip5[zymssvip5]);
                    cm.gainItem(4001465, zyms1[zymss1]);
                    cm.gainItem(5062000, zyms2[zymss2]);
                    cm.gainItem(5062002, zyms2[zymss2]);
                    cm.sendOk("领取成功, 祝您游戏开心愉快。");
                    cm.worldSpouseMessage(21, "玩家 " + cm.getPlayer().getName() + " 领取了VIP5福利, 获得了" + zymsvip5[zymssvip5] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + '。');
                  } else {
                    if (cm.getVip() == 6) {
                      cm.addPlayerLog('VIP福利');
                      cm.getPlayer().modifyCSPoints(1, zymsvip6[zymssvip6]);
                      cm.gainItem(4001465, zyms1[zymss1]);
                      cm.gainItem(5062000, zyms2[zymss2]);
                      cm.gainItem(5062002, zyms2[zymss2]);
                      cm.sendOk("领取成功, 祝您游戏开心愉快。");
                      cm.worldSpouseMessage(21, "玩家 " + cm.getPlayer().getName() + " 领取了VIP6福利, 获得了" + zymsvip6[zymssvip6] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + '。');
                    } else {
                      if (cm.getVip() == 7) {
                        cm.addPlayerLog('VIP福利');
                        cm.getPlayer().modifyCSPoints(2, zymsvip7[zymssvip7]);
                        cm.gainItem(4001465, zyms1[zymss1]);
                        cm.gainItem(5062000, zyms2[zymss2]);
                        cm.gainItem(5062002, zyms2[zymss2]);
                        cm.gainItem(5062006, zyms2[zymss2]);
                        cm.sendOk("领取成功, 祝您游戏开心愉快。");
                        cm.worldSpouseMessage(21, "玩家 " + cm.getPlayer().getName() + " 领取了VIP7福利, 获得了" + zymsvip7[zymssvip7] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + " 白金神奇魔方x" + zyms2[zymss2] + '。');
                      } else if (cm.getVip() == 8) {
                        cm.addPlayerLog("VIP福利");
                        cm.getPlayer().modifyCSPoints(2, zymsvip8[zymssvip8]);
                        cm.gainItem(4001465, zyms1[zymss1]);
                        cm.gainItem(5062000, zyms2[zymss2]);
                        cm.gainItem(5062002, zyms2[zymss2]);
                        cm.gainItem(5062006, zyms2[zymss2]);
                        cm.sendOk("领取成功, 祝您游戏开心愉快。");
                        cm.worldSpouseMessage(21, "玩家 " + cm.getPlayer().getName() + " 领取了VIP7福利, 获得了" + zymsvip7[zymssvip7] + "点卷 爱心宝石x" + zyms1[zymss1] + " 神奇魔方x" + zyms2[zymss2] + " 高级神奇魔方x" + zyms2[zymss2] + " 白金神奇魔方x" + zyms2[zymss2] + '。');
                      } else {
                        cm.sendOk("你还没有办理VIP。\r\n\r\n请办理VIP后在来领取。");
                      }
                    }
                  }
                }
              }
            }
          }
        }
        cm.dispose();
      } else {
        if (Y == 2) {
          cm.dispose();
          cm.openNpc(9010002, 2);
        } else {
          if (Y == 3) {
            if (cm.getPlayerLog("VIP工资") >= 1) {
              cm.sendOk("VIP专属福利。\r\n\r\n每天只可以领取一次。");
            } else {
              if (cm.getVip() > 1) {
                cm.addPlayerLog("VIP工资");
                var P = cm.getVip() * 10000000;
                cm.gainMeso(P);
                cm.sendOk("领取成功, 祝您游戏开心愉快。");
                cm.worldSpouseMessage(21, "玩家 " + cm.getPlayer().getName() + " 领取了VIP工资, 获得了" + P + "工资 .");
              } else {
                cm.sendOk("你还没有办理VIP。\r\n\r\n请办理VIP后在来领取。");
              }
            }
            cm.dispose();
          }
        }
      }
    }
  }
}