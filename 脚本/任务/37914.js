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
      cm.askYesNo_Bottom("#face3#再往更深处走走怎么样？", 36, 3004851, 1);
    } else if (status === v++) {
      cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;13=h0;04=h0;14=h0;05=h0;41=h0;06=h0;24=h1;07=h1;25=h1;17=h0;09=h0;w2=open");
      cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;13=h0;04=h0;14=h0;05=h0;41=h0;15=h1;06=h0;24=h1;07=h1;25=h1;17=h0;09=h0;w2=open");
      cm.forceStartQuest(37914, '');
      cm.OnStartNavigation(450016140, 0, 'north00', 37914);
      cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face3#这边有很多残骸。", 36, 3004851, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#希望这回能找到有用的物品。", 36, 3004851, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(37914);
        cm.dispose();
      }
    }
  }
}