var status = 0;
var text;
var job;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getJob() == 0 && cm.getSubcategory() == 2) {
    if (status == 0) {
      cm.sendNext("见到你很高兴，#b#h0##k。听说你帮助司徒诺回到了这里。看你好像受了很重的伤，这么快就好了吗？身体真够结实的……现在我理解司徒诺为什么对你那么感兴趣了。我叫凯琳，是海盗船诺特勒斯号的船长，同时也是海盗的转职教官。");
    } else {
      if (status == 1) {
        cm.sendNextPrev("司徒诺想让你成为#b火炮手#k，你应该已经听说了吧？我也非常欢迎你这样的人才加入我们海盗。但是我担心你愿不愿意成为海盗。我得先给你讲讲海盗的故事。");
      } else {
        if (status == 2) {
          cm.sendNextPrev("为了对很久以前威胁整个冒险岛世界的黑魔法师进行调查，我组建了海盗团。诺特勒斯号的海盗们现在正在冒险岛世界的各个地方调查黑魔法师的痕迹。");
        } else {
          if (status == 3) {
            cm.sendNextPrev("如果你能成为海盗，就必须帮助我们调查黑魔法师。当然，这不是义务，只是我的建议。我是海盗们的转职教官，不是海盗们的主人。因此不是命令，只是建议。");
          } else {
            if (status == 4) {
              cm.sendNextPrev("你也是想在冒险岛冒险的人，相信你一定愿意帮助我们。不是为了奖励，而是出于善意……呵呵，序论好像太长了。");
            } else {
              if (status == 5) {
                cm.askAcceptDecline("我好像扯得太远了……你现在就决定吧。你想成为海盗吗？如果你能成为火炮手，我会很高兴的。");
              } else {
                if (status == 6) {
                  cm.effect_OnUserEff("Effect/OnUserEff.img/RecordClear_BT/clear");
                  cm.sendNext("好了，现在你也是海盗中的一员了。现在你有了很多海盗技能，打开技能窗看看吧。我给了你一些SP，你可以用它提升技能。等级提高之后，你可以使用更多的技能。希望你努力修炼。");
                } else {
                  if (status == 7) {
                    cm.sendNextPrev("光是技能还不行。请你打开属性窗，按照海盗的需要对自己的属性进行分配。火炮手必须拿着沉重的火炮，因此必须以力量为中心。不知道的话，可以使用#b自动分配#k。");
                  } else {
                    if (status == 8) {
                      cm.sendNextPrev("此外我再送你一件礼物。我帮你增加了其他栏的空格数。如果是需要的东西，可以放进背包带在身上。");
                    } else {
                      if (status == 9) {
                        cm.sendNextPrev("啊，还有一件事不能忘记。你成为了海盗，在战斗的时候必须注意管理体力。死亡的话，之前技能的经验值会受到损失。好不容易获得的经验值，如果损失的话，岂不是太可惜了。");
                      } else {
                        if (status == 10) {
                          cm.sendNextPrev("好了！我能教你的就是这些。我给了你几件适合你使用的武器，你去一边旅行，一边锻炼自己吧。如果遇到了黑魔法师的部下，一定要除掉他们！明白了吗？");
                        } else if (status == 11) {
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
  } else {
    cm.dispose();
    cm.sendOk("你已经可以开始冒险了！\r\n变得更强然后去寻找你的仇人吧！\r\n");
  }
}