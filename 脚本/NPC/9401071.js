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
      if (cm.isQuestFinished(64932)) {
        switch (cm.rand(1, 3)) {
          case 1:
            cm.sendNormalTalk_Bottom("#h0#k，真的谢谢你。为了在#h0#危险的时候，可以鼎力相助，我一定会早日完成我的新研究的。", 36, 9401071, 0, 1);
            break;
          case 2:
            cm.sendNormalTalk_Bottom("#face4##b匹比#k一直在向我道歉，说他已经尽力了……\r\n但不管是什么模样，能重生本身就是一件幸福的事情。", 36, 9401071, 0, 1);
            break;
          case 3:
            cm.sendNormalTalk_Bottom("我是否真的比那些甘愿为我做牺牲的#b拟真机器人#k更好呢？\r\n我不太清楚。", 36, 9401071, 0, 0);
            break;
        }
      } else {
        cm.sendNormalTalk_Bottom("研究制造#b类人体#k智能机器人？\r\n嗯……其实现在还在瓶颈期。", 36, 9401071, 0, 1);
      }
    } else {
      cm.dispose();
    }
  }
}