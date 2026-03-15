var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status >= 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    if (cm.getMapId() == 450004500) {
      cm.askYesNo("你确定要退出副本吗?我会送你回去~");
    } else if (cm.getMapId() == 450004600) {
      cm.askYesNo("你确定要退出副本吗?我会送你回去~");
    } else {
      cm.askYesNo("噩梦逐渐加深了，给我一颗【#i4033184:# #z4033184#】，我带你前往更深层的梦境~");
    }
  } else if (status == 1) {
    if (cm.getMapId() == 450004300) {
      cm.dispose();
      cm.warpParty(450004000);
    } else if (cm.isLeader()) {
      if (cm.haveItem(4033184)) {
        cm.gainItem(4033184, -1);
        cm.warpParty(450004500);
        cm.dispose();
      } else {
        cm.sendOk("你背包里没有【#i4033184:# #z4033184#】");
        cm.dispose();
      }
    } else {
      cm.sendOk("请让队长和我对话！");
      cm.dispose();
    }
    cm.dispose();
  }
}