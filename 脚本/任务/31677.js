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
      cm.sendNormalTalk("来啦。暗号已经解读出来了。爆莉萌天使，让我们来验证一下你的战略家潜质吧。", 0, 3001100, false, true);
    } else {
      if (status === v++) {
        cm.askMenu("请在到手的情报中选出有价值的情报。\r\n\r\n#L1# 哦哦慈爱的夜之月光啊#l\r\n#L2# 照亮被黑暗笼罩的城市中心#l\r\n#L3# 教训惊魂失魄的敌军#l\r\n#L4# 胜利的庆典在等待我们#l\r\n#L5# 敌人的皇帝就在城市中心#l\r\n#L6# 让包围网密不透风#l\r\n#L7# 任何人都别想出来#l\r\n#L8# 更不要有人想进去#l\r\n#L9# 就是今晚#l\r\n#L10# 历史将重写#l", 0, 3001100);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("'就是今晚啊……这个其实不能算是暗号。是说今天晚上要进行突袭。", 0, 3001100, false, true);
        } else {
          if (status === v++) {
            cm.askMenu("请在到手的情报中选出有价值的情报。\r\n\r\n#L1# 哦哦慈爱的夜之月光啊#l\r\n#L2# 照亮被黑暗笼罩的城市中心#l\r\n#L3# 教训惊魂失魄的敌军#l\r\n#L4# 胜利的庆典在等待我们#l\r\n#L5# 敌人的皇帝就在城市中心#l\r\n#L6# 让包围网密不透风#l\r\n#L7# 任何人都别想出来#l\r\n#L8# 更不要有人想进去#l\r\n#L10# 历史将重写#l", 0, 3001100);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("嗯……这些情报也很重要，但还不是最核心的部分。", 0, 3001100, false, true);
            } else {
              if (status === v++) {
                cm.askMenu("请在到手的情报中选出有价值的情报。\r\n\r\n#L1# 哦哦慈爱的夜之月光啊#l\r\n#L3# 教训惊魂失魄的敌军#l\r\n#L4# 胜利的庆典在等待我们#l\r\n#L5# 敌人的皇帝就在城市中心#l\r\n#L6# 让包围网密不透风#l\r\n#L7# 任何人都别想出来#l\r\n#L8# 更不要有人想进去#l\r\n#L10# 历史将重写#l", 0, 3001100);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("嗯……这些情报也很重要，但还不是最核心的部分。", 0, 3001100, false, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("1个……嗯，算是非专业人士中很普通的水平。", 0, 3001100, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("重要的句子就是……\r\n#b'敌人的皇帝就在城市中心'\r\n'让包围网密不透风'\r\n'就是今晚\r\n。", 0, 3001100, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("看这意思，好像敌人打算今天晚上突袭我们的城市中心总部。同时包围狂龙战士。", 0, 3001100, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("又是一场生死决战！如果再启动一次#p3001100#的终极魔法……", 2, 3001100, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk("这次和上次有很大不同。没有时间提前布置魔法阵，而且我不认为同一个战略可以成功两次。总之，这种战略不适用守卫战。爆莉萌天使，拜托你件事。", 0, 3001100, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk("和狂龙战士不同，你拥有敌人预料之外的#b狂野卡片#k。甚至，连暗号纸条都没有提到它的存在。作为一个战略家，就要懂得最大程度的活用自己和敌人手中的牌。冷静机智，将效率发挥到极致。与没有你所造成的总部空隙相比，#b你突然出现在攻击毫无防备的敌人后方#k才是这次突袭中我们可以获得的最大好处。", 0, 3001100, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk("当然肯定会有危险。首先是基地的两大主力之一要离开城堡，而且……#r#e小个子的#n#k的你也有可能遇到危险……", 0, 3001100, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk("嗯？那个，我的个子没你想的那么矮！", 2, 3001100, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk("哈哈……现在不是耍嘴皮子的时候。这次战略就算是我也没有完胜的信心。关键在于不光是敌人，连我们也#b无法揣测出缺陷的狂野卡片#k。", 0, 3001100, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.askAcceptDecline("因此你的作用十分重要。你能够做好吧？#r如果确定有信心的话，我们就开始作战啦#k.\r\n#b(接受后，即刻移动到战场地图。需要重新开始时，请放弃任务。)#k", 0, 3001100);
                                    } else if (status === v++) {
                                      cm.forceStartQuest(31677, '');
                                      cm.forceJoinEvent("爆莉萌天使_赫里希安_清怪6");
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
      cm.sendNormalTalk("作战很成功……啊。不过……\r\n#b#p3001101##k伤的很重。当然，这不是你的错，爆莉萌天使。", 0, 3001100, false, true);
    } else {
      if (status === v++) {
        cm.askAcceptDecline("谢谢你愿意跟随我，进行这场毫无胜算的作战。 你愿意去#b#p3001101##k那里一趟吗？#r在他弥留之际#k，很想见见你。现在我就送你过去。\r\n#r(接受后，会即刻移动到万神殿医疗所。)#k\r\n\r\n#Wbasic#\r\n#fUI/UIWindow2.img/QuestIcon/8/0# 272,180", 0, 3001100);
      } else if (status === v++) {
        cm.forceCompleteQuest(31677);
        cm.gainExp(272180);
        cm.dispose();
        cm.warp(940100004, 0, false);
      }
    }
  }
}