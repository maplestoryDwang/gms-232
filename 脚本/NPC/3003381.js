var status = -1;
var selectionLog = [];
var PQname = ["日常_阿尔卡那_灵魂拯救者"];
var PQLog = ["挑战<灵魂拯救者>。"];
var minLevel = [225];
var maxLevel = [999];
var maxenter = [10];
var minPlayers = [1];
var maxPlayers = [1];
function start() {
  action(1, 0, 0);
}
function action(T, e, I) {
  if (cm.getParty() == null) {
    cm.PartyAutoOn();
  }
  if (status == 0 && T == 0) {
    cm.dispose();
    return;
  }
  if (T == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = I;
  var D = -1;
  if (status <= D++) {
    cm.dispose();
  } else {
    if (status === D++) {
      var B = "#b#e<灵魂拯救者>#n#k\r\n";
      B += " 最好尽快把我的朋友们救出来！\r\n";
      B += " #r(今日挑战情况" + cm.getPlayerLog('挑战<灵魂拯救者>。') + '/' + maxenter + ")#k\r\n\r\n";
      B += "#b#L0#挑战<灵魂拯救者>。#l\r\n";
      B += "#L1#兑换#z4310235#(1:1)。#l\r\n";
      B += "#L2#听取说明。#l#k\r\n\r\n\r\n";
      if (cm.getMapId() == 921172400) {
        B += "#L3#暂时离开。#l#k\r\n\r\n\r\n";
      }
      cm.askMenu(B, 0, 3003381);
    } else {
      if (status === D++) {
        if (I == 0) {
          if (!cm.isLeader()) {
            cm.sendOk("请让你们的队长与我对话，才可以申请入场.");
            cm.dispose();
            return;
          } else {
            if (cm.party_CheckFailed_Level(minLevel, maxLevel)) {
              cm.sendNext("组队成员等级 " + minLevel + " 以上 " + maxLevel + " 以下才可以入场。\r\n\r\n\r\n");
              cm.dispose();
            } else {
              if (cm.party_CheckFailed_PlayerLog(PQLog, maxenter)) {
                cm.sendNext("你的队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog, maxenter) + "\" #k#n次数已经达到上限了。");
                cm.dispose();
              } else {
                if (!cm.allMembersHere()) {
                  cm.sendOk("你的组队部分成员不在当前地图，请召集他们过来后再尝试。");
                  cm.dispose();
                } else {
                  if (cm.partyMembersInMap() < minPlayers || cm.partyMembersInMap() > maxPlayers) {
                    cm.sendOk("组队成员 " + minPlayers + " 人以上 " + maxPlayers + "人 以下才可以入场。");
                    cm.dispose();
                  } else {
                    var k = cm.getEventManager(PQname);
                    if (k == null || false) {
                      cm.askMenu("配置文件不存在,请联系管理员。");
                    } else {
                      var s = k.getNumberProperty("state");
                      if (s == 0) {
                        cm.dispose();
                        k.startInstance(cm.getParty(), cm.getMap());
                        cm.party_addPlayerLog(PQLog, 1);
                        cm.worldSpouseMessage(21, "『首领挑战』 : " + cm.getPlayer().getName() + " 的敢死队队伍，气势汹汹的挑战 " + PQLog + " 去了。");
                      } else {
                        cm.sendOk("已经有队伍在进行了,请换其他频道尝试。");
                        cm.dispose();
                      }
                      cm.dispose();
                    }
                  }
                }
              }
            }
          }
        } else {
          if (I == 1) {
            if (cm.getItemQuantity(4310235) <= 0) {
              cm.sendNormalTalk("#b#i4310235:##t4310235##k不够了呢。\r\n至少要有#b1个#k，才能交换#b#i1712004:##t1712004#&#i2614029:##t2614029##k！", 0, 3003381, false, false);
            } else {
              var A = cm.getItemQuantity(4310235);
              if (cm.getSpace(1) > A) {
                for (var P = 0; P < A; P++) {
                  cm.gainItem(1712004, 1);
                }
                cm.gainItem(4310235, -A);
                cm.playerMessage(-1, "获得道具：神秘徽章：阿尔卡那 x" + A + '');
                cm.effect_NormalSpeechBalloon("获得道具：神秘徽章：阿尔卡那 x" + A + '', 1, 0, 0, 3000, 0, 0);
              } else {
                cm.sendNext("你的背包位置不足，整理后再次尝试。");
              }
            }
            cm.dispose();
          } else {
            if (I == 2) {
              cm.askMenu("你想知道什么？\r\n#L0# #e灵魂拯救者规则#n#l\r\n#L1# #e灵魂拯救者奖励#n#l\r\n#L2# #e每日任务快速执行#n#l\r\n#L3# #e什么是加油！奖励灵魂币？#n#l\r\n#L100# #e不听说明。#n#l", 0, 3003381);
            } else if (I == 3) {
              cm.dispose();
              cm.warp(450005000);
            }
          }
        }
      } else {
        var K = "action" + selectionLog[2];
        eval(K)(T, e, I, D);
      }
    }
  }
}
function action0(T, e, I, D) {
  if (status <= D++) {
    cm.sendNormalTalk("#e<灵魂拯救者规则>#n\r\n\r\n#e一定要在限时结束前/防御力见底前#n尽力解救更多的#b#e被束缚的石精灵#n#k！\r\n救出#b#e被束缚的石精灵#n#k后，#r#e点击采集/NPC对话键#n#k，就可以带走他们了！", 0, 3003381, false, true);
  } else {
    if (status === D++) {
      cm.sendNormalTalk("#e<灵魂拯救者规则>#n\r\n\r\n你可以带走#b#e最多8只#n#k石精灵！\r\n只要把他们#b#e平安带到最初的解救地点，就能获得#n#k\r\n#e“解救分数”#n！\r\n#b#e一次解救的石精灵越多，#n#k获得的分数就越高！\r\n\r\n#e1只-200分\r\n2只-500分\r\n3只-1000分\r\n4只-1500分\r\n5只-2500分\r\n6只-3500分\r\n7只-4500分\r\n8只-6000分#n", 0, 3003381, true, true);
    } else {
      if (status === D++) {
        cm.sendNormalTalk("#e<灵魂拯救者规则>#n\r\n\r\n不过，那些#r#e坏精灵#n#k可不会让你轻易带走我的朋友。\r\n每过一定时间，地图上就会出现来回走动的#r#e精灵碎片#n#k。万一被这些家伙攻击到，就会损耗你的#b#e防御力#n#k。", 0, 3003381, true, true);
      } else if (status === D++) {
        cm.sendNormalTalk("#e<灵魂拯救者规则>#n\r\n\r\n此外，一旦你救出我的朋友，#r#e剧毒精灵#n#k就会开始追击你了！\r\n救出的朋友越多，#r#e剧毒精灵#n#k的#e体型就会越来越大，速度也越来越快。#n一旦被这家伙攻击，你就会丧失大量的防御力，原本带着的石精灵也会全部消失……千万要小心才行！", 0, 3003381, true, true);
        status = -1;
      }
    }
  }
}
function action1(T, e, I, D) {
  if (status === D++) {
    cm.sendNormalTalk("#e<灵魂拯救者奖励>#n\r\n\r\n通过解救石精灵获得#b#e解救分数#n#k，每#e1000分#n可以获得1个#b#i4310235:##t4310235##k。", 0, 3003381, false, true);
  } else {
    if (status === D++) {
      cm.sendNormalTalk("#e<灵魂拯救者奖励>#n\r\n\r\n你可以在我这里用#b3个#i4310235:##t4310235##k交换#r1个#i1712004##t1712004#&#i2614029##t2614029##k。", 0, 3003381, true, true);
    } else if (status === D++) {
      cm.sendNormalTalk("#e<灵魂拯救者奖励>#n\r\n\r\n#b#e每天可以进行3次#n#k挑战，#r#e最多可以获得30个币#n#k。好，那我的朋友就拜托你啦！", 0, 3003381, true, true);
      status = -1;
    }
  }
}
function action2(T, e, I, D) {
  if (status <= D++) {
    cm.sendNormalTalk("可以执行神秘河地区的每日任务时，为了可以更轻松地完成#e<灵魂拯救者>#n任务，每天提供#b#e立即完成<灵魂拯救者>#n#k的机会。使用#e立即完成#n#k功能，可以以今天我达到的最高纪录为基准立即完成任务。但经验值奖励及成就相关内容不会被记录下来，这一点一定要记住！\r\n#r*立即完成时，无法获得加油奖励纪念币。#k\r\n\r\n\r\n#e#b今天可以<灵魂拯救者>立即完成的次数 (0/2)#n#k\r\n ？莫拉斯地区： #r#e每日任务可以执行#n#k\r\n ？埃斯佩拉地区： #r#e每日任务可以执行#n#k", 0, 3003381, false, false);
    status = -1;
  }
}
function action3(T, e, I, D) {
  if (status <= D++) {
    cm.sendNormalTalk("#e<灵魂拯救者奖励>#n\r\n每天挑战3次获得的灵魂币总数在1个以上9个以下时，根据获得总数发放数量不等#b#e加油！奖励灵魂币#n#k作为安慰，所以一定不要放弃！", 0, 3003381, false, true);
    status = -1;
  }
}
function action100(T, e, I, D) {
  if (status <= D++) {
    cm.dispose();
  }
}