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
      cm.askMenu("节日烟花秀时间！展现一下勇士部落的火热气息吧！\r\n\r\n#L0##e<烟花仓库>#n 进入#l\r\n#L1##e<烟花秀时间！>#n 重新听取说明#l\r\n#L2#查看我的最高纪录#l\r\n", 4, 9400963);
    } else {
      if (status === V++) {
        if (selectionLog[1] == 0) {
          cm.dispose();
          cm.openNpc(9400963, "活动_日冕烟花秀");
          return;
        } else {
          if (selectionLog[1] == 1) {
            cm.sendNormalTalk("据说为了节日的亮点--烟花秀而精心准备的烟花被沙漠巨人偷走了。\r\n你的任务就是消灭#b烟花仓库袭击者--沙漠巨人#k，找回被它们偷走的节日用烟花，发射尽可能多的烟花。", 4, 9400963, false, true);
          } else {
            if (selectionLog[1] == 2) {
              var w = cm.getNumberFromQuestInfo(500830, "record");
              cm.sendNormalTalk("烟花秀时间！的最高分是#b#e" + w + "分#n#k。那时众人的欢呼声现在还在耳边回响。\r\n\r\n#r（该分数为世界内最高分。）", 4, 9400963, false, true);
              cm.dispose();
              return;
            }
          }
        }
      } else {
        if (status === V++) {
          cm.sendNormalTalk("在进入烟花仓库时，会出现#b烟花仓库袭击者沙漠巨人#k，如果对沙漠巨人造成一定伤害，就会掉落被偷走的#b节日用烟花#k，然后点燃烟花就能够发射火焰！", 4, 9400963, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("消灭1只沙漠巨人不算结束。沙漠巨人总共要经历#b10个阶段#k，#b防御力#k和#b等级#K都会提升，然后再次出现。", 4, 9400963, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("按照沙漠巨人和节日用烟花#b造成的伤害量#k将提升#b烟花分数#k。请注意，随着沙漠巨人越变越强，获得1分所需要造成的伤害量就越高。", 4, 9400963, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("烟花秀时间只会进行#b2分钟#k。\r\n其中根据你造成的伤害量，#b最多可以获得1200分#k的烟花分数，#b已获得的分数中，每30分将有1日冕积分#k作为奖励。", 4, 9400963, true, true);
              } else if (status === V++) {
                cm.sendNormalTalk("虽然可以进行无限次挑战，但是请注意#r每个世界每天只能领取1次#k奖励哦。", 4, 9400963, true, false);
              } else {
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}