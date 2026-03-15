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
      cm.askMenu_Bottom("剪刀、石头、布！我们就赌赌看最后谁会赢吧！对了，我会出#b布#k，我可不说谎哦。#b\r\n#L0#出剪刀。#l\r\n#L1#出石头。#l\r\n#L2#出布。#k#l\r\n\r\n#L3#无视。#l", 128, 1540873);
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.sendNormalTalk_Bottom("剪刀、石头、布！哦，你出了#b石头#k呢……我说了我要出#b布#k哦……好可惜啊，我赢了，嘿嘿。", 36, 1540873, false, true);
        } else {
          if (U == 1) {
            cm.sendNormalTalk_Bottom("剪刀、石头、布！我按照约定出了#b布#k！你赢了！", 36, 1540873, false, true);
          } else if (U == 2) {
            cm.sendNormalTalk_Bottom("剪刀、石头、布！哎？我说了我要出#b布#k，你跟我出的一样吗？我们打平了。", 36, 1540873, false, true);
          } else {
            cm.sendNormalTalk_Bottom("额，咦？你不打算跟我打赌吗？那没办法了。", 36, 1540873, false, false);
          }
        }
      } else {
        cm.dispose();
      }
    }
  }
}