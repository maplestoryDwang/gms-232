var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(R, z, B) {
  if (cm.getNumberFromQuestInfo(501555, "start") == 0) {
    action0(R, z, B);
  } else {
    action1(R, z, B);
  }
}
function action0(R, z, B) {
  if (status == 0 && R == 0) {
    cm.dispose();
    return;
  }
  if (R == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = B;
  var w = -1;
  if (status <= w++) {
    cm.dispose();
  } else {
    if (status === w++) {
      cm.sendNormalTalk("\r\n啊！这位#b#e创作者新人#n#k！\r\n\r\n你是否在寻找一个既能让#b#e粉丝#n#k暴涨，又能获得#r#e超赞奖励#n#k的\r\n节目风格？", 4, 9062550, false, true, 0);
    } else {
      if (status === w++) {
        cm.sendNormalTalk("\r\n那现在就！\r\n\r\n参加#b#e冒险岛综艺秀#n#k吧！", 4, 9062550, true, true, 0);
      } else {
        if (status === w++) {
          cm.sendNormalTalk("\r\n目前正在进行和#r#e传奇主厨唐云#n#k大师一同体验餐厅经营的\r\n\r\n#b#e<唐云餐厅>#n#k！", 4, 9062550, true, true, 0);
        } else {
          if (status === w++) {
            cm.sendNormalTalk("\r\n在#r#e火热的厨房#n#k里展开的一场#e美食#n飨宴！\r\n\r\n#r#e速度就是生命#n#k！还有分秒必争的#e配送食物#n！", 4, 9062550, true, true, 0);
          } else {
            if (status === w++) {
              cm.sendNormalTalk("\r\n听到#b#e粉丝#n#k飙升的声音了吗？\r\n\r\n听到#r#e经验值#n#k飙升的声音了吗？\r\n\r\n#e现在~马上！来参加吧！#n", 4, 9062550, true, true, 0);
            } else {
              if (status === w++) {
                cm.askMenu("#b#e冒险岛综艺秀#n#k第一弹~！#r#e唐.云.餐.厅！#l#k\r\n#L1#快速开始#r#e<唐云餐厅>#n（可通过匹配发起3人挑战）#l#k\r\n#L2##b#e<唐云餐厅>#n组队游戏（1~3人挑战）#l#k\r\n\r\n#L3##b听取#e<唐云餐厅>#n的说明#l#k\r\n#L4#查看今日剩余经验值奖励可获得次数\r\n\r\n#L100#我没什么其他问题了。#l", 4, 9062550);
              } else {
                if (status === w++) {
                  cm.sendNormalTalk("#e[活动时间]\r\n\r\n2022年01月12日上午9点~\r\n2022年02月08日 晚上11点59分", 4, 9062550, false, true, 0);
                } else {
                  if (status === w++) {
                    cm.sendNormalTalk("\r\n#b#e<唐云餐厅>#n#k需要召集最少1人，最多3人，完成料理的制作和配送，限时#e30分钟#n，目标是获得#b#e50,000#n#k点点数 ！", 4, 9062550, true, true, 0);
                  } else {
                    if (status === w++) {
                      cm.sendNormalTalk("\r\n查看左侧#b#e<点餐牌>#n#k上收到的下单，\r\n按照食谱做好食物后尝试配送吧~！", 4, 9062550, true, true, 0);
                    } else {
                      if (status === w++) {
                        cm.sendNormalTalk("\r\n#e[收集食材]#n\r\n\r\n在位于#b#e厨房空间左侧#n#k的#e五种#n食材面前长按#r#e空格键#k，#n\r\n可获得相应食材。\r\n\r\n", 4, 9062550, true, true, 0);
                      } else {
                        if (status === w++) {
                          cm.sendNormalTalk("\r\n#e[放入食材]#n\r\n\r\n在位于#b#e厨房空间中央#n#k的#e烹饪台#n前长按#r#e空格键#k#n\r\n即可放入当前所获得的食材，\r\n\r\n别忘了，仅能在#e对应各个订单单号的烹饪台#n上\r\n烹饪食物！", 4, 9062550, true, true, 0);
                        } else {
                          if (status === w++) {
                            cm.sendNormalTalk("\r\n#e[拿起厨具]#n\r\n\r\n在位于#b#e厨房空间右侧#n#k的#e三种#n厨具面前\r\n长按#r#e空格键#k#n可拿起厨具，\r\n\r\n别忘了，只有在拥有#b#e厨具#n#k的状态下才能加工食材！", 4, 9062550, true, true, 0);
                          } else {
                            if (status === w++) {
                              cm.sendNormalTalk("\r\n#e[加工食材]#n\r\n在位于#b#e厨房空间中央#n#k的#e烹饪台#n前长按#r#e空格键#n#k，\r\n即可对放在相应烹饪台上的食材进行加工，\r\n\r\n别忘了，仅能在#e对应各个订单单号的烹饪台#n上\r\n烹饪食物！", 4, 9062550, true, true, 0);
                            } else {
                              if (status === w++) {
                                cm.sendNormalTalk("\r\n#e[配送食物]#n\r\n\r\n当#b#e做好食物的烹饪台#n#k进入可以上菜状态时，\r\n在该#e烹饪台#n前长按#r#e空格键#k#n即可进行配送，\r\n\r\n在右侧配送空间躲开#e怪物#n们的阻挠，到下单客人面前\r\n长按#r#e空格键#k#n即完成配送！", 4, 9062550, true, true, 0);
                              } else {
                                if (status === w++) {
                                  cm.sendNormalTalk("\r\n#b#e真正的创作者#n#k当然要回归实战！\r\n\r\n尽快亲身来体验一下吧？", 4, 9062550, true, true, 0);
                                  cm.updateInfoQuest(100863, "date=22/02/02;today=0");
                                  cm.updateInfoQuest(501555, "start=1;date=22/02/02;today=0");
                                } else if (status === w++) {
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
          }
        }
      }
    }
  }
}
function action1(R, z, B) {
  if (status == 0 && R == 0) {
    cm.dispose();
    return;
  }
  if (R == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = B;
  var w = -1;
  if (status <= w++) {
    cm.dispose();
  } else {
    if (status === w++) {
      cm.askMenu("#b#e冒险岛综艺秀#n#k第一弹~！#r#e唐.云.餐.厅！#l#k\r\n#L1#快速开始#r#e<唐云餐厅>#n（可通过匹配发起3人挑战）#l#k\r\n#L2##b#e<唐云餐厅>#n组队游戏（1~3人挑战）#l#k\r\n\r\n#L3##b听取#e<唐云餐厅>#n的说明#l#k\r\n#L4#查看今日剩余经验值奖励可获得次数\r\n\r\n#L100#我没什么其他问题了。#l", 4, 9062550);
    } else {
      if (status === w++) {
        cm.sendNormalTalk("今日剩余的可获得经验值奖励次数是#b#e2次#n#k。", 4, 9062550, false, true, 0);
      } else if (status === w++) {
        cm.dispose();
      }
    }
  }
}