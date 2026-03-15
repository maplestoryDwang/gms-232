var status = -1;
var chs;
var PQname = ["Boss_比睿山_浓姬_简单", "Boss_比睿山_浓姬_普通", "Boss_比睿山_浓姬_困难"];
var PQLog = ["浓姬[简单]", "浓姬[普通]", "浓姬[困难]"];
var minLevel = [180, 180, 180];
var maxLevel = [999, 999, 999];
var maxenter = [20, 20, 20];
var minPlayers = [1, 1, 1];
var maxPlayers = [6, 6, 6];
var channel = [0, 0, 0];
function start() {
  if (cm.getParty() == null) {
    cm.PartyAutoOn();
  }
  if (cm.getMapId() == 910811000) {
    var D = '';
    for (var v = 0; v < PQname.length; v++) {
      D += "\r\n#b#L" + v + '#' + "#fUI/UIPVP/MiniMapIcon/yellow#" + "挑战 " + PQLog[v] + "#l#k";
    }
    cm.askMenu("#e<首领：浓姬>#n\r\n\r\n#b#h0# \n#k你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……\r\n" + D);
  } else {
    cm.askYesNo("#e<首领：浓姬>#n\r\n\r\n确定要结束挑战，离开这里吗？\r\n");
  }
}
function action(D, v, B) {
  if (status >= 0 && D == 0) {
    cm.dispose();
    return;
  }
  if (D == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 910811000) {
    if (status == 0) {
      var x = cm.getEventManager(PQname[B]);
      if (x == null || false) {
        cm.sendOk("配置文件不存在,请联系管理员。");
        cm.dispose();
        return;
      }
      chs = B;
      var u = x.getNumberProperty("state");
      var b = "#e<首领 - " + PQLog[B] + ">#n\r\n#k\r\n#e#r";
      b += "#n#k#e地图状态：#n" + (u == 0 ? "#e#g空闲#n#k" : "#e#r挑战中#n#k") + '';
      b += "\r\n#e要求人数：#r" + minPlayers[B] + " - " + maxPlayers[B] + "#k#n#e   要求等级：#r" + minLevel[B] + " - " + maxLevel[B] + '#k#n';
      b += "\r\n当前已进行：#r#e" + cm.getPlayerLog(PQLog[B]) + "#n#k 次";
      b += "    剩余挑战次数：#r#e" + (maxenter[B] - cm.getPlayerLog(PQLog[B])) + "#n#k 次#n#k\r\n\r\n";
      cm.askYesNo(b + "           #b#h0# \n#k#e是否现在就进入？#n");
    } else {
      if (status == 1) {
        if (cm.getParty() == null) {
          cm.askYesNo("你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……。那么要执行这个任务必须先创建一个队伍！.");
        } else {
          if (!cm.isLeader()) {
            cm.sendOk("嗯，你已经有自己的队伍。要执行这个任务，请让你们的队长与我对话，才可以申请入场.");
            cm.dispose();
            return;
          } else {
            if (cm.party_CheckFailed_Level(minLevel[chs], maxLevel[chs])) {
              cm.sendNext("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。\r\n\r\n\r\n");
              cm.dispose();
            } else {
              if (channel[chs] != 0 && cm.getPlayer().getClient().getChannel() != channel[chs]) {
                cm.sendNext("此副本需要在 " + channel[chs] + '频道进入.');
                cm.dispose();
              } else {
                if (cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs])) {
                  cm.sendNext("你的队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
                  cm.dispose();
                } else {
                  if (!cm.allMembersHere()) {
                    cm.sendOk("你的组队部分成员不在当前地图，请召集他们过来后再尝试。");
                    cm.dispose();
                  } else {
                    if (cm.partyMembersInMap() < minPlayers[chs] || cm.partyMembersInMap() > maxPlayers[chs]) {
                      cm.sendOk("组队成员 " + minPlayers[chs] + " 人以上 " + maxPlayers[chs] + "人 以下才可以入场。");
                      cm.dispose();
                    } else {
                      var x = cm.getEventManager(PQname[chs]);
                      if (x == null || false) {
                        cm.askMenu("配置文件不存在,请联系管理员。");
                      } else {
                        var u = x.getNumberProperty("state");
                        if (u == 0) {
                          x.startInstance(cm.getParty(), cm.getMap(), 255);
                          cm.party_addPlayerLog(PQLog[chs], 1);
                          cm.worldSpouseMessage(21, "『首领挑战』 : " + cm.getPlayer().getName() + " 的敢死队队伍，气势汹汹的挑战 " + PQLog[chs] + " 去了。");
                        } else {
                          cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
                        }
                        cm.dispose();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else if (status == 2) {
        cm.PartyAutoOn();
        cm.dispose();
      } else {
        cm.dispose();
      }
    }
  } else {
    if (status == 0) {
      cm.warp(910811000, 0);
    }
    cm.dispose();
  }
}