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
      cm.askMenu("你要回次元图书馆吗? \r\n\r\n#b#L0#前往次元图书馆。 #l\r\n", 2500001);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("记住当前位置。", 5, 2500001, false, true);
      } else {
        if (cm.getMapId() < 303000000) {
          var w = 1;
        } else {
          if (cm.getMapId() < 304000000) {
            var w = 2;
          } else {
            if (cm.getMapId() < 306000000) {
              var w = 3;
            } else {
              if (cm.getMapId() < 307000000) {
                var w = 4;
              } else {
                if (cm.getMapId() < 308000000) {
                  var w = 5;
                } else {
                  var w = 6;
                }
              }
            }
          }
        }
        cm.setNumberForQuestInfo(32990, 'ep' + w, cm.getMapId());
        cm.dispose();
        cm.warp(302000000, 0);
      }
    }
  }
}