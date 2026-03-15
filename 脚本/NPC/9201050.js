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
  selectionLog[status] = Math.max(0, U);
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("那么，我能帮你什么忙么？#l\r\n#b#L0#讲讲新叶都市#l\r\n#b#L1#克拉齐亚的新区域#l#k", 0, 9201050);
    } else {
      var w = "action分支0_" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0_0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("你好啊！我是新叶都市的市长艾斯拜德·斯利姆！你能接受我的邀请我很高兴。我能帮你什么忙么？\t\r\n#b#L0#这是什么地方？#l\r\n#L1#狐智教授是谁？#l\r\n#L2#狐智之门是什么？#l\r\n#L3#秘宝齿轮在哪里？#l\r\n#L4#克拉奇安森林是什么？#l\r\n#L5#齿轮传送门是什么？#l\r\n#L6#街上的标牌是什么意思？#l\r\n#L7#假面杰克是怎么回事？#l\r\n#L8#法外丽塔看起来挺彪悍，能讲讲关于她的事情么？#l\r\n#L9#城里什么时候开新城区？#l\r\n#L10#我想参加测试！#l#k", 0, 9201050);
  } else {
    var w = "action分支" + selectionLog[2];
    eval(w)(f, W, U, V);
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("我一直都梦想着能够建立一座城市，一座没有强权，没有歧视的城市，你明白么？在这个过程中我认识了许多一生中的挚友。狐智教授就是其中一个，我把他从一群食人植物口下救出来后，他就来这里定居了。虽然听起来不可思议，但事情真的就是这样。至于假面杰克，他是我在神兵领地的狩猎伙伴，特别喜欢吹嘘自己。哈，丽塔和我在废弃都市的时候就是死党了，她用手上那把武器救了我很多次，我那个时候就已经把警长的位置在心里定给她了。说到我们的探险家，巴里凯德，他是来寻宝的，并且答应把找到的东西都捐给博物馆。我还在废弃都市的时候就听说过他和他兄弟的故事。还有埃尔帕姆……我只能确定他来自远方。我们之前也聊过，他不是那种惹事的类型，所以我让他留下来了。哈哈，伙计，我怎么觉得我像个嚼舌的老太太！你还想知道点什么？", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("他是个我在城市外面碰到的时空旅行者，今年都 97 岁了，但是依然安静不下来。我遇到他的时候他差点被某些丛林中的野兽吃了！因为我救了他，所以他同意来这里建造一座时间博物馆。我总感觉他来到这里还有其他目的，因为他好几次不经意说起新叶都市在未来有着很重要的作用。我就知道这么多了…… ", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("嘿嘿，我第一次看到博士在建造这些东西的时候也问了相同的问题。这些都是传送点，按向上的箭头就可以把你传送到其他地方。我建议你最好赶快熟悉一下怎么用，因为我们交通主要就靠它。", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("秘宝齿轮就在大大本钟下面。是巴里凯德最先发现了这个充满了怪物的区域。这个区域好像是钟塔中隔离出来的单独空间——你别说，还真奇怪。我听说他需要人帮忙一起探索，所以你可以去找他聊聊。但是一定要小心，里面的狼蜘蛛可都是些狠角色。", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支4(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("呃……克拉奇安森林就在新叶都市郊外。里面有许多强大且陌生的生物，如果你要去那里，就做好战斗的准备吧。只要从城市左边出去就到了。传说中穿过森林就能到达一个失落的都市，但是我们至今为止都没有找到。", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支5(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("呃，约翰发现自己进入了大大本钟的秘宝齿轮区域的时候，他就站到了一枚齿轮上，并换了个方向前进。但是，他并没有办法穿过这个区域，只能在里面兜圈子，虽然看起来差不多，但是狐智的门是可以通行的。", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支6(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("呃，城里面到处都是这样的地方，其实就是些建筑工地。红灯表示还在建造中，绿灯表示正常营业。你可以经常回来看看，我们的建设效率很高的。", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支7(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("啊，杰克……他就是那种不论惹上什么麻烦都能顺利脱身的人。你问女人？杰克唯一的失败就在女人上了。他失败了，从那以后就开始带上面具隐藏自己身份了。除了能告诉你他来自神兵领地，我不能再多说了。不过如果你去问他，他会告诉你的。", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支8(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("我认识丽塔已经很久了，虽然直到最近都没怎么交流过。我很久没见过她了，但是我能理解。她一直以接受的都是盗贼训练。实际上，我们第一次相遇也是因为这个。我当时被一群疯蘑菇包围了，是她突然出现，救了我。所以我想找治安官的时候，自然而然就想到了她。她曾发誓要保护这座城市，并且帮助他人完成训练，如果如果你比较喜欢行侠仗义的话，那就找她聊聊吧。", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支9(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("很快就可以了，朋友。虽然你无法看到他们，但是城市的建造者们都在很努力地工作。这些区域完工的之后就会开放，我知道你很期待，我也一样！", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支10(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("你已经回答过我的问题了。祝你在新叶都市玩的开心。", 0, 9201050, false, true);
    status = 0;
  }
}
function action分支0_1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("很高兴看到你回来！你肯定也听说那则好消息了吧？#l\r\n#b#L0#我听说有人发现了前往幽影森林深处的路！#l\r\n#b#L1#你能给我讲讲守护者的要塞么？#l#k", 0, 9201050);
  } else {
    var w = "action分支1_" + selectionLog[2];
    eval(w)(f, W, U, V);
  }
}
function action分支1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("我们也是刚发现这条路不久，就在旧普伦德加斯特庄园外面。丽塔觉得现在还太危险，所以不想向公众开放，但是我总感觉现在开放才是对的。如果你觉得自己能力足够，那就打个绿叶都市出租车去庄园，然后从那里向东或向西走就好。反正两边都可以进入森林。", 0, 9201050, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("但是为了安全起见，我建议你最好不要太深入林中深处，除非你已经非常有森林中冒险的经验了。我所说的有经验，是指至少完成了 #b三次工作晋升#k。此外，我建议你和小伙伴们一起去。谁知道在野外你会遇到什么危险呢……！不过#b丽塔#对野外的危险肯定很了解。", 0, 9201050, true, true);
  } else {
    cm.dispose();
  }
}
function action分支1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("我建议你和约翰·巴里凯德聊聊。他对那里有一定的了解，毕竟他和他兄弟已经研究 守护者的要塞好几年了。据说杰克·巴里凯德一直在克拉齐亚探险，但是我从没在绿叶都市见过他。其他人也说没见过，所以约翰有点担心。", 0, 9201050, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("总之，那座城堡应该坐落在幽影森林中央的守护者的山脉之巅。虽然在森林中就可以看到城堡，但是从没有人能找到通往山脚的路。森林里面太容易迷路了。说道这里，如果你想要去森林里面，我强烈建议你先和#b约翰#k聊聊，他可以让你准备的更加充分。加油吧，如果碰到什么奇怪的事情，一定要告诉我啊。", 0, 9201050, true, false);
  } else {
    cm.dispose();
  }
}