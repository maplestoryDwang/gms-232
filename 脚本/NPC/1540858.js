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
      cm.sendNormalTalk_Bottom("像，像这样！像这样白白的~漏出来！再叮当一下碰个杯！这个用两个字怎么说？", 36, 1540858, false, true);
      if (cm.getStringFromQuestInfo(33992, "cheers").length > 0) {
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('……', 36, 1540858, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#b干，干杯#k！呵呵，呵呵呵！两个碰在一起就是#b甘贝#k！", 36, 1540858, true, true);
        } else {
          if (status === V++) {
            cm.askMenu_Bottom("怎么样，怎么样！是不是很有意思？#b\r\n#L0#挺有意思的。(微笑)#l\r\n#L1#不啊，没意思啊。(严肃)#l", 32, 1540858);
          } else if (status === V++) {
            if (U == 0) {
              cm.updateInfoQuest(33992, 'cheers=Y');
              cm.sendNormalTalk_Bottom("哈哈，这位朋友还真是挺懂行的啊！你也想要加入#b甘贝#k吗？我会特别接纳你的。", 36, 1540858, false, true);
            } else {
              cm.updateInfoQuest(33992, "cheers=N");
              cm.sendNormalTalk_Bottom('哼，道不同不相为谋。', 36, 1540858, false, true);
            }
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}