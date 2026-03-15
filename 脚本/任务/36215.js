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
      cm.sendNormalTalk_Bottom("#face0#快去交给奶奶吧。", 36, 3005102, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#啊，等等我~", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.askYesNo_Bottom("#face0#去#b图梅古董店#k看看吧？", 36, 3005100, 1);
        } else if (status === v++) {
          cm.forceStartQuest(36215, '');
          cm.updateInfoQuest(36200, "50=h0;51=h0;70=h0;52=h0;53=h1;55=h0;76=h0;59=h0;77=h0;78=h0;set=1");
          cm.updateInfoQuest(36200, "50=h0;51=h0;70=h1;52=h0;53=h1;55=h0;76=h0;59=h0;77=h0;78=h0;set=1");
          cm.updateInfoQuest(36200, "50=h0;51=h0;70=h1;52=h0;53=h1;55=h0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
          cm.updateInfoQuest(36200, "50=h0;60=h1;51=h0;70=h1;52=h0;53=h1;55=h0;57=h0;76=h0;59=h0;77=h0;78=h0;set=1");
          cm.OnStartNavigation(410004002, 1, "3005160", 36215);
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
      cm.sendNormalTalk_Bottom("#face0#什么？奶奶去了哪里？", 36, 3005102, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#她的身体状况每况愈下，就决定今天休息了。", 36, 3005114, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(36215);
        cm.gainExp(5285);
        cm.gainExp(474);
        cm.dispose();
      }
    }
  }
}