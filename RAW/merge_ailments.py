import numpy as np

monsters = open('monsters', 'r')
ailments = open('ailments', 'r')
teste = open('monster_ailment_weaknesses.sql', 'a+')

for monsterId, line in enumerate(monsters, 1):
    monAils = ailments.readline()[:-1].split(',');
    i = 0;
    while (i<5):
        if (i == 0):
            teste.write('('+str(monsterId)+', "poi", '+str(monAils[i])+'),\n');
            i+=1;
        if (i == 1):
            teste.write('('+str(monsterId)+', "sle", '+str(monAils[i])+'),\n');
            i+=1;
        if (i == 2):
            teste.write('('+str(monsterId)+', "par", '+str(monAils[i])+'),\n');
            i+=1;
        if (i == 3):
            teste.write('('+str(monsterId)+', "bla", '+str(monAils[i])+'),\n');
            i+=1;
        if (i == 4):
            teste.write('('+str(monsterId)+', "stu", '+str(monAils[i])+'),\n');
            i+=1;
