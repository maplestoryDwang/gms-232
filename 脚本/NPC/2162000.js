var status = -1;
var itemid = [4009237, 4009238];
var text;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
    } else {
      if (status === V++) {
        text = "#fNpc/2162000.img/stand/0##fn黑体##fs32#每日任务：兼职园艺师\r\n\r\n";
        text += "#fn黑体##fs24#在玫瑰花园中的所有行动都会被记录为分数。\r\n\r\n";
        text += "#fn微软雅黑##fs24#- 消灭普通怪物：3分\r\n";
        text += "#fn微软雅黑##fs24#- 让玫瑰盛开/解放灵魂：10分\r\n";
        text += "#fn微软雅黑##fs24#- 消灭黄金蜜蜂：25分\r\n";
        text += "#fn微软雅黑##fs24#- 消灭城堡石头人王：50分\r\n";
        cm.inGameDirectionEvent_Monologue(text, 1);
      } else {
        if (status === V++) {
          text = "#fNpc/2162000.img/stand/0##fn黑体##fs32#每日任务：兼职园艺师\r\n\r\n";
          text += "#fn微软雅黑##fs24#Tip1：每日任务每天可以执行三次。要求获得的分数会逐渐提高，奖励也会逐渐增加。\r\n\r\n";
          text += "#fn微软雅黑##fs24#Tip2：前一天积累的分数会在第二天初始化。\r\n\r\n";
          text += "#fn微软雅黑##fs24#Tip3：队员们的活动会被计入分数，因此组队的话可以更快地完成。\r\n";
          cm.inGameDirectionEvent_Monologue(text, 1);
        } else {
          if (status === V++) {
            text = "#i2432206#\t#fn黑体##fs32#奖励：玫瑰花园箱子\r\n\r\n";
            text += "#fn微软雅黑##fs24#开启箱子,可以在以下道具中随机获得一种。\r\n";
            text += "#fn微软雅黑##fs24#——————————————————————\r\n";
            text += "#fn黑体##fs24#装备类：#fn微软雅黑##fs22##i1032227##z1032227#\t#i1113089##z1113089#\t#i1122274##z1122274#\r\n";
            text += "#fn黑体##fs24#硬币类：#fn微软雅黑##fs22##i4310010##z4310010#\r\n";
            text += "#fn黑体##fs24#消耗类：#fn微软雅黑##fs22##i2000004##z2000004#\t#i2000005##z2000005#\t#i2001556##z2001556#\t#i2001528##z2001528#\t#i2001531##z2001531#\r\n";
            text += "#fn黑体##fs24#特殊类：#fn微软雅黑##fs22##i2049117##z2049117#\t#i2049400##z2049400#\r\n";
            cm.inGameDirectionEvent_Monologue(text, 1);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1600);
            } else if (status === V++) {
              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
              cm.eventSKill(0);
              cm.setInGameDirectionMode(false, true, false);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}