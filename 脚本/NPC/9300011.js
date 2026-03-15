var status = 0;
function start() {
  status = -1;
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
  if (cm.getMapId() == 180000001) {
    cm.sendOk("很遗憾，您因为违反用户守则被禁止游戏活动，如有异议请联系管理员.");
    cm.dispose();
  } else {
    if (status == 0) {
      var V = '';
      if (cm.getPlayer().isGM()) {
        V += "以下活动(GM可见)\r\n";
        V += "#L2#进入跑旗活动7点赛场#l\r\n";
        V += "#L3#进入跑旗活动9点赛场#l\r\n";
      } else {
        V += "活动时间哦!你是来找我聊天的吗?";
      }
      if (cm.getServerName() == "BMS至尊体验服") {
        V += "#L4#领取福利(一次别贪心哦,无限领,永久有效)#l\r\n";
        V += "#L5#领取天堂戒指#l\r\n";
        V += "#L6#刷任意点装#l\r\n";
      }
      cm.askMenu_Bottom(V);
    } else {
      if (status == 1) {
        switch (U) {
          case 1:
            cm.dispose();
            break;
          case 2:
            cm.dispose();
            cm.warp(932200003, 0);
            break;
          case 3:
            cm.dispose();
            cm.warp(932200001, 0);
            break;
          case 4:
            cm.forceCompleteQuest(6500);
            var c = -999999;
            cm.getPlayer().modifyCSPoints(1, 100000000);
            cm.getPlayer().modifyCSPoints(2, 100000000);
            cm.gainMeso(2100000000);
            cm.gainPlayerPoints(100000000);
            cm.getPlayer().addFame(9999);
            cm.addHyPay(c, true);
            cm.gainItem(2435770, 9999);
            cm.addNumberForQuestInfo(1477, "count", 100000);
            cm.getPlayer().gainHonorExp(999999, true);
            cm.getPlayer().gainGamePoints(99999);
            var A = "##fs18##r#fn微软雅黑#你获得了：#fs15##k\r\n";
            A += "   #b点券#g 100000000 ";
            A += "   #b抵用#g 100000000 ";
            A += "   #b金币#g 2100000000 \r\n";
            A += "   #b积分#g 100000000 ";
            A += "   #b人气#g 9999 ";
            A += "   #b余额#g " + Math.abs(c) + " \r\n";
            A += "   #b核心#g 9999 ";
            A += "   #b声望#g 999999 ";
            A += "   #b在线#g 99999 \r\n";
            cm.getTopMsgFont('突然暴富不知所措！？', 3, 20, 20, 0);
            cm.askAcceptDecline_Bottom(A);
            cm.worldSpouseMessage(21, "『突然暴富』 : " + cm.getPlayer().getName() + " 在市场财神处领取福利,羡慕的(我)也想去。");
            cm.dispose();
            break;
          case 5:
            if (cm.getMeso() < 1000000) {
              cm.playerMessage(1, "抱歉，你没足够的100W金币！");
            } else {
              cm.gainMeso(-1000000);
              cm.gainItem(1113211, 1);
              cm.playerMessage(1, "购买成功！");
              cm.worldSpouseMessage(21, "『神戒』 : " + cm.getPlayer().getName() + " 在市场财神处购买天堂神戒,羡慕的(我)也想去。");
            }
            cm.dispose();
            break;
          case 6:
            cm.dispose();
            cm.openNpc(9110002, "制作点装_测试服");
            break;
          default:
            cm.dispose();
            break;
        }
      }
    }
  }
}