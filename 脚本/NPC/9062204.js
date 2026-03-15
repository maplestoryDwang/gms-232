var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.canCompleteQuest(9062204) || cm.canCompleteQuest(9062204) || cm.canCompleteQuest(9062204)) {
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
      cm.sendNormalTalk("你完成任务回来了。\r\n这是联盟准备的奖励。\r\n\r\n#b#e  -荣耀点数：#n#k #e10，000#n\r\n  #b#e-经验值：#n#k #e41，080，200#n\r\n  #b#e-金币：#n#k #e806，000#n\r\n\r\n那明天也拜托你了。", 4, 9062204, false, true);
    } else if (status === V++) {
      cm.gainGloryEventPoint(10000);
      cm.forceCompleteQuest(100335);
      cm.forceCompleteQuest(100336);
      cm.forceCompleteQuest(100337);
      cm.updateInfoQuest(100335, '');
      cm.updateInfoQuest(100336, '');
      cm.updateInfoQuest(100337, '');
      cm.gainExp(41080200);
      cm.gainMeso(806000);
      cm.dispose();
      cm.setStringForQuestInfo(500958, "lastDate", cm.getNowTimeString(3));
      cm.setNumberForQuestInfo(500956, "mission2", 1);
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
      cm.askMenu("#b#e<精锐任务：塞尔提乌城墙>#n#k\r\n\r\n塞尔提乌城墙正面临被毁的危机。\r\n#L0#我要执行#b塞尔提乌城墙保卫任务#k。#l\r\n#L1#请介绍一下#b塞尔提乌城墙#k。#l\r\n#L2##b我要返回前哨基地。#l\r\n", 4, 9062204);
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
    if (w == 1 || w == 3 || w == 5) {
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e闪电防御作战#n#k。\r\n\r\n#e-任务目标-#n\r\n消灭#r700个翼人军#k\r\n成功#r防御5次闪电攻击#k\r\n\r\n要马上去执行任务吗？", 4, 9062204);
    } else if (w == 2 || w == 6) {
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e阻止怪物海鸥#n#k。\r\n\r\n#e-任务目标-#n\r\n消灭#r700个翼人军#k\r\n消灭#r3只巨型怪物海鸥#k\r\n\r\n要马上去执行任务吗？", 4, 9062204);
    } else {
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e破坏攻城武器#n#k。\r\n\r\n#e-任务目标-#n\r\n消灭#r700个翼人军#k\r\n破坏#r50个魔法炸弹#k\r\n\r\n要马上去执行任务吗？", 4, 9062204);
    }
  } else {
    if (status === V++) {
      cm.updateInfoQuest(100339, "m2=0;etime=200221200015675;startDate=20/02/21");
      cm.updateInfoQuest(100335, '');
      cm.updateInfoQuest(100336, '');
      cm.updateInfoQuest(100337, '');
      cm.dispose();
      if (w == 1 || w == 3 || w == 5) {
        var u = cm.getEventManager("荣耀活动_塞尔提乌城墙_闪电防御作战");
        cm.forceStartQuest(100336, '');
      } else {
        if (w == 2 || w == 6) {
          var u = cm.getEventManager("荣耀活动_塞尔提乌城墙_阻止怪物海鸥");
          cm.forceStartQuest(100335, '');
        } else {
          var u = cm.getEventManager("荣耀活动_塞尔提乌城墙_破坏攻城武器");
          cm.forceStartQuest(100337, '');
        }
      }
      u.startInstance(cm.getPlayer());
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#b#e<精锐任务：塞尔提乌城墙>#n#k\r\n\r\n我们一定要阻止企图摧毁塞尔提乌城墙的翼人军！\r\n你可以按一周内的不同日期执行以下3个任务之一。\r\n\r\n #b#e- 闪电防御作战#n#k #e（周一/周三/周五）#n\r\n #b#e- 阻止怪物海鸥#n#k #e（周二/周六）#n\r\n #b#e- 破坏攻城武器#n#k #e（周四/周日）#n", 4, 9062204, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n你可以获得#b10，000荣耀点数#k和#b经验值、金币#k作为任务完成奖励。\r\n#r每个角色一天只能完成1次#k任务。\r\n虽说在任务执行途中离开也可以继续该任务，但如果日期变化，就必须#r重头开始执行#k新任务。", 4, 9062204, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#e<闪电防御作战>#n#e（周一/周三/周五）#n\r\n\r\n要想保护城墙免受敌人的闪电攻击，必须激活保护罩。#e#b保护罩需要100%充能#k#n，才能屏蔽攻击。\r\n\r\n给保护罩充能所需的#b能量#k可以通过#r消灭翼人军#k进行收集。收集到能量后，按#rNPC/采集键#k就可以#r给保护膜充能#k。\r\n\r\n如果见到保护罩周围出现火花精灵，要尽快将其消灭。#b火花精灵#k会攻击保护罩，#b削减充入的能量#k。", 4, 9062204, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#e<阻止怪物海鸥>#n#e（周二/周六）#n\r\n\r\n你需要击退企图摧毁塞尔提乌城墙的#b翼人军#k和#b巨型怪物海鸥#k，保卫城墙。\r\n\r\n飞来飞去的#b巨型怪物海鸥#k只能用#r#e弩弓#k#n来攻击。#k按#rNPC/采集键#k可以发射弩弓。\r\n\r\n#r用弩弓攻击#k把巨型怪物海鸥的#b体力打到50%以下#k，海鸥就会#b坠落#k到城墙顶上。这时候，你需要使用#r直接攻击#k将坠落的巨型怪物海鸥消灭。\r\n\r\n请务必赶在巨型怪物海鸥逃跑之前将它消灭。", 4, 9062204, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#e<破坏攻城武器>#n#e（周四/周日）#n\r\n\r\n你需要破坏企图炸毁城墙的敌人发射的#b#e魔法炸弹#k#n，保卫城墙。\r\n\r\n由于物资不足，你必须夺取翼人军的武器来抵挡他们的攻击。在敌人发动攻击之前，请尽量多收集些炸弹。\r\n\r\n敌人发动进攻时，为了安全起见，请#b移动到大炮所在的下方区域#k。之后使用#rNPC/采集键#k发射大炮。\r\n使用鼠标瞄准敌人的炸弹后，#r点击鼠标#k破坏魔法炸弹即可。", 4, 9062204, false, true);
          } else if (status === V++) {
            cm.dispose();
          }
        }
      }
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.warp(cm.getNumberFromQuestInfo(100344, 'rMap'), 0);
    cm.dispose();
  }
}