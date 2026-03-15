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
  var V = cm.getNumberFromQuestInfo(100630, "point");
  var w = Math.floor(V / 10);
  var N = cm.getNumberFromQuestInfo(100630, "record");
  var u = -1;
  if (status <= u++) {
    cm.dispose();
  } else {
    if (status === u++) {
      if (cm.getMapId() == 993184200) {
        cm.askMenu("#b#e<仙人岩修炼场>#n#k\r\n做好挑战准备了吗？\r\n\r\n#e- 最高得分：#n#r#e" + N + "分#n#k #e#n\r\n#L1# #b进入仙人岩修炼场。#k#l\r\n#L2# 返回#b#m993184000#。#k#l", 4, 9062334);
      } else {
        cm.askMenu("#b#e<仙人岩修炼场>#n#k\r\n非常好，你离觉醒又近了一步。\r\n\r\n#e获得分数：#n#b#e" + V + "分#n#k    #r#e" + (V > N ? "    #r#e（刷新纪录！）" : '') + "#n#k\r\n#e最高得分：#n#r#e" + N + "分#n#k #e#n\r\n#b#L0# 领取奖励。#k #e（" + w + "个觉醒铸币）#n#l\r\n#L1# #b再次挑战。#k#l\r\n#L2# 返回#b#m993184000#。#k#l", 4, 9062334);
      }
    } else {
      if (status === u++) {
        if (cm.getMapId() == 993184200) {
          cm.dispose();
          if (U == 1) {
            cm.openNpc("觉醒活动_仙人岩修炼场");
          } else {
            cm.warp(993184000, 2);
          }
        } else {
          if (U == 0) {
            cm.askYesNo("#b#e<仙人岩修炼场>#n#k\r\n\r\n你要领取#e#b" + w + "#k个觉醒铸币#n吗？", 4, 9062334);
          } else if (U == 1) {
            cm.dispose();
            cm.openNpc("觉醒活动_仙人岩修炼场");
          } else {
            cm.dispose();
            cm.warp(993184000, 2, false);
          }
        }
      } else {
        if (status === u++) {
          cm.sendNormalTalk("拿好了，这是你的#b觉醒铸币#k，我这就送你去#b#m993184000##k。", 4, 9062334, false, true);
        } else if (status === u++) {
          cm.playerMessage(5, "获得了" + w + "个觉醒铸币。");
          cm.addNumberForQuestInfo(501096, 'coinCount', w);
          cm.setNumberForQuestInfo(100630, "record", Math.max(N, V));
          cm.dispose();
          cm.warp(993184000, 2, false);
        }
      }
    }
  }
}