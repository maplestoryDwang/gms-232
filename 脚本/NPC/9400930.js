var status = -1;
var selectionLog = [];
var randLog = new Array();
var rootTalk = new Array();
var curTalk;
var npcs = [9400920, 9400921, 9401160];
var npcRecords = [501465, 501466, 501467];
var npcNames = ['艾米', '埃尔宾', '杰妮'];
var talks = [["#face1#今天没有什么有趣的事情吗？请跟我说说吧！", "#face1#别看艾丹那样，其实他超级~~胆小。刚才看到花盆里的虫子都被吓到了吧？", "#face1#森林里开了很多紫罗兰！整个凯兰西亚都充满了花香。每天都像这样就好了~！", "#face1##h0#已经吃遍冒险岛世界的食物了呢？真是太羡慕了！什么是最好吃的？", "#face1#真是的，不久前我想吃奶油面包，所以去了趟特鲁迪家，结果居然卖完了？看着他们生意这么好，我应该开心的……但还是有点遗憾啊……本来这是我专属的美食店呢~！", "#face1#嗯，魔法真是难呢。增益技能就这么难，怎样才能呼风唤雨呢？真正的魔法师真的好棒啊！", "#face1#嗯……该来了……啊！#h0#你来了啊？……我正在等父母的联络。他们每年都一定会寄信来，看来今年要晚一点了。", "#face1#嗯……？#h0#？你还没睡？", "#face1##h0#！你回来了啊？你今天都去了哪儿？", "#face1#今天米兰达也在喷泉的长椅上画画，每天都在努力的她，实力肯定会有所增长的。", "#face1#……看来给凯蒂喂食的人越来越多了。最近它一直在变胖呢~必须增加散步时间了！", "#face1#今天也辛苦你了，#h0#，是不是很累？躺在椅子上休息一下吧！", "#face1#广场上的人非常多，难道是有我不知道的活动？"], ["#face1##h0#，你回来了啊？你没受伤吧？", "#face1#只要更改屋顶的颜色，就能改变整个家的气氛！", "#face1##h0#，你今天过得怎么样？", "#face1#特鲁迪真的就像我的亲弟弟。因为我是看着他长大的！你知道特鲁迪最先说的一句话是什么吗？那就是“凯~蒂~”。是不是很可爱？", "#face1#水下世界是什么地方？我看到过在那里制作的珊瑚灯，真是太神秘了。总有一天，我要去看看。", "#face1#今天我去广场，见到了艾丹，我很想知道他有没有好好使用桌子。", "#face1#每次有新人搬来的时候，我就感觉很激动。但也会担心我们艾米会不会又闯出什么事故……", "#face1#嗯~那面墙看起来有点空旷呢。至少应该挂一个相框吧！", "#face1#米兰达在运营跳蚤市场之前是个画家，再之前是作曲家，再之前是摄像师。", "#face1#给花盆浇水，浇着浇着就不知道过了多长时间。植物有着能让人平静的神秘能力。作为装修的装饰品是很优秀的！", "#face1#你知道吗？说不定凯蒂比我们还要老哦。", "#face1#我喜欢在家休息，而艾米喜欢在外面玩。虽然我们是双胞胎，但是性格完全相反。", "#face1#艾米已经睡着了。只要一过晚上10点，她就会陷入梦乡。"], ["#face1#米兰达的表情有点微妙的变化。呼呼。啊，好苦恼。要阻止他俩在一起吗？", "#face1#阳光太好了。我以前的房子朝北，公司又在地下。现在可以沐浴在阳光下，真是太让人开心了。别人也是这样吗？", "#face1#杰弗里……真的。去大城市开家沙拉店也会生意火爆的。", "#face1#你今天过的怎么样？", "#face1#最近，我突然对装修很感兴趣。家里变得舒适后，每当困倦疲惫的时候，一想到回家，内心就会十分充实。#h0#，你有过这种感觉吗？", "#face1#有想做的事情就尽管放手去做。今天不做，更待何时啊？", "#face1#吃饭了吗？一定要按时吃饭啊。人是铁饭是钢。呃嗯~我是不是太唠叨了，像奶奶一样？呼呼", "#face1#我的苦恼不会延续很久，要么顺其自然要么就重新去做。不必为难自己。", "#face1#只要和#h0#在一起，我的心情就会变好。应该说是舒服吧？如果你也是这样想的就好了。", "#face1#我和艾米亲近了很多。她善良又可爱，让人不得不爱呢。只要她在身边，我就感觉自己整个人都变得明亮起来了。", "#face1##h0#，你来了？来晚了呢。今天也辛苦了呢。", "#face1#累了吧？在家里舒舒服服地待着吧。有什么需要你尽管提。我一定帮你搞定。", "#face1##h0#，看着你每天离开家的背影，我就真心觉得你是位勇者。#h0#，你真是太了不起了。", "#face1#一路顺风，今天也要加油哦。", "#face1#你今天看起来很帅气。", "#face1#埃尔宾邀请我共进晚餐，我要带什么去呢？好苦恼呀！", "#face1#需要我帮忙吗？", "#face1#艾丹……他好像有点缺心眼。但我感觉他很可爱。", "#face1#你和艾丹有约吗？今天他都来找了你12次了。", "#face1##h0#，你是怎么抓住特鲁迪的心的？分享一下秘诀吧。特鲁迪喜欢什么？饼干？冰淇淋？糖果？"]];
var npc;
var manager;
var question2;
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
      manager = cm.getNumberFromQuestInfo(500773, "manager");
      npc = npcs[manager];
      var w = cm.getStringFromQuestInfo(500773, "talkDate");
      var N = "#face0#" + talks[manager][cm.rand(0, talks[manager].length - 1)];
      if (w !== cm.getNowTimeString(3)) {
        N += "\r\n\r\n#L1##b和#p" + npc + "#对话#k#l";
      }
      N += "\r\n\r\n#L99##b查看管家信息#k#l";
      if (cm.getPlayer().isGM() && cm.getzhizunvip() == 2) {
        N += "\r\n";
        N += "\r\n#L999##r<调试>解锁工具栏#k#l";
        N += "\r\n#L1000##r<调试>获得所有建筑图纸#k#l";
        N += "\r\n#L1001##r<调试>获得所有家具#k#l";
      }
      cm.askMenu_Bottom(N, 132, npc);
    } else {
      if (status === V++) {
        if (selectionLog[1] == 99) {
          cm.sendManagerUIPacket();
          cm.dispose();
          return;
        } else {
          if (selectionLog[1] == 999) {
            for (var V = 1; V <= 7; V++) {
              cm.setNumberForQuestInfo(500767, V, 1);
            }
            cm.dispose();
            return;
          } else {
            if (selectionLog[1] == 1000) {
              cm.我的小屋_解锁房屋户型(1, "安乐蘑菇屋", 1, 3);
              cm.我的小屋_解锁房屋户型(1, "整洁的洋房", 4, 6);
              cm.我的小屋_解锁房屋户型(1, "月夜下的万圣节住宅", 7, 9);
              cm.我的小屋_解锁房屋户型(1, "荷塘庭院瓦屋房", 10, 10);
              cm.我的小屋_解锁房屋户型(1, "海滨露台小屋", 11, 13);
              cm.我的小屋_解锁房屋户型(1, '林中圣诞小屋', 14, 16);
              cm.我的小屋_解锁房屋户型(1, "安乐蘑菇屋（扩建型）", 17, 19);
              cm.我的小屋_解锁房屋户型(1, "整洁的洋房（扩建型）", 20, 22);
              cm.我的小屋_解锁房屋户型(1, "月夜下的万圣节住宅（扩建型）", 23, 25);
              for (var V = 2670000; V <= 2670500; V++) {
                cm.我的小屋_添加图纸道具(V);
              }
              cm.dispose();
              return;
            } else {
              if (selectionLog[1] == 1001) {
                cm.setMaxFurnitureSlot(999);
                for (var V = 2671002; V <= 2672500; V++) {
                  cm.我的小屋_添加图纸道具(V);
                }
                cm.dispose();
                return;
              } else {
                cm.askMenu_Bottom("(要说什么呢？)\r\n\r\n#L0##b#p" + npc + "#，今天过得怎么样？#k#l\r\n#L1##b今天的天气如何？#k#l\r\n#L2##b#p" + npc + "#，我有个问题！#k#l", 130, 9400930);
              }
            }
          }
        }
      } else {
        if (status == 2) {
          if (U == 2) {
            question2 = 0;
          } else if (manager == 2 && U == 1) {
            question2 = cm.rand(0, 1);
          } else {
            question2 = cm.rand(0, 2);
          }
        }
        var u = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2;
        eval(u)(f, W, U, V);
      }
    }
  }
}
function 管家艾米_0Q0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face2#今天我要带着特鲁迪和凯蒂去森林里兜风！去的路上我顺便问问有没有人要一起去~ \r\n艾丹估计肯定会去，但米兰达可能会说“你们自己去吧”。\r\n\r\n#L0##b虽然我也很想一起去，但是我很忙，所以不行。你们去好好玩吧！#k#l\r\n#L1##b米兰达如果不去，艾丹也不会去的吧？#k#l\r\n#L2##b森林是不是太危险了？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家艾米_0Q0_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#我就知道会这样所以没问。#h0#总是很忙。如果能一起多玩玩就好了……", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_0Q0_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#哇！#h0#，你已经完全了解艾丹了啊？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_0Q0_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#没关系！凯兰西亚周边是很安全的。我从四岁开始就在森林里玩，从来没有碰到怪物或者坏人！而且如果我遇到危险，#h0#肯定会来吧？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_0Q1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face1#今天好像很忙呢！阳光实在是太好了。这种时候就应该去广场上晒太阳才对啊。为了合成维他命C！\r\n\r\n#L0##b……能够通过阳光获取的应该是维他命D吧……#k#l\r\n#L1##b好想法！#k#l\r\n#L2##b像今天这样的好天气，就会想要打扫呢。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家艾米_0Q1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#啊，我知道哦？我只是随便说说而已！切，你可不准说出去嘲笑我哦！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_0Q1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#那我去去就回！你就好好看家吧~~！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_0Q1_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#嗯……嗯……好！我们一起清扫，然后一起去广场晒太阳吧！#h0#也愿意吧？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_0Q2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#今天我打算在家里练习一下魔法……为什么我的实力总是无法提高呢？嘤……\r\n\r\n#L0##b不！比起一开始还是好很多了吧？多亏了艾米，打猎的时候方便多了。#k#l\r\n#L1##b没错，似乎还需要多点练习。#k#l\r\n#L2##b实力不强也可以，只要有心意就行了。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家艾米_0Q2_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#真的吗？是真的吧？！太好了！我会继续努力练习的，敬请期待！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_0Q2_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#谢谢……不过我想帮助#h0#！请再等一下。我会努力练习，然后像魔法师一样施展帅气的增益的！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_0Q2_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#……果然如此啊……？看来我是没有才能吧……还是放弃比较好吗……", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_1Q0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face2#今天是让人想到凉爽的橙汁的天气呢。要不干脆种一棵橙子树吧！要是把亲手摘下来的橙子马上榨汁肯定会很好吃吧？\r\n\r\n#L0##b今天看来会很热啊，谢谢你能告诉我。#k#l\r\n#L1##b世界上哪儿有这种天气啊！#k#l\r\n#L2##b你想喝橙汁吗？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家艾米_1Q0_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#叮咚~！外面太热了。如果要去打猎，一定要小心别中暑了！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_1Q0_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#哈……真是的~~你不知道在大太阳底下汗流浃背之后最好喝的是什么吗？水？不对不对。碳酸饮料？不对不对。当然是又甜又凉爽的橙汁了~！如果你去到外面，肯定就会知道我说的是什么意思了。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_1Q0_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#有点……？刚才我出去了一下，真是很热啊。还出了汗。这种时候就应该来杯凉爽的橙汁，一下子就能消暑了呢。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_1Q1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face1#今天的天气适合躺在沙发上喝点温暖的可可呢！\r\n\r\n#L0##b应该不会下雨吧~？只是艾米累了吧！#k#l\r\n#L1##b世界上哪儿有这种天气啊！#k#l\r\n#L2##b好啊，谢谢你能告诉我。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家艾米_1Q1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#不是的，今天真的有点阴沉啊。可能~会下雨啊，这种天气就应该待在家里吧。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_1Q1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#为什么没有呢？天空阴沉沉的~太阳也没出来，还吹着阴风！这种天气就应该休息才对。还要再加上可可，你难道不知道吗？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_1Q1_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#哪里的话呀！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_1Q2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face2#今天是个适合买好汉堡套餐然后去玩的好天气呢~~！\r\n\r\n#L0##b你是指天气温暖又晴朗吧？#k#l\r\n#L1##b世界上哪儿有这种天气啊！#k#l\r\n#L2##b好啊，谢谢你能告诉我。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家艾米_1Q2_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#叮咚~！#h0#果然聪明！这个天气也很适合狩猎呢。今天也要加油哦，#h0#！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_1Q2_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#为什么没有啊！阳光也很温暖，风也很凉爽，还没有雾霾，像今天这种天气就应该去玩啊！不在这种时候吃汉堡那要到什么时候才吃？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_1Q2_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#哪里的话呀！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0(f, W, U, V) {
  if (status <= V++) {
    var w = "#face2#你想知道什么？除了体重和银行账户密码，我都能告诉你！\r\n";
    var N = ["\r\n#L1##b你喜欢的食物是什么？#k#l", "\r\n#L2##b你是什么时候来到凯兰西亚的？#k#l", "\r\n#L3##b埃尔宾做的饭好吃吗？#k#l", "\r\n#L4##b米兰达的作品真的很帅气吗？#k#l", "\r\n#L5##b是特鲁迪可爱，还是我可爱？#k#l", "\r\n#L6##b有空闲时间的时候你都干什么呢？#k#l", "\r\n#L7##b你的梦想是什么？#k#l"];
    var u = cm.randArray(0, N.length, 3);
    for (var V = 0; V < u.length; V++) {
      w += N[u[V]];
    }
    cm.askMenu_Bottom(w, 132, npc);
  } else {
    var Q = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(Q)(f, W, U, V);
  }
}
function 管家艾米_2Q0_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#我喜欢的食物？我都喜欢……不过最喜欢的是妈妈以前给我煮的芝士汤。埃尔宾哥哥做出来的味道和那个是不同的。", 36, npc, false, true);
  } else {
    if (status === V++) {
      cm.askMenu_Bottom("#face3#嗯……其实我已经记不清是什么味道了，但是我一直很想吃呢。\r\n\r\n#L0##b如果爸妈回来了，我一定要让她煮给我们喝！#k#l\r\n#L1##b虽然我不会煮汤，但是我可以找到好吃的芝士。#k#l", 132, npc);
    } else {
      var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[5];
      eval(w)(f, W, U, V);
    }
  }
}
function 管家艾米_2Q0_1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#好！如果爸妈快点回来就好了。他们要是看到有像#h0#这样的好邻居，肯定会很开心的！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#谢谢……但是就算找到了好吃的芝士，可能也做不出那个味道。\r\n还不如买个洒满了芝士的披萨给我呢？嘿嘿。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#我也不清楚。虽然我从很小的时候就生活在这里了，但我不是在这里出生的。", 36, npc, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face1#对了，我说过我的父母是冒险家吧？好像是在其他地方冒险的时候生下了我们，然后在这里定居了。", 36, npc, false, true);
    } else {
      if (status === V++) {
        cm.askMenu_Bottom("#face1#说不定我也流着冒险家的血呢。\r\n\r\n#L0##b你的父母一定是很帅气的冒险家吧。#k#l\r\n#L1##b艾米也会成为帅气的冒险家的。有个叫做主教的职业，像艾米一样给其他人增益，帮助他人。#k#l", 132, npc);
      } else {
        var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[6];
        eval(w)(f, W, U, V);
      }
    }
  }
}
function 管家艾米_2Q0_2_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#我看过父母年轻时候的照片，有在沙漠里和兔子一起照的照片，还有在被大雪覆盖的城里的照片。总有一天，我也想去那样的地方看看。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_2_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#真的吗？！我也能成为冒险家吧？哈哈！我会更努力练习增益的！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_3(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face3#嗯……这是我们之间的秘密吧……？\r\n\r\n#L0##b当然了！#k#l\r\n#L1##b……（哈哈）#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家艾米_2Q0_3_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#……只是能吃罢了。哥哥虽然擅长装饰房间，但是对于料理和清扫都一窍不通。但是如果告诉他事实，他会难过的，所以一定要说好吃才行！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_3_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#还是算了吧，这就算是我一个人的秘密吧。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_4(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face1#嗯……我是看到了发展的可能性啊！#h0#应该不知道，一开始更是看不懂呢。\r\n米兰达的实力与日俱增，如果能多夸奖一下，应该能做出更有意思更漂亮的作品吧？\r\n\r\n#L0##b艾米家也有米兰达的作品吗？#k#l\r\n#L1##b能够懂得如何夸奖也是种能力呢！你真是厉害啊，艾米。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家艾米_2Q0_4_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#因……因为是哥哥负责装修的……", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_4_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#哎呀，哪里哪里！#h0#，今天你好像更帅了呢！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_5(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face4#……？哎呀，我差点就要爆粗了呢。\r\n\r\n#L0##b抱歉。#k#l\r\n#L1##b我就是有点好奇。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家艾米_2Q0_5_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#你的快速道歉，我接受了。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_5_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#当然是我家特鲁迪要可爱一百倍了！根本没办法比较嘛。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_6(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0##h0#来之前，我为了挣生活费，在艾丹家的木工厂干过兼职，还在森林里摘草莓然后去卖。", 36, npc, false, true);
  } else {
    if (status === V++) {
      cm.askMenu_Bottom("#face0#虽然父母留下了钱……但是不知道他们什么时候才回来，还可能会有要用钱的时候。\r\n\r\n#L0##b你真是乖啊。#k#l\r\n#L1##b你没有爱好吗？#k#l", 132, npc);
    } else {
      var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[5];
      eval(w)(f, W, U, V);
    }
  }
}
function 管家艾米_2Q0_6_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#只要一有空，我就会去找特鲁迪玩……啊！学习！真的！也许吧？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_6_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#带着特鲁迪和凯蒂去散步？可以晒日光浴，如果在森林里发现了草莓，那就是一石二鸟了！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_7(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#梦……嘿嘿，我的梦想很简单，你可别笑我~我的梦想是在爸爸妈妈回来之前，好好守护这个家，健健康康地生活。", 36, npc, false, true);
  } else {
    if (status === V++) {
      cm.askMenu_Bottom("#face1#然后在爸爸妈妈回来的时候，用好吃的食物招待他们，到那时候我是不会让埃尔宾哥哥做饭的！\r\n\r\n#L0##b真是个帅气的梦想呢！#k#l\r\n#L1##b如果埃尔宾听到的话会不会难过呢？#k#l", 132, npc);
    } else {
      var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[5];
      eval(w)(f, W, U, V);
    }
  }
}
function 管家艾米_2Q0_7_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#谢谢，真的。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家艾米_2Q0_7_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#哥哥可能也知道吧，他做的料理的味道……", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_0Q0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#今天比较闲，所以我正打算去米兰达的跳蚤市场转转，然后去其他家具工坊看看。\r\n说不定能久违地看到有新的家具出现。我也想看看其他人的装修呢！\r\n\r\n#L0##b为什么你想要看其他人的装修？k#l\r\n#L1##b如果有新的家具，那你也告诉我一声吧。#k#l\r\n#L2##b帮我跟米兰达问个好。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家埃尔宾_0Q0_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#因为装修的世界是无穷无尽的！啊，那个人是那样放置家具的啊，这种家具像这样摆也很漂亮啊，看着这些就能学习了。这也算是我的小小兴趣。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_0Q0_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#我知道了！#h0#如果找到了新的BOSS家具，一定要记得告诉我哦。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_0Q0_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#嗯~还是#h0#亲自去问好比较好哦！你偶尔也可以去广场玩玩嘛，大家都会很高兴的。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_0Q1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#我正打算去广场练习增益。我正在研究能提高持续时间的方法。\r\n\r\n#L0##b你为什么要去广场？#k#l\r\n#L1##b这真是个好消息呢！#k#l\r\n#L2##b谢谢你为了我这么努力。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家埃尔宾_0Q1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#因为既然已经做了，那就应该找其他人练习一下啊！特别是给艾丹增益的话，挥砍就会变得更容易，他特别喜欢呢。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_0Q1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#谢谢你能这么开心，我会配合#h0#的脚步，努力成长的。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_0Q1_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#不不，是因为我喜欢所以才做的！我很开心能帮到你。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_0Q2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#今天我打算去市场买点食材。最近艾米看起来没什么力气，所以我打算做一些特别的食物。在去市场的路上说不定还能找到漂亮的紫罗兰盆栽呢。\r\n\r\n#L0##b特别的食物是什么？#k#l\r\n#L1##b一定要是紫罗兰吗？#k#l\r\n#L2##b艾米为什么会没什么力气？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家埃尔宾_0Q2_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#充满了香喷喷的芝士香味的烤橙子和鸡腿！光是想象都觉得会很好吃吧？因为我想把艾米喜欢吃的都放进去，所以想了很久。一想到艾米肯定会很喜欢，我就很开心。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_0Q2_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#因为我和艾米的诞生花就是紫罗兰。要是给艾米这个，她肯定会很开心。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_0Q2_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#嗯……我也不太清楚。艾米不想让我担心，所以不怎么和我说心里话。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_1Q0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#今天据说也是又热又潮湿。像今天这种天气一定要注意摄取水分，比起一次性喝大量的水，最好还是少量多次比较好。\r\n\r\n#L0##b谢谢，看来我得带水出门了。#k#l\r\n#L1##b真是厉害，你怎么知道的呢？#k#l\r\n#L2##b看来也得多给花浇水了吧？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家埃尔宾_1Q0_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#说到这个，我也得给艾米带点水。估计他没看天气就出门了。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_1Q0_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#我是从一本叫《有关育儿的一切》的书上学到的，在那本书上好像真的有世界上所有的知识。我觉得这本书应该被指定为人人都必读的书呢。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_1Q0_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#虽然在潮湿的时候给一点水就够了，但是也得看花的具体状态才知道。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_1Q1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#今天据说一整天都是晴朗的好天气呢。一直都是让人感到舒适的温度，很适合出去野外活动呢。\r\n\r\n#L0##b埃尔宾要做什么呢？#k#l\r\n#L1##b谢谢，这是个打猎的好天气呢！#k#l\r\n#L2##b艾米今天也要去兜风吧。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家埃尔宾_1Q1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#阳光很好，所以我正在考虑要不要晒一下杯子呢。然后给花浇浇水，把积攒的家务事都做一下。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_1Q1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#打猎时一定要小心啊。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_1Q1_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#你怎么知道？！只要天气好，他就闹着要去森林里兜风。\r\n如果遇到危险的人或者动物可怎么办啊？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_1Q2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#今天据说是个阴天，风还很大。幸好没有说要下雨，所以不用太担心。\r\n\r\n#L0##b你对每天的天气都很了解呢！#k#l\r\n#L1##b谢谢，今天也是个适合打猎的天气呢。#k#l\r\n#L2##b现在有了家，就算下雨也没什么好担心的了。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家埃尔宾_1Q2_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#……这是我的习惯。如果下雨或者天气不好，就会给我的父母带来麻烦。所以我就养成了习惯，每天都会想着“希望今天也是个好天气”然后确认下天气的情况。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_1Q2_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#注意安全！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_1Q2_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#没错，如果下雨了，那就回家休息吧。也可以带其他朋友来。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0(f, W, U, V) {
  if (status <= V++) {
    var w = "#face2#你应该是对我感兴趣才好奇的吧？你尽管问吧，我会好好回答的。\r\n";
    var N = ["\r\n#L1##b你喜欢的食物是什么？#k#l", "\r\n#L2##b你不想离开凯兰西亚，去其他地方看看吗？#k#l", "\r\n#L3##b你没有因为艾米而生气的时候吗？#k#l", "\r\n#L4##b你觉得装修的时候什么是最重要的？#k#l", "\r\n#L5##b你最要好的朋友是谁？#k#l", "\r\n#L6##b有空闲时间的时候你都干什么呢？#k#l", "\r\n#L7##b你的梦想是什么？#k#l"];
    var u = cm.randArray(0, N.length, 3);
    for (var V = 0; V < u.length; V++) {
      w += N[u[V]];
    }
    cm.askMenu_Bottom(w, 132, npc);
  } else {
    var Q = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(Q)(f, W, U, V);
  }
}
function 管家埃尔宾_2Q0_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#喜欢的食物？当然是特鲁迪家的奶油面包了！", 36, npc, false, true);
  } else {
    if (status === V++) {
      cm.askMenu_Bottom("#face2#充满了柔软奶油的蓬松面包，吃下一口后，在嘴里融化开来……\r\n应该说是让人感觉到幸福就在身边的味道吧？\r\n\r\n#L0##b在埃尔宾亲手做的食物中呢？#k#l\r\n#L1##b我也喜欢特鲁迪家的奶油面包。#k#l", 132, npc);
    } else {
      var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[5];
      eval(w)(f, W, U, V);
    }
  }
}
function 管家埃尔宾_2Q0_1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#嗯……有点困难呢。虽然我擅长做菜……但是我对于我做的味道太熟悉了，很少会觉得好吃。", 36, npc, false, true);
  } else if (status === V++) {
    cm.sendNormalTalk_Bottom("#face1#艾米倒是总觉得很好吃。\r\n下次我给#h0#好好做一顿饭吧！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#特鲁迪家其他的面包也很好吃，如果有机会，你一定要尝尝看！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#我没想过要离开凯兰西亚。\r\n虽然我曾经想过要去寻找父母，但是对我来说，凯兰西亚是我的家，我的归宿。\r\n\r\n#L0##b你真的很喜欢凯兰西亚呢。#k#l\r\n#L1##b我也和埃尔宾一样。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家埃尔宾_2Q0_2_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#是的，我……很喜欢凯兰西亚。不管是我们的家，还是邻居，亦或是#h0#我都喜欢。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_2_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#真的吗？哇！听你这么说，我很开心。我总觉得#h0#搬来还没多久，但没想到已经过了这么久了。真是让人感慨呢。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_3(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face3#……怎么会没有呢。但是这都是我的错。身为哥哥的我应该好好照顾她，但是我却没能做到，所以我总是感到很抱歉。\r\n\r\n#L0##b但是还是会有生气的时候吧？#k#l\r\n#L1##b埃尔宾真是个好哥哥呢。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家埃尔宾_2Q0_3_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#……在她说要把小蘑菇屋卖给#h0#的时候，还有说要把特鲁迪家的面包店开成连锁店，花了一个月的生活费买了面包然后去到邻村的时候……？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_3_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#我一直在努力成为一个好哥哥。艾米也是一样。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_4(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#我认为和谐是最重要的。整体的颜色是否适合，和其他家具相不相配！", 36, npc, false, true);
  } else {
    if (status === V++) {
      cm.askMenu_Bottom("#face3#但是……艾米认为最重要的是表现出个性。所以有时候会用一些奇怪的东西做装饰。\r\n\r\n#L0##b我也认为整体和谐是最重要的。#k#l\r\n#L1##b我也认为表现个性是最重要的。#k#l", 132, npc);
    } else {
      var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[5];
      eval(w)(f, W, U, V);
    }
  }
}
function 管家埃尔宾_2Q0_4_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#果然我们心意相通！", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_4_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#没……没关系。这里是#h0#的家，我尊重每个人的选择。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_5(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face1#要好的朋友……当然是艾米吧？我们是兄妹，是朋友，也是各自的父母。不用说出来也能理解彼此。\r\n\r\n#L0##b真是帅气呢，我好羡慕你们啊。#k#l\r\n#L1##b除了艾米呢？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家埃尔宾_2Q0_5_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1##h0#应该还有这种朋友吧？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_5_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#嗯……还有凯尼斯！她对我们真的很好。\r\n而且我们关心的事情和兴趣也很像，所以很聊得来。年龄的差异并不重要。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_6(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#看装修杂志，到其他人家里参观装修……", 36, npc, false, true);
  } else {
    if (status === V++) {
      cm.askMenu_Bottom("#face1#我还没有告诉其他人，但最近我正在画建筑设计图。\r\n总有一天，我也想成为像凯尼斯一样帅气的建筑家或者室内设计师。\r\n\r\n#L0##b请一定要给我看看你的设计。#k#l\r\n#L1##b埃尔宾肯定会做得很好的！#k#l", 132, npc);
    } else {
      var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[5];
      eval(w)(f, W, U, V);
    }
  }
}
function 管家埃尔宾_2Q0_6_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#虽然有点不好意思，但我会给#h0#看的。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_6_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#谢谢，如果我成为了建筑师，一定会给#h0#设计一个很好的房屋。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_7(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#我的梦想……就是好好照顾艾米。让她不要受伤……", 36, npc, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face1#另外一个梦想就是成为像凯尼斯一样帅气的建筑家或者室内设计师。\r\n虽然现在我还有很多不足之处，但是如果好好学习并练习，实力应该能得到增长吧？", 36, npc, false, true);
    } else {
      if (status === V++) {
        cm.askMenu_Bottom("虽然一开始不怎么样，但是现在我已经有一定的增益实力了。\r\n\r\n#L0##b你已经做得很好了。#k#l\r\n#L1##b你一定会实现梦想的。#k#l", 132, npc);
      } else {
        var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[6];
        eval(w)(f, W, U, V);
      }
    }
  }
}
function 管家埃尔宾_2Q0_7_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#谢谢，真的谢谢你。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家埃尔宾_2Q0_7_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#谢谢，在我实现梦想之前，请你一定要关注我哦。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_0Q0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face1#今天也想悠闲地看看书。\r\n\r\n#L0##b什么书？#k#l\r\n#L1##b一提起书，我就心烦。#k#l\r\n#L2##b这个计划不错。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_0Q0_0(f, W, U, V) {
  if (status <= V++) {
    if (cm.rand(1, 2) == 1) {
      cm.sendNormalTalk_Bottom("#face4#我不挑剔，啥书都看。最近我还看室内装潢书呢。你要夸夸我吗？", 36, npc, false, true);
    } else {
      cm.sendNormalTalk_Bottom("#face1#《中级药草学》和《解决毒蘑菇和霉菌的实战魔法药》。其实，这两本并不是什么适合惬意躺着随意看看的有趣的书。", 36, 9401160, false, true, 1);
    }
  } else {
    end();
  }
}
function 管家杰妮_0Q0_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#呃嗯？你是真心的吗？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_0Q0_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#呼呼，坦率也是我的风格。其实我小时候也那样。呃嗯。为什么我的语气总有种奶奶的感觉？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_0Q1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face3#我准备去艾米家。她说自己研究出了艾米牌特制果汁配方，邀请我去呢。\r\n\r\n#L0##b哇，好期待啊！#k#l\r\n#L1##b看来你和艾米亲密了不少呢。#k#l\r\n#L2##b咖啡店消失后，艾米都不愿再看见果汁。现在她竟然制作了艾米牌特制果汁。真是太好了。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_0Q1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#艾米牌特制果汁配方只是个诱饵。其实，艾米很关心最近外面的世界。让我给她讲废弃都市的故事。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_0Q1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#嗯，艾米很照顾我。得益于此，我和居民们也变得亲近了。善良、美丽、又会照顾人，让人不得不爱啊。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_0Q1_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#跟我比起来，杰弗里好像跟奶奶更亲近呢。从爱好到摆弄花草，真合得来啊。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_0Q2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face1#我要和奶奶一起去森林里摘覆盆子和橡子。奶奶现在已经完全适应凯兰西亚了。上周末已经和艾米、杰弗里去过一次了。\r\n\r\n#L0##b应该很有趣吧！路上注意安全啊。#k#l\r\n#L1##b用覆盆子和橡子做些什么吃呢？#k#l\r\n#L2##b你和杰弗里也变得亲近了吗？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_0Q2_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#真的吗？#h0#会去吗？虽然和奶奶在一起也很开心……但摘覆盆子……好像不太适合我。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_0Q2_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#山莓既可以制作果酱，又可以制作蛋挞。橡子可以制作凉粉。做一次就煮一锅，一直到我吃不下为止。在奶奶眼里，我好像瘦了很多。她很担心，所以我不得不吃……多亏了这个，我现在每天都在运动。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_0Q2_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#我感觉这种甜蜜的味道快让我上瘾了。但糖分过高，吃多了对身体不好……减少一点会更好。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_1Q0(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#听说今天会打雷、下暴雨啊？\r\n\r\n#L0##b真的吗？！#k#l\r\n#L1##b如果不带伞出去的话，就糟糕了。#k#l\r\n#L2##b你害怕打雷吗？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_1Q0_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#我开玩笑的……天气很好，你别担心。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_1Q0_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#我开玩笑的。#h0#，我们今天一起在家里玩儿吧。好吗？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_1Q0_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#怎么了？我害怕的话你就会陪着我吗？-", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_1Q1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#我不太看天气预报，所以不是很清楚。只是看天空，觉得今天应该是晴天。\r\n\r\n#L0##b啊……谢谢你。#k#l\r\n#L1##b凯兰西亚的天气总是晴朗的。#k#l\r\n#L2##b是啊，一整天好像都是风和日丽的。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_1Q1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#不客气。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_1Q1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#真是被祝福的村子。怎么办？渐渐开始喜欢凯兰西亚了呢。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_1Q1_2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#对吧？嗯……我有计划了。天气好的话，应该让凯蒂做运动。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0(f, W, U, V) {
  if (status <= V++) {
    var w = "#face2#说说看吧，我听完再回答你。\r\n";
    var N = ["\r\n#L1##b你喜欢的食物是什么？#k#l", "\r\n#L2##b你喜欢废弃都市，还是凯兰西亚？#k#l", "\r\n#L3##b你很喜欢奶奶吧？#k#l", "\r\n#L4##b你最好的朋友是谁啊？#k#l", "\r\n#L5##b你认为装修的时候，什么是最重要的呢？#k#l", "\r\n#L6##b有空闲时间的时候你都干什么呢？#k#l", "\r\n#L7##b你的梦想是什么？#k#l"];
    var u = cm.randArray(0, N.length, 3);
    for (var V = 0; V < u.length; V++) {
      w += N[u[V]];
    }
    cm.askMenu_Bottom(w, 132, npc);
  } else {
    var Q = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3];
    eval(Q)(f, W, U, V);
  }
}
function 管家杰妮_2Q0_1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face1#可能有点腻了，但还是奶奶做的炖肉最好吃。温暖又安心的味道，那是只有奶奶才能做出的味道。\r\n\r\n#L0##b我也想吃！#k#l\r\n#L1##b呃嗯，然后呢？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_2Q0_1_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#正好奶奶对#h0#也很好奇，下次再邀请你吧。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_1_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#然后？呃嗯，最近杰弗里做的沙拉也很好吃。特别是洒满芝士和橄榄的沙拉。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_2(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face1#怎么还有这种问题啊？呼呼。凯兰西亚和废弃都市有很大差别吗？两者都各有魅力，我该怎么选择呢。\r\n\r\n#L0##b如果一定要选的话……#k#l\r\n#L1##b我问错问题了。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_2Q0_2_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#你是不是故意难为我的？呃嗯~~~", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_2_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#你要是道歉的话，我会内心难安的。在阳光普照的白天，会感觉凯兰西亚像天堂一样。但太阳下山后，偶尔也会想念华丽的废弃都市。这个回答可以吗？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_3(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face2#嗯，我从小就在奶奶身边长大。她尽了最大的努力，不让我感到父母的空缺……奶奶身上的味道是世界上让我感到最安心的东西。\r\n\r\n#L0##b你很感激奶奶吧。#k#l\r\n#L1##b原来如此……#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_2Q0_3_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#当然了！呼呼，我现在的梦想就是从奶奶那里获得多少，就孝顺奶奶多少。奶奶很喜欢凯兰西亚，所以我也很幸福。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_3_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face3#啊，对了。我在艾米身上看到了我以前的样子，所以这也是我想对她好的原因。不过……要说不同点的话，艾米不是假装开朗，而是真的开朗……", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_4(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face4#废弃都市的朋友们都很友好。不过我从小到大都腻烦了。\r\n帕尼尔听到了会伤心吗？呼呼。其中我和帕尼尔最亲近，他在废弃都市开美容室，总说自己是最棒的发型师。\r\n\r\n#L0##b帕尼尔……？我认识的那个帕尼尔……？年龄差异……？#k#l\r\n#L1##b在凯兰西亚吗？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_2Q0_4_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#你认识帕尼尔吗？我们幼儿园的时候就是好朋友了！下次一起去看他吧。但是这种话可不能说出来，会出大事的。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_4_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#当然是#h0#了，原来你想听这种话啊？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_5(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face0#我先把丑话放前头，在装修方面我完全是个新手。就只是怎么好看怎么来而已。\r\n\r\n#L0##b即便这样，挑选的时候应该也有标准的吧。#k#l\r\n#L1##b不能把购物的任务交给杰尼吗？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_2Q0_5_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#舒服，这是最重要的。只要放上好看的东西，我的内心就会很舒服。那样不就行了吗？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_5_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#是吗……？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_6(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face1#最近，我经常看见你坐在舒服的沙发上看书。\r\n\r\n#L0##b你在看什么书？#k#l\r\n#L1##b还有别的吗？#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_2Q0_6_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face0#和凯蒂一起跑步。奶奶让我吃了太多东西了……肚子上的赘肉越来越多了。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_6_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face4#我不挑剔，啥书都看。最近我还看室内装潢书呢。你要夸夸我吗？", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_7(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu_Bottom("#face4#梦想……？嗯，虽然不是什么秘密，但至今谁也没问过我，有点不好意思回答呢。我的梦想是，成为药师。\r\n\r\n#L0##b药师？！#k#l\r\n#L1##b很适合杰尼呢。#k#l", 132, npc);
  } else {
    var w = '管家' + npcNames[manager] + '_' + selectionLog[2] + 'Q' + question2 + '_' + selectionLog[3] + '_' + selectionLog[4];
    eval(w)(f, W, U, V);
  }
}
function 管家杰妮_2Q0_7_0(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face1#嗯。虽然不是很厉害的魔法药水，但我想成为可以为误食毒蘑菇后腹泻的人、感冒的人提供治疗的药师。", 36, npc, false, true);
  } else {
    end();
  }
}
function 管家杰妮_2Q0_7_1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk_Bottom("#face2#真的吗？谢谢你！呼呼。我最近看了很多制作药水的书，觉得还挺容易的。把所需的材料按量混合就行了，是不是很像鸡尾酒呢？那可是我的专长。", 36, npc, false, true);
  } else {
    end();
  }
}
function end() {
  var U = cm.rand(1, 4);
  var V = ['家务', '美感', "财务管理", "社交术"];
  var w = cm.rand(1, 10);
  var N = cm.getNumberFromQuestInfo(npcRecords[manager], 's' + U);
  var u = cm.rand(1, 8);
  var Q = cm.getNumberFromQuestInfo(npcRecords[manager], 's5');
  cm.addNumberForQuestInfo(npcRecords[manager], 's' + U, w);
  cm.addNumberForQuestInfo(npcRecords[manager], 's5', u);
  cm.setStringForQuestInfo(500773, "talkDate", cm.getNowTimeString(3));
  cm.sendNormalTalk_Bottom("#b(和#p" + npc + '#开心地聊天，#p' + npc + "#的属性提高了！)\r\n#b" + V[U - 1] + "#k属性提高了#b" + w + "#k！(" + N + " -> #b" + (w + N) + "#k)\r\n#b亲密度#k提高了#b" + u + "#k！(" + Q + " -> #b" + (u + Q) + "#k)", 56, 0, true, true);
  cm.dispose();
}