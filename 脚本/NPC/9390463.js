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
      cm.askMenu("难道血量不够吗喵?那就由我这个专家来为你恢复好了喵。\r\n但,仅限于此喵!\r\n\r\n#e#b#L0# 嗯! 血量不够。#l\r\n#e#L1# 还好。#l#n", 0, 9390463);
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.sendNormalTalk("喵嗯~~~！！！喵喵猫喵喵嗯！！！！\r\n阿尔要#e#b施展超能完美喵喵血量恢复#k#n！", 0, 9390463, false, true);
          cm.addHP(500000);
        } else {
          cm.sendNormalTalk("需要的话,就跟我说哦。我会让你见识下我的特技哦。", 0, 9390463, false, false);
          cm.dispose();
        }
      } else {
        if (status === V++) {
          cm.sendNormalTalk("...........???", 0, 9390463, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("为什么那么看我喵？\r\n你不会是真的相信吧？？\r\n不过血量应该已经恢复了！", 0, 9390463, true, true);
          } else if (status === V++) {
            cm.dispose();
          }
        }
      }
    }
  }
}