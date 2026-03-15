var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getNumberFromQuestInfo(100712, 'start') == 0) {
    action0(f, W, U);
  } else {
    action1(f, W, U);
  }
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
      cm.sendNormalTalk("\r\n你好，#h0#！\r\n我是作为#b#e格兰蒂斯的小游戏代表#k#n来#b#e<焕新城堡>#n#k的！", 4, 9062462, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n我在城堡附近捡了好多亮晶晶的东西，你看！好看吧？\r\n要是你能在我准备的#b#e对战类小游戏#n#k让我见识一下你的实力，\r\n我就分你点#b#e#i4310307:# #t4310307##n#k。", 4, 9062462, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n用这个可以在#b#e卡琳的<焕新宝石商店>#n#k换到各式各样的\r\n#b#e装饰物品#n#k！", 4, 9062462, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n那就让我见识一下你的实力，看看谁更会玩游戏吧~！", 4, 9062462, true, true);
          } else if (status === V++) {
            cm.setNumberForQuestInfo(100712, "start", 1);
            cm.dispose();
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
      cm.askMenu("如果你能在小游戏中展现出你的实力，我就送你#r#e#i4310307:# #t4310307##n#k！\r\n嘻嘻！恐怕没人比我更会玩游戏了吧？！\r\n\r\n#L2#参加#r#e<反转棋>（人机模式）#n#l#k\r\n#L22#参加#r#e<反转棋>（对战模式）#n#l#k\r\n#L20#了解#b#e<反转棋>#n#l#k\r\n\r\n#L1#参与#r#e<冒险岛一张牌>（尚未修复）n#l#k\r\n#L11#参与#r#e<冒险岛一张牌>（对战模式）（尚未修复）#n#l#k\r\n#L10#听取#b#e<冒险岛一张牌>#n说明#l#k\r\n#L100#我没什么其他问题了。#l\r\n\r\n\r\n#r※每个角色每天可以获得100个#t4310307#。#k", 4, 9062462);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("现在就要参加#b#e<反转棋>#n#k吗？", 4, 9062462);
  } else if (status === V++) {
    cm.warp(993189700, 0, false);
    cm.dispose();
  }
}
function action分支22(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("现在就要参加#b#e<反转棋>#n#k吗？\r\n\r\n#r（接受后将进入等候室。）#k", 4, 9062462);
  } else if (status === V++) {
    cm.warp(993189600, 0, false);
    cm.dispose();
  }
}
function action分支20(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e[活动时间]\r\n2021年08月25日上午9点~\r\n2021年09月14日晚上11点59分", 4, 9062462, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n#b#e<反转棋>#k#n这个游戏需要翻转对方的石子，造成伤害，\r\n剩余血量越高就能获得胜利！", 4, 9062462, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n游戏开始后，每轮将从左手边的玩家开始，\r\n玩家可依次轮番下石子。", 4, 9062462, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n到了自己的轮次可以放下一枚石子，\r\n\r\n放下石子后，这枚石子和自己之前已经放下的石子\r\n之间的对方石子都会翻转过来，变成自己的！", 4, 9062462, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n翻转对方的石子可以削弱对方的血量，\r\n当双方都无地方可以下石子或一方的血量降为0时，游戏结束。", 4, 9062462, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n剩余血量更多的人获胜，并可以根据胜负\r\n获得更多的奖励！\r\n\r\n#b#e<反转棋奖励>#k#n\r\n - 胜利：40个#i4310307:# #b#t4310307:##k\r\n - 平局：20个#i4310307:# #b#t4310307:##k\r\n - 失败：10个#i4310307:# #b#t4310307:##k\r\n\r\n\r\n#r#e[周日冒险岛2倍！]#n #r※每个角色每天最多可以获得200个#t4310307#。#k", 4, 9062462, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("\r\n另外，如果到了自己的轮次没有在限时内下石子，\r\n将自动随机下石子。", 4, 9062462, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("\r\n请注意，重复3次将被强制踢出，\r\n届时将无法领取奖励！", 4, 9062462, true, true);
                } else if (status === V++) {
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
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("现在就要参加#b#e<冒险岛一张牌>#n#k吗？", 4, 9062462);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("现在就要参加#b#e<冒险岛一张牌>#n#k吗？\r\n\r\n#r（接受后将进入等候室。）#k", 4, 9062462);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支10(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e[活动时间]\r\n2021年08月04日上午9点~\r\n2021年08月24日晚上11点59分", 4, 9062462, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n#b#e<冒险岛一张牌>#n#k这个游戏就是谁率先出完手牌谁获胜！", 4, 9062462, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n开局时每人手上会分到#e#b7张#k#n卡牌。\r\n\r\n#fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/other/default##fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/other/default##fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/other/default##fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/other/default#\r\n#fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/other/default##fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/other/default##fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/other/default#\r\n\r\n到了自己的轮次，可以出#b#e一张#k#n和已出卡牌颜色相同\r\n又或者种类相同的卡牌。r\n\r\n放心好了，#b#e能出的卡牌都会高亮显示的#k#n！", 4, 9062462, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n\r\n#fUI/UIMiniGame.img/mapleOneCard/Custom/0/Deck/deck##fUI/UIMiniGame.img/mapleOneCard/Effect/screeneff/click/0#\r\n\r\n如果无牌可出，需要#b#e点击中间的牌堆#n#k领一张牌。\r\n\r\n#r（注意！当手牌超过17张时，游戏将以失败告终。）#k", 4, 9062462, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n卡牌种类有#e#b普通卡牌#k#n、#e#b魔法卡牌#k#n和#e#b攻击卡牌#k#n，\r\n擅用卡牌，可以对敌人造成巨大伤害，\r\n也可以躲开敌人的攻击！\r\n\r\n#r（游戏过程中鼠标悬浮在卡牌上，会显示卡牌说明。）#k", 4, 9062462, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("用#e#b攻击卡牌#k#n攻击敌人，可以让对方拿下卡牌，\r\n还可以再出其他攻击卡牌转嫁攻击！\r\n\r\n#fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/me/red/button:attack2/normal/0##fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/me/red/button:attack3/normal/0#\r\n\r\n#r（注意！不能用比所出的攻击卡牌能量更弱的攻击卡牌转嫁攻击。）#k", 4, 9062462, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("记住下面五张#e#b骑士卡牌#k#n都有什么力量会大有帮助的！\r\n\r\n                        #fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/me/red/button:hero/normal/0#\r\n\r\n#b奥兹#k：以强大的火焰魔法增加5点的攻击。\r\n\r\n                        #fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/me/yellow/button:hero/normal/0#\r\n\r\n#b米哈尔#k：最多可在两个回合内召唤无敌盾牌，防御攻击。\r\n\r\n                        #fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/me/blue/button:hero/normal/0#\r\n\r\n#b胡克#k：捣蛋鬼胡克给每人多发两张牌。\r\n\r\n                        #fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/me/green/button:hero/normal/0#\r\n\r\n#b伊莉娜#k：以大自然之力吸收所有绿色卡牌。\r\n\r\n                        #fUI/UIMiniGame.img/mapleOneCard/Custom/0/Hand/me/black/button:hero/normal/0#\r\n\r\n#b伊卡尔特#k：可随时用隐身技能跳过自己的轮次。", 4, 9062462, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("\r\n依靠好运和谋略，最先出完自己的手牌即可获胜！\r\n游戏结束后，会按照手牌从少到多的顺序\r\n定排名发奖励！\r\n\r\n#b#e<冒险岛一张牌奖励>#k#n\r\n - 第1名：40个#i4310307:# #b#t4310307:##k\r\n - 第2名：20个#i4310307:# #b#t4310307:##k\r\n - 第3名：15个#i4310307:# #b#t4310307:##k\r\n - 第4名：10个#i4310307:# #b#t4310307:##k\r\n\r\n\r\n#r※每个角色每天最多可以获得100个#t4310307#。#k", 4, 9062462, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("\r\n另外，如果到了自己的轮次没有在限时内出牌，\r\n将自动随机出一张牌。", 4, 9062462, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("\r\n请注意，重复5次将被强制踢出，\r\n届时将无法领取奖励！", 4, 9062462, true, true);
                    } else if (status === V++) {
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
function action分支100(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
  }
}