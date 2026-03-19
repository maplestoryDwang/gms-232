function enter() {
    var b = cm.getPortal().getId();
    var a = cm.getNumberFromQuestInfo(64006, "Ec");
    if (a == b) {
        cm.openScriptNpc()
    }
}
var status = -1;
var selectionLog = [];

function start() {
    cm.setNumberForQuestInfo(64005, "duringEvent", 1);
    action(1, 0, 0)
}

function action(d, c, b) {
    status++;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status === a++) {
            cm.莫奈德_特效(null, [0, 3]);
            cm.莫奈德_特效(null, [7, 5]);
            cm.onScriptMessage_莫奈德卷轴风格(9400592, "“落水了！嗝！有人掉进水里了！”阿尔西跑过来气喘吁吁地说，“河上冰面承受不住大篷车的重量裂开了……嗝……他在救其他人的时候不幸！河水很冰，他坚持不了多久的。必须赶紧停车救人！”可汗听了他的话，一脸决绝地摇了摇头。“暴风雪已经非常接近了。为了救一个人而停下大篷车队伍的风险太大，那样大家都会有危险的。”\r\n           #i4036367#\r\n#b\r\n#L0#停下大篷车去救人。#l\r\n#L1#挑选几个人去营救。#l\r\n#L2#甘愿接受少数牺牲。#l")
        } else {
            if (status === a++) {
                cm.onScriptMessage_莫奈德卷轴风格(9400592, "阿尔西一脸震惊的表情，目不转睛地盯着可汗村长。“……你……你知道自己在说什么吗？是佩图尔落水了！不是其他人，是佩图尔！嗝，你……你简直不是人！你……你怎么能……”可汗瞬间脸色煞白。在一旁给可汗的意见帮腔的巴特勒也改口说，“虽然不好让大篷车队伍停下脚步，但可以挑几个人去救人。”\r\n           #i4036367#\r\n#b\r\n#L0#去救人。#l")
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("前往#m867200960#。", 35, 0, false, true)
                } else {
                    if (status === a++) {
                        cm.dispose();
                        cm.warp(867200960, 0);
                        for (var a = 2210207; a <= 2210211; a++) {
                            cm.dispelBuff(a)
                        }
                    }
                }
            }
        }
    }
};