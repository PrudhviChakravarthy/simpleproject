# Copy the contents of one file to another
with open("source.txt", "r") as source_file, open("destination.txt", "w") as destination_file:
    destination_file.write(source_file.read())
