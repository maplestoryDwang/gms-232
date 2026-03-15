var PQname = ["Boss_时间神殿_阿卡伊勒_简单", "Boss_时间神殿_阿卡伊勒_普通"];
var PQLog = ["阿卡伊勒[简单]", '阿卡伊勒[普通]'];
var minLevel = [150, 160];
var maxLevel = [999, 999];
var maxenter = [3, 3];
var status = -1;
var chs;
function start() {
  if (cm.getMapId() == 272030300) {
    var l = '';
    for (var a = 0; a < PQname.length; a++) {
      l += "\r\n#b#L" + a + "#挑战" + PQLog[a] + "#l#k         ";
    }
    cm.askMenu("#e<首领 - " + PQLog[0] + ">#n\r\n\r\n#b#h0# \n#k你现在想和队友一起挑战这个BOSS副本吗?\r\n" + l);
  } else {
    cm.askYesNo("#e<首领 - " + PQLog[0] + ">#n\r\n确定要结束挑战，离开这里吗？\r\n");
  }
}
function action(l, a, r) {
  if (status >= 1 && l == 0) {
    cm.sendOk("快捷寻找组队按热键“O”赶快加入组队来挑战组队任务吧。");
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 272030300) {
    if (status == 0) {
      var S = cm.getEventManager(PQname[r]);
      if (S == null || false) {
        cm.sendOk('配置文件[' + PQname[r] + "]不存在,请联系管理员。");
        cm.dispose();
        return;
      }
      chs = r;
      var m = S.getNumberProperty("state");
      var h = "#e<首领 - " + PQLog[r] + ">#n\r\n#k\r\n#e#r";
      h += "#n#k#e副本状态：#n" + (m == 0 ? "#e#g空闲#n#k" : "#e#r开启#n#k") + '';
      h += "\r\n#e推荐人数：1 - 6#n#e    推荐等级：" + minLevel[r] + " - " + maxLevel[r] + '#n';
      h += "\r\n当前已进行：#r#e" + cm.getPlayerLog(PQLog[r]) + "#n#k 次";
      h += "    剩余挑战次数：#r#e" + (maxenter[r] - cm.getPlayerLog(PQLog[r])) + "#n#k 次#n#k\r\n\r\n";
      cm.askYesNo(h + "           #b#h0# \n#k#e是否现在就进入？#n");
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
                  var S = cm.getEventManager(PQname[chs]);
                  if (S == null || false) {
                    cm.askMenu("配置文件不存在,请联系管理员。");
                  } else if (S.getNumberProperty("state") == 0) {
                    S.startInstance(cm.getParty(), cm.getMap(), 255);
                    cm.worldSpouseMessage(21, "『阿卡伊勒』 : " + cm.getPlayer().getName() + " 的敢死队队伍，气势汹汹的挑战 " + PQLog[chs] + " 去了。");
                    cm.party_addPlayerLog(PQLog[chs], 1);
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
      cm.warp(272030300, 0);
    }
    cm.dispose();
  }
}