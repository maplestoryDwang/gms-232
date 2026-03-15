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
      cm.sendNormalTalk_Bottom("#face0#刚刚那个家伙是卡德娜，你别看她这样，她可是我们荒蛮终点站的正义使者。", 36, 3001250, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#毕竟前不久才差点发生恐怖袭击事件，可能是稍微有点敏感了吧，还望你能多担待。", 36, 3001250, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face6#没事的，没事的，一点伤都没有嘛！", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1#委托人挺气派的嘛。", 36, 3001250, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#好！难得能聊得来呢。", 36, 3001250, true, true, 1);
            } else if (status === v++) {
              cm.forceStartQuest(36239, '');
              cm.dispose();
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
      cm.sendNormalTalk_Bottom("#face0#你知道吗？影子商团做生意，向来喜欢有来有往。", 36, 3001250, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#毕竟我们团员失礼在先，我也有意补偿，不知你有什么想要的？", 36, 3001250, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#那……我想要点情报。", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#哟，你索要的代价还挺苛刻。", 36, 3001250, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#啊，别误会，我这是在夸你呢，毕竟很少有商品像情报一样有着千差万别的分量。", 36, 3001250, true, true, 1);
            } else if (status === v++) {
              cm.forceCompleteQuest(36239);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}