import re
import urllib.request
import datetime
from urllib.request import urlopen
from bs4 import BeautifulSoup

response = urllib.request.urlopen('https://monsterhunterworld.wiki.fextralife.com/Materials')
html = response.read()

soupHtml = BeautifulSoup(html, "html5lib")
tables = soupHtml.find_all("tbody")
for table in tables:
    trs = table.find_all("tr")
    for tr in trs:
        nomes = tr.find_all("td",limit=1)
        for nome in nomes:
            if (nome.string != None):
                print(nome.string)


    #links = table.find_all("a")
    #for link in links:
    #    print (link.string)
    #print(links.string)
    #for link in links:
    #    name = link
    #    print (name)
