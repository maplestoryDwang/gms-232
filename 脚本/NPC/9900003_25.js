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
      var V = "\r\n#e#d          欢迎使用来到宠物相关操作#n#l#k\r\n";
      V += "\r\n#r提示：我这里可以获得宠物巨大化技能哦,和修改您的宠物颜色。#k\r\n\r\n";
      V += "#b#L0##fUI/UIWindow.img/PvP/Scroll/enabled/next2# 获得宠物巨大化技能#l\r\n";
      V += "#b#L3##fUI/UIWindow.img/PvP/Scroll/enabled/next2# 取消宠物巨大化技能#l\r\n";
      V += "#b#L1##fUI/UIWindow.img/PvP/Scroll/enabled/next2# 修改宠物颜色#l\r\n";
      V += "#b#L2##fUI/UIWindow.img/PvP/Scroll/enabled/next2# 还原宠物默认颜色#l\r\n";
      V += "#b#L4##fUI/UIWindow.img/PvP/Scroll/enabled/next2# 宠物进化复活#l\r\n";
      V += " ";
      cm.askMenu(V);
    } else {
      if (status == 1) {
        switch (U) {
          case 0:
            typed = 2;
            var w = "是否确定#r购买宠物巨大化技能吗#b？（费用：#r3000点卷 1次#b）";
            cm.askYesNo(w);
            break;
          case 1:
            typed = 3;
            cm.askNumber("宠物染色会给所有的召唤出来的宠物染色  色值自己测试\r\n请输入你想要修改的值,也可以自己记录好,目前作者没有找到宠物原本颜色的值，如果你们找到了请告之作者，以便修改。颜色的数值范围0-2147483647  \r\n每50的加最为明显比如50 100 150 200 250 都是几个不同的颜色#k", 0, 0, 2147483647);
            break;
          case 2:
            cm.changePetHue(-1);
            cm.sendOk("恭喜您,还原宠物颜色成功！");
            cm.dispose();
            break;
          case 3:
            typed = 5;
            var w = "是否确定#r购买取消宠物巨大化技能吗#b？（费用：#r3000点卷 1次#b）";
            cm.askYesNo(w);
            break;
          case 4:
            cm.dispose();
            cm.openNpc(9310073, "宠物进化复活");
            break;
        }
      } else {
        if (status == 2) {
          if (typed == 2) {
            if (cm.getPlayer().getCSPoints(1) < 3000 && typed != 3) {
              cm.askMenu("对不起，您的点卷不足！");
              cm.dispose();
            } else if (typed != 3) {
              cm.getPlayer().modifyCSPoints(1, -3000);
              cm.gainItem(5190012, 1);
              cm.askMenu("购买成功,请在背包现金道具栏里查询！");
              cm.dispose();
            }
          }
          if (typed == 3) {
            typed = 4;
            fee = U;
            cm.askYesNo("你确定要修改宠物颜色吗? 为: #r" + fee + "#k\r\n");
          }
          if (typed == 5) {
            if (cm.getPlayer().getCSPoints(1) < 3000 && typed != 3) {
              cm.askMenu("对不起，您的点卷不足！");
              cm.dispose();
            } else if (typed != 3) {
              cm.getPlayer().modifyCSPoints(1, -3000);
              cm.gainItem(5190014, 1);
              cm.askMenu("购买成功,请在背包现金道具栏里查询！");
              cm.dispose();
            }
          }
        } else if (status == 3) {
          if (typed == 4) {
            cm.changePetHue(fee);
            cm.sendOk("恭喜您,修改宠物颜色成功！" + fee);
            cm.dispose();
          }
        }
      }
    }
  }
}