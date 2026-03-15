var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(x, P, E) {
  if (status == 0 && x == 0) {
    cm.dispose();
    return;
  }
  if (x == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = E;
  var R = -1;
  if (status <= R++) {
    cm.dispose();
  } else {
    if (status === R++) {
      var V = "怎么了？\r\n";
      if (cm.isQuestFinished(58927) && cm.isQuestFinished(58940) && cm.isQuestFinished(58968)) {
        V += "\r\n#L0#前往比睿山副本，打败浓姬的分身。#l";
      }
      if (cm.isQuestFinished(58955)) {
        V += "\r\n#L1#为了打败浓姬，前往比睿山大殿前。#l";
      }
      if (!(cm.isQuestFinished(58927) && cm.isQuestFinished(58940) && cm.isQuestFinished(58968)) && cm.getMapId() != 811000099 && cm.isQuestFinished(58911)) {
        V += "\r\n#L2#重新领取变身药水。#l";
      }
      if (cm.getMapId() == 811000099) {
        V += "\r\n#L3#离开比睿山副本。#l";
      }
      V += "\r\n#L100#啊，没什么。#l";
      cm.askMenu(V, 0, 9130103);
    } else {
      var H = "action分支" + selectionLog[1];
      eval(H)(x, P, E, R);
    }
  }
}
function action分支0(x, P, E, R) {
  if (status <= R++) {
    cm.warp(811000000, 0, false);
    if (cm.getPlayer().getParty() == null) {
      cm.mapleHeroBecomeNpc(2, 1);
    } else {
      cm.mapleHeroBecomeNpc(2 - cm.getPlayer().getParty().getPlayerOrder(cm.getPlayer()), 1);
    }
    cm.dispose();
  }
}
function action分支1(x, P, E, R) {
  if (status <= R++) {
    cm.setNumberForQuestCustomData(58971, cm.getMapId());
    cm.warp(811000999, 0, false);
    cm.dispose();
  }
}
function action分支2(x, P, E, R) {
  if (status <= R++) {
    if (cm.haveItem(2432732, 1)) {
      cm.sendNormalTalk("你已经有变身药水了啊？", 0, 9130103, false, false);
    } else {
      cm.sendNormalTalk('喏，拿好了。', 0, 9130103, false, false);
      cm.gainItem(2432732, 1);
    }
  } else if (status === R++) {
    cm.dispose();
  }
}
function action分支3(x, P, E, R) {
  if (status <= R++) {
    cm.askYesNo("你确定要离开比睿山吗？");
  } else if (status === R++) {
    cm.mapleHeroBecomeNpc(-1, 1);
    cm.getPlayer().removeSkillPet();
    cm.warp(811000008, 0, false);
    cm.dispose();
  }
}
function action分支100(x, P, E, R) {
  if (status <= R++) {
    cm.sendNormalTalk("嗯？你有话要和我说吗？", 0, 9130103, false, false);
  } else if (status === R++) {
    cm.dispose();
  }
}