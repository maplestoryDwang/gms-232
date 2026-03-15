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
      cm.sendNormalTalk("哼，你不知不觉已经变得那么强了。很好，这下就能召唤我了。怎么样，你要听一下说明吗？", 5, 9390303, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("从现在起变更模式时,点击#b[上方向键]#k就可以使用我的技能。哼。", 5, 9390303, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("总之,我没必要非得介绍一下吧?那我走了……看你的表情好像不知道其中的原因哦?!", 5, 9390303, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("我来告诉你吧，不过下不为例哦。我的技能在其他模式下无法使用，所以你得记住，在#b按键上设置技能#k时，必须设置成#b我的模式专用#k才行！", 5, 9390303, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("啊，对了，你把这个拿着吧。不过你可要搞清楚！我给你这个，并不代表你令我满意。\r\n#i1142674:##b#t1142674:##k", 5, 9390303, true, true);
              cm.spawnMobLimit(9390941, 1, 917, 126, 100);
              cm.spawnMobLimit(9390941, 1, 1024, 126, 100);
              cm.spawnMobLimit(9390941, 1, 759, 126, 100);
              cm.spawnMobLimit(9390941, 1, 569, 126, 100);
            } else if (status === v++) {
              cm.teachSkill(110001503, 0, -1);
              cm.teachSkill(110001503, 1, 1);
              cm.teachSkill(110001503, 1, 1);
              cm.updateInfoQuest(59030, "jump=1");
              cm.forceCompleteQuest(59030);
              cm.gainItem(1142674, 1);
              cm.gainItem(346319616, 256);
              cm.effect_OnUserEff("Effect/Direction14.img/effect/ShamanBT/modeChange/2");
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}