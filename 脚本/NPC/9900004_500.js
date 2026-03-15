var equip = null;
var isUpgrade = false;
var position = -1;
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
  if (status == 0) {
    var V = "你要将有期限的神级觉醒翅膀进行永久强化吗……\r\n#b";
    V += "#L2##fUI/Basic.img/BtMin2/normal/0# 是的，快把他变为永久#l\r\n";
    cm.askMenu(V);
  } else {
    if (status == 1) {
      if (U == 2) {
        position = -1;
        isUpgrade = false;
        inventoryType = 1;
        var w = cm.getInventory(inventoryType).list();
        var N = w.iterator();
        V = "#e请选择翅膀#n\r\n\r\n#b";
        var u = 1;
        newItemList = Array();
        while (N.hasNext()) {
          var Q = N.next();
          if (Q.getItemId() != 1102310) {
            continue;
          }
          newItemList[Q.getPosition()] = Q.getItemId();
        }
        for (var m in newItemList) {
          V += '#L' + m + "##v" + newItemList[m] + '#';
          if (u > 1 && u % 5 == 0) {
            V += "\r\n";
          }
          u++;
        }
        cm.askMenu(V);
      }
    } else {
      if (status == 2) {
        if (position == -1) {
          position = U;
        }
        if (position != -1) {
          if (cm.getTotalRMB() >= 500) {
            equip = cm.getInventory(1).getItem(position);
            var B = equip.copy();
            B.setExpiration(-1);
            cm.removeItem(position, 1, 1);
            cm.addFromDrop(cm.getC(), B, false);
            cm.worldMessageItem("[翅膀进阶] : 玩家[" + cm.getPlayer().getName() + "]将 神级觉醒<" + cm.getItemName(1102310) + "> 进阶为 永久", B);
            cm.sendOk("进阶成功！");
            cm.dispose();
          } else {
            cm.sendOk("充值累计不足500，无法进阶");
            cm.dispose();
          }
        }
      } else {
        if (status == 2) {}
      }
    }
  }
}
var status = -1;