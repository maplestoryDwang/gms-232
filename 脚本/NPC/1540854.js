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
      cm.sendNormalTalk_Bottom("我是M杂志科学板块的首席记者，可以给您一张名片吗？\r\n虽然说这种话听上去有点像自夸，不过我最近升职了呢，呵呵！", 37, 1540854, false, true);
      if (cm.getNumberFromQuestInfo(33990, "check3") > 0) {
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("我最关心的事项当然还是世界上的#b神秘事件#k。\r\n原本我总是被埋怨找到了没用的花边新闻，可最近情况就不同了，超能力者大展身手的时代到来了。", 37, 1540854, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("话说回来，今天我的心情是最玄妙的！\r\n刚刚我就看到了超美的金发美女，这次又看到了你这样的超级大帅哥……那个，能不能和你拍张照啊？", 37, 1540854, true, true);
        } else {
          if (status === V++) {
            cm.addPopupSay(1540879, 2500, "#face6#这里的人怎么总是这么过分热情。", '', 0);
            cm.setNumberForQuestInfo(33990, "check3", 1);
            cm.Hidden_background("party_Tuto3", 1, 0, 0, 0);
            var w = cm.getNumberFromQuestInfo(33990, "check1") > 0;
            var N = cm.getNumberFromQuestInfo(33990, "check2") > 0;
            var u = cm.getNumberFromQuestInfo(33990, 'check3') > 0;
            if (w && N && u) {
              cm.sendNormalTalk_Bottom("好吧，这里能够收集的情报似乎已经都到手了，\r\n前往下一个地点吧？", 37, 1540879, true, true);
            }
            cm.dispose();
          }
        }
      }
    }
  }
}