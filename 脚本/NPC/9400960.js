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
      cm.askMenu("为了再次唤醒照耀冒险岛世界的太阳之光，你来亲自体验一下这伟大的瞬间之力吧……\r\n\r\n#L1#听取#e<日冕风暴>#n说明#l", 4, 9400960);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("光芒是永恒的，就算月亮挡住了太阳，也无法彻底遮挡荣耀的痕迹——日冕。\r\n而迎接日冕神秘力量的，就是#b<日冕风暴>#k 。", 4, 9400960, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("使用#b<日冕风暴>#k技能可以对#b周围怪物发动范围攻击#k，同时每次使用#b技能时，都会叠加经验值增益#k。\r\n但是，增益持续时间结束后，所有叠加都会消失。因此要注意#r持续叠加增益，不要错过机会#k。", 4, 9400960, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("这个经验值增益#b最多可以叠加50次#k，#b日冕等级#k越高，增益效果就越强。别看它一开始效果微弱，到最后可是会增强数倍哦……嘿嘿嘿……", 4, 9400960, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#b要使用<日冕风暴>#k技能，必须积攒技能值，每次使用技能都会消耗一定数值。\r\n - 每次狩猎等级范围怪物时，增加技能值\r\n - 获得连击珠时，大量增加技能值\r\n - 消灭精英怪物时，大量增加技能值\r\n - 发动区域符文时，大量增加技能值", 4, 9400960, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("另外，你每次使用#b<日冕风暴>#k技能，都会获得#b日冕积分#k，作为对你参与庆典的奖励。别忘了每周都来参与活动哦，呼呼呼呼……！", 4, 9400960, true, true);
              } else if (status === V++) {
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}