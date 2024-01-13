# Creating a custom iterator
class MyIterator:
    def __init__(self, start, end):
        self.current = start
        self.end = end

    def __iter__(self):
        return self

    def __next__(self):
        if self.current > self.end:
            raise StopIteration
        result = self.current
        self.current += 1
        return result

# Using the custom iterator
my_iter = MyIterator(1, 5)
for num in my_iter:
    print(num)
