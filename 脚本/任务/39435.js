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
      cm.sendNormalTalk_Bottom("幸会，我是冒险家代表赫丽娜，我听说你正在旅行。", 36, 3003658, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("虽说旅行的经历千千万，可其中最让人记忆深刻的还是人。", 36, 3003658, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("去广交朋友，了解他们的难处，帮助他们，这应该是身为冒险家最棒的旅途。", 36, 3003658, true, true, 1);
        } else {
          if (status === v++) {
            cm.askAcceptDecline_Bottom("这里也有不少有各式各样故事的人，你要去看看吗？", 36, 3003658, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("这么想就对了，一定会成为美好的回忆的。", 36, 3003658, false, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("那请稍等片刻，我会看看大家的故事的。", 36, 3003658, true, true, 1);
              } else if (status === v++) {
                cm.forceStartQuest(39435, '');
                cm.dispose();
              }
            }
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
      cm.sendNormalTalk_Bottom("在众多故事之中，这些应该挺合适的。\r\n“妖精学院艾利涅”、“金海滩度假村”、“列娜海峡”、“秘密森林艾洛丁”。", 36, 3003658, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("你打算去哪儿？只要你愿意，都可以去看看。\r\n\r\n#r\u3000※可通过画面左侧的电灯泡提示接受。", 36, 3003658, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(39435);
        cm.dispose();
      }
    }
  }
}