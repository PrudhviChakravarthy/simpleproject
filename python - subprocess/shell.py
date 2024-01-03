import subprocess

result = subprocess.run(["ls", "-l"], stdout=subprocess.PIPE, text=True)
print(result.stdout)
