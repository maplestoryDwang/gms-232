var PQname = ["BossDemian_NORMAL", "BossDemian_HARD"];
var PQLog = ["戴米安", "戴米安<困难>"];
var minLevel = [200, 200];
var maxLevel = [999, 999];
var maxenter = [5, 3];
var status = -1;
var chs;
function start() {
  if (cm.getMapId() == 105300303) {
    var U = '';
    for (var X = 0; X < PQname.length; X++) {
      U += "\r\n#b#L" + X + "#挑战 " + PQLog[X] + "#l#k";
    }
    cm.askMenu("#e<首领 - " + PQLog[0] + ">#n\r\n\r\n#b#h0# \n#k你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……。?\r\n" + U);
  } else {
    cm.askYesNo("#e<首领 - " + PQLog[0] + ">#n\r\n\r\n确定要结束挑战，离开这里吗？\r\n");
  }
}
function action(U, X, j) {
  if (status >= 0 && U == 0) {
    cm.dispose();
    return;
  }
  if (U == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 105300303) {
    if (status == 0) {
      var G = cm.getEventManager(PQname[j]);
      if (G == null || false) {
        cm.sendOk("配置文件不存在,请联系管理员。");
        cm.dispose();
        return;
      }
      if (cm.isAdmin()) {
        maxenter = [999, 999];
      }
      chs = j;
      var z = G.getNumberProperty('state');
      var t = "#e<首领 - " + PQLog[j] + ">#n\r\n#k\r\n#e#r";
      t += "#n#k#e副本状态：#n" + (z == 0 ? "#e#g空闲#n#k" : "#e#r开启#n#k") + '';
      t += "\r\n#e推荐人数：1 - 6#n#e    推荐等级：" + minLevel[j] + " - " + maxLevel[j] + '#n';
      t += "\r\n当前已进行：#r#e" + cm.getPlayerLog(PQLog[j]) + "#n#k 次";
      t += "    剩余挑战次数：#r#e" + (maxenter[j] - cm.getPlayerLog(PQLog[j])) + "#n#k 次#n#k\r\n\r\n";
      cm.askYesNo(t + "           #b#h0# \n#k#e是否现在就进入？#n");
    } else {
      if (status == 1) {
        if (cm.getParty() == null) {
          cm.askYesNo("你并没有组队，请创建组建一个队伍在来吧。");
        } else {
          if (!cm.isLeader()) {
            cm.sendOk("请让你们的组队长和我对话。");
          } else {
            if (cm.party_CheckFailed_Level(minLevel[chs], maxLevel[chs])) {
              cm.sendNext("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
            } else {
              if (cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs])) {
                cm.sendNext("你的队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
              } else {
                if (!cm.allMembersHere()) {
                  cm.sendOk("你的组队部分成员不在当前地图，请召集他们过来后再尝试。");
                } else {
                  var G = cm.getEventManager(PQname[chs]);
                  if (G == null || false) {
                    cm.askMenu("配置文件不存在,请联系管理员。");
                  } else if (G.getNumberProperty("state") == 0) {
                    G.startInstance(cm.getParty(), cm.getMap(), 255);
                    cm.party_addPlayerLog(PQLog[chs], 1);
                    cm.worldSpouseMessage(21, "『疯狂戴米安』 : " + cm.getPlayer().getName() + " 的敢死队队伍，气势汹汹的挑战 " + PQLog[chs] + " 去了。");
                  } else {
                    cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
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
      cm.warp(105300303, 0);
    }
    cm.dispose();
  }
}