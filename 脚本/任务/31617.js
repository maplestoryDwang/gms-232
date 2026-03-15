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
      cm.sendNormalTalk("#b可怜的#p3001007#..这么大岁数了，还得执行侦察任务，被战斗犬追得来回跑……", 16, 0, false, true);
    } else {
      if (status === v++) {
        cm.askAcceptDecline("#b好了！我决定了！为了可怜的#p3001007#，我就去做侦察任务吧。\r\n#b#e(接受后，即刻移动到战场地图。需要重新开始时，请放弃任务。)#k#n#k", 16, 0);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#b每个角落都要仔细侦察，如果将敌人的位置告诉伊黛娜，苍龙炮就该喷火了吧？还有侦察中如果看到了怪物，就顺便消灭掉吧。好了，去吧！", 16, 0, false, true);
        } else if (status === v++) {
          cm.forceStartQuest(31617, '');
          cm.forceJoinEvent("爆莉萌天使_赫里希安_清怪2");
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