var PQname = ["副本_妖精学院_解救2"];
var PQLog = ["副本_妖精学院_解救2"];
var minLevel = [30];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(X, M, t) {
  if (!cm.isQuestFinished(32125) || cm.isQuestFinished(32126) || cm.getMapId() != 101073100) {
    cm.dispose();
    return;
  }
  if (status >= 0 && X == 0) {
    cm.dispose();
    return;
  }
  if (X == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 101073100) {
    if (status == 0) {
      var l = cm.getEventManager(PQname[t]);
      if (l == null || false) {
        cm.sendOk("配置文件不存在,请联系管理员。");
        cm.dispose();
        return;
      }
      cm.askAcceptDecline("为救#b妖精耶波尼#k和#b妖精帕伊尼#k，进行移动。\r\n\r\n#b可入场/等级：30以上）");
    } else {
      if (status == 1) {
        if (cm.getParty() == null) {
          cm.PartyAutoOn();
        }
        if (!cm.isLeader()) {
          cm.sendOkS("需要让我们的组队长来才能决定是否进入。");
        } else {
          if (!cm.allMembersHere()) {
            cm.sendOkS("部分组队成员不在当前地图，我需要召集他们过来。");
          } else {
            if (cm.party_CheckFailed_Level(minLevel[0], maxLevel[0])) {
              cm.sendOkS("糟糕，组队成员要在等级 " + minLevel[0] + " 以上 " + maxLevel[0] + " 以下才可以入场。");
            } else {
              if (cm.party_CheckFailed_PlayerLog(PQLog[0], maxenter[0])) {
                cm.sendOkS("糟糕，队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[0], maxenter[0]) + "\" #k#n次数已经达到上限了。");
              } else {
                var l = cm.getEventManager(PQname[0]);
                if (l == null || false) {
                  cm.askMenu("配置文件不存在,请联系管理员。");
                } else if (l.getNumberProperty("state") == 0) {
                  l.startInstance(cm.getParty(), cm.getMap(), 255);
                  l.setProperty("PQLog", PQLog[0]);
                } else {
                  cm.sendOkS("好像已经有队伍在进行了，换其他频道尝试吧。");
                }
              }
            }
          }
        }
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  } else {
    if (status == 0) {
      cm.warp(101073100, 0);
    }
    cm.dispose();
  }
}