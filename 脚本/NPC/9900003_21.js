var status = 0;
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
      var V = "\r\n#e#d          欢迎使用征服者币购买物品#n#l#k\r\n";
      V += "\r\n#r提示：征服者币请消灭各BOSS或者世界各怪物掉落神秘之冰开出。购买时请注意看清楚，一旦购买概不退货。#k\r\n\r\n";
      V += "#b#L0##fUI/UIWindow.img/PvP/Scroll/enabled/next2# 制作140武器防具150武器防具#l\r\n";
      V += "#L2##fUI/UIWindow.img/PvP/Scroll/enabled/next2# 购买各种消耗卷轴特殊之类等#l#k\r\n\r\n";
      V += " ";
      cm.askMenu(V);
    } else {
      if (status == 1) {
        switch (U) {
          case 0:
            cm.dispose();
            cm.openNpc(9900003, 24);
            break;
          case 1:
            cm.dispose();
            cm.openShop(22221);
            break;
          case 2:
            cm.dispose();
            cm.openShop(22223);
            break;
        }
      }
    }
  }
}