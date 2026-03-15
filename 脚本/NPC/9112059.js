var PQname = ["Boss_蘑菇神社_天狗_剧情", "Boss_蘑菇神社_天狗_普通"];
var PQLog = ["天狗<剧情>", '天狗<普通>'];
var minLevel = [33, 999];
var maxLevel = [1000, 1000];
var maxenter = [200, 100];
var interval = [10, 50];
var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, e, k) {
  if (status >= 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getMapId() == 800024008) {
    if (status < 0) {
      cm.dispose();
    } else {
      if (status == 0) {
        var T = "#face0#是天狗！我要不要去跟他说话？";
        if (cm.isQuestFinished(58778) && !cm.isQuestFinished(58779)) {
          T += "\r\n#L0#跟天狗对话。#r(※将展开天狗首领怪战剧情模式。)#k#l";
        }
        T += "\r\n#L9#放弃。#l";
        cm.askMenu_Bottom(T, 37, 9113000);
      } else {
        if (status == 1) {
          if (k == 9) {
            cm.dispose();
            return;
          }
          if (cm.getParty() == null) {
            cm.PartyAutoOn();
          }
          if (!cm.isLeader()) {
            cm.sendOk("嗯，你已经有自己的队伍。要执行这个任务，请让你们的队长与我对话，才可以申请入场.");
            cm.dispose();
          } else {
            if (cm.party_CheckFailed_Level(minLevel[k], maxLevel[k])) {
              cm.sendNext("组队成员等级 " + minLevel[k] + " 以上 " + maxLevel[k] + " 以下才可以入场。");
              cm.dispose();
            } else {
              if (cm.party_CheckFailed_PlayerLog(PQLog[k], maxenter[k])) {
                cm.sendNext("你的队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[k], maxenter[k]) + "\" #k#n次数已经达到上限了。");
                cm.dispose();
              } else {
                if (!cm.allMembersHere()) {
                  cm.sendOkN("你的组队部分成员不在当前地图，请召集他们过来后再尝试。");
                  cm.dispose();
                } else {
                  var s = cm.getEventManager(PQname[k]);
                  if (s == null || false) {
                    cm.askMenu("配置文件不存在,请联系管理员。");
                    cm.dispose();
                  } else if (s.getNumberProperty("state") == 0) {
                    cm.dispose();
                    s.startInstance(cm.getParty(), cm.getMap(), 255);
                    cm.party_addPlayerLog(PQLog[k], 1);
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
    }
  } else {
    if (status == 0) {
      cm.warp(800024008, 1);
    }
    cm.dispose();
  }
}