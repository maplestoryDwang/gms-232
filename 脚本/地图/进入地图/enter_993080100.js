var status = -1;
var chair = [3018318, 3018309, 3018293, 3018291, 3018319, 3018310, 3018294, 3018292];
function action(f, E, e) {
  status++;
  for (var V = 0; V < chair.length; V++) {
    if (cm.haveItem(chair[V])) {
      cm.dispose();
      return;
    }
  }
  cm.addPopupSay(0, 10000, "这里是#b#e<大冒险餐厅>#n#k。没有准备好#b<大冒险餐椅>或<大冒险演出椅>#k就进来，总觉得氛围不搭配。\r\n#b※ 前往大冒险币商店中购买相应的椅子吧");
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;