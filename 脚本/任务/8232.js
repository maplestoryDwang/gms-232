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
      cm.askMenu("啊！你也是猎人吧？嗯，我们这儿接到了报告，幽影森林出了不少麻烦啊——钱袋子活过来袭击路人，可怕的幽灵四处出没，甚至还有人看见了一只像是雪怪的生物。为了宽抚大众，我和艾斯拜德决定悬赏打猎这些造成麻烦的生物。完成这些赏金任务，我就任命你当我的副手！有兴趣不？\r\n#b#L0#必须的，惩奸除恶是英雄的本职，我义不容辞。\r\n #l#k", 0, 9201054);
    } else {
      if (status === v++) {
        cm.askMenu("这才像话嘛！不过我得警告你，这是一项艰难的任务——那帮小畜生难缠的很。你确定自己有能力应对幽影森林的危险，打猎它们？\r\n#b#L0#我已经做好准备了，告诉我如何消灭它们吧。\r\n#b#L1#且慢，我还是先找米奇买点药水好了……\r\n#l#k  ", 0, 9201054);
      } else {
        if (status === v++) {
          cm.askMenu("这才像话嘛！你有点像年轻时候的我。当小偷可不容易啊，我年轻时候偷过不少东西——现在终于有了赎罪的机会。守护大家、建设城市还有帮助年轻的冒险者提升实力都让我积了不少德。比起欺凌弱者，我还是更喜欢守护弱者。\r\n#b#L0#我理解。话说，这帮矮妖是什么情况？\r\n#l#k", 0, 9201054);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("是这样的，我前些天去了趟幽影森林，想看看到底出了什么事。因为我们最近接到了许多奇怪的报告，艾斯拜德也很担心。被这些报告搞得坐立不安的。总之，我在森林里看到了许多许多奇怪的东西。让我印象最深的，是看到一大袋金币横在路当中，仿佛在诱惑路人去拾起它。我以为是有人把它落在那里，想把它捡起来。", 0, 9201054, false, true);
          } else {
            if (status === v++) {
              cm.askMenu("结果刚弯下腰，就听到了有人在笑。笑声虽然很轻，但我听见了。我立刻藏了起来，免得被人偷袭。当我做好战斗准备时……又什么都没有发生。谁都没有来。等我放下心来，想去处理那袋金币时，突然被它砸了个正着！\r\n#b#L0#什么叫“砸了个正着？”\r\n#l#k", 0, 9201054);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("我摸到它的那一瞬间……那袋金币……就变成了一个戴着破烂高帽，挥舞着棒棒糖的怪物！我立刻一个后空翻，掏出我的武器，然而它似乎浮在半空中，不断地消失又不断地出现，似乎是在玩弄我。而我，最讨厌有人这么对我。", 0, 9201054, false, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("因此，我凝神聚气，提升了我的速度灵活度，朝那个恶魔发动了攻击，打中了它一下。它吃了这一击，把他那棒棒糖一样的武器朝我丢了过来。一开始，我以为那玩意儿很好躲，结果，它变得越来越大，等我反应过来时，已经往错误的方向闪避了，最后还是被它击中了！我晕了一会儿，看到它在吸气，对我吐出了某种奇怪的能量。我一个侧滚，勉强躲过了这招。但我已经恢复了力气，三下五除二干掉了那头怪物……但是，它除了几枚金币和一片银色三叶草外没有留下任何东西。总的来说，是一场让我非常意外的战斗。", 0, 9201054, true, true);
                } else {
                  if (status === v++) {
                    cm.askMenu("幸好我还记得黑暗君王告诉我的金玉良言：真正的战士会等待出击的最佳时机。\r\n#b#L0#哇，确实很惊险啊。我明白你为什么怕这些家伙会作怪了！\r\n#l#k", 0, 9201054);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("是的。这种矮妖所施展的法术危害极大。我不想看见它们在新叶都市附近乱晃。因此设下了悬赏。要求很简单。你要给我#b30片银色三叶草#k我……嗯，这说法有点拗口啊——直接管它们叫#b幸运护符#k好了。集齐了东西记得来找我！", 0, 9201054, false, true);
                    } else if (status === v++) {
                      cm.forceStartQuest(8232, '');
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