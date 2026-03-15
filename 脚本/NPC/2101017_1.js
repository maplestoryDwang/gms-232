var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(q, n, l) {
  if (q == -1) {
    cm.dispose();
  } else {
    if (q == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (q == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askMenu("#e<挑战任务：阿里安特竞技场>#n\r\n在进入就是阿里安特的竞技场了，你想挑战自己吗？如果你想挑战的话请选出你们的队长，然后和我谈话……。\r\n\r\n每天可完成#r5#k次，您今天已经参与了#r" + cm.getPlayerLog("阿里安特竞技场") + "次#k\r\n#b#L0#我想执行组队任务。#l\r\n#L1#我想听一下说明。#l");
    } else {
      if (status == 1) {
        if (l == 0) {
          if (cm.getPlayerLog("阿里安特竞技场") >= 5) {
            cm.sendOk("今天你已经参与了5次，不能再参与该副本了！请明天赶早~");
            return;
          }
          if (cm.getParty() == null) {
            cm.sendOk("请组队后和我谈话。");
            cm.dispose();
          } else {
            if (!cm.isLeader()) {
              cm.sendOk("请叫队长和我谈话。");
              cm.dispose();
            } else {
              if (cm.partyMembersInMap() < minPlayers[chs] || cm.partyMembersInMap() > maxPlayers[chs]) {
                cm.sendOk("组队成员 " + minPlayers[chs] + " 人以上 " + maxPlayers[chs] + "人 以下才可以入场。");
                cm.dispose();
              } else {
                var W = cm.getEventManager("阿里安特竞技场");
                if (W == null) {
                  cm.sendOk("此任务正在建设当中。");
                } else {
                  if (cm.getPlayerCount(980010101) == 0) {
                    W.startInstance(cm.getParty(), cm.getMap());
                    cm.worldMessage("[组队任务] " + cm.getPlayer().getName() + "  带领着他的队伍进入了阿里安特竞技场！");
                    cm.addPlayerLog("阿里安特竞技场");
                    cm.dispose();
                    return;
                  } else {
                    cm.sendOk("目前该频道已经有人在竞技场，请换个频道重新进入。");
                    cm.dispose();
                  }
                }
                cm.dispose();
              }
            }
          }
        } else {
          if (l == 1) {
            cm.sendOk("请确认你的组队员：\r\n\r\n#b1、组队员必须要1人以上，1人以下。\r\n2、组队员等级必须要在45级以上。\r\n\r\n（#r如果仍然错误, 重新下线,再登陆 或者请重新组队。#k#b）");
            cm.dispose();
          } else if (l == 2) {
            cm.warp(910000000, 0);
            cm.sendOk("难道你不想挑战一下自己吗？？");
            cm.dispose();
          }
        }
      }
    }
  }
}