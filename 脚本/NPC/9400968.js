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
      var w = cm.getNumberFromQuestInfo(64685, 'point');
      var N = cm.getNumberFromQuestInfo(500830, 'record');
      var u = Math.floor(w / 10);
      var Q = "#b很棒的烟花秀！可以称得上是几乎完美了。\r\n\r\n#e获得分数: #n#b#e" + w + "分#n#k    #r#e";
      if (w > N) {
        cm.setNumberForQuestInfo(500830, "record", w);
        Q += "(达成新纪录！)";
      }
      Q += "#n#k\r\n";
      var m = cm.getStringFromQuestInfo(500830, "lastday");
      if (m !== cm.getNowTimeString(3)) {
        Q += "#L0# #b获得奖励。#k #e(日冕积分 " + u + "分)#n#l\r\n";
      }
      Q += "#L1# #b重新挑战。#k#l\r\n#L2# #b返回原来所在地点。#k#l";
      cm.askMenu(Q, 4, 9400963);
    } else {
      if (status === V++) {
        if (U == 1) {
          cm.dispose();
          cm.openNpc(9400963, "活动_日冕烟花秀");
          return;
        } else {
          if (U == 2) {
            cm.dispose();
            cm.warp(867139000, 8);
            return;
          }
        }
        cm.askYesNo("来，这是一点小小的心意。(※注意※#n#k #r#e每天在每个世界只能领取1次#n#k奖励。)", 4, 9400963);
      } else {
        if (status === V++) {
          var w = cm.getNumberFromQuestInfo(64685, 'point');
          var N = cm.getNumberFromQuestInfo(500830, "record");
          var u = Math.floor(w / 10);
          var m = cm.getStringFromQuestInfo(500830, 'lastday');
          cm.setStringForQuestInfo(500830, "lastday", cm.getNowTimeString(3));
          cm.setNumberForQuestInfo(64685, "point", 0);
          cm.addNumberForQuestInfo(500828, "point", u);
          cm.addNumberForQuestInfo(500828, 'sum', u * 100);
          cm.playerMessage(5, '获得了' + u + '分日冕积分。');
          cm.dispose();
          cm.warp(867139000, 8);
        }
      }
    }
  }
}