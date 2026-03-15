var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (cm.getNumberFromQuestInfo(100712, "start2") == 0) {
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
      cm.sendNormalTalk("\r\n你好，#h0#~\r\n\r\n我是作为#b冒险岛世界的小游戏代表#k\r\n来#b#e<焕新城堡>#n#k玩的皮亚~", 4, 9062461, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n我准备了一些能够一个人玩的游戏~\r\n要是你能在我准备的#b#e小游戏#n#k里展现一下你的实力，\r\n我就分你一些漂亮的#b#e#i4310307:# #t4310307##n#k。", 4, 9062461, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n去#b#e卡琳的<焕新宝石商店>#n#k，可以用这个换到各式各样的#b#e装饰物品#n#k~", 4, 9062461, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n应该不需要太多的解释了吧~？\r\n\r\n来，现在就来看看你玩游戏的实力吧~", 4, 9062461, true, true);
          } else if (status === V++) {
            cm.setNumberForQuestInfo(100712, "start2", 1);
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
      cm.askMenu("试着在我准备的小游戏里获得#b#e#i4310307:# #t4310307##n#k吧~\r\n\r\n\r\n#L3#参加#r#e<焕新城堡搭高高>#n#l#k\r\n#L4#了解#b#e<焕新城堡搭高高>#n#l#k\r\n\r\n#L5#参加#r#e<彩虹冲冲冲>#n#l#k\r\n#L6#了解#b#e<彩虹冲冲冲>#n#l#k\r\n\r\n#L100#我没什么其他问题了。#l\r\n\r\n#r※每个角色每天最多可以获得100个#t4310307#。#k", 4, 9062461);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("\r\n现在就来参加#b#e<焕新城堡搭高高>#n#k吗~？\r\n\r\n#r（游戏过程中分辨率将切换为1024x768。）#k", 4, 9062461);
  } else if (status === V++) {
    cm.warp(993190400, 0, false);
    cm.dispose();
  }
}
function action分支4(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e[活动时间]\r\n2021年08月25日上午9点~\r\n2021年10月19日晚上11点59分", 4, 9062461, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n#b#e焕新城堡搭高高#n#k这个游戏是要将专属于我们的塔\r\n搭得高高的~", 4, 9062461, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n当每一层在身旁出现时，可以按下#r#e空格#k#n键暂停，这时候的关键就是要专注，找准#e#b时机#k#n~", 4, 9062461, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n直接在#e#b与下层相同的位置#k#n停住，会得到闪烁的特效以及大量的点数~", 4, 9062461, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n虽说并不代表不在范围内停下来就都是失败，\r\n但所堆叠层的宽度会变窄~\r\n\r\n当然如果彻底停在了其他位置，那就直接#e<GAME OVER>#n了~", 4, 9062461, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n你应该知道，越窄就越难堆高吧~？\r\n所以就需要极强的#e#b专注力#k#n~", 4, 9062461, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("\r\n最后塔搭得越高，就能得到越多#b#e奖励#n#k~\r\n现在能理解#b#e焕新城堡搭高高#n#k的规则了吧~？\r\n\r\n那就快开始吧~", 4, 9062461, true, true);
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
function action分支5(f, W, U, V) {
  if (status <= V++) {
    cm.askYesNo("\r\n现在就来参加#b#e<彩虹冲冲冲>#n#k吗~？\r\n\r\n#r（游戏过程中分辨率将切换为1366x768。）#k", 4, 9062461);
  } else if (status === V++) {
    cm.warp(993190000, 0, false);
    cm.dispose();
  }
}
function action分支6(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("#e[活动时间]\r\n2021年8月4日上午9点~\r\n2021年10月19日晚上11点59分", 4, 9062461, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("\r\n#b#e彩虹冲冲冲#n#k这个游戏是要在美丽的彩虹道上奔跑~", 4, 9062461, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("\r\n骑着神秘的#b#e雪花驯鹿#n#k在彩虹道上尽情奔跑吧~", 4, 9062461, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n需要骑乘在越来越快的雪花驯鹿上，控制#e#b左右方向键#k#n避开障碍物~\r\n\r\n这很考验#b#e爆发力#n#k吧~？", 4, 9062461, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("\r\n注意挡住去路的#r#e乌云#n#l#k~\r\n一旦碰上可就直接#e<GAME OVER>#n了~", 4, 9062461, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("\r\n最后奔跑得越远，就能获得越多#b#e奖励#n#k~\r\n现在能理解#b#e彩虹冲冲冲#n#k的规则了吧~？\r\n\r\n那就开始吧~", 4, 9062461, true, true);
            } else if (status === V++) {
              cm.dispose();
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