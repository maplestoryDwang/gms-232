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
      cm.askMenu("现在是白天还是夜晚……？已经过去一天了吗……？搞不清楚时间时，只要继续做手头的事情就好……\r\n\r\n#L1#听取#e<昼夜 1+1>#n说明#l", 4, 9400962);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("夜晚过去清晨到来，又是新的一天……可惜现在整天都是夜晚，也不知道什么时候一天就过去了……\r\n大家都在热热闹闹地欢度庆典呢……我是不是也该适当参与一下？", 4, 9400962, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("在这段昼夜界限模糊的日子里，#b神秘河内容的每日任务奖励将增至2倍以上#k……不过，你得有点能力才能拿到奖励。\r\n\r\n 1) 对#b世界内所有角色#k都有效\r\n 2) 奖励增加量根据#b日冕等级#k的提高而增多\r\n 3) 完成每日任务，获得区域#b日冕积分#k", 4, 9400962, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……说是力量，其实也没什么特备的……我稍微教你一点蕴含少量日冕之力的#b#s80011911# #q80011911##k技能就行了……\r\n只要参与#b[昼夜1+1]#k活动，任何人都能得到这种力量……？", 4, 9400962, true, true);
          } else if (status === V++) {
            cm.sendNormalTalk("好了……充满活力地度过每一天吧……别忘了坚持努力……还有好好吃饭……", 4, 9400962, true, true);
          } else {
            cm.dispose();
          }
        }
      }
    }
  }
}