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
      cm.setAccountQuestInfo(252, "count=7389;T=20210430212148");
      cm.sendNormalTalk_Bottom("#face0#数量增加后，它们可能会壮着胆子发起攻击，\r\n所以提前动手铲除比较好。", 36, 3004850, false, true, 1);
    } else {
      if (status === v++) {
        cm.askYesNo_Bottom("#face0##h0#，你去更深处清理怪物好吗？", 36, 3004850, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#都处理好了就回潜水艇吧。", 36, 3004850, false, true, 1);
        } else if (status === v++) {
          cm.forceStartQuest(37910, '');
          cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h1;21=h0;03=h0;04=h0;05=h0;41=h0;06=h0;24=h1;25=h1;17=h0;09=h0");
          cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;04=h0;05=h0;41=h0;06=h0;24=h1;25=h1;17=h0;09=h0");
          cm.updateInfoQuest(37900, "00=h0;10=h2;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;04=h0;05=h0;41=h0;06=h0;24=h1;25=h1;17=h0;09=h0");
          cm.updateInfoQuest(37900, "00=h0;10=h2;01=h0;11=h0;20=h0;02=h1;12=h0;21=h0;03=h0;04=h2;05=h0;41=h0;06=h0;24=h1;25=h1;17=h0;09=h0");
          cm.OnStartNavigation(450016070, 0, "east00", 37910);
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
      cm.sendNormalTalk_Bottom("#face0#回来得正是时候。", 36, 3004850, false, true, 1);
    } else if (status === v++) {
      cm.forceCompleteQuest(37910);
      cm.gainExp(265476362);
      cm.dispose();
    }
  }
}