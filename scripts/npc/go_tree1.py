# Branch Snowman
# 2001001
# Entrance NPC to Happyville maps, he gives you access to first half of the tree maps

christmas_maps = [
    209000001,
    209000002,
    209000003,
    209000004,
    209000005,
    209000006,
    209000007,
    209000008,
]

room = sm.sendNext("Hello I'm #p2001001#! I can take you to the room where the humongous Christmas tree is! For more information talk to #b#p2001000##k. Which room will you enter?\r\n#b"
                   "#L0#The room with the 1st tree#l\r\n"
                   "#L1#The room with the 2nd tree#l\r\n"
                   "#L2#The room with the 3rd tree#l\r\n"
                   "#L3#The room with the 4th tree#l\r\n"
                   "#L4#The room with the 5th tree#l\r\n"
                   "#L5#The room with the 6th tree#l\r\n"
                   "#L6#The room with the 7th tree#l\r\n"
                   "#L7#The room with the 8th tree#l\r\n")
sm.warp(christmas_maps[room])