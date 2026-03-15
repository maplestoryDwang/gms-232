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
      var w = "欢迎来到怪物公园！呵呵，我是怪物公园的主人，休彼德蔓！有什么想知道的可以来问我！\r\n#L0# #b请告诉我有关<怪物公园REBORN>的事情。#k#l\r\n#L1# #b请告诉我一天的使用次数和使用费用。#k#l\r\n#L2# #b请告诉我每个星期几都有什么奖励。#k#l\r\n#L3# #b请告诉我有关怪物公园每个星期几都有什么徽章。#k#l";
      if (星期徽章()) {
        w += "\r\n#L4# #b休彼德蔓！我已经集齐了七种星期徽章！#k#l";
      }
      w += "\r\n#L99# #b我不再需要说明了。#k#l";
      cm.askMenu_Bottom(w, 128, 9071000);
    } else {
      var N = "action分支" + selectionLog[1];
      eval(N)(f, W, U, V);
    }
  }
}
function 星期徽章() {
  for (var f = 1182193; f <= 1182199; f++) {
    if (!cm.haveItem(f)) {
      return false;
    }
  }
  return true;
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("看样子你对怪物公园的全新风格很感兴趣啊！呵呵。\r\n#b<怪物公园REBORN>#k#b每星期都准备了不同风格#k的奖励，\r\n是个超有趣的主题公园哦！", 32, 9071000, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("使用方法也完全不同，在怪物公园捕猎怪物，作为奖励所能获取的经验值就会#b逐渐累积#k。", 32, 9071000, true, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("到最后一关，当捕猎所有怪物离开时，\r\n可以一次性获取#b所累积的经验值#k和#b额外奖励的星期箱#k，呵呵。", 32, 9071000, true, true);
      status = -1;
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#b<怪物公园REBORN>#k一天可以使用7次，\r\n与之前入场时先付票的方式不同，#b<怪物公园REBORN>#k是\r\n#b后。买。票#k的，呵呵呵。", 32, 9071000, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("每次使用的费用是#b200抵用券#k！\r\n#b离开时收取费用#k，如果中场离开，\r\n也不会扣减费用或增加使用次数，这一点你大可以放心。", 32, 9071000, true, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("#b每天可以#k#b免费使用2次#k，你大可以尽情玩玩看。\r\n当你看到#b惊人的经验值#k和#b有趣的星期箱奖励#k，\r\n你就不会觉得那点费用可惜了！哈哈哈！", 32, 9071000, true, true);
      status = -1;
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#b星期一奖励#k：装有制作材料道具的#b<创造周一箱>#k\r\n#b星期二奖励#k：装有强化材料道具的#b<强化周二箱>#k\r\n#b星期三奖励#k：装有倾向提升道具的#b<倾向周三箱>#k\r\n#b星期四奖励#k：装有声望提升道具的#b<声望周四箱>#k", 32, 9071000, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk_Bottom("#b星期五奖励#k：装有金币的#b<黄金周五箱>#k\r\n#b星期六奖励#k：可以得到其他所有星期箱奖励内容的#b<庆典周六箱>#k\r\n#b星期天奖励#k：装有经验值券的#b<成长周日箱>#k\r\n                       #b+经验值奖励足足有1。5倍！！#k", 32, 9071000, true, true);
    cm.dispose();
    status = -1;
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("我出于兴趣爱好捣鼓了一下，结果就创造出了#b只在特定周几显露出隐藏效果#k的\r\n#b超有趣的饰品#k呢。", 32, 9071000, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("以前所做出来的都放在了#b休彼德蔓的宝物仓库#k，\r\n这次我觉得很符合#b<怪物公园REBORN>#k的风格就全都取出来了！呵呵呵。", 32, 9071000, true, true);
    } else if (status === V++) {
      cm.sendNormalTalk_Bottom("徽章可以从转蛋机中获取，如果够走运，呵呵呵。\r\n如果集齐了#b七种星期徽章#k，就可以换取随时能够触发效果的\r\n#b普通饰品#k！呵呵。", 32, 9071000, true, true);
      status = -1;
    }
  }
}
function action分支4(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("真是了不起！那么这就给兑换#b#i1182200##z1182200##k，请收好了！", 32, 9071000, false, true);
    for (var V = 1182193; V <= 1182199; V++) {
      cm.gainItem(V, -1);
    }
    cm.gainItem(1182200, 1);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支99(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}