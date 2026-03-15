var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.canCompleteQuest(9062209) || cm.canCompleteQuest(9062209)) {
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
      cm.sendNormalTalk("你完成任务回来了。\r\n这是联盟准备的奖励。\r\n\r\n#b#e  -荣耀点数：#n#k #e12，000#n\r\n  #b#e-经验值：#n#k #e62，080，200#n\r\n  #b#e-金币：#n#k #e1，206，000#n\r\n\r\n那明天也拜托你了。", 4, 9062209, false, true);
    } else if (status === V++) {
      cm.gainGloryEventPoint(12000);
      cm.forceCompleteQuest(100346);
      cm.forceCompleteQuest(100347);
      cm.updateInfoQuest(100346, '');
      cm.updateInfoQuest(100347, '');
      cm.gainExp(62080200);
      cm.gainMeso(1206000);
      cm.dispose();
      cm.setStringForQuestInfo(500959, 'lastDate', cm.getNowTimeString(3));
      cm.setNumberForQuestInfo(500956, "mission4", 1);
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
      cm.askMenu("#b#e<精锐任务：扫荡黑太阳士兵>#n#k\r\n\r\n黑太阳士兵在源源不断地入侵。\r\n一定要阻止他们。\r\n#L0#我要执行#b扫荡黑太阳士兵任务#k。#l\r\n#L1#请介绍一下#b扫荡黑太阳士兵#k。#l\r\n#L2##b我要返回联盟前哨基地。#l\r\n", 4, 9062209);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  var w = new Date().getDay();
  var N = ['日', '一', '二', '三', '四', '五', '六'];
  if (status <= V++) {
    if (w == 1 || w == 3 || w == 4 || w == 6) {
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e解救塞尔提乌居民#n#k。\r\n\r\n#e-任务目标-#n\r\n救出#r10名塞尔提乌居民#k\r\n消灭#r500个黑太阳士兵#k\r\n\r\n要马上去执行任务吗？", 4, 9062209);
    } else {
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e阻止黑太阳士兵入侵#n#k。\r\n\r\n#e-任务目标-#n\r\n摧毁#r10次黑太阳传送门#k\r\n消灭#r600个黑太阳士兵#k\r\n\r\n要马上去执行任务吗？", 4, 9062209);
    }
  } else {
    if (status === V++) {
      cm.updateInfoQuest(100339, "m2=0;etime=200221200015675;startDate=20/02/21");
      cm.updateInfoQuest(100346, '');
      cm.updateInfoQuest(100347, '');
      cm.dispose();
      if (w == 1 || w == 3 || w == 4 || w == 6) {
        var u = cm.getEventManager("荣耀活动_扫荡黑太阳_解救居民");
        cm.forceStartQuest(100346, '');
      } else {
        var u = cm.getEventManager("荣耀活动_扫荡黑太阳_摧毁传送门");
        cm.forceStartQuest(100347, '');
      }
      u.startInstance(cm.getPlayer());
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#b#e<精锐任务：扫荡黑太阳士兵>#n#k\r\n\r\n我们一定要阻止让塞尔提乌陷入混乱的黑太阳士兵！\r\n你可以按一周内的不同日期执行以下2个任务之一。\r\n\r\n #b#e- 解救塞尔提乌居民#n#k #e（周一/周三/周四/周六）#n\r\n #b#e- 阻止黑太阳士兵入侵#n#k #e（周二/周五/周日）#n", 4, 9062209, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n你可以获得#b12，000荣耀点数#k和#b经验值、金币#k作为任务完成奖励。\r\n#r每个角色一天只能完成1次#k任务。\r\n虽说在任务执行途中离开也可以继续该任务，但如果日期变化，就必须#r重头开始执行#k新任务。", 4, 9062209, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#e<解救塞尔提乌居民>#n#e（周一/周三/周四/周六）#n\r\n\r\n你需要击退闯入塞尔提乌广场的黑太阳士兵，救出惊恐的居民。\r\n\r\n请你使用#rNPC/采集键#k救出居民，并在我激活#b传送口#k之前保护他们的安全。\r\n\r\n等#r传送口激活#k，你就立即把居民们送到传送口处。传送口只能容纳#r一位居民#k逃脱，请抓紧时间。\r\n\r\n受到#r黑太阳魔法兵和他们召唤的追踪弹#k攻击时，居民们会受伤，请千万小心。", 4, 9062209, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#e<阻止黑太阳士兵入侵>#n#e（周二/周五/周日）#n\r\n\r\n黑太阳士兵们正在塞尔提乌外围准备入侵。你必须消灭他们，摧毁传送门。\r\n\r\n你可以使用大炮炸毁#b传送门#k。请消灭#r黑太阳步兵#k，收集炮弹！", 4, 9062209, false, true);
        } else if (status === V++) {
          cm.dispose();
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