var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 0) {
    cm.dispose();
  } else {
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askMenu("This is the entrance to the Ludibrium Maze. Enjoy!\r\n#b#L0#Enter the Lubidrium Maze#l\r\n#L1#What is the Ludibrium Maze?");
    } else {
      if (status == 1) {
        var V = cm.getEventManager("LudiMazePQ");
        if (U == 0) {
          if (!!(cm.getParty() == null)) {
            cm.sendOk("Try taking on the Maze Quest with your party. If you DO decide to tackle it, please have your Party Leader notify me!");
          } else {
            if (!cm.isLeader()) {
              cm.sendOk("Try taking on the Maze Quest with your party. If you DO decide to tackle it, please have your Party Leader notify me!");
            } else {
              if (!checkPartySize()) {
                cm.sendOk("Your party needs to consist of at least " + minplayers + " members in order to tackle this maze");
              } else {
                if (!checkPartyLevels()) {
                  cm.sendOk("One of your party members has not met the level requirements of " + minlvl + '~' + maxlvl + '.');
                } else {
                  if (V == null) {
                    cm.sendOk("ERROR IN EVENT");
                  } else {
                    cm.removeFromParty(4001106);
                    V.startInstance(cm.getParty(), cm.getMap());
                  }
                }
              }
            }
          }
          cm.dispose();
        } else if (U == 1) {
          cm.sendOk("This maze is available to all parties of " + minplayers + " or more members, and all participants must be between Level " + minlvl + '~' + maxlvl + ".  You will be given " + 15 + " minutes to escape the maze.  At the center of the room, there will be a Warp Portal set up to transport you to a different room.  These portals will transport you to other rooms where you'll (hopefully) find the exit.  Pietri will be waiting at the exit, so all you need to do is talk to him, and he'll let you out.  Break all the boxes located in the room, and a monster inside the box will drop a coupon.  After escaping the maze, you will be awarded with EXP based on the coupons collected.  Additionally, if the leader possesses at least 30 coupons, then a special gift will be presented to the party.  If you cannot escape the maze within the allotted " + 15 + " minutes, you will receive 0 EXP for your time in the maze.  If you decide to log off while you're in the maze, you will be automatically kicked out of the maze.  Even if the members of the party leave in the middle of the quest, the remaining members will be able to continue on with the quest.  If you are in critical condition and unable to hunt down the monsters, you may avoid them to save yourself.  Your fighting spirit and wits will be tested！ Good luck!");
          cm.dispose();
        }
      }
    }
  }
}
function getPartySize() {
  return cm.getParty() == null ? 0 : cm.getParty().getMembers().size();
}
function isLeader() {
  return cm.isLeader();
}
function checkPartySize() {
  var f = 0;
  if (cm.getParty() == null) {
    f = 0;
  } else {
    f = cm.getParty().getMembers().size();
  }
  return !(f < minplayers || f > maxplayers);
}
function checkPartyLevels() {
  var f = true;
  var W = cm.getParty().getMembers();
  if (cm.getParty() == null) {
    f = false;
  } else {
    for (var U = 0; U < W.size() && f; U++) {
      if (W.get(U).getLevel() < minlvl || W.get(U).getLevel() > maxlvl || W.get(U).getAPI().getMapId() != cm.getMapId()) {
        f = false;
      }
    }
  }
  return f;
}
function hasParty() {
  return !(cm.getParty() == null);
}