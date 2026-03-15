var status = 0;
var maps = Array(100000000, 104000000, 102000000, 101000000, 103000000, 120000000, 105000000);
var show;
var sCost;
var selectedMap = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 1 && f == 0) {
    cm.dispose();
    return;
  } else {
    if (status >= 2 && f == 0) {
      cm.sendNext("如果你想移动到其他村庄, 请随时使用我们的出租车~");
      cm.dispose();
      return;
    }
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendNext("你好~!我是#p1012000#。你想快速又安全地移动到其他村庄吗? 那么就请使用令客户百分百满意的#b#p1012000##k吧。这次我给你免费优待!我将会送你去想去的地方。");
  } else {
    if (status == 1) {
      var V = "请选择目的地。#b";
      for (var w = 0; w < maps.length; w++) {
        if (maps[w] != cm.getMapId()) {
          V += "\r\n#L" + w + '##m' + maps[w] + "##l";
        }
      }
      cm.askMenu(V);
    } else {
      if (status == 2) {
        cm.askYesNo("看样子, 你好像已经没有什么事情需要在这里做了。确定要移动到#b#m" + maps[U] + '##k村庄吗?');
        selectedMap = U;
      } else if (status == 3) {
        cm.dispose();
        cm.warp(maps[selectedMap]);
      }
    }
  }
}