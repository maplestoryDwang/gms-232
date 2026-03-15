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
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("辛苦了！没想到你的实力很厉害嘛？", 5, 9001060, false, true);
    } else {
      var w = "action分支" + cm.getNumberFromQuestCustomData(9001060);
      eval(w)(f, W, U, V);
    }
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("#b#L0#获取捕猎老鹰奖励#l\r\n\r\n#b#L2#送我回到来的地方吧。", 4, 9001060);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("哈哈！#b捕猎老鹰#k怎么样？\r\n从远处开枪射击，比想象得要简单吧？", 5, 9001060, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("不是只有像哥哥那样在正面对战才厉害嘛！向我这样会动脑子的猎人才能算得上是真正的猎人吧！", 5, 9001060, true, true);
      } else {
        if (status === V++) {
          var w = cm.getNumberFromQuestInfo(15141, 'point');
          if (w <= 500) {
            var N = 2434634;
          } else {
            if (w <= 700) {
              var N = 2434634;
            } else {
              if (w <= 900) {
                var N = 2434635;
              } else {
                var N = 2434636;
              }
            }
          }
          cm.updateAchievement(579, 0, 1, 10);
          cm.updateAchievement(580, 0, 1, 100);
          cm.updateAchievement(581, 0, 1, 1000);
          cm.updateAchievement(582, 0, 1, 1000);
          if (w >= 1100 && cm.getNumberFromQuestInfo(15141, "ammo") == 9) {
            cm.finishAchievement(583);
          }
          cm.sendNormalTalk("此次打怪中，你获得了#b#e700#n#k点啊？\r\n来，这是给你的#i" + N + ":# #b#t" + N + "##k和#b经验值#k，下次再见了！", 5, 9001060, true, true);
        } else {
          if (status === V++) {
            var w = cm.getNumberFromQuestInfo(15141, 'point');
            var u = cm.getPlayer().getLevel();
            if (w <= 500) {
              cm.gainItem(2434634, 1);
              cm.gainExp(Math.pow(u, 3));
            } else {
              if (w <= 700) {
                cm.gainItem(2434634, 2);
                cm.gainExp(Math.pow(u, 3.5));
              } else if (w <= 900) {
                cm.gainItem(2434635, 2);
                cm.gainExp(Math.pow(u, 4));
              } else {
                cm.gainItem(2434636, 1);
                cm.gainExp(Math.pow(u, 4.5));
              }
            }
            cm.updateInfoQuest(15141, '');
            cm.dispose();
            if (!cm.isQuestFinished(64986)) {
              cm.forceCompleteQuest(64986);
            }
            var Q = cm.getNumberFromQuestCustomData(993000500);
            if (isNaN(Q) || Q < 1) {
              Q = 100000000;
            }
            cm.warp(Q, 0);
          }
        }
      }
    }
  }
}
function action分支4(f, W, U, V) {
  if (status <= V++) {
    var w = cm.getNumberFromQuestInfo(15142, 'Stage');
    cm.sendNormalTalk("哎哟~差点出了大事呢！差点就要被#b龙#k抓住了呢！\r\n看着你一点点往上爬的样子，总觉得你也会像我一样变成优秀的赏金猎人呢，哈哈！", 5, 9001060, false, true);
    cm.gainItem(2434634, 1);
  } else {
    if (status === V++) {
      var w = cm.getNumberFromQuestInfo(15142, 'Stage') - 1;
      if (w <= 1) {
        var N = 2434634;
      } else {
        if (w <= 3) {
          var N = 2434634;
        } else {
          if (w <= 5) {
            var N = 2434635;
          } else {
            var N = 2434636;
          }
        }
      }
      cm.updateAchievement(584, 0, 1, 10);
      cm.updateAchievement(585, 0, 1, 100);
      cm.updateAchievement(586, 0, 1, 1000);
      cm.updateAchievement(587, 0, 1, 1000);
      if (w >= 6) {
        cm.finishAchievement(588);
        cm.sendNormalTalk("我说！你居然成功偷到了#b龙蛋#k啊？太了不起了！\r\n来，这是给你的#i" + N + ":# #b#t" + N + "##k和#b经验值#k，下次再见了！", 5, 9001060, true, true);
      } else {
        cm.sendNormalTalk("这次你达到了#b#e" + w + "#n#k阶段啊？\r\n来，这是给你的#i" + N + ":# #b#t" + N + "##k和#b经验值#k，下次再见了！", 5, 9001060, true, true);
      }
    } else {
      if (status === V++) {
        var w = cm.getNumberFromQuestInfo(15142, "Stage") - 1;
        var u = cm.getPlayer().getLevel();
        if (w <= 1) {
          cm.gainItem(2434634, 1);
          cm.gainExp(Math.pow(u, 3));
        } else {
          if (w <= 3) {
            cm.gainItem(2434634, 2);
            cm.gainExp(Math.pow(u, 3.5));
          } else if (w <= 5) {
            cm.gainItem(2434635, 2);
            cm.gainExp(Math.pow(u, 4));
          } else {
            cm.gainItem(2434636, 1);
            cm.gainExp(Math.pow(u, 4.5));
          }
        }
        cm.updateInfoQuest(16150, '');
        cm.addNumberForQuestInfo(500228, 'count', 1);
        cm.updateInfoQuest(15142, 'Stage=0');
        cm.dispose();
        if (!cm.isQuestFinished(64986)) {
          cm.forceCompleteQuest(64986);
        }
        var Q = cm.getNumberFromQuestCustomData(993000500);
        if (isNaN(Q) || Q < 1) {
          Q = 100000000;
        }
        cm.warp(Q, 0);
      }
    }
  }
}
function action分支5(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("你应该见证了我#b#e完美的伪装能力#n#k吧？\r\n哈哈！那些母鸡都被我的#b#e求爱之舞#n#k给迷倒了！", 5, 9001060, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("虽然还不如我，不过你的#b#e求爱之舞#n#k也跳得很不错呢？你果然和我是#b#e同一挂#n#k的猎人呢。", 5, 9001060, true, true);
    } else {
      if (status === V++) {
        var w = cm.getNumberFromQuestInfo(15143, "successcount");
        if (w <= 4) {
          var N = 2434634;
        } else {
          if (w <= 6) {
            var N = 2434634;
          } else {
            if (w <= 8) {
              var N = 2434635;
            } else {
              var N = 2434636;
            }
          }
        }
        cm.updateAchievement(574, 0, 1, 10);
        cm.updateAchievement(575, 0, 1, 100);
        cm.updateAchievement(576, 0, 1, 1000);
        cm.updateAchievement(577, 0, 1, 1000);
        cm.sendNormalTalk("在这次的求爱之舞中，你完美诠释了#b#e" + w + "#n#k次舞蹈动作！\r\n来，这是给你的#i" + N + ":# #b#t" + N + "##k和#b经验值#k，下次再见了！", 5, 9001060, true, true);
      } else {
        if (status === V++) {
          var w = cm.getNumberFromQuestInfo(15143, "successcount");
          var u = cm.getPlayer().getLevel();
          if (w <= 4) {
            cm.gainItem(2434634, 1);
            cm.gainExp(Math.pow(u, 3));
          } else {
            if (w <= 6) {
              cm.gainItem(2434634, 2);
              cm.gainExp(Math.pow(u, 3.5));
            } else if (w <= 8) {
              cm.gainItem(2434635, 2);
              cm.gainExp(Math.pow(u, 4));
            } else {
              cm.gainItem(2434636, 1);
              cm.gainExp(Math.pow(u, 4.5));
            }
          }
          cm.updateInfoQuest(15143, "reward=0;successcount=0");
          cm.updateInfoQuest(16150, '');
          cm.dispose();
          if (!cm.isQuestFinished(64986)) {
            cm.forceCompleteQuest(64986);
          }
          var Q = cm.getNumberFromQuestCustomData(993000500);
          if (isNaN(Q) || Q < 1) {
            Q = 100000000;
          }
          cm.warp(Q, 0);
        }
      }
    }
  }
}