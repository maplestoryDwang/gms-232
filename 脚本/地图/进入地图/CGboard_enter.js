var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.dispose();
      cm.setPartner(1, 1540454, 80001594, 0);
      cm.setPartner(1, 1540766, 80001595, 0);
      cm.setPartner(1, 1540767, 80001596, 0);
      cm.useItem(2023418);
      cm.useItem(2023419);
      cm.useItem(2023420);
      if (cm.getMapId() == 350023100) {
        cm.updateInfoQuest(33132, "boss=noclear;board1=Noclear");
        cm.addPopupSay(1540454, 1000, "只要消灭30只左右就行了. 队长!", '');
        cm.addPopupSay(1540455, 1000, "德皮德皮~你太酷了!\r\n男人看到你也会为你着迷~", '');
        cm.addPopupSay(1540456, 1000, "（叹口气）", '');
      } else {
        if (cm.getMapId() == 350023200) {
          cm.updateInfoQuest(33132, "boss=noclear;board1=Noclear");
          cm.updateInfoQuest(33132, "save=2;boss=noclear;board1=Noclear");
          cm.addPopupSay(1540469, 1000, "哈哈哈, 让我来教训教训你们吧!", '');
          cm.addPopupSay(1540454, 1000, "别管那些家伙, 只要除掉40只好像就行了. 队长. ", '');
          cm.addPopupSay(1540469, 1000, "什么?!", '');
          cm.addPopupSay(1540469, 1000, "我无法变成任何人!", '');
          cm.addPopupSay(1540455, 1000, "我实在是不敢恭维你. ", '');
          cm.addPopupSay(1540469, 1000, "咳. ", '');
        } else {
          if (cm.getMapId() == 350023300) {
            cm.updateInfoQuest(33132, "save=2;boss=noclear;board1=Noclear");
            cm.updateInfoQuest(33132, "save=3;boss=noclear;board1=Noclear");
            cm.addPopupSay(1540469, 1000, "真是难缠的家伙!", '');
            cm.addPopupSay(1540456, 1000, "请直接无视吧. ", '');
          } else {
            if (cm.getMapId() == 350023400) {
              cm.updateInfoQuest(33132, "save=4;boss=noclear;board1=Noclear");
              cm.addPopupSay(1540469, 1000, "哼!看来我得亲自出马了!\r\n我要把你们全部碾碎, 嗯哈哈哈!", '');
              cm.addPopupSay(1540454, 1000, "这样的话, 只能和他较量一下了, 队长!", '');
              cm.effect_Voice("Voice3.img/BlackHeaven/faker/3", 100);
            } else {
              if (cm.getMapId() == 350023500) {
                cm.updateInfoQuest(33132, "save=4;boss=noclear;board1=Noclear");
                cm.updateInfoQuest(33132, "save=5;boss=noclear;board1=Noclear");
                cm.addPopupSay(1013203, 1000, "从现在开始, 如果你想阻挡我的攻击那将会难上加难. ", '');
                cm.addPopupSay(1540455, 1000, "男, 男上加男?你究竟想干什么啊!", '');
                cm.addPopupSay(1013203, 1000, "我, 我不是那个意思……", '');
                cm.addPopupSay(1540455, 1000, "哥哥已经倒下了!它不在了!\r\n但是……!", '');
                cm.addPopupSay(1540454, 1000, "什么不在啊!", '');
                cm.addPopupSay(1540454, 1000, "现在还剩下30只!\r\n再加把劲吧, 队长!", '');
              } else {
                if (cm.getMapId() == 350023600) {
                  cm.userSetFieldFloating(350023600, 5, 5, 1000);
                  cm.updateInfoQuest(33132, "save=5;boss=noclear;board1=Noclear");
                  cm.updateInfoQuest(33132, "save=6;boss=noclear;board1=Noclear");
                  cm.addPopupSay(1013203, 1000, "哈哈哈, 这次我就和你做个了结!", '');
                  cm.effect_Voice("Voice3.img/BlackHeaven/carrier/7", 100);
                  var O = cm.getPlayer().getLevel();
                  cm.spawnMobStats(8240039, 1, O * O * 10000, O * O * 100, 66, 120);
                }
              }
            }
          }
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;