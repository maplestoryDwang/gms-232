var status = -1;
var selectionLog = [];
function start(P, g, j) {
  if (cm.getNumberFromQuestInfo(501459, "start") == 0) {
    action0(P, g, j);
  } else {
    action1(P, g, j);
  }
}
function action0(P, g, j) {
  if (status == 0 && P == 0) {
    cm.dispose();
    return;
  }
  if (P == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = j;
  var F = -1;
  if (status <= F++) {
    cm.dispose();
  } else {
    if (status === F++) {
      cm.sendNormalTalk("\r\n哦！你是创作者新人啊！那你听说过吗？！", 4, 9062545, false, true, 0);
    } else {
      if (status === F++) {
        cm.sendNormalTalk("\r\n冒险岛互动播现在正在举办史上最大规模的\r\n#b#e#fs14#电竞比赛#n#k#fs12#~！", 4, 9062547, true, true, 0);
      } else {
        if (status === F++) {
          cm.sendNormalTalk("\r\n无数创作者的小游戏覆灭战！\r\n现在就让你瞧瞧厉害。谁的厉害？我们的！", 4, 9062548, true, true, 0);
        } else {
          if (status === F++) {
            cm.sendNormalTalk("\r\n如果将你威风凛凛地在一场激烈竞争中获胜的样子转播出去会是什么结果？\r\n搞不好会影响到你频道的订阅量哦！", 4, 9062547, true, true, 0);
          } else {
            if (status === F++) {
              cm.sendNormalTalk("\r\n要想在这片贫瘠的电子世界存活下去，就必须激烈战斗！谁？我们吗？？", 4, 9062548, true, true, 0);
            } else {
              if (status === F++) {
                cm.sendNormalTalk("\r\n不不不，这场激烈竞争的主角正是#b#e#h0##k#n！\r\n现在就参加，来一场火辣刺激的比赛吧~！", 4, 9062545, true, true, 0);
              } else if (status === F++) {
                cm.updateInfoQuest(501459, "start=1");
                cm.dispose();
              }
            }
          }
        }
      }
    }
  }
}
function action1(P, g, j) {
  if (status == 0 && P == 0) {
    cm.dispose();
    return;
  }
  if (P == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = j;
  var F = -1;
  if (status <= F++) {
    cm.dispose();
  } else {
    if (status === F++) {
      cm.askMenu("去参加冒险岛互动播举办的电竞比赛吧！\r\n\r\n#L0#询问#b#e<海滨霸主>#n#k。#l\r\n#L1#询问#b#e<参加时间>#n#k。#l\r\n#L2#询问#b#e<游戏奖励>#n#k。#l\r\n#L3#询问#b#e<游戏点数>#n#k获得量。#l\r\n\r\n#L99#我没什么想问的。#l", 4, 9062545);
    } else {
      var b = "action分支" + selectionLog[1];
      eval(b)(P, g, j, F);
    }
  }
}
function action分支0(P, g, j, F) {
  if (status <= F++) {
    cm.sendNormalTalk("\r\n#b#e<海滨霸主>#n#k需要召集最少10人，最多40人，投掷水珠攻击对方，限时3分钟，#b获得更多分数的一支队伍#k获胜！", 4, 9062545, false, true, 0);
  } else {
    if (status === F++) {
      cm.sendNormalTalk("\r\n#e[队伍划分]#n\r\n\r\n进入游戏后，将会被划分到#r红队#k或b蓝队#k，\r\n\r\n不同队伍的角色#e名片、血量以及所使用技能的颜色#n不同，这样就方便自己在战场上分出敌我了吧？\r\n\r\n#fUI/UIWindow5.img/2021WaterGunGame/tuto/0#", 4, 9062545, true, true, 0);
    } else {
      if (status === F++) {
        cm.sendNormalTalk("\r\n#e[移动]#n\r\n\r\n角色会望向鼠标指针所在的方向！\r\n按下键盘上的#r#eW、A、S、D#k#n，就可以#r#e移动角色#k#n，\r\n按下键盘上的#b#e空格键#k#n，可依次向#b#e移动的方向#k#n#b#e猛冲#k#n。\r\n\r\n#fUI/UIWindow5.img/2021WaterGunGame/tuto/1#", 4, 9062545, true, true, 0);
      } else {
        if (status === F++) {
          cm.sendNormalTalk("\r\n#e[攻击]-基础#n\r\n\r\n#b#e点击鼠标左键k#n后可向鼠标指针方向投掷#b#e水珠#k#n，投掷出的水珠击中对方队角色时，可削弱对方的#b#e血量#k#n。\r\n\r\n#fUI/UIWindow5.img/2021WaterGunGame/tuto/2#", 4, 9062545, true, true, 0);
        } else {
          if (status === F++) {
            cm.sendNormalTalk("\r\n#e[攻击]-强化#n\r\n\r\n另外碰撞到地图各处出现的#b#e<水珠>#k#n，#b#e基础攻击将强化20秒#k#n，点击一下就可以投掷出4个拥有更高攻击力的水珠。\r\n\r\n#fUI/UIWindow5.img/2021WaterGunGame/tuto/3#", 4, 9062545, true, true, 0);
          } else {
            if (status === F++) {
              cm.sendNormalTalk("\r\n#e[分数]#n\r\n\r\n当用水珠攻击使得目标的血量降到0时，将消灭目标，\r\n#e每消灭1个角色可以获得1分#r个人分数#k#n！\r\n\r\n#fUI/UIWindow5.img/2021WaterGunGame/tuto/4#", 4, 9062545, true, true, 0);
            } else {
              if (status === F++) {
                cm.sendNormalTalk("\r\n#e[分数]#n\r\n\r\n另外消灭地图中央#e每分钟#n出现的#e椰子树#n，\r\n会在周围出现10个#r#e<光珠>#k#n，\r\n碰撞到<光珠>后，#e每个光珠还可以额外获得1分#r个人分数#k#n！\r\n\r\n#fUI/UIWindow5.img/2021WaterGunGame/tuto/5#", 4, 9062545, true, true, 0);
              } else {
                if (status === F++) {
                  cm.sendNormalTalk("\r\n游戏结束后，将根据所获得的个人分数和团队的游戏结果发放#r#e游戏点数#k#n奖励。", 4, 9062545, true, true, 0);
                } else if (status === F++) {
                  cm.sendNormalTalk("\r\n即便我们队伍在对决中落败，只要我努力参与，就能领取相当于胜利的奖励。所以一定要来场精彩对决啊！", 4, 9062545, true, true, 0);
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
function action分支1(P, g, j, F) {
  if (status <= F++) {
    cm.sendNormalTalk("\r\n#b#e<海滨霸主>#n#k开放时间段为上午10点到午夜零点，\r\n可通过#b每个小时的15分、45分#k头顶的#b邀请函#k参加。", 4, 9062545, false, true, 0);
    status = -1;
  }
}
function action分支2(P, g, j, F) {
  if (status <= F++) {
    cm.sendNormalTalk("\r\n#b#e<海滨霸主奖励>#n#k\r\n\r\n根据游戏结果可获得结算#e个人分数#n和#e团队分数#n的\r\n#e#r游戏点数#k#n！\r\n\r\n#e[个人奖励]#n\r\n - 1分个人分数换算10点游戏点数（最多可达到#r#e100#k#n点游戏点数）\r\n\r\n#e[团队奖励]#n\r\n - 所在队获胜时#r#e200#k#n点游戏点数\r\n - 所在队平局时#r#e150#k#n点游戏点数\r\n - 所在队失败时#r#e100#k#n点游戏点数", 4, 9062545, false, true, 0);
  } else {
    if (status === F++) {
      cm.sendNormalTalk("\r\n#b#e<海滨霸主奖励>#n#k\r\n\r\n 集齐#e#r2,400#k#n点游戏点数就会发放电竞比赛#e#r荣誉奖励#k#n！\r\n#r※每个世界只能领取一次奖励。\r\n\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/reward#\r\n#b#e#i2633574:# #t2633574:# : 1个", 4, 9062545, true, true, 0);
    } else if (status === F++) {
      cm.sendNormalTalk("但在游戏点数方面，#b#e每个角色一天\r\n最多只能获得300点游戏点数#n#k，\r\n\r\n另外还要记住，游戏点数#r#e累积总量会与世界内所有角色#k#n\r\n共享！", 4, 9062545, true, true, 0);
      status = -1;
    }
  }
}
function action分支3(P, g, j, F) {
  if (status <= F++) {
    cm.sendNormalTalk("\r\n#b#e<海滨霸主游戏点数获得量>#n#k\r\n\r\n去看看迄今为止所获得的#r游戏点数#k吧！\r\n\r\n#e - 每日游戏点数累计量：#b0#k/300#n点游戏点数\r\n#e -世界内游戏点数累计总量：#b#k#n点游戏点数\r\n\r\n\r\n#r※每个角色每天最多可以获得300点游戏点数，游戏点数累计总量与世界内所有角色共享。", 4, 9062545, false, true, 0);
    status = -1;
  }
}
function action分支99(P, g, j, F) {
  if (status <= F++) {
    cm.dispose();
  }
}