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
    cm.addPopupSay(1540612, 1000, "只要再搜集一些就行了. \r\n继续加油吧. ", '', 0);
    cm.addPopupSay(1540612, 1500, "漂亮的一击!", '', 0);
    cm.addPopupSay(1540611, 1500, "#h0#, 漂亮的一击. ", '', 0);
    cm.addPopupSay(1540612, 1500, "美洲豹应该已经饿了……我要给它喂食. ", '', 0);
    cm.addPopupSay(1540611, 1500, "如果我能背着你, 即使不吃东西, 我也不会感觉饿. ", '', 0);
    cm.addPopupSay(1540612, 1500, "呕!!我听不见~!\r\n啊啊~我听不见~!", '', 0);
    cm.useItem(2023431);
    cm.useItem(2023432);
    cm.setPartner(1, 1540624, 80001615, 0);
    cm.setPartner(1, 1540640, 80001616, 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;