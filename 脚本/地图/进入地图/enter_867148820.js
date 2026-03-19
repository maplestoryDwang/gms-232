var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    cm.addPopupSay(9401032, 3000, "呼唔，呼唔……我们是不是下得有点太深了？氧气好像也有点不足！呼唔……", '', 0);
    cm.addPopupSay(9401031, 3000, "别哼哼唧唧的，你要是害怕就上去，小鬼。", '', 0);
    cm.addPopupSay(9401032, 3000, "小鬼？！小鬼？！！！我哪里像个小鬼了！", '', 0);
    cm.addPopupSay(9401031, 3000, "… ", '', 0);
    cm.dispose();
  }
}