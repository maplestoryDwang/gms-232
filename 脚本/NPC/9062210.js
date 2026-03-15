var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.canCompleteQuest(9062210) || cm.canCompleteQuest(9062210) || cm.canCompleteQuest(9062210)) {
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
      cm.sendNormalTalk("你完成任务回来了。\r\n这是联盟准备的奖励。\r\n\r\n#b#e  -荣耀点数：#n#k #e15，000#n\r\n  #b#e-经验值：#n#k #e62，080，200#n\r\n  #b#e-金币：#n#k #e1，206，000#n\r\n\r\n那明天也拜托你了。", 4, 9062210, false, true);
    } else if (status === V++) {
      cm.gainGloryEventPoint(15000);
      cm.forceCompleteQuest(100357);
      cm.forceCompleteQuest(100359);
      cm.forceCompleteQuest(100353);
      cm.updateInfoQuest(100357, '');
      cm.updateInfoQuest(100359, '');
      cm.updateInfoQuest(100353, '');
      cm.gainExp(62080200);
      cm.gainMeso(1206000);
      cm.dispose();
      cm.setStringForQuestInfo(500960, "lastDate", cm.getNowTimeString(3));
      cm.setNumberForQuestInfo(500956, "mission3", 1);
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
      cm.askMenu("#b#e<精锐任务：支援塞尔提乌>#n#k\r\n\r\n塞尔提乌各地都急需#h0#你的帮助。\r\n#L0#我要执行#b支援塞尔提乌任务#k#l\r\n#L1#请介绍一下#b支援塞尔提乌任务#k。#l\r\n#L2#我想返回前哨基地。#l\r\n", 4, 9062210);
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
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e解救塞尔提乌骑士团#n#k。\r\n\r\n#e-任务目标-#n\r\n消灭#r150个高等翼人战斗兵#k\r\n救出#r13名塞尔提乌骑士#k\r\n\r\n要马上去执行任务吗？", 4, 9062210);
    } else if (w == 2 || w == 6) {
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e歼灭高等翼人侦察队#n#k。\r\n\r\n#e-任务目标-#n\r\n消灭#r250个火花精灵#k\r\n消灭#r4个高等翼人侦察兵#k\r\n\r\n要马上去执行任务吗？", 4, 9062210);
    } else {
      cm.askYesNo("#r#e<周" + N[w] + ">#n#k\r\n今天要执行的任务是#b#e古书收集#n#k。\r\n\r\n#e-任务目标-#n\r\n消灭#r500个图书馆鬼魂#k\r\n收集#r25本古书#k\r\n\r\n要马上去执行任务吗？", 4, 9062210);
    }
  } else {
    if (status === V++) {
      cm.updateInfoQuest(100339, "m2=0;etime=200221200015675;startDate=20/02/21");
      cm.updateInfoQuest(100357, '');
      cm.updateInfoQuest(100359, '');
      cm.updateInfoQuest(100353, '');
      cm.dispose();
      if (w == 1 || w == 3 || w == 5) {
        var u = cm.getEventManager("荣耀活动_支援塞尔提乌_解救骑士团");
        cm.forceStartQuest(100359, '');
      } else {
        if (w == 2 || w == 6) {
          var u = cm.getEventManager("荣耀活动_支援塞尔提乌_歼灭侦察队");
          cm.forceStartQuest(100357, '');
        } else {
          var u = cm.getEventManager("荣耀活动_支援塞尔提乌_古书收集");
          cm.forceStartQuest(100353, '');
        }
      }
      u.startInstance(cm.getPlayer());
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#b#e<精锐任务：支援塞尔提乌>#n#k\r\n\r\n眼下时局混乱，\r\n#r塞尔提乌各地#k都急需#b#h0##k你的帮助。", 4, 9062210, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#b#e<精锐任务：支援塞尔提乌>#n#k\r\n\r\n一周内，每天可以执行以下3个任务之一。\r\n\r\n #b#e- 解救塞尔提乌骑士团#n#k #e（周一/周三/周五）#n\r\n #b#e- 歼灭高等翼人侦察队#n#k #e（周二/周六）#n\r\n #b#e- 古书收集#n#k #e（周四/周日）#n", 4, 9062210, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#b#e<精锐任务：支援塞尔提乌>#n#k\r\n\r\n#e解救塞尔提乌骑士团任务#n的目标，是在海岸峭壁处解救遭到#b高等翼人士兵#k攻击的#b塞尔提乌骑士#k们。\r\n\r\n去海岸峭壁能见到一些#b受伤骑士#k和正在攻击他们的#r高等翼人士兵#k。\r\n在我施展移送受伤骑士的魔法咒语的期间，请你消灭#r高等翼人士兵#k，保护骑士们的安全。\r\n你可以从#b魔法地图#k上看到受伤骑士们的状态，请一边确认魔法地图，一边应战吧。\r\n还有，如果遇上偶尔出现的#r高等翼人暗杀者#k和#r高等翼人魔法师#k，务必先消灭他们。\r\n他们的攻击对受伤骑士们具有极大的威胁。", 4, 9062210, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#b#e<精锐任务：支援塞尔提乌>#n#k\r\n\r\n#e歼灭高等翼人侦察队任务#n的目标，是消灭藏在塞尔提乌附近森林里的#r高等翼人侦察兵#k。\r\n\r\n你避开监视塔的灯光消灭#r火花精灵#k，就可以找到侦察兵的痕迹。\r\n请在隐身的侦察兵痕迹附近按#b采集键#k引爆闪光弹，引来监视塔的灯光。\r\n虽然监视塔的灯光会暂时追踪你，但只要你甩掉灯光并重新回到闪光弹使用位置，就会发现高等翼人侦察兵也在监视塔的灯光照射下解除了伪装。\r\n请消灭一定数量解除伪装的高等翼人侦察兵，完成任务。\r\n注意，你要时刻留心#r监视塔的灯光#k。\r\n如果你在监视塔的灯光照射下暴露位置，躲藏的侦察兵就会警觉地跑掉。", 4, 9062210, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#b#e<精锐任务：支援塞尔提乌>#n#k\r\n\r\n最后，#e古书收集任务#n的目标是去#r图书馆禁区#k\r\n收集记录着古代神重要信息的#b古书#k。\r\n\r\n在我分类要搬运的书籍期间，请#h0#你\r\n去消灭图书馆鬼魂，收集#b古代魔力#k。\r\n做好准备后，#b#e跟我对话#n就可以启程#k。\r\n在移动过程中，我们会遭遇#r各种危险要素#k的攻击。\r\n这时候，你就按#rNPC/采集键#k施展#b古代保护魔法#k。\r\n\r\n我受到攻击的话，就会丢失搬运的书，请你务必护送我\r\n#e安全到达传送装置。#n", 4, 9062210, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b#e<精锐任务：支援塞尔提乌>#n#k\r\n\r\n完成任务后，\r\n你将可以获得#b12，000荣耀点数#、#r经验值和金币#k。\r\n#r每个角色一天只能完成1次#k任务。\r\n虽说在任务执行途中离开也可以继续该任务，但如果日期变化，就必须#r重头开始执行#k新任务。", 4, 9062210, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#b#e<精锐任务：支援塞尔提乌>#n#k\r\n\r\n那么，请你去给塞尔提乌各地需要帮助的人们提供支援吧。", 4, 9062210, true, false);
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