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
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.askMenu("你好！我是冒险岛聊天工具的亲切帮手#b#p9000185##k～\r\n有什么我能帮忙的吗？#l\r\n#b#L0#[冒险岛聊天工具START！]#l\r\n#b#L1#[我想知道有关冒险岛聊天工具的事情！]#l\r\n#L2#[我想了解你！]", 9000185);
    } else {
      if (selectionLog[1] == 0) {
        cm.openUI(8);
        cm.dispose();
      } else if (selectionLog[1] == 1) {
        action1(f, W, U, V);
      } else {
        action2(f, W, U, V);
      }
    }
  }
}
function action1(f, W, U, V) {
  if (status === V++) {
    cm.askMenu("你有什么疑问？尽管问我吧。\r\n我会很热心地帮你解答的~。\r\n#b#L0#我想了解如何进入冒险岛聊天工具\r\n#b#L1#我想了解好感系统\r\n#b#L2#我想了解图标的功能\r\n#b#L3#我想了解好友邀请功能\r\n#b#L4#我想了解表情功能", 9000185);
  } else {
    if (selectionLog[2] == 0) {
      action11(f, W, U, V);
    } else {
      if (selectionLog[1] == 1) {
        action12(f, W, U, V);
      } else {
        if (selectionLog[1] == 2) {
          action13(f, W, U, V);
        } else if (selectionLog[1] == 3) {
          action14(f, W, U, V);
        } else {
          action15(f, W, U, V);
        }
      }
    }
  }
}
function action11(f, W, U, V) {
  if (status === V++) {
    cm.sendNext("#i3800484#\r\n冒险岛聊天工具既带有可以让人们随机结识的#e#b新功能，同时也是原有消息工具的升级版#k#n。因此，你可以使用#e#r原有的消息快捷键#k#n，或者#e#r通过我#k#n随时进入冒险岛聊天工具！", 9000185);
  } else {
    if (status === V++) {
      cm.sendNextPrev("冒险岛聊天工具#e#b共有3种模式#k#n。\r\n#i3800489#\r\n即#e#r私聊、群聊、朋友聊天#k#n。", 9000185);
    } else {
      if (status === V++) {
        cm.sendNextPrev("#i3800492#\r\n#e#b私聊#k#n是#e#r随机让2个陌生人单独聊天#k#n的功能！如果想不受他人打扰，和陌生人两人单独交谈，就一定得用到这个功能哦！", 9000185);
      } else {
        if (status === V++) {
          cm.sendNextPrev("#i3800493#\r\n#e#b群聊#k#n是#e#r随机让最多6人一起聊天#k#n的功能！和其他人一边进行各种闲聊，一边玩游戏的话，一点儿也不会觉得无聊！", 9000185);
        } else {
          if (status === V++) {
            cm.sendNextPrev("#i3800494#\r\n#e#b朋友聊天#k#n是#e#r让你和自己的好友，或者直接邀请想加为好友的人#k#n，进行聊天的功能！因为只有受到邀请的人才可以进入，所以如果要和好友对话，就使用这个功能吧！", 9000185);
          } else if (status === V++) {
            cm.sendOk("使用私聊和群聊，可以随机和人们对话，和指定对象聊天时，就使用朋友聊天。只要你#e#b根据自己的需要来选择合适的方式使用冒险岛聊天工具#k#n，就可以每天都经历到更#e#r刺激有趣的冒险岛世界#k#n~", 9000185);
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}
function action12(f, W, U, V) {
  if (status === V++) {
    cm.sendNext("#i3800484#\r\n冒险岛聊天工具既带有可以让人们随机结识的#e#b新功能，同时也是原有消息工具的升级版#k#n。因此，你可以使用#e#r原有的消息快捷键#k#n，或者#e#r通过我#k#n随时进入冒险岛聊天工具！", 9000185);
  } else {
    if (status === V++) {
      cm.sendNext("#i3800495#\r\n#e#b好感系统#k#n是指冒险岛聊天工具中，除了朋友聊天之外，#e#r只可以在随机聊天中互相给予的点数#k#n。", 9000185);
    } else {
      if (status === V++) {
        cm.sendNextPrev("#i3800496#\r\n点击对方的#e#b好感按钮#k#n，就可以给予好感！相反，为了获得好感，你就得拥有让对方喜欢的#e#r时尚感或者说话技巧#k#n哦！", 9000185);
      } else if (status === V++) {
        cm.sendOk("#i3800488#\r\n好感会在#e#r每周一整点重置#k#n。在该周获得最多好感的男性或女性角色将光荣地在冒险岛聊天工具的#e#b进入界面上亮相。#k#n积极和人们开展愉快的对话，并争取登上荣誉殿堂吧！#e#b#h0##k#n，你有足够的魅力哦~", 9000185);
      } else {
        cm.dispose();
      }
    }
  }
}
function action13(f, W, U, V) {
  if (status === V++) {
    cm.sendNext("#i3800497#\r\n进入冒险岛聊天工具后，在#e#b玩家窗口下方有5个图标#k#n。这5个图标分别是#e#r查看信息、悄悄话、好感、加好友、小游戏#k#n。", 9000185);
  } else if (status === V++) {
    cm.sendOk("记住哦，要使用各#e#b图标的功能#k#n时，必须#e#r点击指定玩家下方的图标#k#n，才可以使用该功能~", 9000185);
  } else {
    cm.dispose();
  }
}
function action14(f, W, U, V) {
  if (status === V++) {
    cm.sendNext("#i3800497#\r\n进入冒险岛聊天工具后，在#e#b玩家窗口下方有5个图标#k#n。这5个图标分别是#e#r查看信息、悄悄话、好感、加好友、小游戏#k#n。", 9000185);
  } else {
    if (status === V++) {
      cm.sendNext("冒险岛聊天工具是从前消息工具的#e#b升级版#k#n，所以绝对少不了#e#r邀请好友或熟人的功能#k#n！", 9000185);
    } else {
      if (status === V++) {
        cm.sendNextPrev("#i3800491#\r\n如果你想在冒险岛聊天工具中#e#b邀请他人进行对话#k#n，使用\r\n#e#r朋友聊天#k#n，就能像从前一样方便地开展聊天了！", 9000185);
      } else {
        if (status === V++) {
          cm.sendNextPrev("#i3800498#\r\n你可以通过#e#b朋友聊天#k#n中才能见到的#e#r邀请按钮#k#n来邀请好友，或者直接在聊天窗口中输入#e#r/招待 ID#k#n，来发送邀请！", 9000185);
        } else {
          if (status === V++) {
            cm.sendNextPrev("点击邀请好友按钮，在弹出的好友目录窗口中#e#b选择指定好友后，点击邀请聊天#k#n，即可邀请该好友进入当前聊天室。", 9000185);
          } else if (status === V++) {
            cm.sendOk("不过在进行随机聊天的#e#b私聊和群聊#k#n中，#e#r无法使用邀请功能#k#n，你要记住哦~", 9000185);
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}
function action15(f, W, U, V) {
  if (status === V++) {
    cm.sendNext("啊！差点儿忘了件重要的事。我要跟你介绍一下这次新加入的#e#b表情功能#k#n~。", 9000185);
  } else {
    if (status === V++) {
      cm.sendNextPrev("#i3800504#\r\n表情功能可以#e#b用图像来轻松表达#k#n我们无法用言语描述的情绪。", 9000185);
    } else {
      if (status === V++) {
        cm.sendNextPrev("#i3800503#\r\n在#e#b聊天输入窗口左侧#k#n可以找到表情。#e#r点击#k#n即可弹出表情栏！", 9000185);
      } else if (status === V++) {
        cm.sendOk("#i3800504#\r\n只要你#e#b点击表情栏里的图像#k#n，就可以方便地输入表情。通过灵活地使用表情，来开展#e#r丰富多彩的对话#k#n吧！嘿嘿。", 9000185);
      } else {
        cm.dispose();
      }
    }
  }
}
function action2(f, W, U, V) {
  if (status === V++) {
    cm.sendNext("我是负责#r#e连接人与人之间的桥梁#k#n——\r\n冒险岛聊天工具的向导#b#e#p9000185##k#n。\r\n我真的非~常高兴见到你，#b#e#h0##k#n！", 9000185);
  } else {
    if (status === V++) {
      cm.sendNextPrev("嗯~老实说，我有点紧张呢。我是第一次做这样的工作，觉得有点不好意思……唔唔~", 9000185);
    } else {
      if (status === V++) {
        cm.sendNextPrev('……嗯？你没事吧？', 9000185);
      } else {
        if (status === V++) {
          cm.sendNextPrev("呀！啊，我没事！没关系的！其实我是第一次离各位勇士这么近……有点紧张呢。\r\n\r\n#e#r(坐立不安，脸色迅速变红的艾琳)#k#n", 9000185);
        } else {
          if (status === V++) {
            cm.sendNextPrev("虽然还有些生涩，\r\n但我对#b#e#h0##k#n你的心意#e#r天地可鉴，日月可证！#k#n", 9000185);
          } else if (status === V++) {
            cm.sendOk("当你使用冒险岛聊天工具时，#e#b我会随时为你提供帮助。#k#n也就是说，以后我们也会经常见面的！祝你今天也能在#r#e充满幸福与欢喜的冒险岛世界#k#n中度过愉快的一天！", 9000185);
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}