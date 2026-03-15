var status = -1;

function start(c, b, a) {
    if (c == 1) {
        status++
    } else {
        if (status == 1) {
            cm.sendNext("When will you realize how weak you are... When you get yourself in trouble in Victoria Island?");
            cm.dispose();
            return
        }
        status--
    }
    if (status == 0) {
        cm.sendNext("You have finally become a Knight-in-Training. I'd like to give you a mission right away, but you still look miles away from even being able to handle a task on your own. Are you sure you can even go to Victoria Island like this?")
    } else {
        if (status == 1) {
            cm.askAcceptDecline("It's up to you to head over to Victoria Island, but a Knight-in-Training that can't take care of one''s self in battles is likely to cause harm to the Empress''s impeccable reputation. As the Head Tactician of this island, I can't let that happen, period. I want you to keep training until the right time comes.")
        } else {
            if (status == 2) {
                cm.forceCompleteQuest();
                cm.sendNext("#p1102000#, the Training Instructor, will help you train into a serviceable knight. Once you reach Level 13, I'll assign you a mission or two. So until then, keep training.")
            } else {
                if (status == 3) {
                    cm.sendPrev("Oh, and are you aware that if you strike a conversation with #p1101001#, she'll give you a blessing? The blessing will definitely help you on your journey.")
                } else {
                    if (status == 4) {
                        cm.dispose()
                    }
                }
            }
        }
    }
}

function end(c, b, a) {
    cm.dispose()
};