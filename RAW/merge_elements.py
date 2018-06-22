import numpy as np

monsters = open('monsters', 'r')
ailments = open('weaknesses', 'r')
teste = open('monster_element_weaknesses.sql', 'a+')
#teste = open('teste', 'a+')

for monsterId, line in enumerate(monsters, 1):
    monAils = ailments.readline()[:-1].split(',');
    if(len(monAils) == 5):
        i = 0;
        while (i<5):
            if (i == 0):
                teste.write('('+str(monsterId)+', "F", '+str(monAils[i])+', "0"),\n');
                i+=1;
            if (i == 1):
                teste.write('('+str(monsterId)+', "W", '+str(monAils[i])+', "0"),\n');
                i+=1;
            if (i == 2):
                teste.write('('+str(monsterId)+', "T", '+str(monAils[i])+', "0"),\n');
                i+=1;
            if (i == 3):
                teste.write('('+str(monsterId)+', "D", '+str(monAils[i])+', "0"),\n');
                i+=1;
            if (i == 4):
                teste.write('('+str(monsterId)+', "I", '+str(monAils[i])+', "0"),\n');
                i+=1;
    else:
        i = 0;
        while (i<10):
            if (i == 0):
                teste.write('('+str(monsterId)+', "F", '+str(monAils[i])+', "0"),\n');
                i+=1;
            if (i == 1):
                teste.write('('+str(monsterId)+', "W", '+str(monAils[i])+', "0"),\n');
                i+=1;
            if (i == 2):
                teste.write('('+str(monsterId)+', "T", '+str(monAils[i])+', "0"),\n');
                i+=1;
            if (i == 3):
                teste.write('('+str(monsterId)+', "D", '+str(monAils[i])+', "0"),\n');
                i+=1;
            if (i == 4):
                teste.write('('+str(monsterId)+', "I", '+str(monAils[i])+', "0"),\n');
                i+=1;
            if (i == 5):
                teste.write('('+str(monsterId)+', "F", '+str(monAils[i])+', "1"),\n');
                i+=1;
            if (i == 6):
                teste.write('('+str(monsterId)+', "W", '+str(monAils[i])+', "1"),\n');
                i+=1;
            if (i == 7):
                teste.write('('+str(monsterId)+', "T", '+str(monAils[i])+', "1"),\n');
                i+=1;
            if (i == 8):
                teste.write('('+str(monsterId)+', "D", '+str(monAils[i])+', "1"),\n');
                i+=1;
            if (i == 9):
                teste.write('('+str(monsterId)+', "I", '+str(monAils[i])+', "1"),\n');
                i+=1;
