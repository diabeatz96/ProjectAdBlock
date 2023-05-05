import json

# create rules_1.json file using the links.txt created from train.ipynb
text = open('links.txt','r')
links = text.read()
links = links.split('\n')
rules = []
for link in range(len(links)):

    x = {
        "id" : link + 1,
        "priority": 1,
        "action" : { "type" : "block" },
        "condition" : {
            "urlFilter" : links[link]
        }
    } 
    rules.append(x)
    
with open("rules.json","w") as outfile:
    json.dump(rules,outfile, indent=4, separators=(',',': '))