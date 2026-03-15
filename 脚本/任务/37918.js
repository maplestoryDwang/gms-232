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
      cm.askYesNo_Bottom("要继续追吗？", 56, 0, 1);
    } else {
      if (status == v++) {
        cm.updateInfoQuest(37900, "00=h0;01=h0;10=h0;02=h1;20=h0;11=h0;03=h0;21=h0;12=h0;13=h0;04=h0;14=h0;41=h0;05=h0;15=h0;24=h1;06=h0;16=h1;07=h0;25=h1;08=h1;17=h0;09=h0;w2=open;w3=open");
        cm.forceStartQuest(37918, '');
        cm.sendNormalTalk_Bottom("(有闪闪发亮的东西掉在地上)", 56, 0, false, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("这个……是身份牌……？", 56, 0, true, true, 1);
        } else if (status === v++) {
          cm.getTopMsgFont("你必须消灭区域内的所有怪物，才能进入下一个关卡。", 3, 20, 20, 0, 0);
          cm.forceJoinEvent('塞拉斯_清怪1');
          cm.dispose();
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