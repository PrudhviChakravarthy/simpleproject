import subprocess

result = subprocess.run(["python", "myscript.py"], text=True)
print(result.returncode)
