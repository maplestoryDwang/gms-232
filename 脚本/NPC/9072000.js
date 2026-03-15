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
      cm.askMenu("开着飞机，在天上飞吧。感觉会非常好。虽然我退休了，但我可以告诉你在天上飞的方法。#b\r\n\r\n#L0#我想租飞机。#l\r\n#L1#请为我说明一下飞机。#l\r\n#L2#飞机有哪些种类呢？#l\r\n#L3#我想处理智能宠物相关业务！#l", 0, 9072000);
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
    cm.askMenu("你想租赁什么飞机呢？\r\n#b\r\n#L0# #fSkill/800010.img/skill/80001027/iconMouseOver#木飞机（1天）#r10000金币#b#l\r\n#L1# #fSkill/800010.img/skill/80001027/iconMouseOver#木飞机（7天）#r50000金币#b#l\r\n#L2# #fSkill/800010.img/skill/80001028/iconMouseOver#红飞机（1天）#r30000金币#b#l\r\n#L3# #fSkill/800010.img/skill/80001028/iconMouseOver#红飞机（7天）#r150000金币#b#l", 0, 9072000);
  } else {
    if (status === V++) {
      var w = [10000, 50000, 30000, 150000];
      if (cm.getMeso() < w[U]) {
        cm.sendOk("你的钱不够啊。");
      } else {
        cm.gainMeso(-w[U]);
        switch (U) {
          case 0:
            cm.teachSkill(80001027, 1, 0);
            cm.teachSkill(80001027, 1, 0);
            cm.playerMessage(-1, " 木飞机获得！");
            break;
          case 1:
            cm.teachSkill(80001027, 1, 0);
            cm.teachSkill(80001027, 1, 0);
            cm.playerMessage(-1, " 木飞机获得！");
            break;
          case 2:
            cm.teachSkill(80001028, 1, 0);
            cm.teachSkill(80001028, 1, 0);
            cm.playerMessage(-1, " 红飞机获得！");
            break;
          case 3:
            cm.teachSkill(80001028, 1, 0);
            cm.teachSkill(80001028, 1, 0);
            cm.playerMessage(-1, " 红飞机获得！");
            break;
        }
      }
      cm.dispose();
    }
  }
}
function action2(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("飞机是什么？飞机是冒险岛世界的最新交通工具。和其他骑宠一样，可以乘坐飞机来往于各地之间。但是飞机可以在不同大陆间飞行。", 0, 9072000, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("不是所有大陆都可以飞行。只能从#b天空之城#k飞往#b金银岛、圣地、埃德尔斯坦、玩具城、阿里安特、武陵、神木村#k。当然也可以反方向飞行。此外在#b金银岛#k和#b埃德尔斯坦#k之间也可以飞行。其他的地方都太危险，无法飞行。希望你能记住。", 0, 9072000, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("想乘坐飞机到其他大陆去的话，只要和升降场上的#b售票员#k对话就行。", 0, 9072000, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("就是这些，有问题吗？", 0, 9072000, true, false);
      } else {
        cm.dispose();
      }
    }
  }
}
function action3(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("可以租赁的飞机有性能普通、价格便宜的#b木飞机#k，以及价格略贵但可以使大陆间移动时间缩短2分钟的#b红飞机#k。你可以选择自己想要的种类。", 0, 9072000, false, false);
  } else {
    cm.dispose();
  }
}
function action4(f, W, U, V) {
  if (status === V++) {
    cm.sendNormalTalk("智能宠物相关业务在这里没办法处理。请点击#b四海皆地图上方的<自动飞行>按钮#k，过来找我。\r\n\r\n如果你持有飞行通行证，就会显示其他的按钮。\r\n#i3800611# #i3800612#", 0, 9072000, false, false);
  } else {
    cm.dispose();
  }
}