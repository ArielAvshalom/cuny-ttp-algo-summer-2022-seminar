def maxDepth(self, root: Optional[TreeNode]) -> int:
        '''
        1. [3]
        2. 3 is popped [9, 20] get appended to the queue
        3. 9 is popped. 9 has no left or right children.
          - 20 is popped.
​
        at each level, pop one single item from the queue
        we check if it has children nodes (left or right)
        if it doesn't, we end the iteration and update the maximum depth value
​
        if it has a left child, then we push it to the queue
        if it has a right tchild, then we push it to the queue
          - increment depth value individually.
        '''
        if not root:
            return 0
        # queue = [(node, depth_level)]
        # queue = [[3, 1]]
        # queue = [[9, 2], [20, 2]]
        queue = deque([(root, 1)])
        max_depth = 0
        while queue:
            node, depth = queue.popleft()  # pop the leftmost item
            if not node.left and not node.right:
                max_depth = max(max_depth, depth)
            if node.left:
                queue.append((node.left, depth + 1))
            if node.right:
                queue.append((node.right, depth + 1))
        return max_depth

