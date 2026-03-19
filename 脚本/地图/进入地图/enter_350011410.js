var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.dispose();
    cm.setPartner(1, 1540765, 80001594, 0);
    cm.setPartner(1, 1540766, 80001595, 0);
    cm.setPartner(1, 1540767, 80001596, 0);
    if (cm.getNumberFromQuestInfo(33151, "黑色之翼密码锁") == 0) {
      cm.setNumberForQuestInfo(33151, "黑色之翼密码锁", 1);
      cm.addPopupSay(1540503, 3000, "咳, 我们是天才, 队长!", "Voice3.img/BlackHeaven/3_3/1");
      cm.addPopupSay(1540502, 2000, "你明明什么都没做啊, 德皮. ", "Voice3.img/BlackHeaven/3_3/2");
      cm.addPopupSay(1540504, 1000, "好像能通过那电缆爬到上方. ", '');
    }
    cm.useItem(2023418);
    cm.useItem(2023419);
    cm.useItem(2023420);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;