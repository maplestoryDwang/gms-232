var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  var V = "action" + cm.getNumberFromQuestInfo(33566, "visit");
  eval(V)(f, W, U);
}
function action0(f, W, U) {
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
      cm.sendNormalTalk_Bottom("哦，来了啊，看来你是有意挑战乌鲁斯咯。", 36, 9070100, false, true);
    } else {
      if (status === V++) {
        cm.askMenu_Bottom("你对乌鲁斯的了解有多少？需要我对乌鲁斯说明一下吗？\r\n#b#L0#是，我需要说明。#l\r\n#L1#不，我不需要说明。(任务完成)#l", 37, 9070100);
      } else {
        if (status === V++) {
          if (U == 1) {
            cm.updateInfoQuest(33566, "visit=1");
            cm.dispose();
            return;
          }
          cm.sendNormalTalk_Bottom("你这辈子所体会过的最大的恐惧是什么？", 36, 9070100, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("自从我积攒了数不清的黄金之后，我原以为我不会在黄金面前屈膝了。", 36, 9070100, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("可自从亲眼目睹了乌鲁斯的存在之后，我的想法变了，人类用文明的力量创造出的武器、战术、战略，这些在独一无二的这个生物面前看上去不过只是玩具而已。", 36, 9070100, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("人类的好奇心实在是胆大包天……被乌鲁斯魅惑的我开始觉得那些闪闪发光的金银财宝就只是石头，乌鲁斯，乌鲁斯，乌鲁斯……除此之外我没有别的想法。", 36, 9070100, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("乌鲁斯的野生本能所诱发的破坏，接近于人类所能想象到的最大的恐惧，所以人们超越了恐惧，对其产生了敬畏心里，给乌鲁斯起了“霸王”这个外号，有些人甚至认为乌鲁斯已经算半个神了。", 36, 9070100, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我想要对乌鲁斯有更多的了解，能够接近乌鲁斯的人类这世上并不多，所以我已经尝试重金悬赏，可却一无所获。", 36, 9070100, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("冒险岛世界有许多厉害得超乎想象的勇士，特别是像你这种非同寻常的人物就更不用说了，我对你的期待特别大，希望你能给我带来有关乌鲁斯的任何信息或是他的任何东西。", 36, 9070100, true, true);
                    } else {
                      if (status === V++) {
                        cm.askMenu_Bottom("那么，你愿意了解一下挑战乌鲁斯的方法吗？\r\n#b#L0#是，我需要说明。#l\r\n#L1#不，我不需要说明。(任务完成)#l", 37, 9070100);
                        if (U == 1) {
                          cm.updateInfoQuest(33566, "visit=1");
                          cm.dispose();
                          return;
                        }
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("想要挑战乌鲁斯，就得先来和我对话。", 36, 9070100, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("如果你希望#b快速开始#k，我就让你和其他来找我的17名勇士一起组队去挑战乌鲁斯。", 36, 9070100, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("如果你自己又信得过的同伴，可以#b组队#k后选择#b组队游戏#k。", 36, 9070100, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你还可以跟自己的同伴一起招募新的同伴挑战乌鲁斯，虽说这样有些鲁莽，但人数少的情况下也是可以挑战的。", 36, 9070100, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("如果要组建一支18人的队伍，在你和你的同伴保持组队的状况下，我可以用我找到的其他勇士来填补你们缺少的人手，让你们出发。", 36, 9070100, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("在乌鲁斯那里，装备效果中的伤害、攻击BOSS怪物时伤害、无视防御力、暴击率、暴击伤害、血量恢复道具及恢复技能无法获得该效果。", 36, 9070100, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("有一定概率无法获得恢复血量或魔量的技能。", 36, 9070100, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("究竟用什么样的方式来挑战乌鲁斯，就看你怎么选择了，那么从现在开始就可以挑战乌鲁斯了，我对你的期望很大，你可一定要记住。", 36, 9070100, true, true);
                                      } else if (status === V++) {
                                        cm.updateInfoQuest(33566, "visit=1");
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
                }
              }
            }
          }
        }
      }
    }
  }
}
function action1(f, W, U) {
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
      cm.askMenu_Bottom("#b你想要怎么样？#k\r\n#L0#快速开始（通过匹配进行18人挑战）#l\r\n#L1#组队游戏(1人~18人挑战)#l", 32, 9070100);
    } else {
      var w = 'action分支' + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("匹配结束后取消的话，一定时间内将无法再次入场。你要记住了。\r\n匹配结束后，如果进行#bNPC对话，使用商店/仓库/快递#k等操作将会取消匹配。", 36, 9070100, false, true);
  } else if (status === V++) {
    cm.openUI(291);
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    if (cm.getParty() == null) {
      cm.PartyAutoOn();
    }
    cm.openUI(298);
    cm.dispose();
  }
}