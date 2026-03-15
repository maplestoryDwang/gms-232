var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askMenu("啊！你也是猎人吧？嗯，我们这儿接到了报告，幽影森林出了不少麻烦啊——钱袋子活过来袭击路人，可怕的幽灵四处出没，甚至还有人看见了一只像是雪怪的生物。为了宽抚大众，我和艾斯拜德决定悬赏打猎这些造成麻烦的生物。完成这些赏金任务，我就任命你当我的副手！有兴趣不？\r\n#b#L0#拿人钱财，替人消灾。\r\n #l#k", 0, 9201054);
    } else {
      if (status === v++) {
        cm.askMenu("这才像话嘛！不过我得警告你，这是一项艰难的任务——这种幽灵厉害的很。你确定自己有能力应对幽影森林的危险，打猎它们？\r\n#b#L0#我才不怕什么幽灵呢。\r\n#b#L1#且慢，我还是先找米奇买点药水好了……\r\n#l#k  ", 0, 9201054);
      } else {
        if (status === v++) {
          cm.askMenu("我也不怕，朋友！很好。总之，某天我和一个脾气挺坏的盗贼同僚聊天，他告诉我幽影森林里有只怪物。那只怪物只是看了他一眼，就凶猛地向他飘了过来。\r\n#b#L0#让我猜猜，他大吼一声：“大胆妖孽，看剑”然后平安无事地离开了森林？\r\n#l#k", 0, 9201054);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("你这笑话不错！一般盗贼确实不这么干！不过这只怪物比较弱，然后偷怪物的命和偷别人的钱好像也差不多……总之，他准备战斗的时候，突然觉得很冷……仿佛周围的空气被冻结了似的。他的关节变得迟钝，意识变得模糊，而那只怪物离他却越来越近。", 0, 9201054, false, true);
          } else {
            if (status === v++) {
              cm.askMenu("它看上去有点像幽灵，但要比普通幽灵大得多，也更吓人，移动的时候面无表情，离他越来越近。他说它是“远古怨魂”。不用我说你也猜到了吧，我的那位同僚吓坏了，他踩到自己的药水袋，摔了个狗啃泥，完全惊慌失措了。\r\n#b#L0#他真的是盗贼吗。不是说盗贼都敏捷地超乎常人吗？\r\n#l#k", 0, 9201054);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("对啊！很显然，这只怪物把他吓到了忘干净训练的程度了。或许他以为那是某种复仇之灵？除了以外他没人知道。于是，就当那只怪物即将发动攻击，消灭他时，他在最后一刻躲过了攻击，重振了精神。他摆好架势，与怨魂开始了战斗，但他没想到怨魂如此难缠，打得很吃力。在大战一场后，他终于胜利了。而那只怪物则只留下了一团脏布块，消失了。", 0, 9201054, false, true);
              } else {
                if (status === v++) {
                  cm.askMenu("\r\n#b#L0#远古怨魂？有意思！我一直想知道它们是不是真的存在呢！\r\n#l#k", 0, 9201054);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("呃，这下你知道了吧。我其实有点想知道它们为什么会这样。毕竟他们也曾是人类……啊，算了，以后再研究吧。身为警长，我不允许这些东西伤害我的居民。你得从这些怪物身上缴获30团脏布块给我。快去吧！", 0, 9201054, false, true);
                  } else if (status === v++) {
                    cm.forceStartQuest(8234, '');
                    cm.dispose();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}