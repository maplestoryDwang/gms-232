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
      cm.sendNormalTalk_Bottom("#face0#德拉卡兹所操控的特殊力量——#r恶意#k，大体上有三个特征。", 36, 3004908, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#第一，大幅度强化身体能力，\r\n第二，熟悉黑暗，\r\n第三，可以为武器注入致命#r恶意#k。", 36, 3004908, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#使用时的注意事项是……", 36, 3004908, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#算了，这点事我也很清楚。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#身体状况怎么样了？", 36, 3004908, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#没事的，没问题。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
              } else {
                if (status === v++) {
                  cm.askAcceptDecline_Bottom("#face0#最好是试着用一下#b龙息臂箭#k看看。", 36, 3004908, 1);
                  cm.equip(1354010, -10);
                  cm.gainItem(2000019, 350);
                  cm.playerMessage(-1, "获得<超级药水> x350");
                } else if (status === v++) {
                  cm.forceStartQuest(39403, '');
                  cm.spawnMobMultipler(2400650, 1, 1, -370, -385);
                  cm.spawnMobMultipler(2400650, 1, 1, -320, -98);
                  cm.spawnMobMultipler(2400650, 1, 1, 142, -98);
                  cm.sendNormalTalk_Bottom("#face0#试着去周围的#b木箱堆#k使用龙息臂箭吧，\r\n使用#b突袭箭#k可以轻松击碎。\r\n\r\n#b（※如果没有出现木箱堆，在消灭这个地图上的几个巴伊托兹后，试着放弃任务重新接受吧。）", 36, 3004908, false, true, 1);
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
      cm.sendNormalTalk_Bottom("#face0#貌似并没有什么特别的排斥反应。", 36, 3004908, false, true, 1);
    } else if (status === v++) {
      cm.forceCompleteQuest(39403);
      cm.getPlayer().levelUp();
      cm.dispose();
    }
  }
}