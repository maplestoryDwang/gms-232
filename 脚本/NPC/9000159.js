var hour;
var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1) {
    cm.dispose();
  } else {
    if (f == 0) {
      cm.dispose();
      return;
    }
    if (f == 1) {
      status++;
    }
    if (status == 0) {
      var V = '';
      V = "#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#e#k服务器时间：#b" + cm.getNowTimeString(8) + "#n\r\n";
      V += "#L1##b离线挂机#r (独家特色系统)#k#l\r\n";
      V += "#L2##b2014夏季运动会火爆开幕#r (各种道具等着你来拿)#k#l\r\n";
      V += "#L3##b免费皇家理发随意抽#r (活动每日晚: 20 ：00进行)#k#l\r\n";
      V += "#L4##b免费皇家整容随意抽#r (活动每日晚: 21 ：00进行)#k#l\r\n";
      V += "#L5##b每晚转点活动进行中#r (活动每日晚: 00 ：00进行)#k#l\r\n";
      V += "#L6##b管理员的邀请#g (参与活动随机可获得1000-5000点卷)#k#l\r\n";
      cm.askMenu(V);
    } else {
      if (U == 1) {
        cm.dispose();
        cm.sendOk("预计13日晚上系统正式开启。");
      } else {
        if (U == 2) {
          cm.dispose();
          cm.sendOk("即将开启。");
        } else {
          if (U == 3) {
            if (cm.getHour() == 20 && cm.getMin() < 2) {
              cm.dispose();
              cm.openNpc(9000159, 1);
            } else {
              cm.sendOk("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#k\r\n现在还没有到活动时间,你还不能参加。\r\n参加#b活动#k时间每天\r\n#b晚上20：00开始 20：02结束\r\n#k每次你有#b2分钟#k的时间可以免费抽取#b皇家发型#k,不要错过了哦。#k\r\n当前服务器时间：#e" + cm.getNowTimeString(8) + " #n");
              cm.dispose();
            }
          } else {
            if (U == 4) {
              if (cm.getHour() == 21 && cm.getMin() < 2) {
                cm.dispose();
                cm.openNpc(9000159, 2);
              } else {
                cm.sendOk("#fMob/1210102.img/move/0##fMob/1210102.img/move/0##b追忆 - MS#fMob/1210102.img/move/0##fMob/1210102.img/move/0#\r\n#k\r\n现在还没有到活动时间,你还不能参加。\r\n参加#b活动#k时间每天\r\n#b晚上21：00开始 21：02结束\r\n#k每次你有#b2分钟#k的时间可以免费抽取#b皇家脸型#k,不要错过了哦。#k\r\n当前服务器时间：#e" + cm.getNowTimeString(8) + " #n");
                cm.dispose();
              }
            } else {
              if (U == 5) {
                cm.dispose();
                cm.sendOk("活动内容：\r\n\r\n每晚整点00 : 00只要上线游戏就有机会获得管理员赠送的礼物。#b活动地图：1频道自由市场#k\r\n\r\n装备、道具、金卷、点卷统统都有。\r\n\r\n当然这得看你的人品,不是人人都有的哦~~");
              } else if (U == 6) {
                cm.dispose();
                cm.sendOk("即将开启。");
              }
            }
          }
        }
      }
    }
  }
}