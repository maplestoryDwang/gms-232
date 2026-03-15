var status = -1;
function action(d, X, F) {
  if (d == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  if (cm.isQuestActive(3173) || cm.isQuestActive(3175)) {
    if (status == 0) {
      cm.askYesNo("啊，不小心迷路了是吗？我会把你重新送到接见室的。");
    } else if (status == 1) {
      cm.warp(211070200, 1);
      cm.dispose();
    }
  } else {
    if (cm.isQuestActive(3178)) {
      if (status == 0) {
        cm.askYesNo("啊，不小心迷路了是吗？我会把你重新送到专用走廊的。");
      } else if (status == 1) {
        actionFB();
        cm.dispose();
      }
    } else {
      cm.sendNormalTalk("可怜的雷昂……要是他能恢复原状的话……", 0, 2161001, false, false);
      cm.dispose();
    }
  }
}
var PQname = ["副本_狮子王城_秘密走廊"];
var PQLog = ["副本_狮子王城_秘密走廊"];
var minLevel = [120];
var maxLevel = [999];
var maxenter = [1000];
var interval = [1000];
function actionFB() {
  var d = cm.getEventManager(PQname[0]);
  if (d == null) {
    cm.sendOk("配置文件不存在,请联系管理员。");
  } else {
    if (cm.getParty() == null) {
      cm.sendOk("你需要创建一个队伍才能进入。");
    } else {
      if (!cm.isLeader()) {
        cm.sendOk("需要让你们的组队长来才能决定是否进入。");
      } else {
        if (!cm.allMembersHere()) {
          cm.sendOk("部分组队成员不在当前地图，你需要召集他们过来。");
        } else {
          if (cm.party_CheckFailed_Level(minLevel[0], maxLevel[0])) {
            cm.sendOk("组队成员要在等级 " + minLevel[0] + " 以上 " + maxLevel[0] + " 以下才可以入场。");
          } else {
            if (cm.party_CheckFailed_PlayerLog(PQLog[0], maxenter[0])) {
              cm.sendOk("队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[0], maxenter[0]) + "\" #k#n次数已经达到上限了。");
            } else {
              var X = d.getNumberProperty('state');
              if (X == 0) {
                d.startInstance(cm.getParty(), cm.getMap(), 255);
                d.setProperty("PQLog", PQLog[0]);
              } else {
                cm.sendOk("好像已经有队伍在进行了，换其他频道尝试吧。");
              }
            }
          }
        }
      }
    }
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;