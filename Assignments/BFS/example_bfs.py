# -*- coding: utf-8 -*-
"""
Created on Tue Jun 14 11:59:44 2022

@author: Ariel
"""


my_graph ={
    "start" : ["b","c"],
    "b"     : ["start","d","e"],
    "c"     : ["start",'b',"e","g"],
    "d"     : ["b"],
    "e"     : ["b","c",'g'],
    "g"     : ["c","e"]
}


visited = set() #like a list except it uses some form of a hash algorithm to make sure there are only unique values
key = "start" #the first node in the graph, in a tree this is the root
node_list = []

visited.add(key)
node_list.extend(my_graph[key])
    
    
while node_list != [] and visited != set(my_graph.keys()): #avoid an endless loop
    node = node_list.pop(0)
    if node not in visited:
        visited.add(node)
        node_list.extend(my_graph[node])
    else:
        print('found a cycle')
        node_list.extend(my_graph[node])
    
    
        