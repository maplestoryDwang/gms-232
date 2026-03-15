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
      cm.sendNormalTalk_Bottom("年轻人，你对最近发生的#b陷坑事件#k是怎么看的？\r\n虽然都藏着掖着，但这个世界之外还有其他世界存在的事情，现在已经是明摆着的事实了。", 37, 1540853, false, true);
      if (cm.getNumberFromQuestInfo(33990, "check2") > 0) {
        cm.dispose();
      }
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("也许那个其他世界就是只有理论上所提及的半粒子世界。\r\n按照原先的情况，当我们的世界和半粒子世界发生碰撞之时，应该双双被消灭才是……但谁能知道真相如何呢？", 37, 1540853, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("即便是现在这一刻，科学的理论还在因为观察而不断改变。", 37, 1540853, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("基于此，我认为这座博物馆的开馆意义深刻，\r\n#b林博士#k想要集齐与所有尚未解开谜团的未知科学相关物质的野心勃勃的计划终于要付诸实践了！", 37, 1540853, true, true);
          } else {
            if (status === V++) {
              cm.addPopupSay(1540805, 2500, "#face18#我一点都不明白到底是怎么一回事。", '', 0);
              cm.addPopupSay(1540879, 2500, "#face6#不管去哪里，派对上总是会出现一个超认真的人。", '', 0);
              cm.setNumberForQuestInfo(33990, 'check2', 1);
              cm.Hidden_background("party_Tuto2", 1, 0, 0, 0);
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
}