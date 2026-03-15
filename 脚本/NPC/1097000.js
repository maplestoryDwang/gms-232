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
      cm.askMenu("#e<组队任务 : 唐云的料理讲座>#n\r\n你愿意为诺特勒斯的船员做美味的料理吗？我唐云将亲自教你做料理。#b\r\n#L0#进入唐云的料理讲座。#l \r\n#L1#领取唐云的厨师服。#l \r\n#L2#听取关于唐云的料理讲座的说明#l", 0, 1097000);
    } else {
      var w = 'action分支' + selectionLog[1];
      eval(w)(f, W, U, V);
    }
  }
}
function action分支0(f, W, U, V) {
  if (cm.getMapId() == 912080000) {
    cm.dispose();
    cm.openNpc(cm.getNpc(), "组队任务_唐云料理入场");
  } else {
    if (status <= V++) {
      cm.sendNormalTalk("料理可不是件简单的事。但是，如果你要试试，就跟我来吧。", 0, 1097000, false, true);
    } else if (status === V++) {
      cm.setNumberForQuestCustomData(30108, cm.getMapId());
      cm.dispose();
      cm.warp(912080000, 0, false);
    }
  }
}
function action分支1(f, W, U, V) {
  if (status <= V++) {
    cm.askMenu("哦，是制作了很多料理，可以领取厨师服装的人吗？那我当然应该把厨师服装给你。厨师资格证带来了吗？\r\n#L0#请给我厨师服(厨师资格证3个以上)。#l \r\n#L1#请给我厨师帽(厨师资格证5个以上)。#l");
  } else {
    if (status === V++) {
      var w = [1052578, 1003762];
      var N = [3, 5];
      if (cm.getItemQuantity(4033668) >= N[U]) {
        cm.gainItem(4033668, -N[U]);
        cm.gainItem(w[U], 1);
        cm.sendNormalTalk('这是你的#b#i' + w[U] + ":##t" + w[U] + '##k，拿好了！', 0, 1097000, false, false);
      } else {
        cm.sendNext("你确定有" + w[U] + "个厨师资格证吗？还是背包装备栏满了？请确认一下，然后再来和我说话。");
      }
    } else if (status === V++) {
      cm.dispose();
    }
  }
}
function action分支2(f, W, U, V) {
  if (status <= V++) {
    cm.sendNext("你好。我唐云是负责管理海盗船诺特勒斯号的厨房的厨师长。我制作的料理色香味俱全，人们都称我是料理大师，哈哈哈哈哈！谁说的？是谁来着？那个很重要吗？哈哈哈哈！");
  } else {
    if (status === V++) {
      cm.sendNextPrev("虽然我很能干，但最近也遇到了一些问题。海盗们的胃总是那么好，不管吃多少东西都不见底，我就算是长着三头六臂也不够用。但是我又不能让他们节食。");
    } else {
      if (status === V++) {
        cm.sendNextPrev("所以我正在招人到厨房来帮着制作料理。料理方法很简单。只要召唤出料理所需的材料，然后努力翻炒就行。虽然必须调节一下火候，但那并不难。");
      } else {
        if (status === V++) {
          cm.sendNextPrev("料理做得好的话，会有很多人抢着吃。但是，如果做得不好的话，就等于是垃圾。这一切都取决于你的实力。怎么样？我觉得你看起来很有料理天分，你愿意试一下吗？一天最多只能做十次。\r\n - #e等级#n : 60以上#r( 推荐等级: 60 ~ 90 )#k \r\n - #e限定时间#n : 20分钟\r\n - #e参加人员#n : 1~3名\r\n - #e获得道具#n :\r\n#i1052578:# #t1052578#\r\n#i1003762:# #t1003762#\r\n");
        } else if (status === V++) {
          cm.dispose();
        }
      }
    }
  }
}