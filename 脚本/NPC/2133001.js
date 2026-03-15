var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, W, U) {
  if (cm.getzhizunvip() != 2) {
    cm.dispose();
    cm.playerMessage(-1, '该菜单是至尊版专享。');
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  switch (cm.getMapId()) {
    case 930000000:
      cm.sendNext('快进入森林吧。');
      break;
    case 930000100:
      cm.sendNext("这些怪物已经被感染地很深了，现在只有处决它们才行！");
      break;
    case 930000200:
      cm.sendNext("我们必须清除被污染的尖刺孢子。");
      break;
    case 930000300:
      if (!cm.allMembersHere()) {
        cm.getTopMsgFont("有队员不在这片森林。", 3, 20, 4, 0, 0);
        cm.dispose();
        return;
      }
      if (em.getProperty("maze_end") === '1') {
        cm.warpParty(930000400, 0);
      } else {
        var V = cm.getPlayer().getName();
        em.getPlayers().forEach(function (w) {
          w.getAPI().fieldEffect_ScreenMsg("quest/party/clear");
          w.getAPI().fieldEffect_PlayFieldSound("Party1/Clear", 100);
          w.getAPI().addPopupSay(2133000, 4000, '' + V + " 这么快就找到了出口，我们继续前进吧！！");
        });
        em.setProperty("maze_end", '1');
      }
      break;
    case 930000400:
      if (!cm.isLeader()) {
        cm.getTopMsgFont("还是叫队长过来吧。", 3, 20, 4, 0, 0);
        cm.dispose();
        return;
      }
      if (em.getProperty("purify_end") === '1') {
        cm.warpParty(930000500, 0);
      } else if (cm.haveItem(4001169, 20)) {
        em.getPlayers().forEach(function (w) {
          w.getAPI().removeAll(4001169);
          w.getAPI().fieldEffect_ScreenMsg("quest/party/clear");
          w.getAPI().fieldEffect_PlayFieldSound("Party1/Clear", 100);
          w.getAPI().addPopupSay(2133000, 4000, "真厉害！我们继续前进吧！！");
        });
        em.setProperty("purify_end", '1');
      } else {
        em.getPlayers().forEach(function (w) {
          w.getAPI().addPopupSay(2133000, 4000, "消灭周围的毒森林矮人，获得20个<怪物之珠>交给我。");
        });
      }
      break;
    case 930000500:
      if (!cm.isLeader()) {
        cm.getTopMsgFont('还是叫队长过来吧。', 3, 20, 4, 0, 0);
        cm.dispose();
        return;
      }
      if (em.getProperty("jump_end") === '1') {
        cm.warpParty(930000600, 0);
      } else if (cm.haveItem(4001163, 1)) {
        em.getPlayers().forEach(function (w) {
          w.getAPI().fieldEffect_ScreenMsg("quest/party/clear");
          w.getAPI().fieldEffect_PlayFieldSound("Party1/Clear", 100);
          w.getAPI().addPopupSay(2133004, 4000, "真厉害！我们继续前进吧！！");
        });
        em.setProperty('jump_end', '1');
      } else {
        em.getPlayers().forEach(function (w) {
          w.getAPI().addPopupSay(2133004, 4000, "现在需要一个紫色魔力石，爬到最上面就可以找到。");
        });
      }
      break;
    case 930000600:
      cm.sendNext("用紫色魔力石净化祭坛吧。");
      break;
    case 930000700:
      cm.removeAll(4001163);
      cm.removeAll(4001169);
      cm.removeAll(2270004);
      cm.warp(930000800, 0);
      break;
  }
  cm.dispose();
}