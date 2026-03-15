var PQname = ["FallenWT_NORMAL", "FallenWT_HARD"];
var PQLogname = ["戴米安", "戴米安"];
var PQLog = ["戴米安[简单]", "戴米安[困难]"];
var minLevel = [200, 240];
var maxLevel = [999, 999];
var maxenter = [5, 5];
var status = -1;
var chs;
function start() {
  if (cm.getMapId() == 105300303) {
    var s = '';
    for (var Y = 0; Y < PQname.length; Y++) {
      s += "\r\n#b#L" + Y + "#挑战 " + PQLog[Y] + '#l#k';
    }
    cm.askMenu("#e<首领 - " + PQLogname[0] + ">#n\r\n\r\n#b#h0# \n#k你想和队员们一起努力，完成任务吗？这里面有很多如果不同心协力就无法解决的障碍……\r\n" + s);
  } else {
    cm.askYesNo("#e<首领 - " + PQLog[0] + ">#n\r\n\r\n确定要结束挑战，离开这里吗？\r\n");
  }
}
function action(s, Y, l) {
  if (status >= 0 && s == 0) {
    cm.dispose();
    return;
  }
  if (s == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 105300303) {
    if (status == 0) {
      var Q = cm.getEventManager(PQname[l]);
      if (Q == null || false) {
        cm.sendOk("配置文件不存在,请联系管理员。");
        cm.dispose();
        return;
      }
      chs = l;
      var c = Q.getNumberProperty("state");
      var i = "#e<首领 - " + PQLog[l] + ">#n\r\n#k\r\n#e#r";
      i += "#n#k#e副本状态：#n" + (c == 0 ? "#e#g空闲#n#k" : "#e#r开启#n#k") + '';
      i += "\r\n#e推荐人数：1 - 6#n#e    推荐等级：" + minLevel[l] + " - " + maxLevel[l] + '#n';
      i += "\r\n当前已进行：#r#e" + cm.getPlayerLog(PQLog[l]) + "#n#k 次";
      i += "    剩余挑战次数：#r#e" + (maxenter[l] - cm.getPlayerLog(PQLog[l])) + "#n#k 次#n#k\r\n\r\n";
      cm.askYesNo(i + "           #b#h0# \n#k#e是否现在就进入？#n");
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
                cm.sendNext("要求等级 " + minLevel[chs] + " 以上 " + maxLevel[chs] + " 以下才可以入场。");
              } else {
                if (cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs])) {
                  cm.sendNext("次数已经达到上限了#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[chs], maxenter[chs]) + "\" #k#n次数已经达到上限了。");
                } else {
                  var Q = cm.getEventManager(PQname[chs]);
                  if (Q == null || false) {
                    cm.askMenu("配置文件不存在,请联系管理员。");
                  } else if (Q.getNumberProperty('state') == 0) {
                    Q.startInstance(cm.getParty(), cm.getMap(), 255);
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