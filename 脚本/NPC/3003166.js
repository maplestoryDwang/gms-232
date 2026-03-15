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
      var w = "#b#e<饥饿的穆托>#n#k\r\n";
      w += "你能帮助#b穆托#k，击退#r古拉#k吗？\r\n";
      w += "#r※游戏时间10分钟，无法中途退出。#k\r\n";
      w += "#b#L0# 进入<饥饿的穆托>。#l\r\n";
      w += "#L1# 向猴姐听取说明。#l\r\n";
      w += "#L2# 确认今天的剩余挑战次数。#l";
      cm.askMenu(w, 0, 3003166);
    } else {
      if (status === V++) {
        if (U == 0) {
          status = -1;
          cm.sendOk(" 暂未修复哦^v^.");
        } else {
          if (U == 1) {
            cm.askMenu("旅行者！#r古拉#k的进攻已经开始了！请帮忙制作#b穆托#k喜欢的食物，让穆托能够击退#r古拉#k吧！\r\n\r\n#e<饥饿的穆托>#n\r\n\r\n#e1。参加人员：#n 1~4名\r\n#e2。限制时间：#n 10分钟\r\n#e3。每日可通关次数：#n 3次 (通关时累计)\r\n#e4。奖励：#n #i1712002##b#e#t1712002:##n#k +经验值\r\n\r\n\r\n#L0#听取更详细的说明。#l", 0, 3003166);
          } else if (U == 2) {
            status = -1;
            cm.sendNormalTalk("#h0#你今天剩余的可挑战次数为#r0次#k。", 0, 3003166, false, true);
          }
        }
      } else {
        if (status === V++) {
          cm.askMenu("我可以帮你吗？#b\r\n#L0#<狩猎，添加材料>#l\r\n#L1#<烹饪时间，奖励状态条>#l\r\n#L2#<难度>#l\r\n#L3#<奖励>#l\r\n#L5#<每日任务快速执行>#l\r\n#L4#不用继续说明了。#l#k", 0, 3003166);
        } else {
          var N = "action" + selectionLog[3];
          eval(N)(f, W, U, V);
        }
      }
    }
  }
}
function action0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e<狩猎，添加材料方法>#n\r\n\r\n穆托是个#b总觉得肚子饿的#k孩子。#b尽快完成#k\r\n穆托要求的食物，是击退#r古拉#k的捷径。\r\n\r\n你只要狩猎分散在各处的#r怪物#k，搜集到合适的材料后，来到#b我和小鸡们所在的锅#k这里，通过#r#e跳跃#n#k#b添加材料#k就行了。", 0, 3003166, false, true);
    cm.dispose();
  }
}
function action1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e<烹饪时间，奖励状态条>#n\r\n\r\n所有料理都有#b烹饪时间#k。\r\n必须在#b烹饪时间#k内完成料理，才能击退古拉。\r\n\r\n每种料理的#b烹饪时间#k和#b制作成功#k时击退古拉的程度#r都不相同。#k #b火焰#k越强烈，代表越难制作，可以给穆托的#r力量#k也更强。\r\n\r\n此外，如果在烹饪时间状态条到达用#r红色#k表示的#r#e奖励状态条#n#k之前，#r完成#k料理，穆托就能获得更强的力量，#b击退更多古拉#k了。", 0, 3003166, false, true);
    cm.dispose();
  }
}
function action2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e<难度>#n\r\n\r\n难度分为#b<简单难度>#k、#b<普通难度>#k和#b<困难难度>#k。\r\n\r\n在普通难度中，会出现比简单难度#r更强的怪物#k。\r\n\r\n在困难难度中，不仅会有比普通难度#r更强的怪物#k出现，#r烹饪时间#k也会缩短。\r\n\r\n此外，根据#b队员人数#k的不同，#b穆托击退的速度#k和完成料理时#b击退古拉的距离#k存在差异，希望你能知道！", 0, 3003166, false, true);
    cm.dispose();
  }
}
function action3(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e<奖励>#n\r\n\r\n#b#e<简单难度>#n#k\r\n#eS级：#n 10分钟以内完成\r\n#e神秘徽章：#n 1个\r\n\r\n#b+ 与等级无关的经验值#k", 0, 3003166, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#e<奖励>#n\r\n\r\n#b#e<普通难度>#n#k\r\n#eS级：#n 5分钟内通关\r\n#e神秘徽章：#n 3个\r\n\r\n#eA级：#n 8分钟内通关\r\n#e神秘徽章：#n 2个\r\n\r\n#eB级：#n 10分钟内通关\r\n#e神秘徽章：#n 1个\r\n\r\n#b+ 各级别经验值#k", 0, 3003166, true, true);
    } else if (status === V++) {
      cm.sendNormalTalk("#e<奖励>#n\r\n\r\n#b#e<困难难度>#n#k\r\n#eS级：#n 在5分钟以内完成\r\n#e神秘徽章：#n 5个\r\n\r\n#eA级：#n 在8分钟以内完成\r\n#e神秘徽章：#n 4个\r\n\r\n#eB级：#n 在10分钟以内完成\r\n#e神秘徽章：#n 3个\r\n\r\n#b+ 各等级经验值#k", 0, 3003166, true, true);
      cm.dispose();
    }
  }
}
function action5(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("可以执行神秘河地区的每日任务时，为了可以更轻松地完成#e<饥饿的穆托>#n任务，每天提供#b#e立即完成<饥饿的穆托>#n#k的机会。使用#e立即完成#n#k功能，可以以今天我达到的最高纪录为基准立即完成任务。但经验值奖励及成就相关内容不会被记录下来，这一点一定要记住！\r\n\r\n\r\n#e#b今日可以立即完成<饥饿的穆托>的次数(2/2）#n#k\r\n ？拉克兰地区： #r#e每日任务可以执行#n#k\r\n ？阿尔卡娜地区： #r#e每日任务可以执行#n#k", 0, 3003166, false, false);
    cm.dispose();
  }
}
function action4(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}