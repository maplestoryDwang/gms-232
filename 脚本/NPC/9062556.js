var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(T, C, e) {
  if (cm.getNumberFromQuestInfo(501469, "shopTuto1") == 0) {
    action0(T, C, e);
  } else {
    action1(T, C, e);
  }
}
function action0(T, C, e) {
  if (status == 0 && T == 0) {
    cm.dispose();
    return;
  }
  if (T == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = e;
  var F = -1;
  if (status <= F++) {
    cm.dispose();
  } else {
    if (status === F++) {
      cm.sendNormalTalk("（你是第一次来粉红豆商店的#b#e创作者新人#n#k啊……？）", 4, 9062556, false, true, 0);
    } else {
      if (status === F++) {
        cm.sendNormalTalk("哈哈！您是第一次来我们粉红豆商店呢，\r\n如果你能拿来#r#e#i4310312# #t4310312##n#k，我便让您看看我这里的宝贝。", 4, 9062556, true, true, 0);
      } else {
        if (status === F++) {
          cm.sendNormalTalk("当然创作者新人是买不了什么物品的……\r\n哈哈！你要快快红起来，多收集点#r#e#i4310312# #t4310312##n#k吧。", 4, 9062556, true, true, 0);
        } else if (status === F++) {
          cm.setNumberForQuestInfo(501469, "shopTuto1", 1);
          cm.dispose();
        }
      }
    }
  }
}
function action1(T, C, e) {
  cm.dispose();
  cm.openShop(9062557);
}