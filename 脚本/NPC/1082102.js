var PQname = ["副本_金海滩_Boss"];
var PQLog = ["副本_金海滩_Boss"];
var minLevel = [30];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(c, R, h) {
  if (cm.isQuestActive(38040)) {
    cm.warp(914200000, 0, false);
    cm.dispose();
    return;
  }
  if (!cm.isQuestFinished(2974)) {
    cm.sendOkS("这地方看上去有点奇怪，我最好还是先了解一下情况。");
    cm.dispose();
    return;
  }
  if (status >= 0 && c == 0) {
    cm.dispose();
    return;
  }
  if (c == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 120041800) {
    if (status == 0) {
      var E = cm.getEventManager(PQname[h]);
      if (E == null || false) {
        cm.sendOk("配置文件不存在,请联系管理员。");
        cm.dispose();
        return;
      }
      cm.askAcceptDecline("你想到奇怪的海去吗？可能会遇到危险的事情。");
    } else {
      if (status == 1) {
        if (cm.getParty() == null) {
          cm.sendOkS("我需要创建一个队伍才能进入。");
        } else {
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
                  var E = cm.getEventManager(PQname[0]);
                  if (E == null || false) {
                    cm.askMenu("配置文件不存在,请联系管理员。");
                  } else if (E.getNumberProperty("state") == 0) {
                    E.startInstance(cm.getParty(), cm.getMap(), 255);
                    E.setProperty('PQLog', PQLog[0]);
                  } else {
                    cm.sendOkS("好像已经有队伍在进行了，换其他频道尝试吧。");
                  }
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
      cm.warp(120041800, 0);
    }
    cm.dispose();
  }
}