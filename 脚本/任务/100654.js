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
      cm.sendNormalTalk("唔……这可如何是好。.", 4, 9062344, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk("怎么了，校长？", 2, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk("哎呀, #b#h0##k！你来得正好。\r\n\r\n为了奖励用心准备满月派对的学生们，我准备了甜甜的#e#r月亮糖#k#n。结果在我去照看孩子的时候， #b#e捣蛋鬼威舍#n#k们把糖偷走了。", 4, 9062344, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk("#b#h0##k你说要帮我找到月亮糖，我真的太高兴了！\r\n参加#b#e等级范围怪物狩猎#n#k，将有一定概率找到捣蛋鬼威舍藏起来的#r#e月亮糖#k#n。\r\n\r\n\r\n#r※消灭等级范围怪物，将有一定概率找到月亮糖。 \r\n", 4, 9062344, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk("逐渐熟悉后，你就可以找出藏在各处的#b#e捣蛋鬼威舍#n#k了。\r\n\r\n\r\n#r※每周能找到月亮糖的地方会逐渐增加。", 4, 9062344, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk("自#e4月14日#n起，每次获得#r#e连杀珠#n#k，都可以找到#b#e1个#n#k月亮糖。\r\n自\r\n#e4月21日#n起，消灭#r#e精英怪物、精英冠军、精英BOSS#n#k时，可以找到#b#e10个#n#k月亮糖。\r\n\r\n\r\n#r ※ 只有造成伤害量最大的1名玩家\r\n    可以获得月亮糖。\r\n ※ 使用黑暗符文召唤出的精英怪物\r\n    不提供月亮糖。#k", 4, 9062344, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk("自#e4月28日#n起，每次使用#e#r符文#k#n都可以额外找到#b#e15个#n#k月亮糖。\r\n自\r\n#e5月5#n起， 退出#r#e保罗和普利托#n#k的悬赏狩猎时，也可以找到#b#e20个#n#k月亮糖。", 4, 9062344, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk("我……我还没说要帮你呢……", 2, 0, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk("哎呀，那我去找#e#r月亮糖#k#n，#b#h0##k你在这里帮我照看孩子怎么样?", 4, 9062344, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk("寻找#e#r月亮糖#k#n！\r\n我很想做一次试试！", 2, 0, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk("请将找到的#e#r月亮糖#k#n拿去给库迪。\r\n他会给你准备特别的礼物。\r\n那就拜托你了，哈哈哈。", 4, 9062344, true, true);
                        } else if (status === v++) {
                          cm.updateInfoQuest(100657, "point=0;date=21/04/10;today=0");
                          cm.forceCompleteQuest(100654);
                          cm.playerMessage(5, "从现在开始，狩猎等级范围怪物即可找到月亮糖。");
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function end(g, w, a) {
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}