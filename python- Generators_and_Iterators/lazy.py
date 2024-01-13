# Lazy loading data from a file using a generator
def read_large_file(filename):
    with open(filename, "r") as file:
        for line in file:
            yield line

# Using the generator to process a large file line by line
large_file = read_large_file("large_data.txt")
for line in large_file:
    continue
   
