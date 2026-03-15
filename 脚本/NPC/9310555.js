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
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu_Bottom("#fs13#呵呵……只要有了#t4009374:#，就能制造天魔僵尸。报酬？那个我倒不需要。我想要的是……\r\n#b#L0#制作#i2101317:##t2101317#(需要10个#i4009374:##t4009374#)#l\r\n#L1#制作#i2210189:##t2210189# (需要5个#i4009374:##t4009374#)#l\r\n#L2#制作#i2210188:##t2210188# (需要10个#i4009373:##t4009373#)#l\r\n#k#L3#离开#l", 32, 9310555);
    } else {
      if (status === V++) {
        if (U == 0) {
          if (cm.haveItem(4009374, 10)) {
            cm.removeItem(4009374, 10);
            cm.gainItem(2101317, 1);
            cm.sendOk_Bottom("呵呵，不错嘛。让我看看……", 9310555);
          } else {
            cm.sendOk_Bottom("我需要10个#i4009374:##t4009374#。10个！", 9310555);
          }
        } else {
          if (U == 1) {
            if (cm.haveItem(4009374, 10)) {
              cm.removeItem(4009374, 10);
              cm.gainItem(2210189, 1);
              cm.sendOk_Bottom("呵呵，不错嘛。让我看看……", 9310555);
            } else {
              cm.sendOk_Bottom("我需要5个#i4009374:##t4009374#。10个！", 9310555);
            }
          } else if (U == 2) {
            if (cm.haveItem(4009373, 10)) {
              cm.removeItem(4009373, 10);
              cm.gainItem(2210188, 1);
              cm.sendOk_Bottom("呵呵，不错嘛。让我看看……", 9310555);
            } else {
              cm.sendOk_Bottom("我需要10个#i4009373:##t4009373#。10个！", 9310555);
            }
          }
        }
        cm.dispose();
      }
    }
  }
}