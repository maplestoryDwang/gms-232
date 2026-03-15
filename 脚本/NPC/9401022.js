var status = -1;
var selectionLog = [];
var ranks = ['新手', '初级', "高级Ⅰ", '高级Ⅱ', "高级Ⅲ", "资深Ⅰ", "资深Ⅱ", "资深Ⅲ", "大师Ⅰ", "大师Ⅱ", '大师Ⅲ'];
var members = [1, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5];
var levels = [10, 20, 30, 40, 50, 65, 80, 100, 130, 160];
var points = [100, 500, 1000, 1500, 2000, 2000, 2000, 3000, 3000, 3000];
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
      var w = cm.getNumberFromQuestInfo(64753, 'rank');
      if (w + 1 >= ranks.length) {
        cm.askMenu("我有事找你。知道你忙，放心，很简单的。\r\n#L1# #e#b接受探险结算#n#k#l \r\n#L2#没有别的事情了。#l", 4, 9401022);
      } else {
        cm.askMenu("我有事找你。知道你忙，放心，很简单的。\r\n\r\n#L0# #e#b申请升阶#n#k#l \r\n#L1# #e#b接受探险结算#n#k#l \r\n#L2#没有别的事情了。#l", 4, 9401022);
      }
    } else {
      var N = "action分支" + selectionLog[1];
      eval(N)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  var w = cm.getNumberFromQuestInfo(64753, 'level');
  var N = cm.getNumberFromQuestInfo(64753, 'rank');
  var u = cm.getNumberFromQuestInfo(64753, "point");
  if (status <= V++) {
    if (N + 1 >= ranks.length) {
      cm.sendNormalTalk("太厉害了。你不需要再继续升级了。你现在已经达到最高等级了。", 4, 9401022, false, false);
    } else {
      var Q = N > 1 ? '#h0#队长' : "新手队长";
      cm.askYesNo('嘿，' + Q + "，来升级的吗？\r\n\r\n - 当前品级 : #b#e" + ranks[N] + "#k#n\r\n - 下一品级 : #b#e" + ranks[N + 1] + "#k#n\r\n\t* 升级时，可投入的攻击队队员增加：" + members[N] + '→' + members[N + 1] + "\r\n\t* 升级时，远征时间增加 : " + (N + 2) + '→' + (N + 3) + "\r\n\r\n我让你确认完升级条件，还有用于升级的声望值是否充足以后再申请。\r\n - 所需远征队等级: #b#e" + levels[N] + "#k#n (当前等级: " + w + ")\r\n -支付声望 : #b#e" + points[N] + "#k#n (持有声望：" + u + ')', 4, 9401022);
    }
  } else {
    if (status === V++) {
      if (w < levels[N]) {
        cm.sendNormalTalk("#b远征队等级不足#k，无法升级。\r\n你应该知道远征队的等级就是手下所有队员的等级总和吧？", 4, 9401022, false, false);
      } else if (u < points[N]) {
        cm.sendNormalTalk("#b远征队声望不足#k，无法升级。\r\n你应该知道远征队的声望会随着探索深渊的时间而增长吧？", 4, 9401022, false, false);
      } else {
        cm.addNumberForQuestInfo(64753, 'point', -u);
        cm.fieldEffect_PlayFieldSound("Sound2/PL_Sound.img/Wz2_Abyss/levelUP", 100);
        cm.sendNormalTalk("你现在是" + ranks[N + 1] + "指挥队长了。以后你每天可以在 " + (N + 3) + " 小时内，指挥" + members[N + 1] + "名队员，探索深渊。希望你能展现符合指挥阶位的风范。", 5, 9401022, false, false);
        cm.effect_OnUserEff("Effect/OnUserEff.img/AbyssExpedition/LevelUP");
        cm.深渊远征队_升阶();
      }
      cm.dispose();
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    var w = cm.getNumberFromQuestInfo(64753, 'rank');
    var N = cm.getNumberFromQuestInfo(64753, "time");
    var u = (w + 2) * 3600 - N;
    if (u < 3600) {
      cm.sendNormalTalk("请至少探险1小时以上后再来吧。", 4, 9401022, false, false);
    } else {
      if (cm.getNowTimeString(3) === cm.getStringFromQuestInfo(64754, "lastDay")) {
        cm.sendNormalTalk("你已经领取过今天的奖励了。", 4, 9401022, false, false);
      } else {
        cm.setStringForQuestInfo(64754, 'lastDay', cm.getNowTimeString(3));
        cm.sendNormalTalk("奖励已经发放过了。希望能对你的冒险有所帮助。", 4, 9401022, false, false);
        var Q = Math.floor(u / 3600);
        cm.gainItem(2631532, Q);
        if (Q >= 2) {
          cm.gainItem(2631533, Math.round(floor / 2));
        }
        if (Q >= 4) {
          cm.gainItem(2631534, Math.round(floor / 4));
        }
      }
    }
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}