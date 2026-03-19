var status = -1;
function action(f, E, e) {
  status++;
  cm.setInGameDirectionMode(false, true);
  cm.setStandAloneMode(false);
  if (cm.getNumberFromQuestInfo(42002, 'f') <= 0) {
    updateUI();
    cm.dispose();
    return;
  }
  var V = cm.getNumberFromQuestInfo(42002, 't', 99999999);
  if (V == 99999999) {
    if (status == 0) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.sendNext("#h #，塔的里面怎么样？", 2540000);
    } else {
      if (status == 1) {
        cm.sendNext("看你在塔中努力的冒险，就给你一份小小的礼物吧。", 2540000);
      } else {
        if (status == 2) {
          cm.sendOk("戒指箱，起源之塔荣誉勋章，经验值，起源点数全部都已经发放了，打开消耗栏确认一下吧。", 2540000);
        } else if (status == 3) {
          reward();
        }
      }
    }
  } else {
    if (status == 0) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.sendNext("#h #，塔的里面怎么样？", 2540000);
    } else {
      if (status == 1) {
        cm.sendNext("#h #，即便使用了朦胧石，依然在回来之前剩余了许多时间啊，虽然我没法将时间完全逆转，但是我可以尝试将剩余时间的一半重新做成石头。\r\n\r\n另外我能够重新研磨的最大时长是所使用的朦胧石时间的一半，如果增加了90分钟就是45分钟。", 2540000);
      } else {
        if (status == 2) {
          cm.sendNext("另外，作为你努力探索塔的奖赏，就给你一份小小的礼物吧。", 2540000);
        } else {
          if (status == 3) {
            cm.sendOk("戒指箱，起源之塔荣誉勋章，经验值，起源点数全部都已经发放了，打开消耗栏确认一下吧。", 2540000);
          } else if (status == 4) {
            reward();
          }
        }
      }
    }
  }
}
var stoneTime = [16, 13, 8, 5, 2];
function reward() {
  cm.curNodeEventEnd(true);
  cm.setInGameDirectionMode(false, true);
  cm.dispose();
  var f = cm.getNumberFromQuestInfo(42002, 'f');
  var E = cm.getNumberFromQuestInfo(42002, 'tf');
  var e = cm.getNumberFromQuestInfo(42002, 't', 99999999);
  var V = 2028272 - Math.floor((f - 1) / 5);
  cm.gainItem(V, 1);
  var O = cm.getNumberFromQuestInfo(42106, "wtt");
  var b = cm.getNumberFromQuestInfo(42024, 'newPoint');
  var w = cm.getNumberFromQuestInfo(42024, 'exp');
  cm.起源之塔_奖励UI(f, O, b, w, V, E);
  cm.gainItem(2433840, Math.floor(f * f / 8));
  if (e != 99999999) {
    var L = Math.floor(e / 2 / 1000 / 60);
    for (var S = 0; S < stoneTime.length; S++) {
      while (L > stoneTime[S]) {
        cm.gainItem(2432442 - S, 1);
        L -= stoneTime[S];
      }
    }
  }
  cm.setNumberForQuestInfo(42002, 'f', 0);
  cm.setNumberForQuestInfo(42002, 't', 99999999);
  cm.setNumberForQuestInfo(42106, "wtt", 0);
  cm.setNumberForQuestInfo(42024, "newPoint", 0);
  cm.setNumberForQuestInfo(42024, 'exp', 0);
  cm.updateInfoQuest(42011, "time=600000;type=1");
  updateUI();
}
function updateUI() {
  cm.updateInfoQuest(42011, cm.getInfoQuest(42011));
  cm.updateInfoQuest(42000, cm.getInfoQuest(42000));
  cm.updateInfoQuest(42012, cm.getInfoQuest(42012));
  var f = cm.getNumberFromQuestInfo(42011, "time");
  cm.updateHeaderUI(1, 0, f, 0, f, 42011);
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;