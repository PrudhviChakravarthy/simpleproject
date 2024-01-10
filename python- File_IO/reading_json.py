# Read and parse data from a JSON file
import json

with open("data.json", "r") as json_file:
    data = json.load(json_file)
    print(data)
