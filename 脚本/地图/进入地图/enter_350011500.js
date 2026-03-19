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
  } else if (status === V++) {
    cm.useItem(2023418);
    cm.useItem(2023419);
    cm.useItem(2023420);
    cm.scheduleWarpTask(90, 350011600);
    cm.npc_ChangeController(1540509, 'oid=32891', -219, 155, 6, -269, -169, 1, false, 0, false);
    cm.npc_ChangeController(1540507, "oid=32892", -446, 155, 4, -496, -396, 1, false, 0, false);
    cm.npc_ChangeController(1540508, "oid=32893", -328, 155, 5, -378, -278, 1, false, 0, false);
    cm.fieldEffect_PlayBGM("Bgm18.img/BlackWing", 0, 0);
    cm.userSetFieldFloating(350011500, 0, 3, 1);
    cm.addPopupSay(1540502, 1000, "如果被那东西碾平, 那就完了!请与它保持一段距离, 以防碰到它!", '', 0);
    cm.spawnMobLimit(8240004, 1, 666, 155, 1);
    cm.addPopupSay(1540503, 1000, "呃啊, 刚刚有什么东西碰到了我的帽子!", '', 0);
    cm.addPopupSay(1540504, 1000, "头顶上方有钟乳石!请小心!", '', 0);
    cm.addPopupSay(1540503, 1000, "呼呼, 干脆先停下来, 和它谈谈如何?", '', 0);
    cm.addPopupSay(1540502, 1000, "这个么, 它那看起来像是嘴巴的部分好像最可怕!", '', 0);
    cm.addPopupSay(1540502, 1000, "好了, 加油!左脚!左脚!左脚!", '', 0);
    cm.addPopupSay(1540503, 1000, "哥哥你现在别这样, 我更乱了!", '', 0);
    cm.addPopupSay(1540503, 1000, "呃啊!好像碰到了我的屁股!", '', 0);
    cm.addPopupSay(1540504, 1000, "哥哥, 我在后面看到, 好像什么都没掉落啊!", '', 0);
    cm.addPopupSay(1540503, 1000, "啊. ", '', 0);
    cm.addPopupSay(1540503, 1000, "等到从这里出去, 我们也要买个那东西!", '', 0);
    cm.addPopupSay(1540504, 1000, "爸爸妈妈不会同意的, 哥哥!", '', 0);
    cm.addPopupSay(1540503, 1000, "如果它们现在在这里, 肯定会答应给我们每人买一个吧?", '', 0);
    cm.addPopupSay(1540504, 1000, "哥哥!布吉现在没事吧?", '', 0);
    cm.addPopupSay(1540503, 1000, "老实说, 现在这里最安全的就是布吉了!", '', 0);
    cm.addPopupSay(1540503, 1000, "哥哥, 我们应该是有计划的吧?", '', 0);
    cm.addPopupSay(1540502, 1000, "计划?有的. 那就是闭上嘴快跑!", '', 0);
    cm.addPopupSay(1540503, 1000, "……这是今天我听到的最完美的计划!", '', 0);
    cm.addPopupSay(1540502, 1000, "继续加油!出口就在前方!", '', 0);
    cm.addPopupSay(1540503, 1000, "出口?什么出口?我只看到了悬崖啊?!", '', 0);
    cm.addPopupSay(1540504, 1000, "那就是出口, 哥哥!", '', 0);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;