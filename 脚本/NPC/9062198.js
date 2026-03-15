var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = "action" + cm.getMapId();
  eval(V)(f, W, U);
}
function action993120100(f, W, U) {
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
      cm.askMenu("#e[荣耀特攻队普通任务]不稳定的边界#n\r\n\r\n#L0##b#e进入不稳定的边界#n#k#l\r\n\r\n#L1##b#e查看任务信息#n#k#l\r\n\r\n#L2##b#e查看飞艇信息#n#k#l\r\n\r\n#L3##b#e返回原处#n#k#l", 4, 9062198);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("#e要立即进入#r不稳定的边界#k吗？#n\r\n\r\n #b- 今日得分：0 / 15，000#k", 4, 9062198);
  } else if (status === V++) {
    cm.dispose();
    cm.setNumberForQuestInfo(100311, "kill", 0);
    cm.openNpc('荣耀活动_不稳定边界');
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("\r\n#b#e普通任务 : 不稳定的边界#n#k\r\n\r\n#e任务执行期间#n\r\n2020年 1月 22日 上午12点 ~ 2020年 2月 4日 晚上 11点 59分", 4, 9062198, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n#b#e不稳定的边界#n#k是混杂散布着两种未知能量结晶的空间。", 4, 9062198, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n我们的任务是，搭乘飞艇进入不稳定的边界，\r\n在两种能量爆炸之前将其清除。", 4, 9062198, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n进入不稳定的边界搭乘飞艇，\r\n即可按#b#eZ#n#k，#b#eX#n#k键充入冒险岛世界和格兰蒂斯的能量进行发射。", 4, 9062198, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n按住#b#eZ#n#k，#b#eX#n#k键，飞艇下方的黄色蓄能栏就会开始充能。在此状态下松开按键，即可发射根据充入的#e#b蓄能栏数#n#k#r#b延长长度的能量光线#k#n。", 4, 9062198, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n用这种能量光线击中#b#e相同颜色#n#k的#b#e能量结晶#n#k，能量结晶就会被吸收，进而获得分数。\r\n一次击中的能量结晶数量越多，得分越高。", 4, 9062198, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("\r\n但是，如果击中颜色不同的能量结晶，就会#e#r扣分#k#n，你要注意点准头。", 4, 9062198, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("\r\n为了保护勇士不受未知气息的侵害，飞艇周围包裹着一层保护罩。\r\n该保护罩可以维持#b#e最多5分钟#n#k。\r\n当保护罩消失，或得分达到5，000分时，飞艇就会自动逃出不稳定的边界。", 4, 9062198, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("\r\n成功完成任务归来的话，我会按照你获得的#b#e分数，1分换1个荣耀点数#k#n。\r\n\r\n#b(荣耀点数达到每日上限的情况下，将无法再获得点数。)#k", 4, 9062198, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("\r\n还有，一天可获得的最高分数为#r#e15，000#n#k分，达到最高分数后，将无法再参与任务。\r\n\r\n#b(即使获得的荣耀点数已达到每日上限，只要每日可获得分数还有剩余，就可以参与。)#k ", 4, 9062198, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("\r\n注意，如果在任务进行途中离开，将不会记录得分，也无法获得奖励。", 4, 9062198, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("\r\n最后要提醒的是，在任务期间，每当你在不稳定的边界里获得的分数达到一定量时，飞艇的功率就会升级。", 4, 9062198, true, false);
                        } else if (status === V++) {
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
var speed = [120, 160, 220, 300];
var need = [1000, 5000, 10000, 20000];
function action分支2(f, W, U, V) {
  var w = cm.getNumberFromQuestInfo(100311, 'lv');
  var u = ['慢', '普通', '快', '很快', '极快'];
  var Q = cm.getNumberFromQuestInfo(100312, "total");
  if (status <= V++) {
    cm.sendNormalTalk("#e[当前飞艇信息]#n\r\n\r\n - #e#r飞艇等级#k：" + w + "#n\r\n - #e#r累积得分#k：" + Q + " / " + need[w - 1] + "#n\r\n\r\n - #e#b飞行速度#k：" + u[w - 1] + "#n\r\n - #e#b最大蓄能#k：" + w + "格#n", 4, 9062198, false, true);
  } else {
    if (status === V++) {
      if (w >= 4) {
        cm.sendNormalTalk("飞船已经达到最高等级，无法再升级了。", 4, 9062198, true, false);
      } else {
        cm.sendNormalTalk("#e[下个等级信息]#n \r\n\r\n - #e#r下个等级#k：" + (w + 1) + "#n\r\n - #e#b飞行速度#k：" + u[w] + "#n\r\n - #e#b最大蓄能#k：" + (w + 1) + "格#n", 4, 9062198, true, false);
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
    cm.warp(cm.getNumberFromQuestInfo(100309, "map"), 0);
  }
}
function action993120101(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  var V = cm.getNumberFromQuestInfo(100311, 'pt');
  var w = cm.getNumberFromQuestInfo(100311, 'lv');
  var N = cm.getNumberFromQuestInfo(100312, 'total');
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var u = -1;
  if (status <= u++) {
    cm.dispose();
  } else {
    if (status === u++) {
      if (V + N > need[w - 1]) {
        cm.sendNormalTalk("#e#b辛苦你了，#h0#。\r\n多亏了你，不稳定的边界正在明显地缩小！#n#k\r\n\r\n#e[不稳定的边界]任务执行结果#n\r\n - #e#r得分#k：" + (N + V) + "#n\r\n - #e#r飞艇级别#k：" + w + '级', 5, 9062198, false, true);
      } else {
        cm.sendNormalTalk("#e#b辛苦你了，#h0#。\r\n多亏了你，不稳定的边界正在明显地缩小！#n#k\r\n\r\n#e[不稳定的边界]任务执行结果#n\r\n - #e#r得分#k：" + (N + V) + "#n\r\n - #e#r飞艇级别#k：" + (w + 1) + "级 #r#e[Level Up！]#n#k#n", 5, 9062198, false, true);
      }
    } else {
      if (status === u++) {
        cm.sendNormalTalk("\r\n你将可以得到#b#e" + V + "荣耀点数#n#k作为任务奖励。", 5, 9062198, true, true);
      } else if (status === u++) {
        cm.gainGloryEventPoint(V);
        if (V > need[w - 1]) {
          V -= need[w - 1];
          cm.addNumberForQuestInfo(100311, 'lv', 1);
          cm.addNumberForQuestInfo(100311, 'speed', 40);
        }
        cm.setNumberForQuestInfo(100311, 'play', 0);
        cm.setNumberForQuestInfo(100311, 'pt', 0);
        cm.dispose();
        cm.warp(993120100, 0, false);
      }
    }
  }
}