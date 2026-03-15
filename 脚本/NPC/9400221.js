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
  if (!cm.isQuestFinished(63048)) {
    cm.sendNormalTalk('……', 4, 9400221, false, false);
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
      cm.askMenu("有什么想知道的，随时问我！\r\n#L0#你在哪里找到钥匙的#l\r\n#L1#去往其他世界的方法是什么？#l\r\n#L2#你知道找回色彩的方法吗？#l\r\n#L4#今天天气真好！#l\r\n#L5#你知道那种吃了后身体会变大的黄金吗？#l\r\n#L6##p9400221#，你也当过最强勇士吗？#l\r\n#L9#我没什么好奇的#l", 4, 9400221);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("你说这个钥匙吗？\r\n老实说是个靠运气。", 4, 9400221, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("那是我在#e勇士之地#n为了成为最强勇士而去狩猎怪物时的事了。那天的狩猎异常艰难，我打累了就把一旁的树桩当椅子坐着休息，谁知道那树桩一下子就塌掉了。我坐在了腐烂的树桩上！", 4, 9400221, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("这时，一只松鼠从腐烂的树桩下面蹦了出来！我仔细一看，发现它拿着个闪闪发亮的东西！正是这把钥匙。", 4, 9400221, true, true);
      } else if (status === V++) {
        cm.sendNormalTalk("假如那天我没坐在那个树桩上，假如那树桩腐烂得不够没有塌掉，或是那只松鼠没在树桩下挖洞做窝，我不会得到钥匙。", 4, 9400221, true, true);
        status = -1;
      }
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("就像我之前说的，你要好好利用#p9400205#。", 4, 9400221, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("只有#p9400205#能让你在这个像岛屿一样孤立的世界里随意穿行。就算去到其他世界，也务必记得先找找#p9400205#在哪里。", 4, 9400221, true, true);
    } else if (status === V++) {
      cm.sendNormalTalk("通过和各个世界的#p9400205#对话就可以进行移动。", 4, 9400221, true, true);
      status = -1;
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("你真是明知故问？童心之地的#p9400222#，那孩子就是答案！", 4, 9400221, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("要是这里也有具备那种才能的孩子，这里也能变成色彩丰富又活泼愉快的地方……", 4, 9400221, true, true);
    status = -1;
  }
}
function action分支4(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("是啊！今天孩子们心情似乎不错，真是万幸。", 4, 9400221, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("我在这里定居之前，每当孩子们感到伤心或是发脾气时，就会收集很多#t4034996:#和#t4034996:#来哄他们开心……", 4, 9400221, true, true);
    status = -1;
  }
}
function action分支5(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("吃了身体会变大的黄金我不太了解。但我知道财物之地的#p9400217#吃了黄金后变得很高大。", 4, 9400221, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("话说回来，吃了#t2436086:#后身体会变大的话我好像在哪里听过。不过我没亲自尝试过。你要真好奇可以自己吃吃看！", 4, 9400221, true, true);
    status = -1;
  }
}
function action分支6(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("最强勇士……这说的是勇士之地啊！说来丢人，我从来没当过最强勇士……最强勇士的称号几乎次次都被那地方的#p9400210#占了。", 4, 9400221, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk("回想起来，为了体验一把让太阳升起落下的荣耀，我在勇士之地待过好长时间，可惜最后还是没当上最强勇士。呵呵", 4, 9400221, true, true);
    status = -1;
  }
}
function action分支9(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}