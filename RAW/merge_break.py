import numpy as np

monsters = open('monsters', 'r')
ailments = open('breakable_parts', 'r')
teste = open('monster_breakable_part.sql', 'a+')
#teste = open('teste', 'a+')

for monsterId, line in enumerate(monsters, 1):
    monAils = ailments.readline()[:-1].split(';')
    i = 0
    while (i<9):
        if (i == 0): #HEAD
            bp = monAils[i]
            teste.write('('+str(monsterId)+', "He", '+str(bp[0])+', '+str(bp[1])+', '+str(bp[2])+'),\n');
            i+=1
        if (i == 1): #HORN
            bp = monAils[i]
            teste.write('('+str(monsterId)+', "Ho", '+str(bp[0])+', '+str(bp[1])+', '+str(bp[2])+'),\n');
            i+=1
        if (i == 2): #MANE
            bp = monAils[i]
            teste.write('('+str(monsterId)+', "M", '+str(bp[0])+', '+str(bp[1])+', '+str(bp[2])+'),\n');
            i+=1
        if (i == 3): #CHEST
            teste.write('('+str(monsterId)+', "C", '+str(bp[0])+', '+str(bp[1])+', '+str(bp[2])+'),\n');
            i+=1
        if (i == 4): #FRONT LEG
            teste.write('('+str(monsterId)+', "FL", '+str(bp[0])+', '+str(bp[1])+', '+str(bp[2])+'),\n');
            i+=1
        if (i == 5): #HIND LEG
            teste.write('('+str(monsterId)+', "HL", '+str(bp[0])+', '+str(bp[1])+', '+str(bp[2])+'),\n');
            i+=1
        if (i == 6): #BACK
            teste.write('('+str(monsterId)+', "B", '+str(bp[0])+', '+str(bp[1])+', '+str(bp[2])+'),\n');
            i+=1
        if (i == 7): #TAIL
            teste.write('('+str(monsterId)+', "T", '+str(bp[0])+', '+str(bp[1])+', '+str(bp[2])+'),\n');
            i+=1
        if (i == 8): #WING
            teste.write('('+str(monsterId)+', "W", '+str(bp[0])+', '+str(bp[1])+', '+str(bp[2])+'),\n');
            i+=1
