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
      cm.askMenu("进化系统开始. #b\r\n#L0#连接到进化系统. (入场次数： " + cm.getNumberFromQuestInfo(1817, "count") + " / 9 )#l #b\r\n#L1#听取进化系统相关说明. #l", 0, 9075100);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.openUI(100);
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("如果需要有关进化系统的帮助，请跟我说。#b\r\n#L0#这是什么地方？#l  #b\r\n#L1#进化系统是什么？#l  #b\r\n#L2#你是谁？#l  #b\r\n#L3#你和军团长斯乌是什么关系？#l #b\r\n#L4#应该做什么？#l #b\r\n#L5#我想查看进化系统向导程序。#l #b\r\n#L6#核是什么？#l", 0, 9075100);
  } else {
    var w = "action分支1_" + selectionLog[2];
    eval(w)(f, W, U, V);
  }
}
function action分支1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("这里是埃德尔斯坦莱班矿山地下的研究室。在这里可以运行进化系统。", 0, 9075100, false, true);
    cm.dispose();
  }
}
function action分支1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("进化系统是为了让肉体完全进化而制造出来的训练系统。进化所需的所有环境因素会根据用户状态构成，所有过程在进化系统构建的虚拟世界中完成。", 0, 9075100, false, true);
    cm.dispose();
  }
}
function action分支1_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("我是控制进化系统的人工智能控制装置ESS。为了方便用户，我使用了这样的形象。", 0, 9075100, false, true);
    cm.dispose();
  }
}
function action分支1_3(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("系统已初始化，之前用户相关信息已全部删除。", 0, 9075100, false, true);
    cm.dispose();
  }
}
function action分支1_4(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("如果想通过进化系统变得更强，请登录虚拟世界。", 0, 9075100, false, true);
    cm.dispose();
  }
}
function action分支1_5(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("进化系统向导开始。\r\n\r\n#e[登录方法]#n\r\n1. 通过次元之镜移动到进化系统研究所\r\n2. 点击ESS，启动进化系统\r\n3. 点击系统回路标签中的START按钮，进入虚拟空间\r\n", 0, 9075100, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#e进化系统UI向导#n\r\n\r\n#b#e1. 系统回路标签#n#k\r\n- 可以改变进化系统虚拟世界的环境条件的回路。\r\n- 由#r核插槽#k和#r核保管箱#k构成。\r\n\r\n#e[核]#n\r\n- 改变虚拟世界环境的物体\r\n- 核保管箱中的核可以安装到核插槽中使用。\r\n\r\n#e[核保管箱]#n\r\n- 可以存放核。\r\n- 获得的核自动存放到保管箱中。\r\n", 0, 9075100, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#e#b2. 实验室构造标签#n#k\r\n\r\n#e[链接连接路线图]#n\r\n- 共有9个链接构成\r\n- 链接1～5可以连接，链接6～9可以通过系统升级扩展。\r\n\r\n#e[训练程序]#n\r\n- 可以执行各链接的基本程序\r\n- 程序的运行状态可以通过图表区分。", 0, 9075100, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("#e#b3. 进化系统奖励#n#k\r\n\r\n[纪念币商店]\r\n- 通过进化系统研究所入口处的#b机器-C2#k，可以购买所需的道具。\r\n\r\n\r\n进化系统#r可以组队入场#k。此外，还有很多其他功能。\r\n\r\n进化系向导结束。 ", 0, 9075100, true, true);
        cm.dispose();
      }
    }
  }
}
function action分支1_6(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("下面是有关核的介绍。\r\n\r\n#e核#n拥有多种#b#e功能#n#k。\r\n\r\n#e1. 更改虚拟世界的空间#n\r\n- 更改背景图片，怪物图片，背景音乐\r\n\r\n#e2. 更改奖励相关功能#n\r\n- 掉落特定道具(装备、药草、矿物等)\r\n- 提高掉落率\r\n\r\n#e3. 更改怪物相关功能#n\r\n- 更改怪物等级\r\n- 更改怪物血量\r\n- 增加怪物个体数\r\n- 增加特定怪物\r\n\r\n#e4. 其他#n\r\n- 组队游戏时，获得额外经验值\r\n- 增加训练程序\r\n", 0, 9075100, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("#e获得核的方法#n有3种。\r\n\r\n1. 完成训练程序时随机获得\r\n2. 消灭系统怪物时有一定概率掉落\r\n3. 通过#p9075110#购买\r\n(进化币可以通过消灭系统怪物或在链接中完成程序获得。)", 0, 9075100, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("在进化系统UI中装备相应功能的核，虚拟世界就会随之发生变化。\r\n\r\n#e[核的装备规则]#n\r\n1. 核只能装备在同一形态的插槽中。\r\n(圆形的核只能装备在圆形的插槽中。)\r\n2. 相同功能的核无法重复装备。\r\n(掉落率增加10%核和掉落率增加20%核无法同时装备。)\r\n\r\n#e[核的装备方法]#n\r\n1. 在核保管箱中双击或拖放到插槽中，即可装备。\r\n\r\n#e[核的解除方法]#n\r\n1. 在核插槽中双击或拖放到保管箱中，可以移动到保管箱中。\r\n\r\n#e[核的销毁方法]#n\r\n1. 将保管箱中的核拖放到进化系统UI外时，核会被删除。", 0, 9075100, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("装备各种功能的核，可以将进化系统改造成自己想要的空间。\r\n\r\n以上是有关核的介绍。", 0, 9075100, true, true);
        cm.dispose();
      }
    }
  }
}