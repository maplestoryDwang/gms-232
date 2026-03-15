var status = -1;
var selectionLog = [];
var jobs = [1, 0, 2, 3, 4, 0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 0, 1, 2, 3, 4];
var jobNames = ['战士', "魔法师", "弓箭手", '飞侠', '海盗'];
var males = [false, true, true, false, false, false, true, true, true, true, true, true, false, false, true, false, false, true, true, true, true, false, true, false, false];
var npcs = [9401029, 9401030, 9401031, 9401032, 9401033, 9401034, 9401035, 9401036, 9401037, 9401038, 9401039, 9401040, 9401041, 9401042, 9401043, 9401044, 9401045, 9401046, 9401047, 9401048, 9401423, 9401424, 9401425, 9401426, 9401427];
var infos = [[3, "我认为这是名声大振的好机会。", "为了未来能够成为最强者，我不需要没品味的队长。"], [4, "当然是为了得到藏在那里面的无数宝物啦！", "至少逃跑这方面我很有信心呢~当然，我会尽全力的，放心吧！"], [6, "为了成为让奶奶自豪的孙女。", "我从小就力气大身体好，天天帮邻里乡亲干活。无论什么事，都交给我吧！"], [7, "有朋友向我求助，我就来了……谁知他却没了联系。为了不让肌肉在等待期间变得松弛，我决定来这里锻炼一下。", "拥有冒险岛世界最强的肌肉。"], [9, "我想看看深渊的深处究竟有什么。", "抱负啊……我年轻时也曾满腔热血，但现在我唯一的目标就是忠实履行的职责。"], [10, "我没有申请，我想回研究室！", "我唯一的目标就是平安回到研究室，见到我的那些宝贝书。"], [11, "深渊令我兴奋！", "嗯？目标……比如，在深渊消灭最多的怪物？这种目标很轻松就能完成嘛。"], [12, '我想看看更大的世界！', "我想成为优秀的弓箭手，超越村里最棒的猎人——爸爸！"], [13, "我的脚将我引到了这里，仅此而已。", "我要用双脚丈量冒险岛世界的每一寸土地，用双眼欣赏每一处景致。为此，我必须前往深渊的最底层。"], [14, "在隐退之前，最后冒险一次。", "希望能在结束漫长的旅途之前，留下一段美丽的回忆。"], [15, "我带了双胞胎弟弟比尔过来。那小子就是个惹祸精，我得看着他点。", "唔……非得有目标吗？"], [16, '为了遇见今年的贵人。', "健健康康活到100岁。"], [17, "我想当队长，马米不同意。", "别磨磨蹭蹭的，有我一个就够了。"], [18, "为了寻找新的食材。", "牛排、干锅，想吃什么尽管说！我会为你奉上一桌丰盛的晚餐。"], [19, "我正在寻找真正自由的旅途中。", "抛弃迷恋、愤怒和元亨，寻找自我的本质。"], [20, "干嘛要写这种东西？", '成为最强海盗。']];
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
  var w = cm.深渊远征队_随机选择新队员();
  var N = npcs[w - 1];
  var u = jobNames[jobs[w - 1]];
  var Q = males[w - 1] ? '他' : '她';
  var m = 500 * (Math.floor(cm.getNumberFromQuestInfo(64753, "mCount") / 5) + 1);
  var c = cm.getNumberFromQuestInfo(64753, "point");
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestInfo(64753, 'rank') == 0) {
        cm.sendNormalTalk_Bottom("哦哦！你来了，#h0#。\r\n我平时在这里负责为来到深渊的新冒险家牵线搭桥，帮助他们寻找远征队队长。我有很多冒险家想要介绍给#h0#你，可惜现在还为时过早。\r\n成为#b<初级远征队队长>#k后再来找我吧。", 36, 9401023, false, true, 1);
        cm.dispose();
      } else if (cm.getNowTimeString(3) === cm.getStringFromQuestInfo(64753, "RUday")) {
        cm.sendNormalTalk_Bottom("#h0#，你来了！很遗憾，现在没有可以介绍给你的冒险家。你能过会儿再来吗？", 36, 9401023, false, true);
        cm.dispose();
      } else {
        cm.askMenu("哦哦！你来了，#h0#。我今天也在忙着接待来到深渊的新冒险家呢。让我看看……正在申请加入远征队的冒险家有……\r\n\r\n#b#e        [已登记冒险家名单]#k#n\r\n#L" + w + "# #b#e#p" + N + "##k#n | 新人" + u + " | 需要声望：" + m, 4, 9401023);
      }
    } else {
      if (status === V++) {
        var B = "没什么特别的原因。";
        var F = "这人很懒，啥都没写。";
        for (var V = 0; V < infos.length; V++) {
          if (infos[V][0] == V) {
            B = infos[V][1];
            F = infos[V][2];
            break;
          }
        }
        cm.askYesNo("明智的选择！我这就给你看看#p" + N + "#的资料。\r\n\r\n" + "#b[名称]#k\r\n " + '#p' + N + "#\r\n" + "#b[职业]#k\r\n" + '新人' + u + "\r\n" + "#b[申请动机]#k\r\n" + B + "\r\n" + "#b[目标及抱负]#k\r\n" + F + "\r\n\r\n" + "相信#h0#你一定会带领" + Q + "成为优秀的冒险家。\r\n" + "怎么样？支付" + m + "#e#b声望#k#n，将#b#e#p" + N + "#收入队伍#k#n吧？#k", 4, N);
      } else {
        if (c >= m) {
          cm.setStringForQuestInfo(64753, "RUday", cm.getNowTimeString(3));
          cm.addNumberForQuestInfo(64753, "point", -m);
          cm.深渊远征队_获得队员(w);
          cm.openNewUI(1, "UIAbyssExpedition");
          cm.sendNormalTalk('恭喜！你和#p' + N + "#成为了同伴。大叔我祝愿你们能成为关爱彼此的好朋友！", 5, 9401023, false, false);
        } else {
          cm.sendNormalTalk("你的声望不够哦！你目前只有 " + c + " 点声望。", 5, 9401023, false, false);
        }
        cm.dispose();
      }
    }
  }
}