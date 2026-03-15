var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getzhizunvip() != 2) {
        cm.dispose();
        cm.playerMessage(-1, '该菜单是至尊版专享。');
        return;
      }
      if (cm.getMapId() == 920011200) {
        for (var V = 4001044; V < 4001064; V++) {
          cm.removeAll(V);
        }
        cm.warp(933030000, 0, false);
        cm.dispose();
        return;
      }
      var w = cm.getEventManager('组队任务_女神塔');
      if (w == null) {
        cm.getTopMsgFont("脚本不存在。", 3, 20, 4, 0, 0);
        cm.dispose();
        return;
      }
      if (!cm.isLeader()) {
        cm.getTopMsgFont("请让队长跟我讲话。", 3, 20, 4, 0, 0);
        cm.dispose();
        return;
      }
      if (!cm.allMembersHere()) {
        cm.getTopMsgFont("所有队员都在当前地图才可以入场", 3, 20, 4, 0, 0);
        cm.dispose();
      }
      if (w.getProperty("pre") === '0') {
        for (var V = 4001044; V < 4001064; V++) {
          cm.removeAll(V);
        }
        cm.sendNext("请帮帮我！我被远古精灵困在封印里了！它把女神雕像的所有部分都放错了，我们必须把它全部找回来！");
        cm.dispose();
        return;
      }
      switch (cm.getMapId()) {
        case 920010100:
          if (cm.haveItem(4001055, 1)) {
            w.getPlayers().forEach(function (B) {
              B.getAPI().gainItem(5062010, 5);
              B.getAPI().gainItem(5062024, 1);
              B.getAPI().gainItem(2340000, 2);
              B.getAPI().gainItem(2049124, 2);
              B.getAPI().gainItem(2431083, 1);
              B.getAPI().gainItem(2431303, 1);
              B.getAPI().gainItem(2431887, 1);
              B.getAPI().gainItem(2431944, 1);
              B.getAPI().gainItem(2431945, 2);
            });
            cm.removeAll(4001055);
            cm.warpParty(933030000, 0);
            cm.dispose();
            return;
          } else if (w.getProperty('stage') === '4') {
            if (w.getProperty("finished") === '0') {
              cm.warpParty(920010800, 0);
            } else {
              cm.sendOk("感谢你为女神做的一切！");
              cm.dispose();
            }
          } else {
            cm.sendOk("请帮帮我！我被远古精灵困在封印里无法行动！它把女神雕像的所有部分都放错了，现在必须把它全部找回来！\r\n#e我在这里等你们。#k");
            cm.dispose();
          }
          cm.dispose();
          break;
        case 920010200:
          if (!cm.haveItem(4001050, 12) && !cm.haveItem(4001045, 1)) {
            cm.sendOk("从这个阶段的怪物那里收集#b12#k个雕像碎片，请把它们带给我，这样我就可以把它们拼在一起了！");
            cm.dispose();
            return;
          } else if (cm.haveItem(4001045, 1)) {
            cm.sendOk("这里已经没事了，快去其他地方瞧瞧吧！");
            cm.dispose();
          } else {
            cm.removeAll(4001050);
            cm.gainItem(4001045, 1);
            cm.givePartyExp(3500);
            clear();
            cm.dispose();
          }
          cm.dispose();
          break;
        case 920010300:
          if (!cm.haveItem(4001051, 15)) {
            cm.sendOk("这里没什么问题！我已经解决了。");
          } else {
            cm.removeAll(4001051);
            cm.gainItem(4001045, 1);
            cm.givePartyExp(3500);
            clear();
          }
          cm.dispose();
          break;
        case 920010400:
          if (w.getProperty('stage3') === '0' && !cm.isAllReactorState(2008006, 7)) {
            cm.sendOk("请找到本周当天的唱片并将其丢在音乐播放器上。\r\n#v4001056#Sunday\r\n#v4001057#Monday\r\n#v4001058#Tuesday\r\n#v4001059#Wednesday\r\n#v4001060#Thursday\r\n#v4001061#Friday\r\n#v4001062#Saturday\r\n");
          } else if (w.getProperty("stage3") === '0' && cm.isAllReactorState(2008006, 7)) {
            cm.gainItem(4001046, 1);
            cm.playerMessage(-1, "获得碎片");
            cm.givePartyExp(3500);
            clear();
            w.setProperty('stage3', '2');
          } else {
            cm.sendOk("感谢你为女神做的一切！");
          }
          cm.dispose();
          break;
        case 920010500:
          if (w.getProperty("stage4") === '0') {
            var N = Array();
            var u = 0;
            for (var V = 0; V < 3; V++) {
              var Q = cm.getMap().getNumPlayersItemsInArea(V);
              N.push(Q);
              u += Q;
            }
            if (u != 3) {
              cm.sendOk("平台上需要3个玩家或物品。");
            } else {
              var m = 0;
              for (var V = 0; V < 3; V++) {
                if (w.getProperty('stage4_' + V) === '' + N[V]) {
                  m++;
                }
              }
              if (m == 3) {
                if (cm.canHold(4001047, 1)) {
                  clear();
                  cm.gainItem(4001047, 1);
                  cm.givePartyExp(3500);
                  w.setProperty("stage4", '1');
                } else {
                  cm.sendOk("背包必须留出一个空间！");
                }
              } else {
                cm.fieldEffect_ScreenMsg(true, "quest/party/wrong_kor");
                cm.fieldEffect_PlayFieldSound(true, "Party1/Failed");
                if (m > 0) {
                  cm.sendOk("其中一个平台是正确的。");
                } else {
                  cm.sendOk("所有的平台都错了。");
                }
              }
            }
          } else {
            cm.sendOk("入口已经打开了！");
          }
          cm.dispose();
          break;
        case 920010600:
          if (!cm.haveItem(4001052, 30)) {
            cm.sendOk("从这个阶段的怪物那里收集30个雕像碎片，请把它们带给我，这样我就可以把它们拼在一起了！");
          } else {
            cm.removeAll(4001052);
            cm.gainItem(4001048, 1);
            cm.givePartyExp(3500);
            clear();
          }
          cm.dispose();
          break;
        case 920010700:
          if (w.getProperty("stage6") === '0') {
            var c = Array();
            var u = 0;
            for (var V = 0; V < 3; V++) {
              if (cm.getMap().getReactorByName('' + (V + 1)).getState() > 0) {
                c.push('1');
                u += 1;
              } else {
                c.push('0');
              }
            }
            if (u != 2) {
              cm.sendOk("塔顶处有3个杠杆，请调试其中2个然后与我对话。");
              cm.dispose();
            } else {
              var m = 0;
              for (var V = 0; V < 3; V++) {
                if (w.getProperty("stage62_" + V) === '' + c[V]) {
                  m++;
                }
              }
              if (m == 3) {
                if (cm.canHold(4001049, 1)) {
                  clear();
                  cm.gainItem(4001049, 1);
                  cm.givePartyExp(3500);
                  w.setProperty("stage6", '1');
                  cm.dispose();
                } else {
                  cm.sendOk("背包里必须留出一个空间！");
                  cm.dispose();
                }
              } else {
                cm.fieldEffect_ScreenMsg(true, "quest/party/wrong_kor");
                cm.fieldEffect_PlayFieldSound(true, "Party1/Failed");
                if (m >= 1) {
                  cm.sendOk("其中一个操纵杆是正确的。");
                  cm.dispose();
                } else {
                  cm.sendOk("两个杠杆都错了。");
                  cm.dispose();
                }
              }
            }
          } else {
            cm.sendOk("感谢你为女神做的一切！");
            cm.dispose();
          }
          cm.dispose();
          break;
        case 920010800:
          cm.sendNext("这是最后的决战了！\r\n找到邪恶食人花，击败它后远古精灵就会出现。\r\n获得生命之根来拯救女神！！！");
          cm.dispose();
          break;
        case 920010900:
          if (!cm.isLeader()) {
            cm.getTopMsgFont("还是叫队长过来吧。", 3, 20, 4, 0, 0);
            cm.dispose();
            return;
          }
          if (w.getProperty("feather_end") === '1') {
            if (cm.canHold(4001048, 1)) {
              w.getPlayers().forEach(function (B) {
                B.getAPI().removeAll(4001158);
              });
              cm.gainItem(4001048, 1);
              cm.givePartyExp(3500);
              clear();
              w.setProperty("feather_end", '2');
              cm.dispose();
            } else {
              cm.sendOk("背包里必须留出一个空间！");
            }
          } else {
            cm.sendNext("这是塔楼的监狱。\r\n如果能找回3个#b#v4001158##z4001158##k的话，我就可以复原出一个#r#v4001048##z4001048##n#k给你。");
          }
          cm.dispose();
          break;
        case 920011000:
          cm.sendNext("这是塔楼的暗室。你可以在这里找到一些好东西。");
          cm.dispose();
          break;
      }
      cm.dispose();
    }
  }
}
function clear() {
  cm.fieldEffect_ScreenMsg(true, "quest/party/clear");
  cm.fieldEffect_PlayFieldSound(true, "Party1/Clear");
}