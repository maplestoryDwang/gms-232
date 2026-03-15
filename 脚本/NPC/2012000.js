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
      cm.askMenu("我负责给来往的游客介绍去往各个地区的船。你要去哪个地区？\r\n#b#L0# 金银岛#l \r\n#b#L1# 玩具城城堡#l \r\n#b#L2# 神木村#l \r\n#b#L3# 武陵村庄#l \r\n#b#L4# 阿里安特#k \r\n#b#L5# 圣地#k#l \r\n#b#L6# 埃德尔斯坦#k#l", 0, 2012000);
    } else {
      if (selectionLog[1] == 0) {
        action1(f, W, U, V);
      } else {
        if (selectionLog[1] == 1) {
          action2(f, W, U, V);
        } else if (selectionLog[1] == 2) {
          action3(f, W, U, V);
        } else {
          action4(f, W, U, V);
        }
      }
    }
  }
}
function action1(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("你想去金银岛吗？那里是有着茂密森林的美丽地方。这里有开往金银岛的#b单人船随时待命#k，马上就可以送你过去。", 0, 2012000, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("如果你想乘坐开往金银岛的飞艇，请和右边的#b码头向导艺斯#k说话。艺斯会把你带到金银岛方向的码头的。", 0, 2012000, true, true);
  } else {
    cm.dispose();
  }
}
function action2(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("你想到时间静止之湖的玩具城去吗？那里是到处都是玩具的快乐的村庄。这里有开往玩具城的#b单人船随时待命#k，马上就可以送你过去。", 0, 2012000, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("要想搭乘前往玩具城的飞艇的话，请和右边#b码头的引导员艺斯#k说话。她会把你带到开往玩具城的飞艇所在的码头那里去。", 0, 2012000, true, true);
    cm.dispose();
  }
}
function action3(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("你想到米纳尔森林的神木村去吗？那里是哈夫林们居住的可爱的村庄。这里有开往神木村的#b单人船随时待命#k，马上就可以送你过去。", 0, 2012000, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("要想搭乘前往神木村的飞艇的话，请和右边#b码头的引导员艺斯#k说话。她会把你带到开往神木村的飞艇所在的码头那里去。", 0, 2012000, true, true);
  } else {
    cm.dispose();
  }
}
function action4(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("你要去武陵桃园的武陵吗？现在天空之城和武陵之间没有船。但是武陵的居民#b鹤运营的1人用出租车随时在这儿待机#k。你可以乘坐出租车快速地到达武陵。", 0, 2012000, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("但是和免费的飞艇不同，出租车要收取一定的费用。到武陵一共需要#b1500金币#k，请你在准备好足够的钱之后再去乘坐。", 0, 2012000, true, true);
    } else if (status === V++) {
      cm.sendNormalTalk("如果你想乘坐开往武陵的鹤的出租车，请和右边#b码头的引导员艺斯#k说话。她会把你带到开往武陵的出租车所在的码头那里去。", 0, 2012000, true, true);
    } else {
      cm.dispose();
    }
  }
}
function action5(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("你想到尼哈沙漠的阿里安特去吗？那里生活着和沙漠一样热情的人。这里有开往阿里安特的#b单人船随时待命#k，马上就可以送你过去。", 0, 2012000, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("如果你想前往阿里安特的话，请和右边#b码头的引导员艺斯#k说话。她会把你带到开往阿里安特船所在的码头那里去。", 0, 2012000, true, true);
  } else {
    cm.dispose();
  }
}
function action6(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("你要去圣地吗？那是个天鹅女皇和她的骑士一起守护着的美丽的岛。开往圣地的#b1人用船随时在这儿待机#k，你可以坐船快速到达圣地。", 0, 2012000, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("如果你想乘坐开往圣地的船，请和右边#b码头的引导员艺斯#k说话。她会把你带到开往圣地的船所在的码头那里去。", 0, 2012000, true, true);
  } else {
    cm.dispose();
  }
}
function action7(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("你要去埃德尔斯坦么？只有勇敢者才能去对抗那边危险的统治者。飞往埃德尔斯坦的#b单人用飞船常年是等待状态#k所以可以快速使用。", 0, 2012000, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("要想使用通往埃德尔斯坦的船，请和右边的#b码头引导员艺斯#k对话。艺斯可以把你引导到开往埃德尔斯坦的码头。", 0, 2012000, true, true);
  } else {
    cm.dispose();
  }
}
function action8(f, W, U, V) {
  if (status === V++) {} else {
    cm.dispose();
  }
}