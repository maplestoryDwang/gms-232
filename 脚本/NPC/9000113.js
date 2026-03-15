var status = 0;
var textStr;
var sel;
var selitem;
function start() {
  status = -1;
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
  if (status == 0) {
    textStr = "#r#e#fn微软雅黑##fs21#\t\t\t\t<羊羊大作战>#n#k.\r\n#d#e\t\t满屏的经验,星星.闪瞎你的眼！！#b\r\n你目前拥有： #r" + cm.getPlayer().getCSPoints(1) + "#k#r#d点卷\r\n#r单人模式：副本总时间 10 分钟\r\n-----------------------------------------------------";
    textStr += "#i4036367#\r\n";
    textStr += "#e#r#L0##b#fn微软雅黑##fs18# #fEffect/CharacterEff/1082565/2/0# 羊羊副本能获得什么#l\r\n";
    textStr += "#e#r#L1##b#fn微软雅黑##fs18# #fEffect/CharacterEff/1082565/2/0# 羊羊大作战（使用#t2431181#入场）#l\r\n";
    textStr += "#e#r#L2##b#fn微软雅黑##fs18# #fEffect/CharacterEff/1082565/2/0# 羊羊大作战（使用18888点卷入场）#l\r\n";
    textStr += "#e#r#L3##b#fn微软雅黑##fs18# #fEffect/CharacterEff/1082565/2/0# 免费领取入场卷#l\r\n";
    textStr += "#e#r#L4##b#fn微软雅黑##fs18# #fEffect/CharacterEff/1082565/2/0# 回到自由市场#l\r\n\r\n";
    textStr += "#e#r#L5##b#fn微软雅黑##fs18# #fEffect/CharacterEff/1082565/2/0# 结束对话#l\r\n";
    cm.onScriptMessage_莫奈德卷轴风格(9400590, textStr);
  } else {
    if (status == 1) {
      sel = U;
      switch (sel) {
        case 0:
          cm.sendOkS("#r#e<羊羊大作战>\r\n#r#e副本特色：#k#n进入后，每次15秒刷新一批怪物，请迅速消灭\r\n#r#e挑战失败条件：#k#n地图怪物总数量超过100只。\r\n#e#r挑战待遇：#k#n杀死怪物后，掉落15颗以上的#v4001839#和大量经验\r\n#r#e进入条件#k#n：宝石嘭嘭入场券.或者点券入场，宝石嘭嘭入场券可以在市场钓鱼金龙鱼兑换和在线时间奖励领取");
          cm.dispose();
          break;
        case 1:
        case 2:
          if (cm.getParty() == null) {
            cm.sendOk("需要先#b开启#k一个组队,而且只能是你一个人~.zzzZZZZZ..");
            cm.dispose();
            return;
          } else {
            if (!cm.isLeader()) {
              cm.sendOk("请叫队长跟我说话.");
              cm.dispose();
              return;
            } else {
              if (cm.getMap(915020001).getCharactersSize() > 0) {
                cm.sendOk("有人在挑战此副本，请稍等一会，或者换其它线尝试一下！..");
                cm.dispose();
                return;
              } else {
                if (cm.haveItem(2431181) < 1 && sel == 1) {
                  cm.sendOk("你没有一张宝石嘭嘭入场券");
                  cm.dispose();
                  return;
                } else {
                  if (cm.getPlayer().getCSPoints(1) < 18888 && sel == 2) {
                    cm.sendOk("你的点卷不足18888");
                    cm.dispose();
                    return;
                  } else {
                    var V = cm.getParty().getMembers();
                    if (V.size() > 1) {
                      cm.sendOk("#r对不起,为了彻底的测试你的能力,只能一人前往..");
                      cm.dispose();
                      return;
                    }
                    var w = cm.getEventManager("羊羊大作站");
                    if (w == null) {
                      cm.sendOk("此副本出错啦,请联系管管修复吧.");
                      cm.dispose();
                      return;
                    } else {
                      w.startInstance(cm.getPlayer().getParty(), cm.getMap(), 120);
                      if (sel == 1) {
                        cm.gainItem(2431181, -1);
                      }
                      if (sel == 2) {
                        cm.getPlayer().modifyCSPoints(1, -18888);
                      }
                      cm.worldSpouseMessage(36, "『羊羊大作战』 : 玩家<" + cm.getPlayer().getName() + ">进入了天空之城宝物仓库进行掠夺财宝");
                      cm.dispose();
                    }
                  }
                }
              }
            }
          }
          break;
        case 3:
          cm.gainItem(2431181, 10);
          cm.sendOkS("已成功领取10次");
          cm.dispose();
          break;
        case 4:
          cm.warp(910000000, 0);
          cm.dispose();
          break;
        case 5:
          cm.dispose();
          break;
      }
    }
  }
}