var status = -1;
var selectionLog = [];
var timeBonus = [120000, 240000, 480000, 780000, 960000, 120000, 240000, 360000, 480000, 600000];
var 朦胧石升级消耗 = [0, 8000, 28000, 55000, 80000];
var 朦胧石栏位 = 1;
function start() {
  action(1, 0, 0);
}
function action(d, m, K) {
  if (status == 0 && d == 0) {
    cm.dispose();
    return;
  }
  if (d == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = K;
  if (status == 0) {
    对话首页();
  } else {
    switch (selectionLog[1]) {
      case 1:
        扩展朦胧石栏位();
        break;
      case 2:
        灵魂连接器();
        break;
      case 3:
        开关帮助();
        break;
      case 4:
        var F = cm.addNumberForQuestInfo(42003, 'point', 100000);
        cm.getPlayer().dropMessage(5, "获得了100000点起源点数。现在拥有的起源点数为" + F + '点。');
        cm.dispose();
        break;
      default:
        cm.askMenu("啊你说什么？没听清楚。");
        cm.dispose();
        break;
    }
  }
}
function 对话首页() {
  var d = "你有什么事? 只要是我力所能及的, 我都愿意帮忙。#b\r\n\r\n#L1#我想继续扩展朦胧石栏位。#l\r\n#L2#我丢失了灵魂连接器。#l\r\n";
  var m = cm.getNumberFromQuestInfo(42001, "noHelp");
  if (m > 0) {
    d += "#L3#我需要你的帮助。#l\r\n";
  } else {
    d += "#L3#现在, 我似乎不再需要向导了。#l\r\n";
  }
  if (cm.getPlayer().isGM()) {
    d += "#L4##r<调试> 获得 100000 点数#k#l\r\n";
  }
  cm.askMenu(d, 0, 2540000);
}
function 扩展朦胧石栏位() {
  if (status == 1) {
    cm.sendNormalTalk("原来你想要扩展朦胧石栏位啊。只要你够资格的话，多少个朦胧石我都能为你扩展。你…………让我看看…………", 0, 2540000, false, true);
  } else {
    if (status == 2) {
      for (朦胧石栏位 = 1; 朦胧石栏位 <= 5; 朦胧石栏位++) {
        var d = cm.getNumberFromQuestInfo(42000, 'slot' + 朦胧石栏位);
        if (d == -1) {
          break;
        }
      }
      if (朦胧石栏位 <= 5) {
        cm.askYesNo("这已经是你要解开的第" + 朦胧石栏位 + "个栏位了。想要解开的话，需要有你到达#b第" + 5 * 朦胧石栏位 + "层#k的记录，同时还要支付#b" + 朦胧石升级消耗[朦胧石栏位 - 1] + "点起源点数#k。现在马上为你开通吗？", 0, 2540000);
      } else {
        cm.askMenu("你已经解开5个栏位了。这些已经够用了吧？");
        cm.dispose();
      }
    } else {
      if (status == 3) {
        var m = cm.getNumberFromQuestInfo(42002, 'tf');
        var K = cm.getNumberFromQuestInfo(42003, "point");
        if (K < 朦胧石升级消耗[朦胧石栏位 - 1]) {
          text = "#k怎么回事？你的起源点数不够啊。才只有 #b" + K + " #k点。";
        } else if (m < 5 * 朦胧石栏位) {
          text = "#k你最高才到达了#b第" + m + "层#k啊，那现在的栏位就够用了。到达#b第" + 5 * 朦胧石栏位 + "层#k后再来找我吧。";
        } else {
          cm.addNumberForQuestInfo(42003, "point", -朦胧石升级消耗[朦胧石栏位 - 1]);
          cm.setNumberForQuestInfo(42000, 'slot' + 朦胧石栏位, 0);
          text = "扩充成功了！现在你有 #b" + 朦胧石栏位 + "个 #k朦胧石栏位了。\r\n\r\n";
        }
        cm.askMenu(text);
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  }
}
function 灵魂连接器() {
  if (cm.haveItem(2432461, 1)) {
    var d = "什么, 你这不是没有丢掉嘛!你......再说谎的话我可真要教训你了!";
  } else {
    var d = "#b灵魂连接器#k可是很重要的东西。没有它在塔内我就无法和你联络了。这回一定要保管好！";
    cm.gainItem(2432461, 1);
  }
  cm.sendNormalTalk(d, 0, 2540000, false, false);
  cm.dispose();
}
function 开关帮助() {
  var d = cm.getNumberFromQuestInfo(42001, "noHelp");
  if (status == 1) {
    if (d == 0) {
      cm.sendNormalTalk("吼吼，是吗？看来现在你已经轻车熟路了？那么，以后我就不指引你了，你好好表现吧。我要去帮助那些新手探险家了。", 0, 2540000, false, true);
    } else {
      cm.sendNormalTalk("嗬，哼！就算那么说，也一点不觉得高兴。", 0, 2540000, false, true);
    }
  } else if (status == 2) {
    if (d == 0) {
      cm.sendNormalTalk("如果你还有什么需要我帮助的地方，请再来找我吧。", 0, 2540000, true, true);
      cm.setNumberForQuestInfo(42001, 'noHelp', 1);
    } else {
      cm.sendNormalTalk("现在如果你再次挑战起源之塔的话，我会为你做向导的。", 0, 2540000, true, true);
      cm.setNumberForQuestInfo(42001, "noHelp", 0);
    }
    cm.dispose();
  }
}