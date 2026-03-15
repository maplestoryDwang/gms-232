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
      cm.askAcceptDecline_Bottom("#face0#是左边，快过去。", 36, 3004914, 1);
    } else if (status === v++) {
      cm.forceStartQuest(39418, '');
      cm.updateInfoQuest(39400, "60=h1;51=h0;61=h0;52=h0;62=h0;80=h0;53=h0;63=h0;81=h0;54=h0;64=h0;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0;78=h0");
      cm.updateInfoQuest(39400, "60=h1;51=h0;61=h0;52=h0;62=h0;80=h0;53=h0;63=h0;81=h0;54=h0;64=h0;82=h0;73=h0;65=h1;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0;78=h0");
      cm.OnStartNavigation(410000422, 1, "3004965", 39418);
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
      cm.sendNormalTalk_Bottom("#face0#现在只要经过这里就可以了……", 36, 3004914, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#啊，等一下。", 36, 3004914, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(39418);
        cm.gainExp(6881);
        cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h1;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h1;85=h0");
        cm.dispose();
      }
    }
  }
}