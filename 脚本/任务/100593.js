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
      cm.askMenu("你好，#h0#。\r\n你想了解什么？\r\n#L0# 请告诉我#b#e<冒险岛大酒店>#n的相关内容！#k#l\r\n#L2# 请告诉我#b#e<贵宾会员>#n的相关内容！#k#l\r\n#L3# 请告诉我#b#e<贵宾猎人俱乐部>#n的相关内容！#k#l\r\n#L4# 请告诉我#b#e<冒险岛拳击王>#n的相关内容！#k#l\r\n#L8# 请告诉我#b#e<怪物金字塔>#n的相关内容！#k#l\r\n#L6# 请告诉我#b#e<冒险岛无边游泳池>#n的相关内容！#k#l\r\n#L99# 我没有什么想了解的了。#l", 4, 9062297);
    } else {
      var e = "action分支" + selectionLog[1];
      eval(e)(g, w, a, v);
    }
  }
}
function action分支0(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#e<冒险岛大酒店>#n是金利奇为了纪念事业成功运营#b#e17周年#n#k\r\n而建造的超豪华酒店。", 4, 9062297, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("金利奇的事业已经成功运营了#b#e17年#n#k。\r\n\r\n金利奇认为，他本人之所以能够成功，正是为了冒险岛世界辛苦付出17年的#r#e勇士们#n#k。", 4, 9062297, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("所以他正是怀着#r#e感恩之心#n#k，开设了这座酒店。", 4, 9062297, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("其中，我们特别选拔出了#r#e17年#n#k间挥洒汗水的勇士们，\r\n邀请他们加入#b#e<贵宾会员> #n#k。", 4, 9062297, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("这个酒店中为#b#e<贵宾会员>#n#k们准备了各种\r\n#r#e特别服务#n#k。", 4, 9062297, true, true);
          } else if (status === v++) {
            cm.sendNormalTalk("接下来，愿您在#b#e<冒险岛大酒店>#n#k中度过轻松愉悦的时光。", 4, 9062297, true, true);
            status = -1;
          }
        }
      }
    }
  }
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("金利奇认为，他本人能够成功，正是因为为了冒险岛世界辛苦付出#b#e17年#n#k的#r#e勇士们#n#k。", 4, 9062297, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("其中，我们选拔出了特别的勇士，邀请他们加入#b#e<贵宾会员> #n#k。", 4, 9062297, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("既然能收到这里的邀请，那就说明你有充分的资格接受各种服务。\r\n不过接受过能力检验的勇士，可以按照#b#e<贵宾会员等级>#n#k享受我们提供的#r#e更加特别的服务#n#k。", 4, 9062297, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("购买后，#b#e<贵宾会员等级>#n#k将跟随#r#e<贵宾会员积分>#n#k提升。\r\n这算是我们为您提供特殊福利的#e小小凭证#n吧。", 4, 9062297, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("你问我要如何购买#b#e<贵宾会员积分>#n#k？", 4, 9062297, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("每天可支付#r#e200个#n#k\r\n#e#i4310291:# #t4310291:##n购买#b#e<贵宾会员积分>#n#k。\r\n点击为各位会员提供的#b#e会员卡#n#k即可支付。", 4, 9062297, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("购买贵宾会员积分时，还能额外获得#r#e<贵宾技能点>#n#k和\r\n#e#r<贵宾礼券>#n#k。", 4, 9062297, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("#b#e<贵宾技能点>#n#k可以提高各种能力值。", 4, 9062297, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("使用#b#e<贵宾礼券>#n#k可以购买贵宾礼券簿中出售的道具，请您使用看看。", 4, 9062297, true, true);
                  } else if (status === v++) {
                    cm.sendNormalTalk("可通过#b#e活动提醒#n#k的#r#e贵宾会员图标#n#k查看可按照等级获得的丰富福利。", 4, 9062297, true, true);
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
function action分支3(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#e贵宾猎人俱乐部#n是为喜爱#b#e<冒险岛大酒店>#n#k的贵宾顾客特别提供的服务。\r\n\r\n我们一直致力于了解各位贵宾的喜好，提供丰富各样的服务。", 4, 9062297, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("#e贵宾猎人俱乐部#n运营截止#r2021年08月03日晚上11点59分#n#k，根据#e#b贵宾会员等级#k#n#b提供不同的服务#k。", 4, 9062297, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b#h0##k的会员等级为#eVIP CLASSIC#n，可以参与#b#e<寻找荧光蘑菇>#n#k。", 4, 9062297, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#b#e<寻找荧光蘑菇>#n#k指的是#r狩猎等级范围怪物#k的过程中，寻找隐藏的#b荧光蘑菇#k的游戏。", 4, 9062297, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#r消灭的等级范围怪物数量#k不同，\r\n#b荧光蘑菇出现的种类和周期#k也会不同，\r\n根据不同种类的荧光蘑菇，分别可以获得不同数量的#b#e17周年纪念币#n#k。\r\n\r\n#e<荧光蘑菇种类>#n\r\n - #b荧光蘑菇仔    ： #e1个17周年纪念币#n#k\r\n - #b荧光花蘑菇：#e2个17周年纪念币#n#k\r\n - #b荧光刺蘑菇：#e3个17周年纪念币#n#k\r\n\r\n\r\n#r※ 发现10次相同种类的荧光蘑菇后，即可发现荧光蘑菇。#k", 4, 9062297, true, true);
          } else if (status === v++) {
            cm.sendNormalTalk("#b#h0##k您只要享受狩猎等级范围怪物的乐趣就好。因为在#b#h0##k狩猎的期间，威廉和詹妮弗会去寻找荧光蘑菇的痕迹。\r\n\r\n\r\n#r※ 等级范围怪物指的是，以角色的等级为基准，#e-20级~+20级范围#n内的怪物。", 4, 9062297, true, true);
            status = -1;
          }
        }
      }
    }
  }
}
function action分支4(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("冒险岛拳击王，是来到#b#e<冒险岛大酒店>#n#k的所有勇士都可以参与的#b特殊游戏机#k。在限定时间2分钟内，尽情攻击拳击王游戏机，既可以测定#b自己的战斗能力#k，还可以根据获得的分数获得#b17周年纪念币#k作为礼物。", 4, 9062297, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("关卡共分为#r10个阶段#k，进入到越高级的关卡，将会出现#b防御率#k和#b等级#k更高的#r拳击王游戏机#k和#r飞翔沙滩包#k。\r\n您可以根据对拳击王游戏机和飞翔沙滩包#b造成的伤害#k，获得一定比例的#b分数#k。也就是说，在越高级的关卡中需要造成更多的伤害才能获得1分。", 4, 9062297, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("#b限定时间#k内，可根据造成的伤害#b最多获得1200分#k，#b每10分可获得1个17周年纪念币#k。\r\n限定时间结束前先获得#b1200分#k时，游戏自动结束。", 4, 9062297, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#r每个世界1天最多通过游戏获得1200分#k，更新#b当天世界内的最高分数#k后，可额外获得#b17周年纪念币#k。\r\n例如，今天世界内的最高分数为#e1100分#n的状态下，通过挑战获得#e1200分#n后，可根据更新的分数额外获得#b10个17周年纪念币#k。", 4, 9062297, true, true);
        } else if (status === v++) {
          cm.sendNormalTalk("说明就到此为止了，希望您每天都能度过愉快的时光。\r\n\r\n#e※活动时间\r\n - 2021年08月03日23点59分截止#n", 4, 9062297, true, true);
          cm.dispose();
        }
      }
    }
  }
}
function action分支6(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("\r\n#e<冒险岛无边游泳池>#n是最高级的游泳池，这也是我们酒店的骄傲。", 0, 9062297, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("\r\n#e<冒险岛无边游泳池>#n由1~3号3个通道构成。", 0, 9062297, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("\r\n各个通道中随机配置了可爱的#b#e鸭蹼道具#k#n，可以帮助你游得更远。", 0, 9062297, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("\r\n选择通道入场后，获得鸭蹼道具，每前进一格即可#e#b升级#k#n。", 0, 9062297, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("\r\n另外，冒险岛无边游泳池的#e使用费#n统一为#e#b100个#i4310291:# #t4310291:# #n#k，但#e可使用次数#n会根据贵宾等级有所不同。", 0, 9062297, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("\r\n#e<各等级可使用次数>\r\n\r\n#b贵宾CLASSIC#k：#r无法#k使用\r\n#b贵宾ELITE#k：每个世界每天#r1次#k\r\n#b贵宾PREMIUM#k：每个世界每天#r2次#k\r\n#b贵宾PRESTIGE#k：每个世界每天#r3次#k", 0, 9062297, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("\r\n最后，只有#b141级~199级角色可以进入#k#e<冒险岛无边游泳池>#n，请您务必记住这一点。", 0, 9062297, true, true);
              } else if (status === v++) {
                cm.sendNormalTalk("\r\n期待您能在#e<冒险岛无边游泳池>#n中，享受顶级的升级服务。", 0, 9062297, true, true);
                status = -1;
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
    cm.sendNormalTalk("是的，你说的是#b#e怪物金字塔#k#n吧。\r\n#b怪物金字塔#k是酒店#r#e屋顶宴会场#k#n的#b#e小金利奇#k#n举办的小游戏。", 4, 9062297, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("当然您也可以像之前一样参与#b#e冒险岛一张牌#k#n，不用担心。\r\n担心留给我负责就好……", 4, 9062297, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("总而言之，我来为你说明一下#b怪物金字塔#k的规则吧。\r\n#b怪物金字塔#k，指的是使用#b#e怪物持有的玻璃杯，堆放成金字塔的形状，根据其数量决定胜负#n#k。", 4, 9062297, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("#b#e5种普通怪物分别持有的7个玻璃杯#n#k，以及\r\n#r#e1种特殊怪物持有的1个杯子！#n#k\r\n共有#e#b36个杯子#n#k。", 4, 9062297, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#b#e3位勇士#n#k分别持有#b#e12个#n#k杯子，\r\n轮到自己时，选择1个杯子堆成金字塔即可。", 4, 9062297, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("现在我要提醒您需要注意的事项。\r\n\r\n#b#e当下一层中有同样的怪物持有某个玻璃杯#n#k时，\r\n才能摆上1个相同的玻璃杯。\r\n\r\n不存在下一层的#b#e第一层中，无视种类#n#k，可摆上任意的玻璃杯。", 4, 9062297, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("关于#r#e特殊怪物持有的杯子#n#k，存在两项规则。\r\n\r\n第一，特殊怪物持有的杯子与下一层#b#e无关，可随意摆放。#n#k\r\n\r\n第二，反之，这个特殊怪物的杯子#b#e上方无法摆放任何玻璃杯。", 4, 9062297, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("每次摆放杯子时都能#e#b获得分数#n#k，3个回合结束后将合计获得的分数决出胜负。", 4, 9062297, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("不过，记录着相同分数的情况下，首先到达该分数的勇士视为胜利。\r\n而且，第3名无法获得奖励。\r\n很遗憾，#b#e小金利奇#k#n#k表示，只有这样才能看见更加激烈的胜负角逐，还请您谅解。", 4, 9062297, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("#r#e还有一点需要注意。#n#k\r\n\r\n如果超出限定时间，缺少耐性的小金利奇便会随便摆上一个杯子。", 4, 9062297, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("另外让他人代替摆放3次之后，\r\n您将会#r强制离开#k游戏。\r\n小金利奇不喜欢和对胜负不感兴趣的人玩游戏，所以这一点请您谅解。", 4, 9062297, true, true);
                      } else if (status === v++) {
                        cm.sendNormalTalk("\r\n好了，愿您享受#b#e怪物金字塔#n#k的游戏体验。", 4, 9062297, true, true);
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
function action分支99(g, w, a, v) {
  if (status <= v++) {
    cm.dispose();
  }
}