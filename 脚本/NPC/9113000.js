var PQname = ["Boss_蘑菇神社_天狗_普通", "Boss_蘑菇神社_天狗_困难"];
var PQLog = ["天狗<普通>", '天狗<进阶>'];
var minLevel = [33, 999];
var maxLevel = [1000, 1000];
var maxenter = [200, 100];
var interval = [10, 50];
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(N, m, q) {
  if (status == 0 && N == 0) {
    cm.dispose();
    return;
  }
  if (N == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = q;
  var n = -1;
  if (status <= n++) {
    cm.dispose();
  } else {
    if (status === n++) {
      cm.askMenu_Bottom("#face0##e<天狗的试炼！>#n\r\n你要现在挑战试炼吗？\r\n#L0#听取试炼有关介绍。#l\r\n#L1#开始挑战。#l\r\n#L9#放弃。#l", 37, 9113000);
    } else {
      var B = "action分支" + selectionLog[1];
      eval(B)(N, m, q, n);
    }
  }
}
function action分支0(N, m, q, n) {
  if (status <= n++) {
    cm.sendNormalTalk_Bottom("#face0#只要你能打败妖力全开的我，我就为你强化缘分之力。", 36, 9113000, false, true);
  } else {
    if (status === n++) {
      cm.sendNormalTalk_Bottom("#face0#要挑战多少次是你的自由，不过每天成功挑战5次以上后，将无法继续参加挑战，直至第二天为止。", 36, 9113000, true, false);
    } else if (status === n++) {
      cm.dispose();
    }
  }
}
function action分支9(N, m, q, n) {
  if (status <= n++) {
    cm.dispose();
  }
}
function action分支1(N, m, q, n) {
  if (status <= n++) {
    if (cm.getParty() == null) {
      cm.PartyAutoOn();
    }
    if (!cm.isLeader()) {
      cm.sendOk("嗯，你已经有自己的队伍。要执行这个任务，请让你们的队长与我对话，才可以申请入场.");
      cm.dispose();
    } else {
      if (cm.party_CheckFailed_Level(minLevel[selectionLog[1] - 1], maxLevel[selectionLog[1] - 1])) {
        cm.sendNext("组队成员等级 " + minLevel[selectionLog[1] - 1] + " 以上 " + maxLevel[selectionLog[1] - 1] + " 以下才可以入场。");
        cm.dispose();
      } else {
        if (cm.party_CheckFailed_PlayerLog(PQLog[selectionLog[1] - 1], maxenter[selectionLog[1] - 1])) {
          cm.sendNext("你的队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[selectionLog[1] - 1], maxenter[selectionLog[1] - 1]) + "\" #k#n次数已经达到上限了。");
          cm.dispose();
        } else {
          if (!cm.allMembersHere()) {
            cm.sendOkN("你的组队部分成员不在当前地图，请召集他们过来后再尝试。");
            cm.dispose();
          } else {
            var B = cm.getEventManager(PQname[selectionLog[1] - 1]);
            if (B == null || false) {
              cm.askMenu("配置文件不存在,请联系管理员。");
              cm.dispose();
            } else if (B.getNumberProperty("state") == 0) {
              cm.dispose();
              B.startInstance(cm.getParty(), cm.getMap(), 255);
              cm.party_addPlayerLog(PQLog[selectionLog[1] - 1], 1);
            } else {
              cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
              cm.dispose();
            }
          }
        }
      }
    }
  } else {
    cm.dispose();
  }
}