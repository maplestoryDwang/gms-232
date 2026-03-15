var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(l, x, K) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (l == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = K;
  var T = -1;
  if (status <= T++) {
    cm.dispose();
  } else {
    if (status === T++) {
      if (cm.isQuestFinished(59741)) {
        cm.askMenu_Bottom("#face0##fs25##e#b<超空间魔方>#k#n#fs16#\r\n本舰是#b私营银河研究合作机关APORD#k的第6号研究船。\r\n有什么可以为你效劳？\r\n#L0#听取有关超空间魔方的说明。#l\r\n#L1#进入超空间魔方。#l\r\n#L9#放弃。#l", 133, 9400057);
      } else {
        cm.askMenu_Bottom("#face0##fs25##e#b<超空间魔方>#k#n#fs16#\r\n本舰是#b私营银河研究合作机关APORD#k的第6号研究船。\r\n有什么可以为你效劳？\r\n#L1#进入超空间魔方。#l\r\n#L9#放弃。#l", 133, 9400057);
      }
    } else {
      var C = "action分支" + selectionLog[1];
      eval(C)(l, x, K, T);
    }
  }
}
function action分支0(l, x, K, T) {
  if (status <= T++) {
    cm.askMenu_Bottom("本舰是#b私营银河研究合作机关APORD#k的第6号研究船。\r\n需要我为你做什么？\r\n#L10#什么是超空间魔方？#l\r\n#L20#超空间魔方的移动方法说明#l\r\n#L30#超空间魔方的奖励说明#l\r\n#L90#放弃。#l", 133, 9400057);
  } else {
    var C = "action分支0_" + selectionLog[2];
    eval(C)(l, x, K, T);
  }
}
function action分支0_10(l, x, K, T) {
  if (status <= T++) {
    cm.sendNormalTalk_Bottom("#face0##b超空间魔方#k是由我们自主开发的一种用于保护研究船的研究记录和研究员的系统。利用物理和时空的概念，把研究船内部的各个隔间进行分离，然后进行管理的#b次元光谱系统#k。", 36, 9400057, false, true);
  } else {
    if (status === T++) {
      cm.sendNormalTalk_Bottom("#face0#用通常的方法#r无法#k在隔间之间移动，\r\n但利用各个隔间中的#b超空间魔方#k控制装置可在隔间之间移动，请各位访客听从#r隔间里所安排的乘务员的指示#k，然后进行移动。", 36, 9400057, true, true);
    } else {
      if (status === T++) {
        cm.sendNormalTalk_Bottom("#face0#另外，研究船内部所进行的研究活动存在一定的#r危险性#k，进行参观的访客需要#e#r特别留意#k#n。\r\n由此引发的访客自身的生理、心理伤害，我们APORD将#r一概不予赔偿#k，敬请谅解。", 36, 9400057, true, false);
      } else if (status === T++) {
        cm.dispose();
      }
    }
  }
}
function action分支0_20(l, x, K, T) {
  if (status <= T++) {
    cm.sendNormalTalk_Bottom("#face0#未认可的ID，默认作为#b访客ID#k进行统一管理。\r\n每天可以访问的次数为#r1天5次#k，默认接纳团体#b(组队)#k访问。", 36, 9400057, false, true);
  } else {
    if (status === T++) {
      cm.sendNormalTalk_Bottom("#face0#本机关#r24小时运营#k，\r\n但为了不妨碍研究活动的进行，参观时间限制在#r每次3分钟#k。", 36, 9400057, true, true);
    } else {
      if (status === T++) {
        cm.sendNormalTalk_Bottom("#face0#另外，为了答谢各位的来访参观，我们将提供一份#b小小的纪念品#k，请在退场时不要忘了领取。", 36, 9400057, true, false);
      } else if (status === T++) {
        cm.dispose();
      }
    }
  }
}
function action分支0_30(l, x, K, T) {
  if (status <= T++) {
    cm.sendNormalTalk_Bottom("#face0#访问纪念品包括，为纪念#b第6号研究船的5周年#k而特别制作的徽章和戒指形态的样品#fs12#(或相关商品)#fs16#，\r\n各个产品种类中将#r随机发放1种#k。由于#r无法#k选择，敬请谅解。", 36, 9400057, false, true);
  } else {
    if (status === T++) {
      cm.sendNormalTalk_Bottom("#face0#此外，考虑到研究事业宣传室的推广项目，#b与没有访问记录的ID一起访问#k时，可以获得一份#r小小的额外商品#k，请好好利用这点。", 36, 9400057, true, false);
    } else if (status === T++) {
      cm.dispose();
    }
  }
}
function action分支0_90(l, x, K, T) {
  cm.dispose();
}
function action分支1(l, x, K, T) {
  actionEvent(l, x, K);
}
function action分支9(l, x, K, T) {
  cm.dispose();
}
var eventname = ["副本_APORD飞船", "副本_APORD飞船_剧情"];
var PQLog = ['副本_APORD飞船', "副本_APORD飞船_剧情"];
var minLevel = [0];
var maxLevel = [999];
var maxenter = [100, 999];
var interval = [10, 999];
var status = -1;
var selectionLog = [];
function actionEvent(l, x, K) {
  if (status == 0 && l == 0) {
    cm.dispose();
    return;
  }
  if (cm.getMapId() != 867110000) {
    cm.warp(867110000, 0);
    cm.dispose();
    return;
  }
  var l = cm.isQuestFinished(59741) ? 0 : 1;
  var T = cm.getEventManager(eventname[l]);
  if (l == 0 && cm.getParty() == null) {
    cm.PartyAutoOn();
  }
  if (T == null || false) {
    cm.sendOk("配置文件不存在,请联系管理员。", 9062147);
  } else {
    if (l == 0 && !cm.isLeader()) {
      cm.sendOk("需要让我们的组队长来才能决定是否进入。");
    } else {
      if (l == 0 && !cm.allMembersHere()) {
        cm.sendOk("部分组队成员不在当前地图，我需要召集他们过来。");
      } else {
        if (l == 0 && cm.party_CheckFailed_Level(minLevel[l], maxLevel[l])) {
          cm.sendOk("组队成员要在等级 " + minLevel[l] + " 以上 " + maxLevel[l] + " 以下才可以入场。");
        } else {
          if (l == 0 && cm.party_CheckFailed_PlayerLog(PQLog[l], maxenter[l])) {
            cm.sendOk("队员#r#e \"" + cm.party_CheckFailed_PlayerLog(PQLog[l], maxenter[l]) + "\" #k#n次数已经达到上限了。");
          } else {
            if (cm.getPlayerLog(eventname[l]) >= maxenter[l]) {
              cm.sendOk("你今日的访问授权已过期。请等待第二天刷新。\r\n可用进入授权次数：" + cm.getPlayerLog(eventname[l]) + " #e/ " + maxenter[l]);
            } else {
              var C = T.getNumberProperty('state');
              if (C == 0) {
                cm.addPlayerLog(eventname[l]);
                if (l == 0) {
                  T.startInstance(cm.getParty(), cm.getMap(), 255);
                } else {
                  T.startInstance(cm.getPlayer());
                }
              } else {
                cm.sendOk_Bottom("超空间魔方正在被访问中，请尝试其他维度频道。");
              }
            }
          }
        }
      }
    }
  }
  cm.dispose();
}