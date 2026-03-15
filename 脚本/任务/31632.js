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
      cm.sendNormalTalk("好，很满意。这样下去，我影子商团的高层领导，业绩王的位置是不是危险了？", 0, 3001031, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("嘿嘿。有任务请随时吩咐。", 2, 3001031, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("别太得意了。现在只是完成了加入商团的第一步。接下来我要告诉你第二次考验的内容。第二次考验就是是是是是……", 0, 3001031, true, true);
        } else {
          if (status === v++) {
            cm.askAcceptDecline("“到哪里寻找物品呢”。通过第一次考验，证明你有能力找到物品，这第二次考验可以说就是信息战。从哪里找我不管，但必须给我找到#r彪鲁纪念币#k。给你个小提示，这东西属于冒险世界哦。它能卖出高价，所以也不用多，就给我找#r#e1000个左右#k#n吧。怎么样，能做到吗？", 0, 3001031);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("吼吼。果然是不知道拒绝的爆莉萌天使的风格啊？那我就在这恭候了。", 0, 3001031, false, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("#r彪鲁纪念币#k……找1000个，怎么办呢……嗯？#t2430942#又响了？是谁呢？", 2, 3001031, true, true);
              } else if (status === v++) {
                cm.forceStartQuest(31632, '');
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}