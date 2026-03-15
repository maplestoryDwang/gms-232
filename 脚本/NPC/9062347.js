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
  var V = "action" + cm.getNumberFromQuestInfo(100659, "start");
  eval(V)(f, W, U);
}
function action0(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n#h0#！\r\n沐浴在月光下的#b#e<满月派对>#n#k好玩吗？", 4, 9062347, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n我准备的#b#e<满月派对>#n#k展台\r\n就是小游戏！", 4, 9062347, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n参加小游戏将获得五彩斑斓的#b#e#i4310303:# #t4310303##n#k。\r\n\r\n在#b#e棉花糖工坊#n#k可用棉花糖购买到\r\n我亲手制作的各种装饰品！", 4, 9062347, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n想玩小游戏的时候可以随时来找我哦！", 4, 9062347, true, true);
          } else if (status === V++) {
            cm.setNumberForQuestInfo(100659, "start", 1);
            cm.dispose();
          }
        }
      }
    }
  }
}
function action1(f, W, U) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("\r\n参加各种小游戏，获得棉花糖吧~！\r\n\r\n#r#e※ 每个角色每天最多\r\n可获得100个棉花糖。#n#k\r\n\r\n#L0# 给我讲讲#b#e<星月翻翻乐>#n吧。#k#l\r\n#L2# 给我讲讲#b#e<跳跳独角兽>#n吧。#k#l\r\n\r\n#L100# 我没有更多问题了。#l", 4, 9062347);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e[活动时间]\r\n2021年4月7日上午7点 ～ \r\n2021年4月27日晚11点59分", 4, 9062347, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n#b#e<星月翻翻乐>#k#n是翻转对手的曲奇的游戏。\r\n翻转更多的一方获胜！", 4, 9062347, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n每回合可放置1个曲奇。\r\n\r\n放下曲奇后，若放下的曲奇和之前的曲奇中间夹着对方的曲奇，即可翻转对手的曲奇，把它变成你的！", 4, 9062347, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n翻开对手的曲奇即可减少对方的HP，\r\n当双方都没有可以放曲奇的地方或其中一方的HP为0，则游戏结束。", 4, 9062347, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n剩余HP更多的一方获胜\r\n，胜者可以获得更多棉花糖！\r\n\r\n#b#e<棉花糖发放数量>#k#n\r\n - 胜利：#i4310303:# #b#t4310303:# 30个#k\r\n - 平局：#i4310303:# #b#t4310303:# 10个#k\r\n - 失败：#i4310303:# #b#t4310303:#5个#k\r\n\r\n #r※ 每个角色每天最多\r\n可获得100个棉花糖。#k", 4, 9062347, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n顺带一提，如果限时结束时仍未放好曲奇\r\n，曲奇将被自动放到任意位置。", 4, 9062347, true, true);
            } else if (status === V++) {
              cm.sendNormalTalk("\r\n重复3次后将被强制退场，无法获得\r\n#b棉花糖#k，请务必注意！", 4, 9062347, true, true);
              status = -1;
            }
          }
        }
      }
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e[活动时间]\r\n2021年4月7日上午7点 ～ \r\n2021年4月27日晚11点59分", 4, 9062347, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n#b#e<跳跳独角兽>#k#n是骑着棉花糖独角兽\r\n往上跳跃的游戏！", 4, 9062347, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n自上午10点到晚上11点45分期间，每当15分、45分时，\r\n可以点击头上的邀请函参加。", 4, 9062347, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n骑着棉花糖独角兽跳跃，\r\n触碰夜空中的道具即可得分！\r\n\r\n夜空中的道具每回合\r\n获得数量有限。", 4, 9062347, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n退出后计算得分，#e#b每100点可兑换1个棉花糖#n#k。\r\n\r\n#b#e<跳跳独角兽道具>#k#n\r\n - #i3801571:# #t3801571:#每1个发放#b10点#k（最多100个）\r\n - #i3801572:# #t3801572:#每1个发放#b50点#k（最多50个)\r\n - #i3801573:# #t3801573:#1个发放#b100点#k（最多5个)\r\n\r\n #r※ 每个角色每天最多\r\n可获得100个棉花糖。#k", 4, 9062347, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n另外，跳跃后5秒内再次跳跃时，\r\n跳跃力将提高10%。\r\n\r\n建议瞄准想要道具的位置，\r\n再跳跃。", 4, 9062347, true, true);
            } else if (status === V++) {
              cm.sendNormalTalk("\r\n中途退出游戏将无法获得#b棉花糖#k，\r\n请注意！", 4, 9062347, true, true);
              status = -1;
            }
          }
        }
      }
    }
  }
}
function action分支100(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}