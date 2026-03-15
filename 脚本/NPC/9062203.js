var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.canCompleteQuest(9062203) || cm.canCompleteQuest(9062203) || cm.canCompleteQuest(9062203)) {
    action10034(f, W, U);
  } else {
    action0(f, W, U);
  }
}
function action10034(f, W, U) {
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
      cm.sendNormalTalk("你完成任务回来了。\r\n这是联盟准备的奖励。\r\n\r\n#b#e  -荣耀点数：#n#k #e10，000#n\r\n  #b#e-经验值：#n#k #e41，080，200#n\r\n  #b#e-金币：#n#k #e806，000#n\r\n\r\n那明天也拜托你了。", 4, 9062203, false, true);
    } else if (status === V++) {
      cm.gainGloryEventPoint(10000);
      cm.forceCompleteQuest(100341);
      cm.forceCompleteQuest(100342);
      cm.forceCompleteQuest(100343);
      cm.updateInfoQuest(100341, '');
      cm.updateInfoQuest(100342, '');
      cm.updateInfoQuest(100343, '');
      cm.gainExp(41080200);
      cm.gainMeso(806000);
      cm.dispose();
      cm.setStringForQuestInfo(500957, "lastDate", cm.getNowTimeString(3));
      cm.setNumberForQuestInfo(500956, "mission1", 1);
    }
  }
}
function action0(f, W, U) {
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
      cm.askMenu("#b#e<精锐任务：海岸峭壁之战>#n#k\r\n\r\n四面八方都在不断遭到#r黑太阳士兵#k的攻击。\r\n#L0#我要执行#b海岸峭壁之战任务#k#l\r\n#L1#请介绍一下#b海岸峭壁之战#k。#l\r\n#L2#我想返回前哨基地。#l\r\n", 4, 9062203);
    } else {
      var w = 'action分支' + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  var w = new Date().getDay();
  var N = ['日', '一', '二', '三', '四', '五', '六'];
  if (status <= V++) {
    if (w == 1 || w == 3 || w == 5) {
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e阻截敌人登陆#n#k。\r\n\r\n#e-任务目标-#n\r\n消灭#r700个黑太阳炸弹兵#k。\r\n消灭#r15艘黑太阳登陆船#k。\r\n\r\n要马上去执行任务吗？", 4, 9062203);
    } else if (w == 2 || w == 6) {
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e支援被困的弓手基地#n#k。\r\n\r\n#e-任务目标-#n\r\n消灭#r700个黑太阳步兵#k。\r\n消灭#r70个黑太阳弓兵#k。\r\n\r\n要马上去执行任务吗？", 4, 9062203);
    } else {
      cm.askYesNo('#r#e<周' + N[w] + ">#n#k\r\n今天要执行的任务是#b#e采集太阳花#n#k。\r\n\r\n#e-任务目标-#n\r\n消灭#r700个黑太阳步兵#k。\r\n收集#r7朵太阳花#k。\r\n\r\n要马上去执行任务吗？", 4, 9062203);
    }
  } else {
    if (status === V++) {
      cm.updateInfoQuest(100340, "time=0;complete=0;sdate=20/02/08;date=20/02/05;type=1;t=200205151228840");
      cm.updateInfoQuest(100341, '');
      cm.updateInfoQuest(100342, '');
      cm.updateInfoQuest(100343, '');
      cm.dispose();
      if (w == 1 || w == 3 || w == 5) {
        var u = cm.getEventManager("荣耀活动_海岸峭壁之战_阻截登陆");
        cm.forceStartQuest(100342, '');
      } else {
        if (w == 2 || w == 6) {
          var u = cm.getEventManager("荣耀活动_海岸峭壁之战_支援基地");
          cm.forceStartQuest(100341, '');
        } else {
          var u = cm.getEventManager("荣耀活动_海岸峭壁之战_采集太阳花");
          cm.forceStartQuest(100343, '');
        }
      }
      u.startInstance(cm.getPlayer());
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#b#e<精锐任务：海岸峭壁之战>#n#k\r\n\r\n这#b海岸峭壁#k是通往圣地#r塞尔提乌#k的重要关口。\r\n否定神的#r黑太阳士兵#k们为了攻击前往圣地的人，盘踞在此地的各个角落。", 4, 9062203, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#b#e<精锐任务：海岸峭壁之战>#n#k\r\n\r\n你可以按一周内的不同日期执行以下3个任务之一。\r\n\r\n #b#e- 阻截敌人登陆#n#k #e（周一/周三/周五）#n\r\n #b#e- 支援被困的弓手基地#n#k #e（周二/周六）#n\r\n #b#e- 采集太阳花#n#k #e（周四/周日）#n", 4, 9062203, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b#e<精锐任务：海岸峭壁之战>#n#k\r\n\r\n首先，#b阻截敌人登陆#k任务的目标是消灭#r黑太阳炸弹兵#k和#r黑太阳登陆船#k。\r\n消灭一定数量以上的#r黑太阳炸弹兵#k，可以抢夺#e最多5个#n#b炸弹#k。\r\n夺取的炸弹可以用来轰炸每隔一定时间沿着悬崖的海岸航行的#r黑太阳登陆船#k。\r\n仔细观察#r黑太阳登陆船#k的动向，点击#bNPC/采集键#k即可投掷炸弹。\r\n#r黑太阳炸弹兵#k是按勇士人数#b一对一召唤#k，#r黑太阳登陆船#k则是战场中所有勇士#b共享#k的。", 4, 9062203, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b#e<精锐任务：海岸峭壁之战>#n#k\r\n\r\n下一个#b支援被困的弓手基地#k任务的目标是消灭#r黑太阳弓兵#k和#r黑太阳步兵#k。\r\n分散在战场各处的#r黑太阳弓手#k都会瞄准位于战场中央的#b弓手基地#k射箭。中箭后会#r眩晕一段时间#k。\r\n#r黑太阳弓手#k不会自行撤退，只能通过#b弓手基地的反击#k逼退他们。\r\n#b弓手基地#k里累积的黑太阳弓手射来的箭矢达到一定数量以上时，就可以发动强力反击，#b一口气全歼#k周围的黑太阳弓手。\r\n#r黑太阳步兵#k是按勇士人数#b一对一召唤#k，#r黑太阳弓兵#k则是战场中所有勇士#b共享#k的。", 4, 9062203, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b#e<精锐任务：海岸峭壁之战>#n#k\r\n\r\n最后，#b采集太阳花#k任务的目标是消灭#r黑太阳步兵#k，并采集#r太阳花#k。\r\n消灭一定数量以上的#r黑太阳士兵#k后，将自动前往#b攀登区域#k。\r\n在#b攀登区域#k，可以按#bNPC/采集键#k使用快速往返岩壁的#b攀绳移动#k。\r\n通过#b攀绳移动#k采集生长在攀登区域各处的新鲜#b太阳花#k，就可以重新返回战场。\r\n移动途中如果碰到敌军设置的#r炸弹#k，就会落到攀登区域的底部，千万小心。\r\n#r黑太阳步兵#k是按勇士人数#b一对一召唤#k，#r太阳花和炸弹#k则是战场中所有勇士#b共享#k的。", 4, 9062203, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b#e<精锐任务：海岸峭壁之战>#n#k\r\n\r\n等你满足任务条件，我会再呼叫你。\r\n此外，你还可以获得#b10，000荣耀点数#和#r经验值、金币#k作为任务完成奖励。\r\n#r每个角色一天只能完成1次#k任务。\r\n虽说在任务执行途中离开也可以继续该任务，但如果日期变化，就必须#r重头开始执行#k新任务。", 4, 9062203, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b#e<精锐任务：海岸峭壁之战>#n#k\r\n\r\n那么，请你去消灭进攻海岸峭壁的敌人吧。", 4, 9062203, true, false);
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
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.warp(cm.getNumberFromQuestInfo(100344, "rMap"), 0);
    cm.dispose();
  }
}