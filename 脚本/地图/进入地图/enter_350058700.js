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
    cm.npc_ChangeController(1540446, "oid=55836", 242, 61, 7, 192, 292, 1, false, 0, false);
    cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350058700");
    cm.setPartner(1, 1540722, 80001602, 0);
    cm.addPopupSay(1540453, 2000, "从现在开始, 就只有我们两个人了. ", '', 0);
    cm.addPopupSay(1540453, 2000, "我们抓紧时间吧, 搭乘最后的升降机!", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;