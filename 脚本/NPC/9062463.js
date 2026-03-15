var status = -1;
var selectionLog = [];
function start() {
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
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("你好！我是#e商人界的新星#n卡琳！\r\n\r\n#L0#我想光顾#r#e<焕新宝石商店>#n！#k#l\r\n#L1#我想购买#b#e<焕新宝石>#n！#k#l", 4, 9062463);
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.dispose();
          cm.openShop(9062464);
        } else {
          cm.sendNormalTalk("这可是特别为#b#h0##k#n#k你准备的福利！\r\n那便是……！\r\n\r\n\r\n#e1个#k#n#b#i4310307:##t4310307##r#e卖#n#k#e5个#k#n#r#i4310306:##t4310306#！\r\n\r\n\r\n#r※焕新宝石的购买到2021年10月19日23点59分截止。", 4, 9062463, false, true);
        }
      } else {
        if (status === V++) {
          cm.askYesNo("怎么样？\r\n这可不是天天都有的机会！\r\n\r\n你要用#e5个#k#r#i4310306:##t4310306##n购买#e1个#k#b#e#b#i4310307:##t4310307##n吗？\r\n\r\n\r\n#r※购买的焕新宝石#e在每日获取量限制范围内#n。", 4, 9062463);
        } else {
          if (status === V++) {
            cm.askNumber("要购买几个#b#i4310307:##t4310307##k？\r\n\r\n #e - 当前持有#i4310306:##t4310306#：#r" + cm.getItemQuantity(4310306) + '个', 9062463, 100, 1, 100, 4);
          } else {
            if (status === V++) {
              if (cm.getItemQuantity(4310306) >= U * 5) {
                cm.gainItem(4310307, U);
                cm.gainItem(4310306, U * 5);
                cm.sendNormalTalk("这是#b" + U + "个#i4310307:##t4310307##k，请收好！", 4, 9062463, false, false);
              } else {
                cm.sendNormalTalk("你手上的#b#i4310306:##t4310306##k数量不太够啊？\r\n\r\n#r#e不好意思 ，天底下可没有免费的午餐。", 4, 9062463, false, false);
              }
            } else if (status === V++) {
              cm.dispose();
            }
          }
        }
      }
    }
  }
}