var PQname = ["Boss_暴君城堡_麦格纳斯_简单", "Boss_暴君城堡_麦格纳斯_普通", "Boss_暴君城堡_麦格纳斯_困难"];
var PQLog = ["麦格纳斯模拟战", "麦格纳斯", "麦格纳斯[困难]"];
var minLevel = [100, 155, 200];
var maxLevel = [999, 999, 999];
var maxenter = [5, 5, 5];
var status = -1;
var chs;
function start() {
  if (cm.getMapId() == 401060000) {
    var D = '';
    for (var t = 0; t < PQname.length; t++) {
      D += "\r\n#b#L" + t + "#挑战 " + PQLog[t] + "#l#k";
    }
    cm.askMenu("#e<首领 - " + PQLog[0] + ">#n\r\n\r\n#b#h0# \n#k你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……\r\n" + D);
  } else {
    cm.askYesNo("#e<首领 - " + PQLog[0] + ">#n\r\n\r\n确定要结束挑战，离开这里吗？\r\n");
  }
}
function action(D, t, P) {
  if (status >= 0 && D == 0) {
    cm.dispose();
    return;
  }
  if (D == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 401060000) {
    if (status == 0) {
      var I = cm.getEventManager(PQname[P]);
      if (I == null || false) {
        cm.sendOk("配置文件不存在,请联系管理员。");
        cm.dispose();
        return;
      }
      chs = P;
      var T = I.getNumberProperty("state");
      var O = "#e<首领 - " + PQLog[P] + ">#n\r\n#k\r\n#e#r";
      O += "#n#k#e副本状态：#n" + (T == 0 ? "#e#g空闲#n#k" : "#e#r开启#n#k") + '';
      O += "\r\n#e推荐人数：1 - 6#n#e    推荐等级：" + minLevel[P] + " - " + maxLevel[P] + '#n';
      O += "\r\n当前已进行：#r#e" + cm.getPlayerLog(PQLog[P]) + "#n#k 次";
      O += "    剩余挑战次数：#r#e" + (maxenter[P] - cm.getPlayerLog(PQLog[P])) + "#n#k 次#n#k\r\n\r\n";
      cm.askYesNo(O + "           #b#h0# \n#k#e是否现在就进入？#n");
    } else {
      if (status == 1) {
        if (cm.getParty() == null) {
          cm.askYesNo("你并没有组队，请创建组建一个队伍在来吧。");
        } else {
          if (!cm.isLeader()) {
            cm.sendOk("请让你们的组队长和我对话。");
          } else {
            if (!cm.allMembersHere()) {
              cm.sendOk("你的组队部分成员不在当前地图，请召集他们过来后再尝试。");
            } else {
              if (cm.party_CheckFailed_Level(minLevel[chs], maxLevel[chs])) {
                cm.sendNext("组队成员等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
              } else {
                if (cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs])) {
                  cm.sendNext("你的队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
                } else {
                  var I = cm.getEventManager(PQname[chs]);
                  if (I == null || false) {
                    cm.askMenu("配置文件不存在,请联系管理员。");
                  } else if (I.getNumberProperty("state") == 0) {
                    I.startInstance(cm.getParty(), cm.getMap(), 255, 31732);
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
      cm.warp(401060000, 0);
    }
    cm.dispose();
  }
}