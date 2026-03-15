var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk("回想#h0#你当初的样子，现在的你真是发生了巨大的变化啊。", 4, 9390343, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("没错。你这段时间的表现真是非常惊人。", 4, 9390341, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("这是为你准备的特殊礼物。不是任何地方都能得到的哦。", 4, 9390342, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("这是我们的心意，请你收下吧！", 4, 9390340, true, true);
          } else if (status === v++) {
            cm.forceCompleteQuest(62395);
            cm.sendNormalTalk("这跟你很配啊！", 4, 9390340, true, false);
            cm.gainItem(1191108, 1);
            cm.dispose();
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}