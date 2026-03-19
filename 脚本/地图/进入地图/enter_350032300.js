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
    cm.addPopupSay(1540611, 1500, "我们一起战斗, 让我想起了小时候. ", '', 0);
    cm.addPopupSay(1540612, 1500, "哈哈……那时候真的很开心. ", '', 0);
    cm.addPopupSay(1540611, 1500, "我感觉现在也不赖. ", '', 0);
    cm.addPopupSay(1540612, 1500, "切奇这个人好像有些变化无常. ", '', 0);
    cm.addPopupSay(1540611, 1500, "嗯, 趁他开心时好好表现吧. ", '', 0);
    cm.addPopupSay(1540611, 1500, '好像已经快集齐了吧?', '', 0);
    cm.addPopupSay(1540612, 1500, "这次希望切奇能成功. ", '', 0);
    cm.addPopupSay(1540612, 1500, "漂亮的一击, #h0#!", '', 0);
    cm.addPopupSay(1540611, 1500, "你挺厉害的嘛. ", '', 0);
    cm.addPopupSay(1540612, 1500, "出动, 冒险勇士!!", '', 0);
    cm.addPopupSay(1540611, 1500, "你不必在意, #h0#. 那只是贝尔战斗时的口头禅而已. ", '', 0);
    cm.setPartner(1, 1540624, 80001615, 0);
    cm.setPartner(1, 1540640, 80001616, 0);
    cm.dispose();
    cm.useItem(2023431);
    cm.useItem(2023432);
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;