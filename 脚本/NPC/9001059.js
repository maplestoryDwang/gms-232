var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  f == 1 ? status++ : status--;
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++)
    cm.dispose();
  else if (status === V++)
    cm.sendNormalTalk('你也是个优秀的猎人……辛苦你了。', 5, 9001059, false, true);
  else {
    var w = 'action分支' + cm.getNumberFromQuestCustomData(9001060);
    eval(w)(f, W, U, V);
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++)
    cm.sendNormalTalk('我看到了，即便在那凶残的#r#e火焰狼#n#k面前，你也没有半分的胆怯，而是英勇奋战。', 4, 9001059, false, true);
  else if (status === V++)
    cm.sendNormalTalk('能有你这样优秀的猎人帮我的忙，相信#r#e火焰狼#n#k很快就会玩完了……', 4, 9001059, true, true);
  else if (status === V++) {
    var W = [
      '普通',
      '巨大',
      '惊人',
      '致命'
    ];
    var w = 5200000000;
    var N = cm.getNumberFromQuestInfo(993000501, 'damage');
    if (N <= w / 100)
      var u = 0;
    else if (N <= w / 20)
      var u = 1;
    else if (N <= w / 10)
      var u = 2;
    else
      var u = 3;
      cm.playerMessage(5, '本次造成伤害:'+ N);

    cm.sendNormalTalk('你对火焰狼造成了#b#e' + W[u] + '#n#k的伤害！\r\n根据你的贡献度，我会先给你相应的#b经验值#k。', 4, 9001059, true, true);
  } else if (status === V++)
    cm.sendNormalTalk('日后会有许多勇士继你之后对#r#e火焰狼#n#k造成伤害的，如果#r#e火焰狼#n#k死在其他勇士的手上，你也会根据相应的#b#e贡献度#n#k获得#b#e道具#n#k奖励。', 4, 9001059, true, true);
  else if (status === V++) {
    cm.dispose();
    var Q = cm.getNumberFromQuestCustomData(993000500);
    if (isNaN(Q) || Q < 1)
      Q = 100000000;
    cm.warp(Q, 0);
    var w = 5200000000;
    var N = cm.getNumberFromQuestInfo(993000501, 'damage');
    if (N <= w / 100) {
      cm.gainSubAchievement(602, 0);
      cm.gainItem(2434634, 1);
    } else if (N <= w / 20) {
      cm.gainSubAchievement(602, 1);
      cm.gainItem(2434634, 1);
      cm.gainItem(2434635, 1);
    } else if (N <= w / 10) {
      cm.gainSubAchievement(602, 2);
      cm.gainItem(2434635, 2);
    } else {
      cm.gainItem(2434636, 1);
      cm.gainSubAchievement(602, 3);
      cm.finishAchievement(603);
    }
    cm.playerMessage(5, '本次造成伤害:'+ N);
    cm.updateAchievement(598, 0, 1, 10);
    cm.updateAchievement(599, 0, 1, 100);
    cm.updateAchievement(600, 0, 1, 1000);
    cm.updateAchievement(601, 0, 1, 1000);
    cm.updateInfoQuest(16150, '');
    cm.forceForfeitQuest(15148);
    cm.updateInfoQuest(100020, 'FWEXP=0');
    cm.gainExp(Math.min(N, cm.getExpNeededForLevel() * 0.8));
    cm.updateInfoQuest(993000501, '0');
    cm.addNumberForQuestInfo(16407, 'count', 1);
    if (!cm.isQuestFinished(64988)) {
      cm.forceCompleteQuest(64988);
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++)
    cm.sendNormalTalk('呼……这次的狩猎很难啊。\r\n跟你长相比起来，实力还不错嘛？谢啦。', 5, 9001059, false, true);
  else if (status === V++)
    cm.sendNormalTalk('日后只要你认真狩猎，就能遇到我们#r#e赏金猎人兄弟#n#k。', 5, 9001059, true, true);
  else if (status === V++) {
    var w = cm.getNumberFromQuestCustomData(9930001);
    if (w <= 2)
      var N = 2434634;
    else if (w <= 4)
      var N = 2434634;
    else if (w <= 5)
      var N = 2434635;
    else
      var N = 2434636;
    cm.updateAchievement(589, 0, 1, 10);
    cm.updateAchievement(590, 0, 1, 100);
    cm.updateAchievement(591, 0, 1, 1000);
    cm.updateAchievement(592, 0, 1, 1000);
    cm.sendNormalTalk('这是给你的#i' + N + ':# #b#t' + N + '##k和#b经验值#k。我就送你回到我们当初见面的地方吧，慢走。', 5, 9001059, true, true);
  } else if (status === V++) {
    var w = cm.getNumberFromQuestCustomData(9930001);
    var u = cm.getPlayer().getLevel();
    if (w <= 2) {
      cm.gainItem(2434634, 1);
      cm.gainExp(Math.min(Math.pow(u, 3), cm.getExpNeededForLevel() * 0.5));
    } else if (w <= 4) {
      cm.gainItem(2434634, 2);
      cm.gainExp(Math.min(Math.pow(u, 3.5), cm.getExpNeededForLevel() * 0.6));
    } else if (w <= 5) {
      cm.gainItem(2434635, 2);
      cm.gainExp(Math.min(Math.pow(u, 4), cm.getExpNeededForLevel() * 0.7));
    } else {
      cm.gainItem(2434636, 1);
      cm.gainExp(Math.min(Math.pow(u, 4.5), cm.getExpNeededForLevel() * 0.8));
    }
    cm.updateInfoQuest(16150, '');
    cm.dispose();
    if (!cm.isQuestFinished(64986)) {
      cm.forceCompleteQuest(64986);
    }
    var Q = cm.getNumberFromQuestCustomData(993000500);
    if (isNaN(Q) || Q < 1)
      Q = 100000000;
    cm.warp(Q, 0);
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++)
    cm.sendNormalTalk('呼……这次的狩猎很难啊。\r\n跟你长相比起来，实力还不错嘛？谢啦。', 5, 9001059, false, true);
  else if (status === V++)
    cm.sendNormalTalk('日后只要你认真狩猎，就能遇到我们#r#e赏金猎人兄弟#n#k。', 5, 9001059, true, true);
  else if (status === V++) {
    var w = cm.getNumberFromQuestCustomData(9930001);
    if (w == 1)
      var N = 2434634;
    else if (w == 2)
      var N = 2434634;
    else if (w == 3)
      var N = 2434635;
    else
      var N = 2434636;
    cm.updateAchievement(593, 0, 1, 10);
    cm.updateAchievement(594, 0, 1, 100);
    cm.updateAchievement(595, 0, 1, 1000);
    cm.updateAchievement(596, 0, 1, 1000);
    cm.sendNormalTalk('这是给你的#i' + N + ':# #b#t' + N + '##k和#b经验值#k。我就送你回到我们当初见面的地方吧，慢走。', 5, 9001059, true, true);
  } else if (status === V++) {
    var w = cm.getNumberFromQuestCustomData(9930001);
    var u = cm.getPlayer().getLevel();
    if (w == 1) {
      cm.gainItem(2434634, 1);
      cm.gainExp(Math.min(Math.pow(u, 3), cm.getExpNeededForLevel() * 0.5));
    } else if (w == 2) {
      cm.gainItem(2434634, 2);
      cm.gainExp(Math.min(Math.pow(u, 3.5), cm.getExpNeededForLevel() * 0.6));
    } else if (w == 3) {
      cm.gainItem(2434635, 2);
      cm.gainExp(Math.min(Math.pow(u, 4), cm.getExpNeededForLevel() * 0.7));
    } else {
      cm.gainItem(2434636, 1);
      cm.gainExp(Math.min(Math.pow(u, 4.5), cm.getExpNeededForLevel() * 0.8));
    }
    cm.updateInfoQuest(16150, '');
    cm.dispose();
    if (!cm.isQuestFinished(64986)) {
      cm.forceCompleteQuest(64986);
    }
    var Q = cm.getNumberFromQuestCustomData(993000500);
    if (isNaN(Q) || Q < 1)
      Q = 100000000;
    cm.warp(Q, 0);
  }
}
function action分支6(f, W, U, V) {
  if (status <= V++)
    cm.sendNormalTalk('呼……这次的狩猎很难啊。\r\n跟你长相比起来，实力还不错嘛？谢啦。', 5, 9001059, false, true);
  else if (status === V++)
    cm.sendNormalTalk('日后只要你认真狩猎，就能遇到我们#r#e赏金猎人兄弟#n#k。', 5, 9001059, true, true);
  else if (status === V++) {
    var w = cm.getNumberFromQuestCustomData(9930001);
    if (w <= 1)
      var N = 2434634;
    else if (w <= 2)
      var N = 2434634;
    else if (w <= 4)
      var N = 2434635;
    else
      var N = 2434636;
    cm.sendNormalTalk('这是给你的#i' + N + ':# #b#t' + N + '##k和#b经验值#k。我就送你回到我们当初见面的地方吧，慢走。', 5, 9001059, true, true);
  } else if (status === V++) {
    var w = cm.getNumberFromQuestCustomData(9930001);
    var u = cm.getPlayer().getLevel();
    if (w <= 1) {
      cm.gainItem(2434634, 1);
      cm.gainExp(Math.min(Math.pow(u, 3), cm.getExpNeededForLevel() * 0.5));
    } else if (w <= 2) {
      cm.gainItem(2434634, 2);
      cm.gainExp(Math.min(Math.pow(u, 3.5), cm.getExpNeededForLevel() * 0.6));
    } else if (w <= 4) {
      cm.gainItem(2434635, 2);
      cm.gainExp(Math.min(Math.pow(u, 4), cm.getExpNeededForLevel() * 0.7));
    } else {
      cm.gainItem(2434636, 1);
      cm.gainExp(Math.min(Math.pow(u, 4.5), cm.getExpNeededForLevel() * 0.8));
    }
    cm.updateInfoQuest(16150, '');
    cm.dispose();
    if (!cm.isQuestFinished(64986)) {
      cm.forceCompleteQuest(64986);
    }
    var Q = cm.getNumberFromQuestCustomData(993000500);
    if (isNaN(Q) || Q < 1)
      Q = 100000000;
    cm.warp(Q, 0);
  }
}