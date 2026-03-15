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
      cm.sendNormalTalk_Bottom("真的好酷啊！\r\n谁能想象得到我们市里能够建立起这么棒的博物馆？", 37, 1540852, false, true);
      if (cm.getNumberFromQuestInfo(33990, 'check1') > 0) {
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("而且听说里面所展示的全都是世界各地都找不到的珍贵物品，\r\n我实在是太期待里面都有什么东西了！", 37, 1540852, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("等这座#b博物馆#k开馆，肯定会成为这座城市的#b地标#k的，\r\n能被邀请参加免费开业派对实在是很荣幸啊。", 37, 1540852, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("话说你是艺人吗？能不能留个号码……\r\n等一下，你这是要去哪儿啊？喂！留个号码嘛！", 37, 1540852, true, true);
          } else {
            if (status === V++) {
              cm.addPopupSay(1540805, 2500, "#face18#第一次见面就要保险柜号码……这个世界真是可怕！", '', 0);
              cm.addPopupSay(1540879, 2500, "#face6#就连阿里安特的舞姬都不会那么露骨。", '', 0);
              cm.setNumberForQuestInfo(33990, "check1", 1);
              cm.Hidden_background('party_Tuto', 1, 0, 0, 0);
              var w = cm.getNumberFromQuestInfo(33990, 'check1') > 0;
              var N = cm.getNumberFromQuestInfo(33990, "check2") > 0;
              var u = cm.getNumberFromQuestInfo(33990, "check3") > 0;
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
}