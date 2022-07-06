# -*- coding: utf-8 -*-
"""
Created on Mon Jun 13 11:08:03 2022

@author: Ariel
"""
#s = "pwwkew"

def lengthOfLongestSubstring(self, s : str) -> int:
    dict_of_letters = dict()
    window_start, window_end = 0, 0
    windows = []
    
    for i in range(len(s)):
        #print(window_start, window_end)
        if s[i] not in dict_of_letters:
            dict_of_letters[s[i]] = i  
        else:
            windows.append(window_end-window_start)
            dict_of_letters[s[i]] = i
            window_start = i
        window_end+= 1
    windows.append(window_end-window_start)
    
    return max(windows)
        
#lengthOfLongestSubstring(s)

#lengthOfLongestSubstring("abcabcbb")

#lengthOfLongestSubstring("bbbbbbbbbb")

#lengthOfLongestSubstring("abcdefghijklmnopqrstuvwxyz")