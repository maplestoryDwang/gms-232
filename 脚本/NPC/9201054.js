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
      cm.askMenu("你好啊，邻居。近来可好？#l\r\n#b#L0#我听说有人找到了通往幽影森林深处的路！#l\r\n#b#L1#你能给我讲讲守护者的要塞么？#l#k", 0, 9201054);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("是啊。我还对此有点不爽呢。我也知道斯利姆市长有自己的理由去探索克拉齐亚，但是作为城里的警长，我必须为公民的安全负责！我已经接到多起报告，说有人在林中走失了。#l\r\n#b#L0#你有没有什么线索？#l#k", 0, 9201054);
  } else {
    if (status === V++) {
      cm.askMenu("你是说除了林中那些幽灵和树怪么？嗯……是有人说过森林里某个地方有个类似 #b强盗#k营地的地方。虽然我不愿鲁莽地做出任何结论，但是除非我亲眼所见，否则我不排除对他们的怀疑。#l\r\n#b#L0#林中有什么需要防备的么？#l#k", 0, 9201054);
    } else {
      if (status === V++) {
        cm.askMenu("人们都知道这片森林道路诡异难寻。据说里面的树木自身会移动，会等你走过之后挡住你的来路。比如你向某个方向走，转了两次方向，结果却发现回到了原点。光这些就足够让普通人走失了！#l\r\n#b#L0#继续说……#l#k", 0, 9201054);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("另外，林中还有一些自然界本身就有的危险……比如充满剧毒泥沼的沼泽之类。如果你要进去，那一定要带上一些#b万能药#k或者#b解毒剂#k之类的东西。此外#b回城卷轴#k也是必备物品，万一你迷路了呢。如果你一定要去，一定要小心谨慎，步步为营。", 0, 9201054, false, true);
        } else if (status === V++) {
          cm.dispose();
        }
      }
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("嗯，约翰和我说他兄弟回来了。呃，准确的说，是回到了这片大陆……我肯定那个混蛋会不会在进入荒野寻找城堡之前在这座城市停留。嗯，无论如何，如果你想了解这件事的详情，那我建议你去找约翰聊聊，当然，如果你能找到杰克，那和他聊更好。", 0, 9201054, false, false);
  } else if (status === V++) {
    cm.dispose();
  }
}