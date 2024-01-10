# Read and print the contents of a text file
with open("sample.txt", "r") as file:
    content = file.read()
    print(content)
