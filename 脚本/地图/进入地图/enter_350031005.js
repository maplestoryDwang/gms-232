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
    cm.forceForfeitQuest(33182);
    cm.forceForfeitQuest(33183);
    cm.forceForfeitQuest(33184);
    cm.npc_ChangeController(1540446, "oid=34975", -453, 144, 47, -503, -451, 1, false, 0, false);
    cm.updateInfoQuest(33181, "faker1=0");
    cm.updateInfoQuest(33181, "faker1=0;faker2=0");
    cm.updateInfoQuest(33181, "faker1=0;faker2=0;faker3=0");
    cm.updateInfoQuest(33181, "army=0;faker1=0;faker2=0;faker3=0");
    cm.updateInfoQuest(33182, '');
    cm.updateInfoQuest(33183, '');
    cm.updateInfoQuest(33184, '');
    cm.setPartner(1, 1540624, 80001615, 0);
    cm.useItem(2023432);
    cm.addPopupSay(1540624, 1200, "这里的烟雾好浓!眼睛熏得想流泪!", '', 0);
    cm.addPopupSay(1540624, 1200, "这里什么人都没有. \r\n我担心正在房间里休息的士兵们. ", '', 0);
    cm.addPopupSay(1540624, 1200, "我们抓紧时间到右边走廊那里看看吧!", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;