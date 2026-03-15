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
      cm.askMenu("唯有消灭了强大BOSS的人才能获得#r#e#i4310308:##t4310308##n#k。\r\n#L0#我想光顾#r#e<焕新核心商店>#n。#k#l\r\n#L1#我想要#b#e<焕新核心>#n。#k#l\r\n#L2#我想要#b#e<焕新之力>#n。#k#l\r\n#L3#给我讲讲#e<焕新核心>#n吧。#k#l\r\n#L4#给我讲讲#e<焕新之力>#n吧。#k#l", 4, 9062459);
    } else {
      var w = "action分支" + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (status <= V++) {
    cm.dispose();
    cm.openNpc(9062460);
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("你这周没消灭BOSS呢！\r\n去消灭每周BOSS，我就给你#r#e#i4310308:# #t4310308##n#k！", 4, 9062459, false, false);
  } else if (status === V++) {
    cm.dispose();
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("获得的焕新核心越多，还能获得一种名#r#e焕新之力#n#k的特殊力量。", 4, 9062459, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("只有至少收集了超过#b#e100个#n#k焕新核心的人可以获得#r#e焕新之力#n#k。", 4, 9062459, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你的焕新核心数量还不够，\r\n再去多收集点焕新核心吧。", 4, 9062459, true, true);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}
function action分支3(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("哈哈！你说你对#r#e焕新核心#n#k感兴趣？", 4, 9062459, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("这座城堡有着神秘的力量，\r\n那便是能以#b#e各式各样的力量#n#k打造成#r#e宝石的形态#n#k！\r\n\r\n这其中的#i4310308# #r#e#t4310308##n#k，唯有足够强大的#b#e怪物之力#n#k才能打造。", 4, 9062459, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("消灭#b#e强大怪物#n#k的人会暂时保留这股力量，在这股力量消失之前来找我，我就会帮你制作#r#e焕新核心#n#k。\r\n\r\n\r\n#r※消灭#e每周BOSS#n后去找收藏家，\r\n就可以获得焕新核心。", 4, 9062459, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("消灭怪物的力量只能保持到#b#e每周三#n#k，\r\n最好是消灭强大怪物后就直接过来。\r\n\r\n\r\n#r※每周BOSS通关记录会在每周#e四0点#n重置。", 4, 9062459, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("另外每周#b#e每个世界最多可创造400个#n#k#i4310308# #r#e#t4310308##n#k。\r\n\r\n\r\n#r※焕新核心可在世界内共享，每个世界每周最多可\r\n获得400个。", 4, 9062459, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这是自然啦，不过越是#b#e强大的怪物#n#k，就能制造出越多#r#e焕新核心#n#k，这一点你可要记住哦。\r\n#e\r\n\r\n#r5个#i4310308##t4310308##k#e\r\n高级希拉#e\r\n进阶品克缤#e\r\n简单希纳斯#e\r\n普通希纳斯#e\r\n\r\n#r10个#i4310308##t4310308##k#e\r\n进阶扎昆#e\r\n进阶皮埃尔#e\r\n进阶半半#e\r\n进阶血腥女王#e\r\n浓姬#e\r\n\r\n#r20个#i4310308##t4310308##k#e\r\n高级麦格纳斯#e\r\n进阶贝伦#e\r\n\r\n#r30个#i4310308##t4310308##k#e\r\n进阶帕普拉图斯#e\r\n普通斯乌#e\r\n普通戴米安#e\r\n简单路西德#e\r\n\r\n#r40个#i4310308##t4310308##k#e\r\n普通路西德#e\r\n普通威尔#e\r\n普通至暗魔晶#e\r\n普通敦凯尔#e\r\n\r\n#r60个#i4310308##t4310308##k#e\r\n高级戴米安 #e\r\n高级斯乌#e\r\n高级路西德#e\r\n高级威尔#e\r\n\r\n#r70个#i4310308##t4310308##k#e\r\n进阶至暗魔晶#e\r\n高级敦凯尔#e\r\n觉醒希拉", 4, 9062459, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("还有你要记住，要是消灭怪物时失手，就没办法获得#r#e焕新核心#n#k！\r\n\r\n #b ※ 消灭怪物时#e如果处于死亡状态#n则无法获得\r\n     焕新核心。\r\n\r\n  ※ 消灭怪物前#e退场时#n无法获得\r\n     焕新核心。\r\n\r\n  ※ 消灭进阶皮埃尔、血腥女王后只有开启#e宝物箱#n\r\n     才可以获得焕新核心。\r\n\r\n  ※ 简单、普通、高级路西德需要消灭#e音乐盒#n\r\n     才能获得焕新核心。", 4, 9062459, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那就等你消灭完强大怪物再来找我吧！\r\n\r\n\r\n#r※焕新核心的获得到2021年10月19日23点59分截止。", 4, 9062459, true, true);
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
function action分支4(f, W, U, V) {
  if (status <= V++) {
    cm.sendNormalTalk("获得的焕新核心越多，还能获得一种名为#r#e焕新之力#n#k的特殊力量。\r\n\r\n\r\n#r※世界内所有角色都可以获得焕新之力。", 4, 9062459, false, true);
  } else {
    if (status === V++) {
      cm.sendNormalTalk("获得的焕新核心数量越多，焕新之力就越强大。\r\n\r\n#e[焕新之力等级]#n#k#e\r\n累积焕新核心#b#e100个#n#k - #r#e#s80000654# #q80000654##n#k#e\r\n累积焕新核心#b#e200个#n#k-#r#e#s80000655# #q80000655##n#k#e\r\n累积焕新核心#b#e400个#n#k - #r#e#s80000656# #q80000656##n#k#e\r\n累积焕新核心#b#e800个#n#k - #r#e#s80000657# #q80000657##n#k#e\r\n累积焕新核心#b#e1200个#n#k - #r#e#s80000658# #q80000658##n#k#e\r\n累积焕新核心#b#e1800个#n#k - #r#e#s80000659# #q80000659##n#k#e\r\n累积焕新核心#b#e2400个#n#k - #r#e#s80000660# #q80000660##n#k#e\r\n累积焕新核心#b#e3000个#n#k - #r#e#s80000661# #q80000661##n#k", 4, 9062459, true, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("等达到焕新之力的最高阶#r#e第8阶段#n#k，就可以拥有惊人的力量。\r\n\r\n#r#e#s80000661# #q80000661##n#k\r\n#e\r\n-攻击普通怪物时伤害提高#b#e20%#n#k#e\r\n-经验值获取量增加#b#e10%#n#k#e\r\n- 星之力增加#b#e40#n#k#e\r\n-神秘力量增加#b#e40#n#k#e\r\n-暴击率增加#b#e20%#n#k#e\r\n-攻击力/魔力增加#b#e20#n#k#e\r\n-全属性增加#b#e40#n#k#e\r\n-最大血量/魔量增加#b#e2000#n#k#e\r\n- 无视怪物防御率提高#b#e30%#n#k#e\r\n-攻击BOSS怪物时伤害增加#b#e30%#n#k", 4, 9062459, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("学习#b#e焕新之力#n#k后，效果将维持到#r#e2021年10月19日23点59分#n#k。\r\n那就等你消灭完强大怪物再来吧！\r\n\r\n\r\n#r※焕新之力的领取到2021年10月19日23点59分截止。", 4, 9062459, true, true);
        } else if (status === V++) {
          cm.dispose();
        }
      }
    }
  }
}