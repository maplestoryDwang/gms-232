var status = 0;
var selectedList = Array();
var newItemList = Array();
var numArr = Array("#fUI/Basic.img/LevelNo/0#", "#fUI/Basic.img/LevelNo/1#", "#fUI/Basic.img/LevelNo/2#", "#fUI/Basic.img/LevelNo/3#", "#fUI/Basic.img/LevelNo/4#", "#fUI/Basic.img/LevelNo/5#", "#fUI/Basic.img/LevelNo/6#", "#fUI/Basic.img/LevelNo/7#", "#fUI/Basic.img/LevelNo/8#", "#fUI/Basic.img/LevelNo/9#");
var selectedPosition = 0;
var step = 0;
var successRate = 0;
var haveLuck = false;
var useLuck = false;
var sflag = false;
var grade = Array("★普通★", '★普通★', '★精致★', "★精致★", "★无暇★", '★无暇★', '★灵动★', '★纯洁★', "★完美★", '★神圣★', '★神圣★', "★神圣★");
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (haveLuck && f == 0) {
      useLuck = false;
      status = 0;
      f = 1;
    } else if (haveLuck && f == 1) {
      useLuck = true;
    }
    if (f == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (f == 0 && status == -1) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      if (step == 1) {
        if (selectedPosition == 0) {
          selectedList.splice(0, 4);
        }
        if (U != -1) {
          selectedList[selectedPosition] = Array(U, newItemList[U]);
        }
        step = 0;
        successRate = getSuccessRate();
      }
      var V = "#e┌\t─ #fUI/Basic.img/Cursor/32/0#神秘力量强化 1次可合成5个─\t\t┐#n\r\n\r\n";
      for (var w = 0; w < 5; w++) {
        if (selectedList[w] != null) {
          V += '#L' + w + "##v" + selectedList[w][1] + "##z" + selectedList[w][1] + "##l\r\n";
        } else if (w == 0) {
          if (selectedList.length < 1) {
            V += '#L' + w + '#' + "#fUI/UIWindow.img/Item/activeExpChairIcon#" + "#l请点击框框选择主装备\r\n";
          } else {
            V += '#L' + w + '#' + "#fUI/UIWindow.img/Item/activeExpChairIcon#" + "#l\r\n";
          }
        } else if (selectedList.length < 1) {
          V += '#L' + w + '#' + "#fUI/UIWindow.img/Item/New/inventory/0#" + "#l请点击框框选择副装备\r\n";
        } else {
          V += '#L' + w + '#' + "#fUI/UIWindow.img/Item/New/inventory/0#" + "#l\r\n";
        }
      }
      V += "#e\r\n\r\n\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
      if (selectedList.length >= 1) {
        V += "#k\r\n#e┌\t\t     ─ 已经选择的装备信息 ─   \t\t┐#n\r\n\r\n";
        for (var N in selectedList) {
          var u = cm.getInventory(1).getItem(selectedList[N][0]);
          var Q = u.getTitle();
          var m = 0;
          for (var w = 0; w < grade.length; w++) {
            if (Q == grade[w]) {
              break;
            }
            m++;
          }
          if (m >= grade.length) {
            Q = grade[0];
          }
          var c = '主';
          if (N >= 1) {
            c = "#k副";
          }
          var B = u.getLevel();
          var F = '';
          if (B != 0) {
            F = " (+" + B + ')';
          }
          V += "\t" + c + ": #r[" + Q + "]#n 神秘力量." + u.getArc().getPower() + " #d#e" + cm.getItemName(u.getItemId()) + '#n' + F + "\r\n" + " 攻击 " + u.getPAD() + "\r\n";
        }
        V += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
      }
      var e = "#fUI/CashShop.img/CSCoupon/BtOK/disabled/0#";
      if (selectedList.length >= 2) {
        e = "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#";
      }
      V += "#k\t\t\t\t#L999##d#e" + e + "#l\r\n\r\n";
      V += "#k\r\n#e┌\t\t\t     ─ 操作帮助 ─   \t\t\t┐#n\r\n";
      V += "\t#b" + numArr[1] + " 合成前，请先仔细阅读合成说明。\r\n\t" + numArr[2] + " 第一个位置选择需要提升品级的主装备。\r\n\t#r" + numArr[3] + " 如果主装备变动，副装备需要重新选择。\r\n\t" + numArr[4] + " 选择装备时，装备的排列顺序是依据背包里的顺序。\r\n\t" + numArr[5] + " 选择结束后，点击“确认”进行装备合成#k";
      V += "#e\r\n└\t\t\t\t\t\t\t\t\t\t\t┘#n";
      cm.askMenu(V);
    } else {
      if (status == 1) {
        if (sflag) {
          U = 999;
        }
        if (U == 999) {
          sflag = true;
          if (selectedList.length < 0) {
            cm.sendPrev("无法合成，请至少放入一件副装备");
          } else {
            if (cm.haveItem(4000517) && !haveLuck) {
              status = 0;
              haveLuck = true;
              cm.askYesNo("您的背包中拥有#v4000517##b黄金鱼#k道具，是否使用#b黄金鱼#k将成功率提升至#b#e" + (successRate + 15) + "%#n#k？\r\n\r\n#d#e选择否则以#r" + successRate + "%#d的成功率继续强化。#n#k");
            } else {
              if (cm.getPlayer().getCSPoints(1) < 1000) {
                cm.sendOk("您的点卷不足");
                cm.dispose();
                return;
              }
              var A = selectedList[0][1];
              var k = selectedList[0][0];
              var T = Math.floor(getGrade(k)) + 1;
              var u = cm.getInventory(1).getItem(k);
              if (T > 10) {
                cm.sendOk("您的装备已经达到最高品级，无法再进行合成。");
                cm.dispose();
                return;
              }
              cm.getPlayer().modifyCSPoints(1, -1000);
              successRate = useLuck ? successRate + 15 : successRate;
              if (useLuck) {
                cm.gainItem(4000517, -1);
              }
              var u = cm.getInventory(1).getItem(k);
              var O = u.copy();
              if (u.getArc().getLevel() == 20) {
                cm.sendOk("合成失败,你的神秘力量等级已是最高的了");
                cm.dispose();
                return;
              }
              O.setTitle('' + grade[T] + '');
              O.setStr(u.getStr() + T * 10 * selectedList.length);
              O.setDex(u.getDex() + T * 10 * selectedList.length);
              O.setInt(u.getInt() + T * 10 * selectedList.length);
              O.setLuk(u.getLuk() + T * 10 * selectedList.length);
              O.setPAD(u.getPAD() + T * 10 * selectedList.length);
              O.setMAD(u.getMAD() + T * 10 * selectedList.length);
              O.getArc().setPower(u.getArc().getPower() + 30 * selectedList.length);
              O.getArc().setLevel(u.getArc().getLevel() + 1 * selectedList.length);
              for (var N in selectedList) {
                cm.removeSlot(1, selectedList[N][0], 1);
              }
              cm.addFromDrop(O, false);
              var V = "#b力量#r+" + T * 10 * selectedList.length + "\r\n";
              V += "#b敏捷#r+" + T * 10 * selectedList.length + "\r\n";
              V += '#b智力#r+' + T * 10 * selectedList.length + "\r\n";
              V += '#b运气#r+' + T * 10 * selectedList.length + "\r\n";
              V += "#b攻击力#r+" + T * 10 * selectedList.length + "\r\n";
              V += "#b魔法力#r+" + T * 10 * selectedList.length + "\r\n";
              cm.sendOk("#r#e强化成功！#n#k本次强化为您的装备#d[#v" + A + "#]#k提升了\r\n#k" + V);
              sflag = false;
              if (T >= 3) {
                cm.worldMessage("[装备合成] : 恭喜[" + cm.getPlayer().getName() + "]合成出" + grade[T] + "的 " + cm.getItemName(A));
              }
              cm.worldSpouseMessage(21, "[装备合成] : 恭喜 " + cm.getPlayer().getName() + " 合成出 " + grade[T] + "的 " + cm.getItemName(A));
              cm.dispose();
            }
          }
        } else {
          selectedPosition = U;
          if (selectedPosition != 0 && selectedList[0] == null) {
            cm.sendPrev("请先选择主装备！");
          } else {
            inventoryType = 1;
            var L = cm.getInventory(inventoryType).list();
            var t = L.iterator();
            V = "#e经过筛选，以下为所有符合强化合成条件的#r副装备#n\r\n\r\n#b";
            if (selectedPosition == 0) {
              V = "#e#d请选择需要进行强化合成的#r主装备：#n\r\n\r\n#b";
            }
            var H = 1;
            newItemList = Array();
            while (t.hasNext()) {
              var u = t.next();
              if (cm.isCash(u.getItemId())) {
                continue;
              }
              if (getItemType(u.getItemId()) == -1) {
                continue;
              }
              var M = cm.getReqLevel(u.getItemId());
              if (M < 50) {
                continue;
              }
              var M = cm.getReqLevel(u.getItemId());
              if (M > 200) {
                continue;
              }
              if (u.getArc().getPower() < 1) {
                continue;
              }
              var m = 0;
              for (var N in selectedList) {
                if (u.getPosition() == selectedList[N][0]) {
                  m = 1;
                  break;
                }
              }
              if (m == 1) {
                continue;
              }
              newItemList[u.getPosition()] = u.getItemId();
            }
            for (var N in newItemList) {
              V += '#L' + N + '##v' + newItemList[N] + '##z' + newItemList[N] + '#';
              if (H > 1 && H % 5 == 0) {
                V += "\r\n";
              }
              H++;
            }
            status = -1;
            step = 1;
            if (newItemList.length < 0) {
              V = "#r没有可以进行合成的副装。#k";
              cm.dispose();
              cm.askMenu(V);
            } else {
              cm.askMenu(V);
            }
          }
        }
      }
    }
  }
}
function getItemType(f) {
  var W = Math.floor(f / 10000);
  switch (W) {
    case 100:
      return 0;
    case 104:
      return 1;
    case 105:
      return 2;
    case 106:
      return 3;
    case 107:
      return 4;
    case 108:
      return 5;
    case 110:
      return 6;
    default:
      if (W == 120) {
        return -1;
      }
      if (W == 135) {
        return -1;
      }
      var W = Math.floor(W / 10);
      if (W == 12 || W == 13 || W == 14 || W == 15 || W == 17) {
        return 7;
      }
      return -1;
  }
}
function getSuccessRate() {
  var f = 0;
  for (var W in selectedList) {
    if (selectedList[W] != null && selectedList[W] != '') {
      f++;
    }
  }
  switch (f) {
    case 2:
      return 100;
    case 3:
      return 36;
    case 4:
      return 58;
    case 5:
      return 85;
    default:
      return 0;
  }
}
function getCost() {
  var f = 0;
  for (var W in selectedList) {
    f += cm.getReqLevel(selectedList[W][1]) * 1;
  }
  var U = f + cm.getReqLevel(selectedList[0][1]) * (parseInt(getGrade(selectedList[0][0])) + 10);
  return U;
}
function getGrade(f) {
  if (f != null) {
    var W = cm.getInventory(1).getItem(f);
    var U = W.getTitle();
    if (U == null || U == '') {
      return 0;
    }
    for (var V in grade) {
      if (U == grade[V]) {
        return V;
      }
    }
  }
  return 0;
}