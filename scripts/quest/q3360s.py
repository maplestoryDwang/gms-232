# Verifying the Password
# 3360
# Parwen (2111006)

import random
import string

parwen = 2111006

sm.setSpeakerID(parwen)
sm.sendNext("密码是#b4ZDEOV25A1#k，记下来了吗？在秘密通道入口处输入这组密码，就可以自由出入通道。")
response = sm.sendAskAccept("Now, the passcode is very long and complex, so I suggest you write it down somewhere. "
"I'm only going to tell you this once, okay? Are you ready?")
if response:
    # Constructing the generated password per quest accept instance
    # The pool of valid characters consists of upper-case letters and digits
    passPool = string.ascii_uppercase + string.digits
    # Randomly generate the password string of length 10 before storing it into the quest's QRvalue for later
    password = ''.join(random.choice(passPool) for letter in range(10))
    # Two dummy quest IDs are to be declared here, and called up by the secretDoor script. They are to be cleaned up after completing this quest:
    # 7061 stores the generated password into its QR value
    # 7062 tracks which side(s) of the secret passage's security device has been unlocked
    sm.createQuestWithQRValue(parentID, "0")
    sm.createQuestWithQRValue(7061, password, False)
    sm.createQuestWithQRValue(7062, "00")
    sm.sendSayOkay("The passcode is #b" + password + "#k. You didn't forget it, did you? "
    "Enter this passcode at the entrance of Secret Passage, and you will have unlimited access to it.")
else:
    sm.sendSayOkay("You don't have something to write on, do you? Talk to me again when you're ready to get the passcode.")