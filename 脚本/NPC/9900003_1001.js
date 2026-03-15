var status = 0;
var typed = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0 && status == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    } else {
      status--;
    }
    if (status == 0) {
      cm.askMenu("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，想选择什么样的一键潜能:\r\n#r#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#免费一键潜能简介#l\r\n\r\n #k  #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#今天在线：#r" + cm.getGamePoints() + "#k 分钟#b\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0#\r\n#L2##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[一键潜能]装备潜能第1条属性  (#r火爆内容#b)#v3994417##l\r\n#L3##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[一键潜能]装备潜能第2条属性  (#r火爆内容#b)#v3994418##l\r\n#L4##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[一键潜能]装备潜能第3条属性  (#r火爆内容#b)#v3994419##l\r\n#L5##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[一键潜能]附加潜能第1条属性  (#r火爆内容#b)#v3994420##l\r\n#L6##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[一键潜能]附加潜能第2条属性  (#r火爆内容#b)#v3994421##l\r\n#L7##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#[一键潜能]附加潜能第3条属性  (#r火爆内容#b)#v3994422##l");
    } else {
      if (status == 1) {
        if (U == 1) {
          cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好,欢迎来到免费一键潜能简介:\r\n  免费一键潜能 能直接修改装备潜能1,2,3 附加潜能1,2,3条\r\n  属性\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b通过活动专栏获得机会.\r\n\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##r注：免费一键潜能活动限时开放.");
          cm.dispose();
        } else {
          if (U == 2) {
            typed = 3;
            cm.dispose();
            cm.openNpc(9900003, 1002);
          } else {
            if (U == 3) {
              typed = 4;
              cm.dispose();
              cm.openNpc(9900003, 1003);
            } else {
              if (U == 4) {
                typed = 5;
                cm.dispose();
                cm.openNpc(9900003, 1004);
              } else {
                if (U == 5) {
                  typed = 6;
                  cm.dispose();
                  cm.openNpc(9900003, 1005);
                } else {
                  if (U == 6) {
                    typed = 6;
                    cm.dispose();
                    cm.openNpc(9900003, 1006);
                  } else if (U == 7) {
                    typed = 6;
                    cm.dispose();
                    cm.openNpc(9900003, 1007);
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