# Metal Bucket Snowman
# 2001002
# Entrance NPC to Happyville maps v2

christmas_maps = [
    209000009,
    209000010,
    209000011,
    209000012,
    209000013,
    209000014,
    209000015,
]

room = sm.sendNext("Hello I'm #p2001002#! I can take you to the room where the humongous Christmas tree is! For more information talk to #b#p2001000##k. Which room will you enter?\r\n#b"
                   "#L0#The room with the 9th tree#l\r\n"
                   "#L1#The room with the 10th tree#l\r\n"
                   "#L2#The room with the 11th tree#l\r\n"
                   "#L3#The room with the 12th tree#l\r\n"
                   "#L4#The room with the 13th tree#l\r\n"
                   "#L5#The room with the 14th tree#l\r\n"
                   "#L6#The room with the 15th tree#l\r\n"
                   )
sm.warp(christmas_maps[room])