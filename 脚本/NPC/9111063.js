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
      if (cm.getMapId() == 800000000) {
        cm.askMenu_Bottom("要送什么？\r\n#L0#前往#m100000000##l\r\n#L1#前往#m130000000##k#l", 56, 0);
      } else {
        cm.sendNormalTalk_Bottom("前往#m800000000#。", 37, 9111063, false, true);
      }
    } else {
      if (status === V++) {
        if (cm.getMapId() == 800000000) {
          switch (U) {
            case 0:
              cm.warp(100000000, 0);
              break;
            case 1:
              cm.warp(130000000, 0);
              break;
          }
        } else {
          cm.warp(800000000, 5, false);
        }
        cm.dispose();
      }
    }
  }
}