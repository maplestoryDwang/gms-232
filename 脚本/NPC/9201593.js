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
      cm.askMenu("#e<婚礼活动进行说明>#n\r\n结婚后可以参加#e#b咱俩的结婚纪念庆祝活动#k#n。有关#e#b咱俩的结婚纪念庆祝活动#k#n的事情，你可以问我~\r\n#b#L0# 如何参加“咱俩的结婚纪念庆祝活动”呢？#l\r\n#b#L1# 我想知道我的结婚纪念日。#l\r\n#b#L2# 结束对话。#l", 4, 9201593);
    } else {
      if (status === V++) {
        switch (U) {
          case 0:
            cm.sendNormalTalk("#e<咱俩的结婚纪念庆祝活动说明>#n\r\n咱俩的结婚纪念庆祝活动，是针对结婚达到100天以上的夫妻的活动。\r\n爱会随着时间的累加而逐渐加深，不是吗？结婚后，每过100天，与配偶一起进行爱之宣誓，就可以获得每100天(100天、200天、300天……1000天为止)都会升级的结婚纪念戒指~值得注意的是，这枚结婚纪念戒指可以和婚戒同时佩戴。", 4, 9201593, false, true);
            break;
          case 1:
            var w = cm.getInfoQuest(7614);
            cm.sendNormalTalk("#h0#你在" + w + "结婚，结婚至今已有1天。", 5, 9201593, false, true);
            status = -1;
            break;
          case 2:
            cm.dispose();
            break;
        }
      } else {
        if (status === V++) {
          cm.sendNormalTalk("\r\n进行爱之宣誓时，请与配偶组成两人组队，并带来#b#t5251017##k给我。该券在#e#r商城#k#n中有售。还有，如果正在进行离婚申请，则无法参加该活动，因此请确认一下是否已提出离婚申请。", 4, 9201593, true, true);
        } else if (status === V++) {
          cm.sendNormalTalk("结婚后每过100天，纪念与另一半的爱情并进行爱之宣誓后，领取戒指吧？", 4, 9201593, true, true);
          status = -1;
        } else {
          cm.dispose();
        }
      }
    }
  }
}