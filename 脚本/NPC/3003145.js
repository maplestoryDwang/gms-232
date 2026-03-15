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
      var w = "#b#e<艾尔达光谱>#n#k\r\n";
      w += "你知道吗？艾尔达也有#r固有的颜色#k。\r\n";
      w += "这是用我开发的#b艾尔达凝集器#k提取周围的艾尔达时发现的事实。\r\n";
      w += "但是我受了伤，需要帮助……\r\n";
      w += "#b#L0# 进入<艾尔达光谱>。#l\r\n";
      w += "#L1# 听一下妮娜的说明。#l\r\n";
      w += "#L2# 查看今日剩余可完成次数。#l#k\r\n\r\n\r\n";
      w += "#e*完成1次后，可以立即完成。\r\n";
      w += "*今日最高奖励记录:   \r\n";
      w += "#i1712001##b#e#t1712001:##n #e0个";
      cm.askMenu(w, 0, 3003145);
    } else {
      if (status === V++) {
        if (U == 0) {
          status = -1;
          cm.sendOk(" 暂未修复哦^v^.");
        } else {
          if (U == 1) {
            cm.askMenu("我是调查员妮娜，正在对消逝的旅途附近的艾尔达进行观察和记录。\r\n在上次调查过程中发现了一点突发状况，受了点轻伤。所以我正在寻找可以帮助我进行调查的人。\r\n\r\n#e<艾尔达光谱>#n\r\n\r\n#e1。参加人数：#n 1～3名\r\n#e2。限制时间：#n 10分钟\r\n#e3。每天可完成次数：#n 3次（只在每次完成时累计）\r\n#e4。奖励：#n #i1712001##b#e#t1712001:##n#k + 经验值\r\n\r\n\r\n#L0#听听更详细的说明。#l", 0, 3003145);
          } else if (U == 2) {
            status = -1;
            cm.sendNormalTalk("#h0#，你的今日剩余可完成次数是#r3次#k。\r\n\r\n（※ 只有#r完成调查并退出时#k次数才会减少。）", 0, 3003145, false, true);
          }
        }
      } else {
        if (status === V++) {
          cm.askMenu("你想知道什么呢？#b\r\n#L0#<需要协助调查>#l\r\n#L1#<调查方法>#l\r\n#L2#<艾尔达获得及使用方法>#l\r\n#L3#<执行和奖励>#l\r\n#L5#<每日任务简易执行>#l\r\n#L4#不需要其他说明了。#l#k", 0, 3003145);
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
    cm.sendNormalTalk("#e<需要协助调查>#n\r\n\r\n消逝的旅途附近到处都是#b艾尔达#k。\r\n你知道吗？#b艾尔达#k会和周围的环境发生共鸣，变成各种形态。\r\n这种#r让人难以捉摸的能量#k，是艾尔达最大的魅力。", 0, 3003145, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#e<需要协助调查>#n\r\n\r\n为了对艾尔达进行调查，我发明了#b艾尔达凝集器#k。\r\n通过#b艾尔达凝集器#k，可以更容易地提取周围的艾尔达，还可以将它们#r聚集在一起#k。\r\n\r\n但是在凝集过程中我发现了一件趣事。", 0, 3003145, true, true);
    } else if (status === V++) {
      cm.sendNormalTalk("#e<需要协助调查>#n\r\n\r\n那就是#b艾尔达的颜色#k！\r\n\r\n我完全被它迷住了。\r\n那种神秘、充满魅力的色彩不断地刺激着我的好奇心！\r\n\r\n但是我还没发现决定颜色的要素，以及不同颜色之间的差异……\r\n为了获得更多的标本，我需要各位十字军的帮助。", 0, 3003145, true, true);
      cm.dispose();
    }
  }
}
function action1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e<调查方法>#n\r\n\r\n调查的目标是传送利用设置在中央的#b艾尔达凝集器#k提取的艾尔达。\r\n\r\n- 艾尔达凝集器可以用#r狩猎怪物#k时获得的艾尔达激活\r\n- #r攻击#k激活的艾尔达凝集器时，可以提取凝集的艾尔达\r\n- 在两侧的传送区域用#b采集键#k，击退并传送对应颜色的凝集的艾尔达", 0, 3003145, false, true);
    cm.dispose();
  }
}
function action2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e<艾尔达获得及使用方法>#n\r\n\r\n- 艾尔达的#b获得#k：\r\n在艾尔达凝集器周边#r消灭怪物#k或者站在受凝集器的影响而生成的#r集中地点#k上\r\n\r\n- 艾尔达的#b使用#k：\r\n#r激活艾尔达凝集器#k或者#r使用艾尔达凝集器的特殊功能#k时的媒介\r\n（※ 艾尔达凝集器可以通过#bnpc/设置为采集键的按键#k启动）", 0, 3003145, false, true);
    cm.dispose();
  }
}
function action3(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e<执行和奖励>#n\r\n\r\n完成时，与剩余艾尔达及消耗时间无关，\r\n发放#r#i1712001##t1712001# 2个\r\n\r\n#b+ 一定量的经验值#k", 0, 3003145, false, true);
    cm.dispose();
  }
}
function action5(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("等到可以执行神秘河地区的每日任务时，为了可以更轻松地完成#e<艾尔达光谱>#n任务，每天会赠送#b#e<艾尔达光谱>立即完成#n#k机会。使用#e立即完成#n#k时，可以当天自己达到的最高纪录完成任务。但经验值奖励及成就等相关内容不会被记录。这一点请一定要记住！\r\n\r\n\r\n#e#b今日可用<艾尔达光谱>立即完成次数 (0/2)#n#k\r\n ？啾啾艾尔兰地区： #r#e可以执行每日任务#n#k\r\n ？拉契尔恩地区： #r#e可以执行每日任务#n#k", 0, 3003145, false, false);
    cm.dispose();
  }
}
function action4(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}