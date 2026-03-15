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
      cm.askMenu("#h0#！\r\n你有什么问题吗？？\r\n#L0#介绍一下#b#e<焕新城堡>#n吧。#k#l\r\n#L1#介绍一下#b#e<焕新核心>#n吧。#k#l\r\n#L2#介绍一下#b#e<焕新宝石>#n吧。#k#l\r\n#L3#介绍一下#b#e<焕新石>#n吧。#k#l\r\n#L4#介绍一下#b#e<勒内的魔法珠>#n吧。#k#l\r\n#L5#介绍一下#b#e<勒内的魔法音乐盒>#n吧。#k#l\r\n#L6#介绍一下#b#e<勒内和魔法铃铛>#n吧。#k#l\r\n#L77#给我讲讲#b#e<里奥的探险日记>#n吧。#k#l\r\n#L8#介绍一下#b#e<焕新水晶挑战>#n吧。#k#l", 4, 9062453);
    } else {
      var e = 'action分支' + selectionLog[1];
      eval(e)(g, w, a, v);
    }
  }
}
function action分支0(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#e#r焕新城堡#k#n就类似于次元重叠处所映射出的#b#e幻影#n#k之类。", 4, 9062453, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("你知道#b#e格兰蒂斯#n#k和#r#e冒险岛世界#n#k是#e一个次元#n吧？\r\n这是两个不同的次元合为一体时暂时形成的一个空间。", 4, 9062453, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("这是在冒险岛世界和格兰蒂斯#b#e海相交处#n#k靠艾尔达之力形成的。", 4, 9062453, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("在两个次元恢复稳定之后，焕新城堡会再次消失的。", 4, 9062453, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("居然消失了……", 2, 0, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("呵呵，所以才邀请了大家，\r\n在焕新城堡期间，就和各式各样的人一起好好玩耍吧！", 4, 9062453, true, true);
            } else if (status === v++) {
              cm.sendNormalTalk("#r#e[活动时间]#n\r\n - 2021年10月19日23点59分截止#n", 4, 9062453, true, true);
              status = -1;
            }
          }
        }
      }
    }
  }
}
function action分支1(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#r#e焕新核心#n#k是一种凝缩了#b#e强大怪物力量#n#k的宝石。", 4, 9062453, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("我帮你叫个可以为你讲解#r#e焕新核心#n#k的专家。", 4, 9062453, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("哈哈！你说你很想知道#r#e焕新核心#n#k的事？", 4, 9062459, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("这座城堡有着神秘的力量，\r\n那便是可以以#r#e宝石的形态#n#k打造#b#e各式各样的力量#n#k！", 4, 9062459, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("这其中的#i4310308# #r#e#t4310308##n#k，唯有足够强大的#b#e怪物之力#n#k才能打造。", 4, 9062459, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("消灭#b#e强大怪物#n#k的人会暂时保留这股力量。在这股力量消失之前来找我，我就会帮你制作#r#e焕新核心#n#k。\r\n\r\n\r\n#r※消灭#e每周BOSS#n后去找收藏家，\r\n就可以获得焕新核心。", 4, 9062459, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("消灭怪物的力量只能保持到#b#e每周三#n#k，\r\n最好消灭强大怪物后就直接过来。\r\n\r\n\r\n#r※每周BOSS通关记录会在每周#e四0点#n重置。", 4, 9062459, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("另外每周#b#e每个世界最多可创造400个#n#k#i4310308# #r#e#t4310308##n#k。\r\n\r\n\r\n#r※焕新核心可在世界内共享，每个世界每周最多可\r\n获得400个。", 4, 9062459, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("这是自然啦，不过越是#b#e强大的怪物#n#k，就越能制造出更多的#r#e焕新核心#n#k，这一点你可得记住哦。\r\n\r\n#e[每周BOSS]#n#k#e\r\n\r\n#r5个#i4310308##t4310308##k#e\r\n高级希拉#e\r\n进阶品克缤#e\r\n简单希纳斯#e\r\n普通希纳斯#e\r\n\r\n#r10个#i4310308##t4310308##k#e\r\n进阶扎昆#e\r\n进阶皮埃尔#e\r\n进阶半半#e\r\n进阶血腥女王#e\r\n浓姬#e\r\n\r\n#r20个#i4310308##t4310308##k#e\r\n高级麦格纳斯#e\r\n进阶贝伦#e\r\n\r\n#r30个#i4310308##t4310308##k#e\r\n进阶帕普拉图斯#e\r\n普通斯乌#e\r\n普通戴米安#e\r\n简单路西德#e\r\n\r\n#r40个#i4310308##t4310308##k#e\r\n普通路西德#e\r\n普通威尔#e\r\n普通至暗魔晶#e\r\n普通敦凯尔#e\r\n\r\n#r60个#i4310308##t4310308##k#e\r\n高级戴米安 #e\r\n高级斯乌#e\r\n高级路西德#e\r\n高级威尔#e\r\n\r\n#r70个#i4310308##t4310308##k#e\r\n进阶至暗魔晶#e\r\n高级敦凯尔#e\r\n觉醒希拉", 4, 9062459, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("还有你要记住，要是消灭怪物时失手，就没办法获得#r#e焕新核心#n#k！\r\n\r\n #b ※ 消灭怪物时#e如果处于死亡状态#n则无法获得\r\n     焕新核心。\r\n\r\n  ※ 消灭怪物前#e退场时#n无法获得\r\n     焕新核心。\r\n\r\n  ※ 消灭进阶皮埃尔、血腥女王后只有开启#e宝物箱#n\r\n     才可以获得焕新核心。\r\n\r\n  ※  简单、普通、高级路西德需要消灭#e音乐盒#n\r\n     才能获得焕新核心。", 4, 9062459, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("另外得到的焕新核心越多，还能获得一种名为#r#e焕新之力#n#k的特殊力量。\r\n\r\n\r\n#r ※世界内的所有角色都可以获取焕新之力。", 4, 9062459, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("多收集点焕新核心再来找我！\r\n我会帮你升级你的焕新之力的。\r\n\r\n\r\n#r※根据累积焕新核心数量，可从收藏家处获得\r\n焕新之力技能。", 4, 9062459, true, true);
                        } else if (status === v++) {
                          cm.sendNormalTalk("学习#b#e焕新之力#n#k后，效果将持续到#r#e2021年10月19日23点59分#n#k，\r\n\r\n如果你想对焕新核心有更多的了解，就来找我吧。", 4, 9062459, true, true);
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
}
function action分支2(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b#e#i4310307# #t4310307##n#k是一种凝缩了 #r#e纯粹快乐#n#k的宝石。", 4, 9062453, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("开心玩游戏的小朋友身上会强烈散发出一种#r#e纯粹的快乐#n#k。", 4, 9062453, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("和那些作为#b#e格兰蒂斯#n#k和#r#e冒险岛世界#n#k的#e游戏代表#n来玩的人好好享受游戏吧！", 4, 9062453, true, true);
      } else if (status === v++) {
        cm.sendNormalTalk("如果真的能逗孩子们开心，就可以获得#b#e#i4310307# #t4310307##n#k。", 4, 9062453, true, true);
        status = -1;
      }
    }
  }
}
function action分支3(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b#e#i4310306##t4310306##n#k是一种拥有与焕新城堡相同力量的宝石。", 4, 9062453, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("在焕新城堡形成和持续期间会一直出现的。", 4, 9062453, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("只要你能帮我和里奥，我们就给你#b#e#i4310306# #t4310306##n#k！", 4, 9062453, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("嘿嘿，如果你帮我的忙，我就给你#b#e#i4310306# #t4310306##n#k！", 4, 9062454, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("用#b#e#i4310306# #t4310306##n#k可以从来这里玩的商人手中买到#r#e各式各样的物品#n#k。", 4, 9062453, true, true);
            cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=0;lT=20/04/19;qSetDate=21/08/06;accSum=122945;QuestCount=3;accCheck=210806220115873");
            cm.updateInfoQuest(500827, "q1Set=1;q2Set=1;q3Set=0;start=0;q4Set=1;q5Set=0;lT=20/04/19;qSetDate=21/08/06;accSum=183166;QuestCount=3;accCheck=210806220115873");
          } else {
            if (status === v++) {
              cm.sendNormalTalk("另外累积获得的#b#e#i4310306# #t4310306##n#k量增多时，可以购买到的物品也会增多！\r\n\r\n\r\n#r※当角色满足累积焕新石获取量时，世界内\r\n所有角色都可以使用下一阶段的商店。", 4, 9062454, true, true);
            } else if (status === v++) {
              cm.sendNormalTalk('那就有劳了！', 4, 9062453, true, true);
              status = -1;
            }
          }
        }
      }
    }
  }
}
function action分支4(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("我的#b#e魔法珠#n#k是使用焕新城堡之力打造成的美丽宝珠！\r\n这种珠子不只是好看，还可以#b#e保存大量的艾尔达#n#k。", 4, 9062453, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("你问我为什么要保存艾尔达？\r\n那当然是为了用艾尔达维系#r#e焕新城堡#k#n，\r\n魔法珠#b#e吸收艾尔达#n#k后，就会形成焕新城堡之力。", 4, 9062453, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("要找艾尔达并不难，\r\n拿着我的#b#e魔法珠#n#k去狩猎#r#e等级范围怪物#n#k，就能以较低的概率找到艾尔达，\r\n你找到的艾尔达会被魔法珠吸收的。", 4, 9062453, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("每次找到艾尔达，我都会给你#b#e1个#n#k#b#e#i4310306:# #t4310306##n#k！\r\n尽情在#r#e焕新城堡#k#n使用吧。", 4, 9062453, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("当我的#b#e魔法珠#n#k里充满艾尔达时，魔法珠就会赐予你强大的力量！\r\n在获得魔法珠强大力量期间，还可以找到更多的#b#e艾尔达和焕新石#n#k！", 4, 9062453, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("对了！时不时还会出现超大的#r#e巨型艾尔达#n#k，\r\n获得#r#e巨型艾尔达#n#k就可以立刻获得#b#e魔法珠的力量#k#n，好好找找看吧！", 4, 9062453, true, true);
            } else if (status === v++) {
              cm.sendNormalTalk("那等完成了#r#e[新纪元]勒内的魔法珠任务#n#k，\r\n就和我一起去找#b艾尔达#k吧！", 4, 9062453, true, true);
              status = -1;
            }
          }
        }
      }
    }
  }
}
function action分支5(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b#e魔法音乐盒#n#k是一种用艾尔达启动的音乐盒！\r\n收集#b#e艾尔达#n#k就可以演奏。", 4, 9062453, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("要找艾尔达并不难，\r\n拿着我的#b#e魔法音乐盒#n#k去狩猎#r#e等级范围怪物#n#k，\r\n就能以较低的概率收集到艾尔达了，\r\n找到的艾尔达会被音乐盒吸收的。", 4, 9062453, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("另外，每次去怪物那里找艾尔达时，\r\n都可以获得#b#e1个#n#k#b#e#i4310306:# #t4310306##n#k！", 4, 9062453, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("当音乐盒#b#e充满艾尔达#n#k，音乐盒就会\r\n#b#e开始自行演奏，#n#k\r\n演奏音乐期间，每次击败怪物时，\r\n都可以获得#e1个#n#b#e焕新石#n#k。\r\n\r\n偶尔魔法音乐盒还会开心地#b#e演奏节奏轻快的音乐#n#k，\r\n这时候每次击败怪物，都可以足足获得#e3个#n#b#e焕新石#n#k哦！", 4, 9062453, true, true);
        } else if (status === v++) {
          cm.sendNormalTalk("那等完成了#r#e[新纪元]勒内的魔法音乐盒任务#n#k，\r\n就和我一起去听听#b魔法音乐盒#k的音乐吧！", 4, 9062453, true, true);
          status = -1;
        }
      }
    }
  }
}
function action分支6(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("#b#e魔法铃铛#n#k是为了维系焕新城堡，用收集到的艾尔达做成的铃铛，\r\n带着这个铃铛狩猎#r#e等级范围怪物#n#k，就能以较低的概率将艾尔达收集到铃铛里。\r\n每次收集到艾尔达时，我都会给你1个#b#e#i4310306:# #t4310306##n#k哦。", 4, 9062453, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("然后当魔法铃铛充满艾尔达，就会出现#b#e巨型魔法铃铛#n#k，\r\n打破这种魔法铃铛，就可以获得20个#b#e#i4310306:# #t4310306##n#k。", 4, 9062453, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("偶尔敲响铃铛会有#b#e雪花驯鹿#n#k跑来，\r\n雪花驯鹿出现后还可以多获得20个#b#e#i4310306:# #t4310306##n#k。", 4, 9062453, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("或许雪花驯鹿一开始会怕生，\r\n但只要坚持召唤，它们一定会追随你的。\r\n\r\n#r*根据活动的进行，雪花驯鹿的出场概率会增加。", 4, 9062453, true, true);
        } else if (status === v++) {
          cm.sendNormalTalk("那就去完成#r#e[新纪元]勒内和魔法铃铛任务#n#k，\r\n将艾尔达收集到#b魔法铃铛#k里吧。", 4, 9062453, true, true);
          status = -1;
        }
      }
    }
  }
}
function action分支7(g, w, a, v) {
  if (status <= v++) {
    cm.sendNormalTalk("嗯……这个最好是亲自问一问#b#e里奥#n#k，\r\n我去帮你叫里奥。", 4, 9062453, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("#b#e#h0##k#n！\r\n你对我的探险日记很好奇吗？", 4, 9062454, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("我和你提过吧？我是和焕新城堡一起诞生的精灵……", 4, 9062454, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("虽然现在是人形，但随着时间的流逝，会再度变回艾尔达之流的……\r\n所以在变回艾尔达之前，我想要尽情地观看这个世界，享受这个世界！", 4, 9062454, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("我带着写满各种好奇的#r#e探险日记#n#k无法离开焕新城堡，请你替我去调查吧！", 4, 9062454, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("探险日记可以有#r#e4种#n#k！\r\n\r\n#e#b[里奥的探险日记]#k\r\n\r\n第一种-消灭等级范围怪物\r\n第二种-消灭精英怪物&冠军\r\n第三种-使用符文\r\n第四种-通关保罗&普利托", 4, 9062454, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("完成探险日记后会获得#b#e#i4310306# #t4310306##n#k！\r\n\r\n#e[里奥的探险日记]\r\n 第一种-#b#e#i4310306# #t4310306##k 100个\r\n 第二种-#b#e#i4310306# #t4310306##k 100个\r\n 第三种-#b#e#i4310306# #t4310306##k 200个\r\n 第四种-#b#e#i4310306# #t4310306##k 400个", 4, 9062454, true, true);
              } else if (status === v++) {
                cm.sendNormalTalk("对了！#b#e每周四#n#k会开写全新的探险日记，你可要每周都来帮忙哦！", 4, 9062454, true, true);
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
    cm.sendNormalTalk("焕新水晶挑战是我特别为来到#b<焕新城堡>#k的勇士们准备的一个战斗训练游戏，\r\n在#b限时2分钟#k内#b攻击水晶怪物#k就能测定自己的战斗能力，并可以根据获得的点数获得#b水晶点数#k，\r\n水晶点数可以用来交换#b成长秘药#k。", 4, 9062451, false, true);
  } else {
    if (status === v++) {
      cm.sendNormalTalk("焕新水晶挑战会有#r水晶怪物#k出场，#b防御率#k和#b等级#k会经过#r共12个阶段#k增加。\r\n在#b限时2分钟#k内，可以获得的#b点数#k与对水晶怪物造成的#b伤害量#k成正比，并可以该点数为基础获得#b水晶点数#k。\r\n限时结束前达到#b1500点#k后，将自动结束水晶挑战。", 4, 9062451, true, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("在焕新水晶挑战中，每天可以获得的最高点数是#r每个世界1500点#k，刷新#b今日世界内最高点数#k后可额外获得#b水晶点数#k。\r\n比方说，当今日世界内最高点数为#e1100点#n时，如果通过额外挑战创下了#e1200点#n的记录，就可以额外获得#b100点水晶点数#k。", 4, 9062451, true, true);
      } else if (status === v++) {
        cm.sendNormalTalk("就是这些，如果你想要挑战，可以来找我。\r\n\r\n#b※活动时间\r\n  -2021年10月19日23点59分截止#k", 4, 9062451, true, true);
        status = -1;
      }
    }
  }
}