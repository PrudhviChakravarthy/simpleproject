import subprocess

try:
    result = subprocess.run(["ls", "-l"], stdout=subprocess.PIPE, text=True, timeout=2)
    print(result.stdout)
except subprocess.TimeoutExpired:
    print("Command timed out.")
