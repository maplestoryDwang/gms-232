var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  if (cm.isQuestActive(64764)) {
    action1(f, E, e);
  } else {
    action2(f, E, e);
  }
}
function action2(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getMapId() == 867147400 && cm.isQuestFinished(64771) && cm.getNumberFromQuestInfo(64764, "talk") == 0) {
        cm.warp(867147015, 0, true);
        cm.updateInfoQuest(64764, "chk1=1;chk2=1;talk=1");
        return;
      }
      if (cm.getMapId() == 867147700 && cm.isQuestFinished(64773) && cm.getQuestStatus(64774) == 0) {
        cm.warp(867147017, 0, true);
        return;
      }
      if (cm.getMapId() == 867147800 && cm.isQuestFinished(64775) && cm.getQuestStatus(64776) == 0) {
        cm.warp(867147019, 0, true);
        return;
      }
      if (cm.getMapId() == 867148000 && cm.isQuestFinished(64778) && cm.getQuestStatus(64779) == 0) {
        cm.warp(867147021, 0, true);
        return;
      }
      if (cm.getMapId() == 867148300 && cm.isQuestFinished(64782) && cm.getQuestStatus(64783) == 0) {
        cm.warp(867147023, 0, true);
        return;
      }
      if (cm.getMapId() == 867148300 && cm.isQuestActive(64784)) {
        cm.warp(867147025, 0, true);
        return;
      }
      if (cm.getMapId() == 867148400 && cm.isQuestFinished(64784) && cm.getQuestStatus(64785) == 0) {
        cm.warp(867147027, 0, true);
        return;
      }
      if (cm.getMapId() == 867148400 && cm.isQuestActive(64786)) {
        cm.warp(867147028, 0, true);
        return;
      }
      if (cm.getQuestStatus(64771) > 0) {
        cm.onActionBarResult(5, 1013);
      }
      var O = cm.getNumberFromQuestInfo(64754, 'time');
      cm.深渊远征队_更新倒计时();
      cm.scheduleWarpTask(O, 867147001, 3, false);
      cm.dispose();
    }
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("唰-接住我的圣箭术吧！", 37, 9401029, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#b我做什么好呢？", 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我看看……现在几点了？15点57分啊。", 37, 9401029, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("综合目前为止的远征队带回的情报，#b深渊影子会在每点钟的0分，30分出现#k。", 37, 9401029, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("消灭暗影能够获得大量声望，偶尔还会获得不错的道具，除此之外，还可以获得特殊效果，所以为了我们远征队的成长，还是尽量多消灭一些为好吧？", 37, 9401029, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b#b0分，30分……#k ", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("没错！不愧是我们队长，一次就记住了！", 37, 9401029, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("啊对了，还有别忘了刚才从芽芽那里接受的调查任务。", 37, 9401029, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b谢谢你，莫妮卡。要是没有莫妮卡可真不行。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("嘿嘿，我感觉突然之间又充满了力量呢？再次出动吧！", 37, 9401029, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("对了，队长！在深渊里，#b怪物不会攻击队长，所以你可以放心歇着！#k (眨眼)", 37, 9401029, true, true);
                        } else {
                          if (status === V++) {
                            cm.forceCompleteQuest(64764);
                            var O = cm.getNumberFromQuestInfo(64754, 'time');
                            cm.深渊远征队_更新倒计时();
                            cm.scheduleWarpTask(O * 1000, 867147001, 3, false);
                            cm.dispose();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}