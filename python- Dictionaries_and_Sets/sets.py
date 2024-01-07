# Create a set
fruits = {'apple', 'banana', 'cherry'}

# Add an element to the set
fruits.add('orange')

# Remove an element from the set
fruits.remove('banana')

# Check if an element is in the set
if 'apple' in fruits:
    print('Apple is in the set')

# Perform set operations
other_fruits = {'kiwi', 'strawberry'}
union = fruits.union(other_fruits)
intersection = fruits.intersection(other_fruits)

print('Union:', union)
print('Intersection:', intersection)
