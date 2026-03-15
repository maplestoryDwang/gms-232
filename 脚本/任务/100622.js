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
      cm.askMenu("#h0#！\r\n你有什么想问的吗？\r\n#L0# 给我介绍下#b#e<觉醒山>#n。#k#l\r\n#L1# 给我介绍下#b#e<觉醒铸币>#n。#k#l\r\n#L2# 给我介绍下#b#e<觉醒秘籍>#n。#k#l\r\n#L3# 给我介绍下#b#e<仙人的宝物：白公的笛子>#n。#k#l\r\n#L4# 给我介绍下#b#e<仙人岩修炼场>#n。#k#l\r\n#L7# 给我介绍下#b#e<AWAKE萧公的宝物箱>#n。#k#l\r\n#L8# 给我介绍下#b#e<AWAKE属性修炼>#n。#k#l\r\n#L5# 给我介绍下#b#e<AWAKE剪刀石头布>#n。#k#l", 4, 9062317);
    } else {
      var e = "action分支" + selectionLog[1];
      eval(e)(g, w, a, v);
    }
  }
}
function action分支0(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#r#e觉醒山#n#k是我小时候听过的传说里提到的地方。", 4, 9062317, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("只有经过大量修炼的#b#e觉醒的熊猫#n#k们才能去的地方……\r\n我原先也以为这只是传说。", 4, 9062317, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("据说，靠着#b#e祖先们#n#k长期以来积累的内功，在那里可以获得#r#e超乎想象的领悟#n#k……", 4, 9062317, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("按理说，像我们这样修炼不足的人，是#b#e去不了那里的……#n#k\r\n但传说#r#e每隔1000年#n#k，会开启一次通往该地的道路！", 4, 9062317, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("原来不是传说，是真的！", 2, 0, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("对！现在通往#r#e<觉醒山>#n#k的道路已经开启了！", 4, 9062317, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("#b#e#fs20#觉醒的时间到了！", 4, 9062317, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("据说，唤醒沉睡此地的#b#e祖先们#n#k，将可以获得#r#e特殊的教诲#n#k。", 4, 9062317, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("为了唤醒祖先们，必须掌握#r#e觉醒秘籍#n#k！", 4, 9062317, true, true);
                  } else if (status === v++) {
                    cm.sendNormalTalk("所以，你要努力修炼！", 4, 9062317, true, true);
                    status = -1;
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
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("在#r#e觉醒山#n#k上，可以通过各种修炼收集#b#e觉醒气息#n#k！", 4, 9062317, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("#b#e觉醒气息#n#k积蓄到一定数量时，会结合形成#r#e钱币#n#k！", 4, 9062317, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("那就是#r#e#i4310296#觉醒铸币#n#k！\r\n觉醒铸币可以视作你#b#e修炼的成果#n#k。", 4, 9062317, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("在觉醒山上，人们把#r#e觉醒铸币#n#k当成#b#e货币来使用#n#k。", 4, 9062317, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("还有，为了学习#b#e觉醒秘籍#n#k，需要#r#e觉醒铸币#n#k。", 4, 9062317, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("那将成为判断你是否具备秘籍学习#b#e资格#n#k的要素！", 4, 9062317, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("不过，体力也是有限的哦？\r\n#r#e一天最多只能收集30000点#n#k觉醒气息！", 4, 9062317, true, true);
              } else if (status === v++) {
                cm.sendNormalTalk("那你好好修炼，多多收集#r#e#i4310296#觉醒铸币#n#k吧！", 4, 9062317, true, true);
                status = -1;
              }
            }
          }
        }
      }
    }
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#r#e觉醒秘籍#n#k是记录了觉醒山上沉睡的#b#e祖先的武功#n#k的珍贵秘籍。", 4, 9062317, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("这是与#r#e觉醒山#n#k的传说一起，在熊猫仙人之间#b#e世代相传的物品#n#k。其实我不太相信……", 4, 9062317, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("传说？", 2, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#fn宫书##fs16##r#e觉醒山#n#k开放期间，\r\n\r\n拥有#b#e觉醒秘籍学习资格#n#k的人\r\n\r\n可以唤醒沉睡的仙人！", 4, 9062317, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("明白吗？\r\n\r\n要想唤醒祖先们，必须具备#b#e学习觉醒秘籍的资格#n#k！", 4, 9062317, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("我要怎么获得资格？", 2, 0, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("这个我师父会帮忙。\r\n你每天可以使用#r#e200个觉醒铸币#n#k#b#e修炼秘籍#n#k。", 4, 9062317, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("完成各个秘籍的#b#e入门阶段#n#k修炼后，即具备学习该秘籍的资格！", 4, 9062317, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("那样你就可以唤醒祖先，正式开始修炼秘籍！\r\n并逐步向更高阶段的秘籍推进！", 4, 9062317, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("还有，每本秘籍要求的修炼程度略有不同！\r\n\r\n#e[完成学习所需的修炼次数]#n\r\n - #e白公#n的秘籍<入门>：1次\r\n - #e白公#n的秘籍<第1章>：5次\r\n - #e白公#n的秘籍<第2章>：5次\r\n - #e白公#n的秘籍<第3章>：5次\r\n - #e#b天公#n#k的秘籍<入门>：5次\r\n - #e#b天公#n#k的秘籍<第1章>：5次\r\n - #e#b天公#n#k的秘籍<第2章>：5次\r\n - #e#b天公#n#k的秘籍<第3章>：5次\r\n - #r#e满公#n#k的秘籍<入门>：5次\r\n - #r#e满公#n#k的秘籍<终章>：5次", 4, 9062317, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("还有，每本秘籍必须经过特定时间才能完结！\r\n\r\n#e[可完结时间]#n\r\n - #e白公#n的秘籍<入门>：1月13日7点以后\r\n - #e白公#n的秘籍<第1章>：1月20日0点以后\r\n - #e白公#n的秘籍<第2章>：1月27日0点以后\r\n - #e白公#n的秘籍<第3章>：2月3日0点以后\r\n - #e#b天公#n#k的秘籍<入门>：2月10日0点以后\r\n - #e#b天公#n#k的秘籍<第1章>：2月17日0点以后\r\n - #e#b天公#n#k的秘籍<第2章>：2月24日7点以后\r\n - #e#b天公#n#k的秘籍<第3章>：3月3日0点以后\r\n - #r#e满公#n#k的秘籍<入门>：3月10日0点以后\r\n - #r#e满公#n#k的秘籍<终章>：3月17日0点以后", 4, 9062317, true, true);
                      } else if (status === v++) {
                        cm.sendNormalTalk("#b#e我师父#n#k会特别地为修炼提供指点，你要坚持参加！", 4, 9062317, true, true);
                        status = -1;
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
function action分支3(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b白公的笛子#k是仙人中力量最强大的#b白公#k制作的笛子。\r\n在音乐方面造诣很深的#b白公#k通过音乐进行修炼，最终达到了至高的境界。", 4, 9062317, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("#e#b白公的笛子#n#k不是一般人能操纵的乐器，\r\n是#r蕴含神仙气息#k的特殊笛子。\r\n只有可以操纵气息流的人才能演奏它。", 4, 9062317, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("带着#e#b白公的笛子#n#k去#r#e狩猎等级范围怪物#n#k，\r\n循着气息流一路追踪，就有一定概率可以找到#b#e#i2632107# #t2632107##n#k。", 4, 9062317, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("收集#b#e#t2632107##n#k时，\r\n可以同时获得#e#r100点觉醒气息#k#n。是不是很棒？", 4, 9062317, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("给#e#b白公的笛子#n#k#r蓄满气息#k，\r\n就可以#b#e演奏#k#n笛子了！！", 4, 9062317, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("笛子演奏开始后，\r\n将可以找到更多#b#e#i2632107# #t2632107##n#k。\r\n还有，等你完成#e白公的秘籍<第2章>#n修炼后，#b#e白公的笛子#n#k就会恢复原本的力量，变得更强。", 4, 9062317, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("当笛子恢复原本的力量并得到强化后，演奏笛子时\r\n将可以找到#r#e更多#n#k #b#e#i2632107# #t2632107##n#k。\r\n你勤奋修炼吧！", 4, 9062317, true, true);
              } else if (status === v++) {
                cm.sendNormalTalk("如果想用#b#e<白公的笛子>#n#k进行修炼，\r\n必须先#r完成[AWAKE]仙人的宝物：白公的笛子任务#k。", 4, 9062317, true, true);
                status = -1;
              }
            }
          }
        }
      }
    }
  }
}
function action分支4(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("仙人岩修炼场是对来到#b#e<觉醒山>#n#k的所有勇士开放的特殊修炼场。\r\n在限定时间2分钟内，通过击打仙人岩来检测#b自己的战斗能力#k，同时还可以根据得分获得#b觉醒铸币#k。", 4, 9062317, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("修炼场由#r总共11个阶段#k的关卡组成，随着关卡逐步推进，将出现具有更高#b防御率#k和更高#b等级#k的#r仙人岩#k和#r稻草人#k。\r\n根据你对仙人岩和稻草人#b造成的伤害#k，将可以获得相应的#b分数#k。换句话说，随着阶段逐步提高，获得1分所需的伤害也会同步增加。", 4, 9062317, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("根据你在#b限定时间#k内造成的伤害，可以获得#b最高1300分#k，#b每10分可以获得1个觉醒铸币#k。\r\n如果你在限定时间结束前达到#b1300分#k，挑战将自动结束。", 4, 9062317, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("可在修炼场里获得的分数为，#r每个世界1天最多1300分#k，刷新#b今日世界内最高得分#k时，可以追加获得#b觉醒铸币#k。\r\n比如说，在今日世界内最高得分为#e1100分#n的状态下，如果你通过挑战获得了#e1200分#n，这时将可以根据刷新的分数追加获得#b10个觉醒铸币#k。", 4, 9062317, true, true);
        } else if (status === v++) {
          cm.sendNormalTalk("那我期待你的挑战。\r\n\r\n#e※ 活动期限\r\n  - 至2021年3月23日 23点59分为止#n", 4, 9062317, true, true);
          status = -1;
        }
      }
    }
  }
}
function action分支5(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("\r\n#b#e<AWAKE剪刀石头布>#n#k\r\n\r\n#bAWAKE剪刀石头布#k是和我进行猜拳对决，根据胜败结果，一路登上我所在位置的修炼！", 4, 9062317, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("\r\n#b#e<AWAKE剪刀石头布>#n#k\r\n\r\n活动期间，你可以通过每天#e上午12点至下午11点59分#n之间\r\n每小时的#b#e15#k#n分，#b#e45#k#n分收到的#b#e邀请函#k#n参加。\r\n\r\n※ 活动期限：至2021年2月9日（周二）23点45分为止", 4, 9062317, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("\r\n#b#e<AWAKE剪刀石头布>#n#k\r\n\r\n剪刀石头布是#b9局#k定输赢！\r\n\r\n#b#e三次剪刀，三次石头，三次布！\r\n我会每种各出三次！#n#k", 4, 9062317, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n#b#e<AWAKE剪刀石头布>#n#k\r\n\r\n你在倒计时期间#b点击#k剪刀/石头/布之一就行！\r\n\r\n如果#b赢了我，就上升一层#k！\r\n如果#b输给我，就下降一层#k！\r\n如果#b打成平手，就原地不动！#k", 4, 9062317, true, true);
        } else if (status === v++) {
          cm.sendNormalTalk("\r\n#b#e<AWAKE剪刀石头布>#n#k\r\n\r\n游戏总共#b3个回合！#k每个回合结束时，可以根据你所在的\r\n#b层数#k获得#b觉醒气息#k！\r\n\r\n#b - 1层：500点觉醒气息\r\n - 2层：800点觉醒气息\r\n - 3层：1,000点觉醒气息\r\n - 4层：1,200点觉醒气息\r\n - 5层：1,500点觉醒气息\r\n - 6层：2,000点觉醒气息#k", 4, 9062317, true, true);
          status = -1;
        }
      }
    }
  }
}
function action分支6(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk('分支1。', 0, 9400965, false, false);
    status = -1;
  }
}
function action分支7(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b#e<AWAKE萧公的宝物箱>#n#k\r\n\r\n<AWAKE萧公的宝物箱>是对上锁的宝物箱的#b密码#k进行推理的修炼。要想成为仙人，不光应具备强韧的体魄，还要有个聪明的头脑！", 4, 9062317, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("\r\n#b#e<AWAKE宾果>#n#k\r\n\r\n活动期间，你可以通过每天#e上午12点至下午11点59分#n之间\r\n每小时的#b#e15#k#n分，#b#e45#k#n分收到的#b#e邀请函#k#n参加。\r\n\r\n※ 活动期限：至2021年3月2日（周二）23点45分为止", 4, 9062317, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b#e<AWAKE萧公的宝物箱>#n#k\r\n\r\n游戏开始后，你可以点击箱子的数字键输入密码。输入数字时，会自动提示#b与密码的差异#k。\r\n\r\n#b#e数字和位置全对显示○！\r\n数字对但位置不同，显示△！#n#k", 4, 9062317, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#b#e<AWAKE萧公的宝物箱>#n#k\r\n\r\n举个例子，假设密码为1 2 3，输入1 3 4的话，\r\n将提示#b1个○，1个△#k。\r\n\r\n - 1是数字和位置都对，所以为○\r\n - 3是数字对，但位置不对，所以是△", 4, 9062317, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#b#e<AWAKE萧公的宝物箱>#n#k\r\n\r\n游戏总共#b3个回合！#k每回合结束时，会根据你所在的\r\n#b名次#k发放#b觉醒气息#k。", 4, 9062317, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("\r\n#b#e<AWAKE萧公的宝物箱>#n#k\r\n\r\n#e名次奖励#n\r\n - #r第1名#k：#b10,000#k点觉醒气息\r\n - #r第2名#k：#b8,000#k点觉醒气息\r\n - #r第3名#k：#b7,000#k点觉醒气息\r\n - #r第4名#k：#b6,000#k点觉醒气息\r\n - #r第5名#k：#b5,000#k点觉醒气息\r\n - #r第6名 ~ 第10名#k：#b4,000#k点觉醒气息\r\n - #r第11名 ~ 第20名#k：#b3,000#k点觉醒气息\r\n - #r第21名 ~ 第30名#k：#b2,000#k点觉醒气息\r\n - #r名次外#k：#b500#k点觉醒气息#k", 4, 9062317, true, true);
            } else {
              if (status === v++) {
                cm.askMenu("#h0#！\r\n你有什么想问的吗？\r\n#L0# 给我介绍下#b#e<觉醒山>#n。#k#l\r\n#L1# 给我介绍下#b#e<觉醒铸币>#n。#k#l\r\n#L2# 给我介绍下#b#e<觉醒秘籍>#n。#k#l\r\n#L3# 给我介绍下#b#e<仙人的宝物：白公的笛子>#n。#k#l\r\n#L4# 给我介绍下#b#e<仙人岩修炼场>#n。#k#l\r\n#L7# 给我介绍下#b#e<AWAKE萧公的宝物箱>#n。#k#l\r\n#L8# 给我介绍下#b#e<AWAKE属性修炼>#n。#k#l\r\n#L5# 给我介绍下#b#e<AWAKE剪刀石头布>#n。#k#l", 4, 9062317);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("#b#e<AWAKE属性修炼>#n#k是可以在短时间内获得大量觉醒铸币的活动。", 4, 9062317, false, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("好，你认真听我说。\r\n你去收集#e每日限制觉醒气息#n，#e#b全部集齐#k#n之后再来找我。", 4, 9062317, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("点击<领取奖励>按钮，可以#e#b每天#k#n获得#e#b300个#k#n觉醒铸币，\r\n在#e#r第5天/第10天#k#n的时候，可分别获得#e#r600个/1000个#k#n觉醒铸币作为完成奖励。", 4, 9062317, true, true);
                    } else if (status === v++) {
                      cm.sendNormalTalk("记住！#e#r每个世界一天只有1次#n#k领取奖励的机会。\r\n所以，你一定要慎重选择#e领取奖励的角色#n。\r\n\r\n\r\n#r※作为奖励发放的觉醒铸币不包括在每日觉醒气息获得上限内。", 4, 9062317, true, true);
                      status = -1;
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
function action分支8(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b#e<AWAKE属性修炼>#n#k是可以在短时间内获得大量觉醒铸币的活动。", 4, 9062317, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("好，你认真听我说。\r\n你去收集#e每日限制觉醒气息#n，#e#b全部集齐#k#n之后再来找我。", 4, 9062317, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("点击<领取奖励>按钮，可以#e#b每天#k#n获得#e#b300个#k#n觉醒铸币，\r\n在#e#r第5天/第10天#k#n的时候，可分别获得#e#r600个/1000个#k#n觉醒铸币作为完成奖励。", 4, 9062317, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("记住！#e#r每个世界一天只有1次#n#k领取奖励的机会。\r\n所以，你一定要慎重选择#e领取奖励的角色#n。\r\n\r\n\r\n#r※作为奖励发放的觉醒铸币不包括在每日觉醒气息获得上限内。", 4, 9062317, true, true);
        } else if (status === v++) {
          cm.sendNormalTalk("你问为什么突然这么照顾你？哼，我可不是因为看你太吃力才心生怜悯，别误会。", 4, 9062317, true, true);
          status = -1;
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