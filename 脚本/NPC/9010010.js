var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  var V = -1;
  selectionLog[status] = U;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("不知道今天水晶球里会出现什么。\r\n\r\n#b#L0#我想知道最近正在进行的活动。#l", 9010010);
    } else {
      if (status === V++) {
        var w = cm.getUpdateLog();
        var N = w.split("\n");
        var u = '';
        for (var V = 0; V < N.length; V++) {
          if (N[V].indexOf("更新日志") > 0) {
            u += "#fUI/Basic.img/Cursor/32/0##k#e" + N[V] + "\r\n";
          } else {
            u += '#k#n' + N[V].replace("[主题副本]", "#e#b[#n主题副本#e]#n#k").replace('修复', "#r修复#k").replace('更新', "#g更新#k").replace('添加', "#g添加#k") + "\r\n";
          }
        }
        cm.sendOk(u, 2140003);
      } else if (status == V++) {
        cm.dispose();
      }
    }
  }
}