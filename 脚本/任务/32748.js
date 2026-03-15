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
            cm.sendNormalTalk_Bottom("#h0#，看来现在需要除你之外另一个转校生的情报。可以帮我把学生记录簿拿来吗？", 37, 1530070, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("当然了，学生记录簿是不会随便对我们这种学生公开的。这是非正式的任务……你只要悄悄拿来就可以了。", 37, 1530070, true, true)
            } else {
                if (status === a++) {
                    cm.askMenu_Bottom("这种程度的任务对你来说应该很简单吧？#b\r\n#L0#当然了，为了希纳斯我还是应该去做的。#l\r\n#L1#可这么多人，为什么偏偏是我？#l", 37, 1530070)
                } else {
                    if (status === a++) {
                        cm.sendNormalTalk_Bottom("哦吼，看来灌输式的教育还是有效果的嘛。为了希纳斯小姐你还真是肝脑涂地啊，的确是你的作风。我很满意。", 37, 1530070, false, true)
                    } else {
                        if (status === a++) {
                            cm.sendNormalTalk_Bottom("那么就拜托你了。我们会在这儿等你的。\r\n\r\n#b（前往1楼教务室寻找学生记录簿吧）#k", 37, 1530070, true, true)
                        } else {
                            if (status === a++) {
                                cm.forceStartQuest(32748, "");
                                cm.dispose()
                            }
                        }
                    }
                }
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
            cm.sendNormalTalk_Bottom("有什么事吗，#h0#？要不然我也正打算找你呢。不知怎么回事，这里也开始有尘土怪出来肆虐了！", 37, 1530030, false, true)
        } else {
            if (status === a++) {
                cm.sendNormalTalk_Bottom("我已经好不容易将它们驱赶到尘土地带去了。刚好老师们都已经下班了，真是万幸啊。", 37, 1530030, true, true)
            } else {
                if (status === a++) {
                    cm.forceCompleteQuest(32748);
                    cm.dispose()
                }
            }
        }
    }
};