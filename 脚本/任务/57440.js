var status = -1;
var selectionLog = [];

function start(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#神那。一位名叫南哈特的人送来了消息。我这就念给你听。", 37, 9130021, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("#face0#我是南哈特。我们在冒险岛灵力汇聚的武陵地区发现了疑似织田军的队伍，所以特此通知于你。", 37, 1101002, true, true)
            } else {
                if (status === a++) {
                    cm.sendNormalTalk_Bottom("#face0#武陵有一位名为太上的人。关于这件事情的详细情况，你可以直接找他去问个清楚。我们这边也会尽量帮忙确认其他相关情报的。", 37, 1101002, true, true)
                } else {
                    if (status === a++) {
                        cm.askAcceptDecline_Bottom("#face0#能特意将如此重要的消息送来给你。看来这位南哈特对神那很是信赖嘛。对冒险岛而言，这条消息事关重大。你还是依照南哈特所言，直接前往武陵去探探情况吧？", 37, 9130021)
                    } else {
                        if (status === a++) {
                            cm.forceStartQuest(57440, "");
                            cm.sendNormalTalk_Bottom("#face1#很好。到达武陵之后，你需要找到这位名叫太上的人。可一定不要忘了人家的名字才是。我还有个任务给你。回来的时候，记得给我带两个桃子。", 37, 9130021, false, true);
                            cm.dispose()
                        }
                    }
                }
            }
        }
    }
}

function stage0(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#我还是第一次见到你这位客人呢。你是来武陵做什么的呢？", 37, 2091002, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57440);
                cm.gainExp(1536020);
                cm.dispose()
            }
        }
    }
}

function end(d, c, b) {
    if (status == 0 && d == 0) {
        cm.dispose();
        return
    }(d == 1) ? status++ : status--;
    selectionLog[status] = b;
    var a = -1;
    if (status <= a++) {
        cm.dispose()
    } else {
        if (status == a++) {
            cm.sendNormalTalk_Bottom("#face0#我还是第一次见到你这位客人呢。你是来武陵做什么的呢？", 37, 2091002, false, true)
        } else {
            if (status === a++) {
                cm.forceCompleteQuest(57440);
                cm.gainExp(1536020);
                cm.dispose()
            }
        }
    }
};