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
      cm.sendNormalTalk("我们一直在等你呢，#b#ho##k。老实说，我对你现在的样子感到非常惊讶。你这段时间的表现真是大大超出我的期待啊。", 4, 9390342, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("朋友，我们会一直为你加油的。所有森林伙伴都对你的成长感到无比骄傲。", 4, 9390343, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("没错！我为#h0#你感到非常骄傲！", 4, 9390341, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("这是我们给你的礼物！这证明你是我们的朋友，同时也证明你具备非常强大的实力！", 4, 9390340, true, true);
          } else if (status === v++) {
            cm.forceCompleteQuest(62396);
            cm.sendNormalTalk("我们非常喜欢#h0#你！我们是永远的好朋友！", 4, 9390340, true, false);
            cm.gainItem(1191109, 1);
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