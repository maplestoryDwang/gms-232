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
    cm.addPopupSay(1540458, 2000, "你是来帮忙回收粮食的啊!", '');
    cm.addPopupSay(1540458, 2000, "我正好在为此苦恼呢, 真是太好了. ", '');
    cm.addPopupSay(1540459, 1000, "话说, 你真的很有实力啊. ", '');
    cm.addPopupSay(1540459, 1000, "能和你一起战斗是我的荣幸. ", '');
    cm.addPopupSay(1540459, 1000, "我们的对手是黑色之翼……不是这种小麻雀……", '');
    cm.addPopupSay(1540459, 1000, "算了, 就当做是热身吧. ", '');
    cm.addPopupSay(1540458, 1000, "雾实在是太浓了. ", '');
    cm.addPopupSay(1540458, 1000, "像这样的天气, 即使敌人就在眼前, 那也很难看到. ", '');
    cm.addPopupSay(1540458, 1000, "饼干真的很好吃吧. ", '', 0);
    cm.addPopupSay(1540458, 1000, "不过, 如果和星星糖一起吃, 那简直美味到让人哭出来. ", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;