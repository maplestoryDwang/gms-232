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
      if (cm.getNumberFromQuestInfo(33990, "check7") > 0 && cm.getNumberFromQuestInfo(33990, "check9") == 0) {
        cm.sendNormalTalk_Bottom("哦，你来了啊，林博士！多亏了你，这座浩瀚博物馆才能够形成如此盛况。", 37, 1540885, false, true);
        if (cm.getNumberFromQuestInfo(33990, 'check8') > 0) {
          cm.dispose();
        }
      } else {
        cm.sendNormalTalk_Bottom("我就是这浩瀚博物馆的馆长，哈哈哈，今天真是开心的一天啊。", 37, 1540885, false, true);
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("你来找我是有什么事情吗？", 37, 1540885, true, true);
      } else {
        if (status === V++) {
          cm.askMenu_Bottom("(该怎么拿到门禁卡呢？)\r\n#b#L0#偷窃#l\r\n#L1#说谎#l\r\n#L2#堂堂正正地提出要求#l", 37, 1540891);
        } else {
          if (status === V++) {
            if (selectionLog[3] == 0) {
              cm.sendNormalTalk_Bottom('恩？你在做什么？', 37, 1540885, false, true);
            } else if (selectionLog[3] == 1) {
              cm.sendNormalTalk_Bottom("恩？你说门禁卡弄丢了，想去研究区找一找？怎么运气这么差，赶紧去看看吧。", 37, 1540885, false, true);
            } else {
              cm.sendNormalTalk_Bottom("恩？你说门禁卡吗？呵呵，你的研究欲望可真是了不起啊，\r\n这么会儿工夫都忍不住，就想去看极限石了？", 37, 1540885, false, true);
            }
          } else {
            if (status === V++) {
              if (selectionLog[3] == 0) {
                cm.sendNormalTalk_Bottom("(#b吴馆长#k很谨慎，难以下手。试试其他方法吧。)", 37, 1540891, true, true);
                cm.dispose();
              } else {
                cm.sendNormalTalk_Bottom("你知道我是信任你的吧？宴会结束之前你可一定要还给我哦。\r\n我会继续在这里欣赏完音乐……", 37, 1540885, true, true);
              }
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("(#b门卡#k已经到手了，现在去#b右侧#k，试着变装成#b吴馆长#k吧？)", 37, 1540891, true, true);
              } else if (status === V++) {
                cm.updateInfoQuest(33990, "check1=1;check2=1;check3=1;check5=1;check6=1;check7=1;check8=1;check=1");
                cm.updateInfoQuest(33995, "disguise=1");
                cm.Hidden_background("party_Tuto4", 1, 0, 0, 0);
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}