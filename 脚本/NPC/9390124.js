var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(S, R, V) {
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
      var M = "<BOSS-贝勒德> \r\n通往鲁塔比斯巨大树根内部需要的钥匙。";
      M += "\r\n#b#L1#每天可以领取#v4033981##z4033981#。(5次)\r\n";
      M += "\r\n#b#L2#购买#v4033981##z4033981#。 #r1000#k点卷\r\n";
      M += "\r\n#b#L3#移动到三核贝勒德。\r\n";
      cm.askMenu(M);
    } else {
      if (V == 1) {
        if (cm.getSpace(3) < 1) {
          cm.sendOk("背包其他栏空间不足,无法领取。");
        } else if (cm.getPlayerLog('贝勒德入场卷') < 10) {
          cm.addPlayerLog("贝勒德入场卷");
          cm.gainItem(4033981, 1);
          cm.sendOk("购买成功,祝您游戏愉快。");
        } else {
          cm.sendOk("每天只可以免费领取10次,您已经领取了。");
        }
        cm.dispose();
      } else {
        if (V == 2) {
          if (cm.getSpace(3) < 1) {
            cm.sendOk("背包其他栏空间不足,无法购买。");
          } else if (cm.getPlayer().getCSPoints(1) >= 1000) {
            cm.gainItem(4033981, 1);
            cm.getPlayer().modifyCSPoints(1, -1000);
            cm.sendOk("购买成功,祝您游戏愉快。");
          } else {
            cm.sendOk("账户点卷余额不足。\r\n\r\n购买#v4033981##z4033981#需要#r1000#k点卷。");
          }
          cm.dispose();
        } else if (V == 3) {
          if (cm.haveItem(4033981) >= 1) {
            cm.gainItem(4033981, -1);
            cm.warp(863010000);
            cm.dispose();
          } else {
            cm.sendOk("\r\n你没有#v4033981##t4033981#无法入场。");
            cm.dispose();
          }
        }
      }
    }
  }
}