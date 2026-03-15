var status = 0;
var sel = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = cm.getMapId();
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (!cm.isQuestActive(34459)) {
      cm.dispose();
      cm.playerMessage(-1, "不知道有什么用。");
      return;
    }
    if (V == 450005100) {
      action0(f, W, U);
    } else {
      if (V == 450005110) {
        action1(f, W, U);
      } else if (V == 450005120) {
        action2(f, W, U);
      } else {
        action3(f, W, U);
      }
    }
  }
}
function action0(f, W, U) {
  if (status == 0) {
    cm.sendNormalTalk("再这样下去，一切都会凋零的，不管是我，是你，还是我们所有人。\r\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000？悲观的精灵", 4, 3003337, false, true);
    cm.dispose();
  }
}
function action1(f, W, U) {
  if (status == 0) {
    cm.sendNormalTalk("动听森林山坡上的草叶笛凋零了，我实在是太伤心了，它是这么说的。", 4, 3003337, false, true);
  } else if (status == 1) {
    cm.sendNormalTalk("明天还能听到那动听的声音吗？啊，有人来了，赶紧躲起来！", 4, 3003337, true, true);
    cm.dispose();
  }
}
function action2(f, W, U) {
  if (status == 0) {
    cm.sendNormalTalk("我们这些森林里的生物，啊，我们很快也会……", 4, 3003337, false, true);
    cm.dispose();
  }
}
function action3(f, W, U) {
  if (status == 0) {
    cm.sendNormalTalk("#r#e草叶笛是靠月光生存的，那便是动听森林的最深处。#k#n\r\n\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000？路过的精灵", 4, 3003337, false, true);
  } else if (status == 1) {
    cm.sendNormalTalk("#b(月光，动听森林最深之处，这中间应该有点什么，回到小不点精灵那里去，转告他这句话。)#k", 2, 3003337, true, true);
    cm.updateInfoQuest(34459, 'flower=1');
    cm.dispose();
  }
}